import './index.scss'

import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import ProjectCards from '../ProjectCards'
import simpsons from '../../assets/images/simpsons-toptrumps-screenshot.png'
import gym from '../../assets/images/gym-app-screenshot.png'
import portfolio from '../../assets/images/portfolio-screenshot.png'

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
              A collection of my projects from 10 weeks of coding study at
              CodeClan Edinburgh, alongside private study. Click on any of the projects to be taken to their GitHub page.
            </p>
          </div>
          <div className="portfolio-boxes">
            <div className="portfolio-card">
              <ProjectCards
                title={'Gym Management App'}
                img={gym}
                description={
                  'Python web app to allow a local gym to manage members, schedule classes and register members for individual classes. It is backed by a PostgreSQL database with full CRUD functionality and utilises RESTful routes. The front end is created with HTML, CSS and Flask. '
                }
                url={'https://github.com/BenCutlerAmes/Gym_Management_App'}
              />
            </div>
            <div className="portfolio-card">
              <ProjectCards
                title={'Web Browser Game'}
                img={simpsons}
                description={'React app which allows players to play Top Trumps against other players or a computer. It uses MongoDB and Node.JS for the backend. My main responsibilities were the game logic and computer decision making. Another major aspect of the project was developing skills in collaborating in GitHub and implementing some Agile concepts such as morning stand-ups into our development process.'}
                url={'https://github.com/BenCutlerAmes/Simpsons-Top-Trumps'}
              />
            </div>
            <div className="portfolio-card">
              <ProjectCards
                title={'Personal Website'}
                img={portfolio}
                description={'Self-study project to practice different REACT packages. It uses EmailJS to handle the contact page form, FortAwesome for various SVG icons, animate.css for animations, loaders for the page transitions, and leaflet for the map. It is also my first experience on hosting a live website myself, which is being done through google domains and firebase.'}
                url={'https://github.com/BenCutlerAmes/firebase-portfolio-website'}
              />
            </div>
          </div>
        </div>
      </div>

      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Portfolio
