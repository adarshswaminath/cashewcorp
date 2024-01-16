import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import HeroCards from "./HeroCards";
import LeaderTopImages from "./LeaderTopImages";

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
        className="h-[28rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
        }}
      >
        <Navbar />
        <div className=" text-center mx-auto flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-[#ff4d00] max-w-3xl ">
          welcome to THE KERALA STATE
CASHEW DEVELOPMENT CORPORATION LTD
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <button className="px-6 py-2 border bg-transparent bg-orange-500 hover:bg-transparent text-white hover:text-orange-500 border-orange-500 hover:border-orange-500 rounded-full">Get Started</button>
            <button className="px-6 py-2 border bg-transparent hover:bg-blue-500 rounded-full border-blue-500 hover:border-blue-500 text-blue-500 hover:text-white">Learn More</button>
          </div>
        </div>
      </div>
      <div className="p-2 mt-3">
        <HeroCards />
        <LeaderTopImages/>
      </div>
    </div>
  );
}

export default Hero;
