import React from 'react'

import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import HeroSec2 from '../components/HeroSec2';
import TechCard from '../components/TechCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSec2 heading="PROJECTS" text="Featured Portfolio Pieces" />
      <Work />
      <TechCard />
      <Footer />
    </div>
  )
}

export default Project