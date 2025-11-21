import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'
import Rt1 from "../assets/react1.jpg"
import Rt2 from "../assets/react2.png"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm certified Software Engineer with a passion for building scalable
            systems and a unique expertise in leveraging AI and data analytics to solve
            complex business challenges. My background is complemented by certified skills
            in digital marketing, allowing me to bridge the gap between technical development and business growth.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={Rt1}
                className="img" alt="screenshot of react"/>
            </div>
            <div className="img-stack bottom">
                <img src={Rt2}
                className="img" alt="screenshot of react"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
