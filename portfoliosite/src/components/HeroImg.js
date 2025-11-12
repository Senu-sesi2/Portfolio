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
        <p><img width="48" height="48" 
        src="https://img.icons8.com/emoji/48/waving-hand-light-skin-tone.png" 
        alt="waving-hand-light-skin-tone"/></p>
        <p>Hi, I'm Emmanuel Mensah</p>
        <h1>Junior Software Engineer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
