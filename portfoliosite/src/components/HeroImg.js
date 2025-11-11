import "./HeroImgStyles.css";
import React from 'react'
import PortImg from "../assets/port.png"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="port" src={PortImg} 
            alt="Software engineer in software engineering setting" />
        </div>
      <div className="content">
        <p>Hi, I am Emmanuel Mensah <img width="48" height="48" 
        src="https://img.icons8.com/emoji/48/waving-hand-light-skin-tone.png" 
        alt="waving-hand-light-skin-tone"/></p>
        <h1>A Software Engineer.</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
