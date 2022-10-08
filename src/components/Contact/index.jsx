import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

import React, { useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_tiks2fi',
        'template_pvr2pzj',
        refForm.current,
        'J8TMy_h-CK24L-gFG'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p id='contact-p'>
            I am interested in employment opportunities, mentorship or just
            generally kind words. If you have these, or anything else to say ,
            don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" />
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        
        <div className='map-wrap'>
        <MapContainer center={[55.94594699583746, -3.205823063553737]} zoom={13}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
          <Marker position={[55.94594699583746, -3.205823063553737]}>
            <Popup>If in doubt, I'll probably be in this Pret a Manger</Popup>
          </Marker>

        </MapContainer>
          
        </div>
      </div>
    <Loader type='ball-pulse-sync'/>

    </>
  )
}

export default Contact
