import React from 'react'

import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import HeroSec2 from '../components/HeroSec2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSec2 heading="ABOUT" 
      text="Your friendly neighborhood Front-End Dev."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About