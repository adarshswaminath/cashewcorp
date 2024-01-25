import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'

const QualityPolicy = () => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen">
            <Banner image={`qua.jpg`}/>
        </div>
        <Footer/>
    </div>
  )
}

export default QualityPolicy