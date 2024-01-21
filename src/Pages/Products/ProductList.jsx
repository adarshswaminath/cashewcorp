import React, { useState } from 'react';
import ProductCard from './Components/ProductCard';
import { products } from './constant';
import ProductModal from './Components/ProductModal';

function ProductList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const [showModal,setShowModal] = useState(false)
  const [selectedData,setSelectedData] = useState({
    name:'',
    image:'',
    category: '',
    description: '',
    rating: 0,
    price: 0

  })
  
  return (
    <div className='min-h-screen p-3'>
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white p-2 input border rounded mr-2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-white p-2 border rounded"
        >
          <option value="">All Categories</option>
          {/* You can dynamically generate options based on your product categories */}
          <option value="cat-1">Category 1</option>
          <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
        </select>
      </div>
      
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5 place-items-center justify-items-center">
        {filteredProducts.map((product) => (
          <ProductCard setSelectedData={setSelectedData} setShowModal={setShowModal} key={product.id} {...product} />
        ))}
      </div>
      {showModal ? <ProductModal selectedData={selectedData} setShowModal={setShowModal}/> : null}
    </div>
  );
}

export default ProductList;
