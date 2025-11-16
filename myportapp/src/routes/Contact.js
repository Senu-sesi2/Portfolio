import React from 'react'

import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import HeroSec2 from '../components/HeroSec2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSec2 heading="CONTACT" text="Drop me a message..."/>
      <Footer />
    </div>
  )
}

export default Contact