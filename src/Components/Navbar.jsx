import React, { useState } from 'react'
import { navbarContent } from '../Constants'


let navHeadings = navbarContent.map((value) => (
  <ul>
    <a href={value.path} className='hover:border-b-2 border-[#fed06f]'>{value.name}</a>
  </ul>
))

function Navbar() {
  const [isShow,setShow] = useState(false)
  return (
    <nav className='mb-2'>
      {/* desktop view */}
      <div className="hidden lg:flex md:flex justify-evenly mt-2">
      {navHeadings}
      </div>
      {/* mobile view */}
      <div className='flex justify-between lg:hidden md:hidden'>
      <button className='p-2' onClick={() => setShow((prev) => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </button>
      {isShow ? 
        (
          <div className='absolute top-12 p-3 flex flex-col items-start gap-3 text-center bg-white shadow-lg w-1/2 '>
            {navHeadings}
          </div>
        )
      : null}
      <div className="p-2">
      <button className='bg-[#ff9a3d]  px-3 py-2 rounded-lg font-medium hover:text-white'>Online Shop</button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar