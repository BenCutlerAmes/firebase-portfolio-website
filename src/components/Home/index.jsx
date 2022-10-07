import './index.scss'

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Ben Cutler-Ames</h1>
            <h2>Software Developer / Career Changer / CodeClan Graduate</h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>
        </div> 
    </div>
  )
}

export default Home