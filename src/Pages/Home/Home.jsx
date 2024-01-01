import React from 'react'
import NavbarLogos from '../../Components/NavbarLogos'
import Navbar from '../../Components/Navbar'
import Hero from './Hero'

function Home() {
  return (
    <div>
        <NavbarLogos/>
        <Navbar/>
        <Hero/>
        <div className='min-h-screen'></div>
    </div>
  )
}

export default Home