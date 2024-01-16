import React from 'react'

function About() {
  return (
    <div className='lg:flex items-center justify-between p-2 bg-white mt-6'>
      <div className='p-12 bg-white'></div>
      <div className='flex flex-col items-start'>
        <span className='text-sm text-blue-500'>ABOUT US</span>
        <h2 className='text-4xl max-w-md text-balance'>We are the Best SEO Company</h2>
        <p className='text-balance max-w-xl text-gray-400 mt-4'>Nulla pariatur consectetur proident elit quis et. Nulla aliqua amet esse fugiat incididunt. Ex irure ea labore consectetur commodo Lorem. Nisi aute laboris quis voluptate do nisi consectetur eu enim. Anim sunt sint pariatur ipsum est. Elit minim exercitation elit aliquip pariatur labore veniam labore aliquip.Anim magna cillum aliquip cillum. Consequat laborum sit officia eiusmod ut ut elit est. Magna cillum sunt in commodo. Proident et irure officia do minim cillum sit minim id magna nostrud.</p>
        <button className='mt-4 px-5 py-2 bg-indigo-600 font-bold text-white uppercase'>more about us</button>
      </div>
    </div>
  )
}

export default About