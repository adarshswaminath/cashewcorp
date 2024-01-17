import React from 'react';
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
  return (
    <div className="flex flex-col items-center">
      <ScrollAnimate animateIn="fadeIn">
        <h2 className="font-semibold text-3xl">Our Products</h2>
      </ScrollAnimate>
      <ScrollAnimate animateIn="fadeIn" delay={200}>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          {productData.map((product, index) => (
            <img key={index} src={product} alt={`Product ${index + 1}`} className="h-48 w-48 object-cover" />
          ))}
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
