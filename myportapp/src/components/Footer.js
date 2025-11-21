// import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
// import "./FooterStyles.css"

// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="footer">
//         <div className="footer-container">
//             <div className="left">
//                 <div className="location">
//                     <FaHome size={20} 
//                     style={{ color: "whitesmoke", marginRight: "2rem" }} />
//                     <div>
//                         <p>B313/4 Kwasheman Rd.</p>
//                         <p>Accra</p>
//                     </div>
//                 </div>
//                 <div className="phone">
//                     <h4> <FaPhone size={20} 
//                     style={{ color: "whitesmoke", marginRight: "2rem" }} />
//                     +233 59 651 9210
//                     </h4>
                   
//                 </div>
//                 <div className="email">
//                     <h4>
//                     <FaMailBulk size={20} 
//                     style={{ color: "whitesmoke", marginRight: "2rem" }} 
//                     />
//                     senu.e30@gmail.com
//                     </h4>
                   
//                 </div>
//             </div>

//             <div className="right">
//                 <h4>About Me</h4>
//                 <p>Certified Software Engineer passionate about building scalable, 
//                 AI-driven solutions. Combines technical expertise with digital marketing 
//                 insight to create innovative, data-powered products.
//             </p>
//             <div className="social">
//                 <FaFacebook size={30} 
//                     style={{ color: "whitesmoke", marginRight: "1rem" }} 
//                 />
//                 <FaTwitter size={30} 
//                     style={{ color: "whitesmoke", marginRight: "1rem" }} 
//                 />
//                 <FaLinkedin size={30} 
//                     style={{ color: "whitesmoke", marginRight: "1rem" }} 
//                 />
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer


import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          
          <div className="location">
            <FaHome size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
            <div>
              <p>B313/4 Kwasheman Rd.</p>
              <p>Accra</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
              <a href="tel:+233596519210" className="footer-link">+233 59 651 9210</a>
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "whitesmoke", marginRight: "2rem" }} />
              <a
                href="mailto:senu.e30@gmail.com"
                className="footer-link"
              >
                senu.e30@gmail.com
              </a>
            </h4>
          </div>

        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            Certified Software Engineer passionate about building scalable, 
            AI-driven solutions. Combines technical expertise with digital marketing 
            insight to create innovative, data-powered products.
          </p>

          <div className="social">
            <a href="https://facebook.com/freman.senu" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" size={30} />
            </a>
            <a href="https://twitter.com/@Senuemma" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon" size={30} />
            </a>
            <a href="https://linkedin.com/in/senu-e30" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" size={30} />
            </a>
        </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
