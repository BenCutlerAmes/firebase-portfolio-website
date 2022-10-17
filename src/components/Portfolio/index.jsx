import './index.scss'

import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  const renderPortfolio = (portfolio)=>{
    return(
      <div className='images-container'>
        {
          portfolio.map((port,idx)=>{
            return (
              <div className='image-box' key={idx}>
                <a href={port.url}>
                <img src={port.cover} alt='portfolio' className='portfolio-image'/>
                </a>
              </div>
            )
          })
        }
      </div>
    )

  }

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
              A collection of my projects from 10 weeks of coding study at
              CodeClan Edinburgh, alongside private study. Click on any of the projects to be taken to their GitHub page.
            </p>
          </div>
          <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
      </div>

      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Portfolio
