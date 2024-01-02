import React from 'react'
import AboutSection from './AboutSection'
import MissionSection from './MissionSection'
import VisionSection from './VisionSection'

function About() {
  return (
    <div className='p-3 mt-4 grid grid-cols-1 lg:gap-4 lg:grid-cols-2 w-full min-h-screen'>
        <AboutSection/>
        <div className='flex flex-col justify-evenly'>
        <MissionSection/>
        <VisionSection/>
        </div>
    </div>
  )
}

export default About