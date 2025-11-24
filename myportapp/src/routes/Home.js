import React from 'react'
import Navbar from '../components/Navbar'
import HeroSec from "../components/HeroSec"
import Footer from './../components/Footer';
// import Work from "../components/Work"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSec />
      {/* <Work /> */}
      <Footer />
    </div>
  )
}

export default Home