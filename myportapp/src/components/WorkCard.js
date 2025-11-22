import "./WorkCardStyles.css"
import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <h2 className="project-title">{props.title}</h2>

      <div className="pro-details">
        <p>{props.text}</p>

        <div className="pro-btns">
          <a 
            href={props.learnmore} 
            className="btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
