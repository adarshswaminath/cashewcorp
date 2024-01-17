import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Product from './Pages/Products/Product'
import Tender from './Pages/Tender/Tender'
import Career from './Pages/Career/Career'
import RTI from './Pages/RTI/RTI'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <main className='bg-gray-100'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/tender' element={<Tender/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/RTI' element={<RTI/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App