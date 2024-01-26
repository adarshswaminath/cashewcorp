import React, { useState } from 'react';
import ProductCard from './Components/ProductCard';
import { productData } from './constant';
import ProductModal from './Components/ProductModal';

function ProductList() {
 

  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({
    id:0,
  });

  return (
    <div className='min-h-screen p-3'>
      
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5 place-items-center justify-items-center">
        {productData.map((product) => (
          <ProductCard 
            setSelectedData={setSelectedData} 
            setShowModal={setShowModal} 
            key={product.id} 
            {...product} />
        ))}
      </div>
      {showModal ? 
        <ProductModal 
          selectedData={selectedData} 
          setShowModal={setShowModal} 
        /> : null}
    </div>
  );
}

export default ProductList;
