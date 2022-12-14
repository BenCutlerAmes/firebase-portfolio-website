import './index.scss'

import React from 'react'

const ProjectCards = ({ title, img, description,url }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
    <div className="card">
      <h1>{title}</h1>
      <img className='portfolio-img' src={img} alt="portfolio product" />
      <p id='portfolio-p'>{description}</p>
    </div>
    </a>
  )
}

export default ProjectCards
