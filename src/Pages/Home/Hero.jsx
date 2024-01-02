import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import HeroCards from "./HeroCards";

const images = [
  "/images/hero-1.jpg",
  "/images/hero-3.jpg",
  "/images/hero-2.jpg",
  "/images/hero-4.jpg",

];

function Hero() {
  const [imageIndex, setImageIndex] = useState(3);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <div>
      <div
      className="min-h-screen bg-no-repeat bg-center bg-cover "
      style={{
        backgroundImage: `url(${images[imageIndex]})`,
      }}
    >
      <Navbar/>
     <div className="flex flex-col items-center justify-center p-3 absolute top-1/3">
     <h2 className="text-5xl font-bold text-gray-950 ">Cashews for Wealth,Health and for Prosperity</h2>
        <p className="text-balance mt-4">Veniam Lorem commodo nulla dolore aliqua nostrud aliquip occaecat sint.Occaecat nulla commodo aliqua deserunt incididunt fugiat laboris mollit veniam ipsum.</p>
     </div>
    </div>
    <div className="">
      <HeroCards/>
    </div>
    </div>
  );
}

export default Hero;
