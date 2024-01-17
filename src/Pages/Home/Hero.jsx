import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import HeroCards from "./HeroCards";
import LeaderTopImages from "./LeaderTopImages";
import ScrollAnimation from "react-animate-on-scroll";


const images = [
  "/images/hero-612.jpg",
  "/images/hero-71.jpg",
  "/images/hero-81.jpg",
  "/images/hero-91.jpg",
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
    <div className="hero-container">
      <div
        className="hero-background h-screen bg-cover bg-current bg-no-repeat"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
        }}
      >
        <Navbar />
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
