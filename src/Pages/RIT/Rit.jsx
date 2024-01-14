import React from 'react'
import Navbar from '../../Components/Navbar'

function Rit() {
  return (
    <div>
    <Navbar/>
    <div className="min-h-screen flex flex-col p-3 items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">RIT</h1>
      <p className="text-gray-700 mb-6 text-balance text-center">
        Explore our diverse range of products designed to meet your needs.
      </p>
    </div>
</div>
  )
}

export default Rit