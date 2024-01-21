import React, { useState } from "react";
import ProductModal from "./ProductModal";

function ProductCard({setSelectedData,setShowModal, image, name, price, rating,description }) {

    function handleUserClick(){
        setSelectedData((prev) => ({
            ...prev,
            name:name,
            image:image,
            price:price,
            description:description,
            rating: rating,
        }))
        setShowModal((prev) => !prev)
    }
  return (
    <div className="w-full lg:w-60 max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <a href="#" className="block w-full h-48 overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt="product" />
      </a>
      <div className="px-6 py-4">
        <a href="#" className="block text-xl font-semibold text-gray-900 hover:underline">
          {name}
        </a>
        <div className="flex items-center mt-2">
          <div className="flex items-center space-x-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Stars key={index} />
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
            {rating}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">₹{price}</span>
          <button
          onClick={handleUserClick}
            className="text-white bg-red-600 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}

export default ProductCard;
