import React from 'react'
import EnNavbar from './EnNavbar'
import MlNavbar from './MlNavbar'
import { useLanguage } from '../contexts/LanguageContext'



export default function Navbar() {
  const {language} = useLanguage()
console.log(language);
  return (
    <div>
      {language ? <EnNavbar/> : <MlNavbar/>}
    </div>
  )
}
