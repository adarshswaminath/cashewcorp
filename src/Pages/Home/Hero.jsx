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
        className="h-[30rem] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
        }}
      >
        <Navbar />
      </div>
      <div className="p-2 mt-3">
        <HeroCards />
        <LeaderTopImages/>
      </div>
    </div>
  );
}

export default Hero;
