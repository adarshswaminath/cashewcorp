import Hero from "./Hero"
import About from "./About"
import Leaders from "./Leaders"
import DirectorBoard from "./DirectorBoard"
import Practise from "./Practise"
import Service from "./Service"
import Client from "./Client"
import Footer from "../../Components/Footer"
import GetInTocuh from "./GetInTocuh"
import Gallery from "./Gallery"
import UseFulLinks from "./UseFulLinks"
import TranslateButton from "../../Components/TranslateButton"
import Product from "./Product"
import Navbar from "../../Components/Navbar"
import PlayStore from "./PlayStore"
import { useState } from "react"
function Home() {
  const [language,setLanguage] = useState(true)
  return (
    <div>
      <button onClick={() => setLanguage((prev) => !prev)} className="fixed bottom-4 right-3 z-50">
        <TranslateButton/>
      </button>

        <Hero language={language}/>
        <About/>
        <DirectorBoard/>
        <Product/>
        <Practise/> {/* its blog*/}
        {/* <Service/> */}
        <Gallery/>
        <PlayStore/>
        <Client/>
        <GetInTocuh/>
        <UseFulLinks/>
        <Footer/>
    </div>
  )
}

export default Home