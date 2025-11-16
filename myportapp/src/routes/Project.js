import React from 'react'

import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import HeroSec2 from '../components/HeroSec2';
import TechCard from '../components/TechCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSec2 heading="PROJECTS" text="Featured Portfolio Pieces" />
      <TechCard />
      <Footer />
    </div>
  )
}

export default Project