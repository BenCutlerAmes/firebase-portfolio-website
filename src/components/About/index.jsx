import './index.scss'

import { faCss3, faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


  setTimeout(()=>{
      setLetterClass('text-animate-hover')},3000)
    

  return (
    <>
    <div className="conatainer about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <p>
          Software Developer Career Changer – Currently retraining with CodeClan
          on the Professional Software Development course (July-Nov 2022).
          Seeking new opportunities from mid-November 2022 in Edinburgh or
          surrounding area, London or remote working.
        </p>
        <p>
          My background as a mathematics teacher and Housemaster, combined with
          my strong abilities in analysis, leadership and people skills, have
          provided a strong basis for this move into the technology sector.
        </p>
        <p>
          Having consistently strived to complete the extension tasks throughout
          the course and with my first project completed, I am seeking job
          opportunities on completion of the course that enable me to apply
          these skills and start my new career.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cube-spinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faPython} color='#3c74a5'/>
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faJava} color='#ed4235'/>
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faJs} color='#f7d802'/>
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color='#07d1f8'/>
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faHtml5} color='#e86228'/>
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faCss3} color='#268cc7'/>
            </div>


        </div>

      </div>
    </div>
    <Loader type='ball-pulse-sync'/>
    </>
  )
}

export default About
