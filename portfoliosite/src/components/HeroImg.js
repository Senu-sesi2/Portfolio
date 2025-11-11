import "./HeroImgStyles.css";
import React from 'react'
import PortImg from "../assets/port.png"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="port" src={PortImg} 
            alt="Software engineer in software engineering setting" />
        </div>
      
    </div>
  )
}

export default HeroImg
