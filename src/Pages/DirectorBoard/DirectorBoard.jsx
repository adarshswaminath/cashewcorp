import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import DirectorBoard from '../Home/DirectorBoard'
import Banner from '../../Components/Banner'

function DirectorBoardPage() {
  return (
    <div>
        <Navbar/>
        <Banner image="directorboard.jpg"/>
        <DirectorBoard/>
        <Footer/>
    </div>
  )
}

export default DirectorBoardPage