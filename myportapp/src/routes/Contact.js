import React from 'react'

import Navbar from '../components/Navbar'
import Footer from './../components/Footer';
import HeroSec2 from '../components/HeroSec2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSec2 heading="CONTACT" text="Drop me a message..."/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact