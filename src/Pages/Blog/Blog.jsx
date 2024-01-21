import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Blog() {
  return (
    <div>
        <Navbar/>
        <div className="p-3">
          <div className="banner">
            <h3 className='text-3xl font-bold text-white'>What's New</h3>
          </div>
        </div>
        <div className="min-h-screen"></div>
        <Footer/>
    </div>
  )
}

export default Blog