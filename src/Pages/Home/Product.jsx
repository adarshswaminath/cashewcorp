import React, { useState, useEffect } from 'react';
import ScrollAnimate from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

import product1 from '/images/products/product-7.png';
import product2 from '/images/products/product-8.png';
import product3 from '/images/products/product-9.png';
import product4 from '/images/products/product-10.png';
import product5 from '/images/products/product-11.png';
import product6 from '/images/products/product-12.png';

const productData = [product1, product2, product3, product4, product5, product6];

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productData.length) % productData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000); // Auto slide every 2000 milliseconds (2 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="flex flex-col items-center">
      <ScrollAnimate animateIn="fadeIn">
        <h2 className="font-semibold text-3xl text-orange-500">Our Products</h2>
      </ScrollAnimate>
      <ScrollAnimate animateIn="fadeIn" delay={200}>
        <div className="relative overflow-hidden h-48 w-48 lg:w-96 lg:h-96 mx-auto">
          {productData.map((product, index) => (
            <img
              key={index}
              src={product}
              alt={`Product ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } ${index === currentIndex ? '' : 'transform scale-90'}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className="px-5 py-2 border border-black mr-2"
            onClick={prevSlide}
          >
            Prev
          </button>
          <button
            className="px-5 py-2 border border-black"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="px-5 py-2 border border-black">
            <Link to="/product">View More</Link>
          </button>
        </div>
      </ScrollAnimate>
    </div>
  );
};

export default Product;
