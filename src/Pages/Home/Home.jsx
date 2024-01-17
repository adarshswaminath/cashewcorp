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
function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <ChooseUs/>
        <Practise/>
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