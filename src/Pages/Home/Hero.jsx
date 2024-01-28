import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import HeroCards from "./HeroCards";
import LeaderTopImages from "./LeaderTopImages";



const images = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
  // "/images/hero/hero-9.png",
];

function Hero() {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-container relative">
  <div
    className="hero-background h-screen w-full bg-cover bg-current bg-no-repeat relative"
    style={{
      backgroundImage: `url(${images[4]})`,
    }}
  >
    <div className="lg:absolute bg-black bg-opacity-10 inset-0"></div>
    <div className="lg:absolute w-full lg:p-3">
      <Navbar />
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
