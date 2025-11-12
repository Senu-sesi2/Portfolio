import { FaHome } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} 
                style={{color: "whitesmoke", marginRight: "2rem" }} />
            </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  )
}

export default Footer
