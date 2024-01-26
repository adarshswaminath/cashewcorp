import { useState } from "react";
import { productData } from "../constant";

// ProductBoard component displays product details, prices, and allows selecting different packet weights
const ProductBoard = (value) => {
  // Destructuring product data
  const {
    image,
    rating,
    name,
    packet_weights,
    description,
    percentage_discount,
  } = value.data;

  // State to track the currently selected product price and discounted price
  const [currentProduct, setCurrentProduct] = useState(
    packet_weights[0].selling_rate
  );
  const [currentMrp, setCurrentMRP] = useState(packet_weights[0].mrp);

  return (
    <div>
      <div className="lg:flex">
        {/* Product Image */}
        <img src={image} alt="Product Image" />

        <div>
          {/* Product Name */}
          <h1 className="text-4xl font-bold">{name}</h1>

          {/* Current Product Price */}
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold">₹{currentProduct}</h3>
            <span className="line-through">₹{currentMrp}</span>
            <span className="text-green-500 ml-2">
              ({percentage_discount}% OFF)
            </span>
          </div>

          {/* Product Rating */}
          <div className="flex items-center">
            <p>Rating</p>&nbsp;
            {Array.from({ length: rating }).map((_, index) => (
              <Stars key={index} />
            ))}
          </div>

          {/* Product Description */}
          <p className="mt-3 text-xl font-semibold">{description}</p>

          {/* Packet Weight Selection */}
          <div className="mt-3 flex gap-2">
            {packet_weights.map((packet) => (
              <button
                key={packet.weight}
                onClick={() => {
                  setCurrentProduct(packet.selling_rate);
                  setCurrentMRP(packet.mrp);
                }}
                className={`${
                  packet.selling_rate === currentProduct
                    ? "border-red-200 bg-red-400 text-white"
                    : ""
                } border p-2 container rounded-lg flex flex-col items-center justify-center`}
              >
                <p className="text-xl font-bold">{packet.weight}</p>
                <hr />
                <div className="">
                  <p className="text-xl font-bold ">₹ {packet.selling_rate}</p>
                  <p className="text-base font-bold line-through">
                    ₹ {packet.mrp}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Purchase Button */}
          <button className="btn w-full mt-3 bg-red-500 text-white hover:bg-red-400">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

// ProductModal component displays a modal with detailed product information
function ProductModal({ selectedData, setShowModal }) {
  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white min-h-screen w-full p-6 rounded-md shadow-lg z-10">
        <div className="flex justify-end">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex justify-between">
          {/* Render ProductBoard for the selected product */}
          {productData.map((value) =>
            value.id == selectedData.id ? (
              <ProductBoard key={value.id} data={value} />
            ) : null
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

export default ProductModal;
