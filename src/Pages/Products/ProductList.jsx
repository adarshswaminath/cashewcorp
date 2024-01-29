import React, { useState } from "react";
import ProductCard from "./Components/ProductCard";
import { productData } from "./constant";
import ProductModal from "./Components/ProductModal";

function ProductList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({
    id: 0,
  });
  const [filterType, setFilterType] = useState(null);

  const filteredProductData = filterType
    ? productData.filter((product) => product.type === filterType)
    : productData;

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <div className="min-h-screen p-3">
      <div className="flex justify-center mb-4 gap-2">
      <button onClick={() => handleFilterChange(null)} 
        className={`btn hover:bg-red-300 ${filterType === null && "bg-red-500 text-white btn-active"}`}>
          View All
        </button>
        <button
          onClick={() => handleFilterChange("RoastedAndSalt")}
          className={` btn hover:bg-red-300 ${
            filterType === "RoastedAndSalt" && "btn-active bg-red-500 text-white" 
          }`}
        >
          Roasted and Salted
        </button>
        <button
          onClick={() => handleFilterChange("ValueAddedProducts")}
          className={`btn hover:bg-red-300 ${
            filterType === "ValueAddedProducts"
              && "btn-active bg-red-500 text-white"

          }`}
        >
          Value Added Products
        </button>
        <button
          onClick={() => handleFilterChange("GiftBoxPackets")}
          className={`btn hover:bg-red-300 ${
            filterType === "GiftBoxPackets" && "btn-active bg-red-500 text-white"
          }`}
        >
          Gift Box Packets
        </button>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5 place-items-center justify-items-center">
        {filteredProductData.map((product) => (
          <ProductCard
            setSelectedData={setSelectedData}
            setShowModal={setShowModal}
            key={product.id}
            {...product}
          />
        ))}
      </div>

      {showModal ? (
        <ProductModal selectedData={selectedData} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default ProductList;
