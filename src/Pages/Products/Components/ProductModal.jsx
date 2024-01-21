import React from "react";

function ProductModal({ setShowModal,name }) {
  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-1/2 p-4 rounded-md shadow-lg z-10">
        <div className="flex justify-end">
          <button
          onClick={() => setShowModal((prev) => !prev)}
            className="text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
        <div className="h-72 flex items-center justify-center">
          {/* Your modal content goes here */}
          <p className="text-2xl font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
