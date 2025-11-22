import "./HeroSecStyles.css"

import React from 'react'

import HeroImg from "../assets/heroImg.png"
import { Link } from "react-router-dom"

const HeroSec = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" 
            src={HeroImg} alt="Software Engineer in software development setting"/>
        </div>
        <div className="content">
          <p>
            <img
              className="wave-hand"
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/waving-hand-light-skin-tone.png"
              alt="waving-hand-light-skin-tone"
            />
          </p>

            {/* give the name its own class for a reliable hover target */}
            <p className="hero-name">HI, I'M EMMANUEL SENU MENSAH</p>

            <h1>Junior Software Engineer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSec
