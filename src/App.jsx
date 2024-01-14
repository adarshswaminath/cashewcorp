import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Product from './Pages/Products/Product'
import Tender from './Pages/Tender/Tender'
import Career from './Pages/Career/Career'
import Rit from './Pages/RIT/Rit'
import Gallery from './Pages/Gallery/Gallery'

function App() {
  return (
    <main className='bg-gray-100'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/tender' element={<Tender/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/rit' element={<Rit/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App