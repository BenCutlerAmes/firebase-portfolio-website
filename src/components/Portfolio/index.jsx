import './index.scss'

import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import headshot from '../../assets/images/headshot.jpeg'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return (
    <>
      <div className="container">
        <div className="portfolio-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                idx={15}
              />
            </h1>
            <p id="portfolio-text">
              A collection of my projects from 10 weeks of coding study at CodeClan Edinburgh, alongside private study.
            </p>
          </div>
          <div className="portfolio-boxes">
            <div className="portfolio-card">
              <img src={headshot} alt="headshot" />
            </div>
            <div className="portfolio-card">
              <img src={headshot} alt="headshot" />
            </div>
            <div className="portfolio-card">
              <img src={headshot} alt="headshot" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Portfolio
