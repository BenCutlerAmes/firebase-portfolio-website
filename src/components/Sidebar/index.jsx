import './index.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/bigface.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHouseChimney} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faIdCardClip} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/portfolio"
          className="portfolio-link"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/bencutlerames/">
          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/></a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href="https://github.com/BenCutlerAmes">
          <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/></a>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
