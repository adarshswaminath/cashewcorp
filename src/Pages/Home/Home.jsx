import Hero from "./Hero"
import About from "./About"
import Leaders from "./Leaders"
import ChooseUs from "./ChooseUs"
import Practise from "./Practise"
import Service from "./Service"
import Client from "./Client"
import Footer from "../../Components/Footer"
import CopyRight from "../../Components/CopyRight"
import GetInTocuh from "./GetInTocuh"
function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Leaders/>
        <ChooseUs/>
        <Practise/>
        <Service/>
        <Client/>
        <GetInTocuh/>
        <Footer/>
        <CopyRight/>
    </div>
  )
}

export default Home