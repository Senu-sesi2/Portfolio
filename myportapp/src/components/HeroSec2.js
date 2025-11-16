import "./HeroSec2Styles.css"

import React, { Component } from 'react'

class HeroSec2 extends Component {
    render(){
        return (
    <div className="hero2-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
    }
  

export default HeroSec2