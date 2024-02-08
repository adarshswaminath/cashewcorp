import React, { useState } from "react";
import ProductCard from "./Components/ProductCard";
import { productData } from "./constant";
import ProductModal from "./Components/ProductModal";

// Define main categories and their subcategories with labels
const categories = [
  { main: null, label: "View All", sub: null },
  { main: "plain", label: "Plain Cashews", sub: ["All", "premium", "popular","extra-premium"] },
  { main: "roastedandsalted", label: "Roasted and Salted", sub: ["All", "premium", "popular"] },
  { main: "valueAddedProducts", label: "Value Added ", sub: ["All", "flavoured-cashew",'premium', "cashew-vita","spread-delights"] },
  { main: "giftboxpackets", label: "Gift Box Packets", sub: ["All",'gift-box','jute-bag'] },
];

// Reusable component for filter buttons
function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn capitalize hover:bg-red-300 outline-none ${isActive ? "bg-red-500 text-white btn-active" : ""}`}
    >
      {(label == "Gift Box Packets" || label == "jute-bag" || label == "gift-box") ? (
        <span>{label}</span>
      ) : (
        <span>{label} Products</span>
      ) } 
    </button>
  );
}

function ProductList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({ id: 0 });
  const [filterType, setFilterType] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  // Filter products based on selected category and subcategory
  const filteredProductData = productData.filter((product) => {
    return (
      (!filterType || product.type === filterType) &&
      (!subCategory || (subCategory === "All" ? product.type === filterType : product.grade === subCategory))
    );
  });

  // Handle main category change
  const handleFilterChange = (type) => {
    setFilterType(type);
    setSubCategory(null); // Reset subcategory when changing the main category
  };

  // Handle subcategory change
  const handleSubCategoryChange = (subcategory) => {
    setSubCategory(subcategory);
  };

  return (
    <div className="min-h-screen p-3">
      <div className="text-center mb-4 mt-4 space-x-4">
        {/* Render main category filter buttons with labels */}
        {categories.map((category) => (
          <FilterButton
            key={category.main}
            label={category.label}
            isActive={filterType === category.main}
            onClick={() => handleFilterChange(category.main)}
          />
        ))}
      </div>

      {/* Render subcategory filter buttons if a main category is selected */}
      {filterType && (
        <div className="text-center mb-4 mt-4 space-x-4">
          {categories
            .find((category) => category.main === filterType)
            .sub.map((subcategory) => (
              <FilterButton
                key={subcategory}
                label={subcategory}
                isActive={subCategory === subcategory}
                onClick={() => handleSubCategoryChange(subcategory)}
              />
            ))}
        </div>
      )}

      {/* Render product cards */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 place-items-center justify-items-center">
        {filteredProductData.map((product) => (
          <ProductCard
            setSelectedData={setSelectedData}
            setShowModal={setShowModal}
            key={product.id}
            {...product}
          />
        ))}
      </div>

      {/* Render product modal if showModal is true */}
      {showModal ? <ProductModal selectedData={selectedData} setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default ProductList;
