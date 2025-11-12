import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa"
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
                <div>
                    <p>B313/4 Kwasheman Rd.</p>
                    <p>Accra</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} 
                style={{color: "whitesmoke", marginRight: "2rem" }} />
                (+233) 59 651 9210 / 55 427 9266</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} 
                style={{color: "whitesmoke", marginRight: "2rem" }} />
                senu.e30@gmail.com</h4>
            </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  )
}

export default Footer
