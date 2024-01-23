import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'

function Blog() {
  return (
    <div>
        <Navbar/>
        <Banner image="blog.jpg"/>
       
        <div className="min-h-screen"></div>
        <Footer/>
    </div>
  )
}

export default Blog