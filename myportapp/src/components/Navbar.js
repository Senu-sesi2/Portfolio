import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React, { useState } from 'react'

import {FaBars, FaTimes} from "react-icons/fa"

import Logo1 from "../assets/logo.png";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

const [color, setColor] = useState(false);
const changeColor = () =>{
  if(window.scrollY >=10){
    setColor(true);
  }else{
    setColor(false);
  }
}

window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
      <img src={Logo1} alt="logo" className="logo-img"/>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "whitesmoke" }} />
      ) : (
      <FaBars size={20} style={{ color: "whitesmoke" }}/>)}
      </div>
    </div>
  )
}

export default Navbar