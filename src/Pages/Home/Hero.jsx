import React, { useEffect, useRef } from "react";
import Carousel from "./Carousel";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const parallaxValue = scrollTop / 2; // Adjust the divisor for more or less parallax effect

      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${parallaxValue}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://c1.wallpaperflare.com/preview/863/536/868/cashew-cores-nuts-snack-salty.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
        <Carousel />
        <div className="lg:w-1/2 w-full lg:ml-8">
          <h3 className="text-3xl lg:text-5xl text-white font-bold mb-4">
            THE KERALA STATE{" "}
            <span className="text-balance">CASHEW DEVELOPMENT</span> CORPORATION
            LTD.
          </h3>
          <p className="text-white text-sm lg:text-base">
            Explore cashew perfection with The Kerala State Cashew Development
            Corporation Ltd. From our orchards to your table, savor the taste of
            tradition and excellence. Embrace the legacy of quality
            craftsmanship in every bite.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
