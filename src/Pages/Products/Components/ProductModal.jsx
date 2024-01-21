import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function ProductModal({ selectedData, setShowModal }) {
  const { image, name, description, price } = selectedData;
  const [customPrice, setCustomPrice] = useState(price);
  const [count, setCount] = useState(1);
  const [isDisabled, setDisable] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBuyNow = () => {
    // Handle the buy now functionality here
  };
  const increase = () => {
    setDisable(false);
    setCustomPrice((prev) => prev + price);
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCustomPrice((prev) => prev - price);
      setCount((prev) => prev - 1);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-96 p-6 rounded-md shadow-lg z-10">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={image}
            className="h-64 w-full object-cover rounded"
            alt={name}
          />
          <div className="mt-4 text-center">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-gray-500 text-sm">{description}</p>
            <span className="m-4 text-2xl font-bold">₹{customPrice}</span>
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={decrement}
                disabled={isDisabled}
                className={`p-2 ${
                  isDisabled ? "bg-red-200" : "bg-red-500"
                } text-white rounded-full`}
              >
                <FaMinus />
              </button>
              <span className="mx-4 text-xl font-bold">{count}x</span>
              <button
                onClick={increase}
                className="p-2 bg-red-500 text-white rounded-full"
              >
                <FaPlus />
              </button>
            </div>
            <button
              onClick={handleBuyNow}
              className="mt-6 text-white bg-red-500 hover:bg-red-400 p-2 w-full rounded-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
