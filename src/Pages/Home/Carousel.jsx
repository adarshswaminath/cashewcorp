import React, { useState, useEffect } from "react";
// / Ensure that Tailwind CSS is imported or configured in your project

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "https://cashewcorporation.com/wp-content/uploads/2015/03/slider1-image.png",
    "https://cashewcorporation.com/wp-content/uploads/2015/03/cashew-slider5.png",
    "https://cashewcorporation.com/wp-content/uploads/2015/03/cashew-slider-png-1.png",
    "https://cashewcorporation.com/wp-content/uploads/2015/03/cashew-slider6.png",
    "https://cashewcorporation.com/wp-content/uploads/2015/03/cashew-slider2-png.png",
    "https://cashewcorporation.com/wp-content/uploads/2015/03/cashew-slider-png-2.png",
    "https://cashewcorporation.com/wp-content/uploads/2022/06/KSCDC-LOGO-484x255.jpg",
  ];

  useEffect(() => {
    const intervalId = setTimeout(() => {
      // Increment the active index, and reset to 0 when reaching the end
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearTimeout(intervalId);
  }, [activeIndex, slides.length]);

  return (
    <div>
      <div className="carousel carousel-center bg-transparent max-w-md p-4 space-x-4 bg-neutral rounded-box overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full rounded-box opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
