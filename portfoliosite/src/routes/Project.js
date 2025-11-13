import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import TechStackCards from '../components/TechStackCards'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Featured Portfolio Pieces"/>
      <TechStackCards />
      <Footer />
    </div>
  )
}

export default Project