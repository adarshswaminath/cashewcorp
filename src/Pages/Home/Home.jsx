import Hero from "./Hero"
import About from "./About"
import Leaders from "./Leaders"
import ChooseUs from "./ChooseUs"
import Practise from "./Practise"
import Service from "./Service"
import Client from "./Client"
import Footer from "../../Components/Footer"
import GetInTocuh from "./GetInTocuh"
import Gallery from "./Gallery"
import YouAreIn from "./YouAreIn"
import TranslateButton from "../../Components/TranslateButton"
import Product from "./Product"
import Navbar from "../../Components/Navbar"
function Home() {
  return (
    <div>
      <div className="fixed bottom-4 right-3 z-50">
        <TranslateButton/>
      </div>

        <Hero/>
        <About/>
        <ChooseUs/>
        {/* <Product/> */}
        <Practise/> {/* its blog*/}
        {/* <Service/> */}
        <Gallery/>
        <Client/>
        <GetInTocuh/>
        <YouAreIn/>
        <Footer/>
    </div>
  )
}

export default Home