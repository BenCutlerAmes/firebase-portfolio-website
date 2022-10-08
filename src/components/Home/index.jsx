import './index.scss'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/index'


import logo from '../../assets/images/bigface.png'
import headshot from '../../assets/images/headshot.jpeg'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'B',
    'e',
    'n',
    ' ',
    'C',
    'u',
    't',
    'l',
    'e',
    'r',
    '-',
    'A',
    'm',
    'e',
    's',
  ]

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <h2>Software Developer / CodeClan Graduate / All Round Good-Guy</h2>{' '}
        <br />
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <div className="home-logo">
        <div className="card middle">
          <div className="front">
            <img src={logo} alt="logo" />
          </div>
          <div className="back">
            <img src={headshot} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='ball-pulse-sync'/>

    </>
  )
}

export default Home
