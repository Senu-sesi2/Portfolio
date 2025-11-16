import { Link } from "react-router-dom"
import "./TechCardStyles.css"

import React from 'react'

const TechCard = () => {
  return (
    <div className="tech">
        <div className="card-container">
            <div className="card">
                <h3>- Tech Stack -</h3>
                <span className="bar"></span>
                <p className="tsc">TFT</p>
                <p>- Technologies -</p>
                <p>- Frameworks -</p>
                <p>- Tools -</p>
                <Link to="/contact" className="btn">
                    LEARN MORE
                </Link>
            </div>

            <div className="card">
                <h3>- Skills -</h3>
                <span className="bar"></span>
                <p className="tsc">TSE</p>
                <p>- Technical Skills -</p>
                <p>- Soft Skills -</p>
                <p>- Experience -</p>
                <Link to="/contact" className="btn">
                    LEARN MORE
                </Link>
            </div>

            <div className="card">
                <h3>- Certifications -</h3>
                <span className="bar"></span>
                <p className="tsc">AGU</p>
                <p>- ALX -</p>
                <p>- Google -</p>
                <p>- Udemy -</p>
                <Link to="/contact" className="btn">
                    LEARN MORE
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TechCard