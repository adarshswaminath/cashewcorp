import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import HeroCards from "./HeroCards";
import LeaderTopImages from "./LeaderTopImages";
import ScrollAnimation from "react-animate-on-scroll";

const images = [
  "/images/hero-1.jpg",
  "/images/hero-3.jpg",
  "/images/hero-2.jpg",
  "/images/hero-4.jpg",
];
function Hero() {
  const [imageIndex, setImageIndex] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div
        className="lg:h-[30rem] h-screen bg-cover bg-current bg-no-repeat"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
        }}
      >
        <Navbar />
        {/* <div className=" text-center h-screen lg:h-auto mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-900 max-w-3xl ">
            welcome To The Kerala State Cashew Development Corporation LTD
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <button className="px-6 py-2 border  bg-orange-500 hover:bg-transparent text-white hover:text-orange-500 border-orange-500 hover:border-orange-500 rounded-full">
              Get Started
            </button>
            <button className="px-6 py-2 border  bg-blue-500 rounded-full border-blue-500 hover:border-blue-500 text-white hover:text-white">
              Learn More
            </button>
          </div>
        </div> */}
      </div>
      <div className="p-2 mt-3">
      <HeroCards />
        <ScrollAnimation animateIn="fadeIn">
        <LeaderTopImages />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Hero;
