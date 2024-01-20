import React from "react";
import { Link } from "react-router-dom";

import product1 from "/images/products/product-7.png";
import product2 from "/images/products/product-8.png";
import product3 from "/images/products/product-9.png";
import product4 from "/images/products/product-10.png";
import product5 from "/images/products/product-11.png";
import product6 from "/images/products/product-12.png";
import product8 from "/images/products/product-2.png";
import product9 from "/images/products/product-3.png";
import product10 from "/images/products/product-4.png";
import product11 from "/images/products/product-5.png";
import product12 from "/images/products/product-6.png";

const productData = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product8,
  product9,
  product10,
  product11,
  product12,
];

const Product = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="font-semibold text-3xl border-l-2 p-2 border-red text-red-500">
          Our Products
        </h2>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-y-hidden h-56">
          {productData.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform transform duration-500 hover:scale-110 hover:z-10"
            >
              <img
                src={product}
                alt={`Product ${index + 1}`}
                className="h-48 w-48 object-cover transition-transform transform scale-100"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="px-5 py-2 border border-black">
            <Link to="/product">View More</Link>
          </button>
        </div>

    </div>
  );
};

export default Product;
