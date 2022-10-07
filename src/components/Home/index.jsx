import './index.scss'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/index'

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
  

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <h2>
        Software Developer / CodeClan Graduate / All round good-guy
        </h2>{' '}
        <br />
        <Link to="/contact" className="flat-button">
          Contact Me

        </Link>
      </div>
    </div>
  )
}

export default Home
