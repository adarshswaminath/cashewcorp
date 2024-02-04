import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import HeroCards from "./HeroCards";
import LeaderTopImages from "./LeaderTopImages";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const images = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  // "/images/hero/hero-4.png",
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
        className="hero-background h-screen w-full bg-center bg-cover bg-current bg-no-repeat relative"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
        }}
      >
        <div className="lg:absolute bg-black bg-opacity-10 inset-0"></div>
        <div className="lg:absolute w-full lg:p-3">
          <Navbar />
        </div>

        <div className="relative top-1/2 flex justify-between p-3">
          <button onClick={downImage} className="text-6xl p-3 bg-black/45 text-white/100 rounded-full shadow-lg ">
            <FaAngleLeft />
          </button>
          <button onClick={upImage} className="text-6xl p-3 bg-black/45 text-white/100 rounded-full shadow-lg ">
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="p-2 mt-3">
        <HeroCards />
        <div>
          <LeaderTopImages />
        </div>
      </div>
    </div>
  );
}

export default Hero;
