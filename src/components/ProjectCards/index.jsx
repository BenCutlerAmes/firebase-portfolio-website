import './index.scss'

import React from 'react'

const ProjectCards = ({ title, img, description }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <img className='portfolio-img' src={img} alt="portfolio product" />
      <p id='portfolio-p'>{description}</p>
    </div>
  )
}

export default ProjectCards
