import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

import React, { useRef, useState } from 'react'

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
          <p>
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
      </div>
    </>
  )
}

export default Contact
