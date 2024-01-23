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

  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({
    name: '',
    image: '',
    category: '',
    description: '',
    rating: 0,
    price: 0,
  });

  return (
    <div className='min-h-screen p-3'>
      <div className="mb-4 ">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white p-2 input border rounded mr-2"
        />
        {/* btns */}
        <div className="flex items-center justify-center mt-4">
        <div className="flex gap-3 items-center p-3 border border-red-500">
          <button
            onClick={() => setSelectedCategory('cat-1')}
            className={`p-2  rounded ${selectedCategory === 'cat-1' ? 'bg-red-500 text-white' : 'bg-white'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('cat-2')}
            className={`p-2  rounded ${selectedCategory === 'cat-2' ? 'bg-red-500 text-white' : 'bg-white'}`}
          >
            Bulk Value Products
          </button>
          <button
            onClick={() => setSelectedCategory('cat-3')}
            className={`p-2  rounded ${selectedCategory === 'cat-3' ? 'bg-red-500 text-white' : 'bg-white'}`}
          >
            Value Added Products
          </button>
        </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5 place-items-center justify-items-center">
        {filteredProducts.map((product) => (
          <ProductCard setSelectedData={setSelectedData} setShowModal={setShowModal} key={product.id} {...product} />
        ))}
      </div>
      {showModal ? <ProductModal selectedData={selectedData} setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default ProductList;
