import React, { useState } from "react";
import ProductModal from "./ProductModal";
import { MdShoppingCart } from "react-icons/md";

function ProductCard({
  setSelectedData,
  setShowModal,
  image,
  name,
  rating,
  description,
  id,
}) {
  // State to track whether the image has been loaded
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handler for the user click on the product card
  const handleUserClick = () => {
    setSelectedData((prev) => ({
      ...prev,
      id: id,
    }));
    setShowModal((prev) => !prev);
  };

  // Handler for image load event
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      type="button"
      // onClick={handleUserClick}
      className="w-full lg:w-72 max-w-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
    >
      {/* Product Image */}
      <a className="block w-full h-48 overflow-hidden">
        {!isImageLoaded && (
          // Placeholder for image loading animation
          <div
            className="w-full h-full bg-gray-300 animate-pulse"
            style={{ aspectRatio: "1/1" }}
          ></div>
        )}
        {/* Actual product image */}
        <img
        
          className={`object-contain w-full h-48 ${isImageLoaded ? "" : "hidden"}`}
          src={image}
          alt="product"
          onLoad={handleImageLoad}
        />
      </a>

      {/* Product Details */}
      <div className="px-6 py-4">
        {/* Product Name */}
        <a   className=" block text-xl font-semibold text-gray-900 hover:underline">
          {name}
        </a>
        {/* Product Description */}
        <p>{description.slice(0, 36)}...</p>

        {/* Product Rating */}
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

        {/* Buy Now Button */}
        <div className="mt-4 flex items-center justify-end">
          {name == "Premeium Product" ?(
            <button
            disabled={true}
            className="text-white flex items-center gap-2 bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out"
          >
            Not Available
            <MdShoppingCart/>
          </button>
          )  : (
            <button
            onClick={handleUserClick}
            className="text-white flex items-center gap-2  bg-red-600 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out"
          >
            Buy Now
            <MdShoppingCart/>
          </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Stars component renders a star icon for product rating
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
