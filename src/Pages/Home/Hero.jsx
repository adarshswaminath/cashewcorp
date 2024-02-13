import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import HeroCards from "./HeroCards";
import LeaderTopImages from "./LeaderTopImages";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const images = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
];

function Hero() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

 // function to backward image
const downImage = () => {
  setImageIndex((prev) => (prev - 1 + images.length) % images.length);
}

// function to forward image
const upImage = () => {
  setImageIndex((prev) => (prev + 1) % images.length);
}

  return (
    <div className="hero-container relative ">
      <div
        className="hero-background h-96 bg-center lg:h-screen bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
        }}
      >
        <div className="lg:absolute bg-black bg-opacity-10 inset-0"></div>
        <div className="lg:absolute w-full lg:p-3">
          <Navbar />
        </div>

        <div className="relative top-1/2 flex justify-between p-3">
          <button onClick={downImage} className="text-2xl p-3 text-white/100 rounded-full shadow-lg ">
            <FaAngleLeft />
          </button>
          <button onClick={upImage} className="text-2xl p-3  text-white/100 rounded-full shadow-lg ">
            <FaAngleRight />
          </button>
        </div>
        <div className="relative top-2/3 lg:top-3/4 flex items-center justify-center gap-2">
          {images.map((_,index) => (
            <span key={index} onClick={() => setImageIndex(index)} className={`${imageIndex === index ? "bg-blue-500" : ""} px-1 border border-blue-500 py-1 rounded-full`}></span>
         
          ))}
        </div>
      </div>
      <div className="p-2 mt-3">
        <div className="h-screen md:h-screen lg:h-auto">
        <HeroCards />
        </div>
        <div>
          <LeaderTopImages />
        </div>
      </div>
    </div>
  );
}

export default Hero;
