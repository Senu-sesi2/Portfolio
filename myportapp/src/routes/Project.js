import React from 'react'

import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import HeroSec2 from '../components/HeroSec2';
import TechCard from '../components/TechCard';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroSec2 heading="PROJECTS" text="Featured Portfolio Pieces" />
      <WorkCard />
      <TechCard />
      <Footer />
    </div>
  )
}

export default Project