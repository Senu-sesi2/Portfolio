import { Link } from "react-router-dom"
import "./TechStackCardsStyles.css"

import React from 'react'

const TechStackCards = () => {
  return (
    <div className="tech">
        <div className="card-container">
            <div className="card">
                <h3>- Tech Stack -</h3>
                <span className="bar"></span>
                <p className="tft">TFT</p>
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
                <p className="tss">TSS</p>
                <p>- Technical Skills -</p>
                <p>- Soft Skills -</p>
                <Link to="/contact" className="btn">
                    LEARN MORE
                </Link>
            </div>

            <div className="card">
                <h3>- Certifications -</h3>
                <span className="bar"></span>
                <p className="BC">TFT</p>
                <p>- ALX -</p>
                <p>- Google -</p>
                <Link to="/contact" className="btn">
                    LEARN MORE
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TechStackCards
