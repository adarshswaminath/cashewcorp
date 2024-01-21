import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from "../../Components/Footer";
import ProductImages from './ProductImages';
import AwardImages from './AwardImages';
import AchievementsImages from './AchievementsImages';
import FunctionImage from './FunctionImage';


function Gallery() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const renderImages = () => {
    switch (filter) {
      case 'product':
        return <ProductImages />;
      case 'functions':
        return <FunctionImage />;
      case 'awards':
        return <AwardImages />;
      case 'factories':
        return <FactoryImage />;
      case 'achievements':
        return <AchievementsImages />;
      default:
        // Display all images when 'all' or an unknown filter is selected
        return (
          <>
            <ProductImages />
            <FunctionImage />
            <AwardImages />
            <FactoryImage />
            <AchievementsImages />
          </>
        );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-3 min-h-screen">
        <div className="banner">
          <h3 className='text-3xl font-bold text-white'>Gallery</h3>
        </div>
        <div className="grid grid-cols-3  gap-3 lg:flex items-center justify-center space-x-3 mt-4 mb-4">
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'all' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('all')}>All</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'functions' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('functions')}>Functions</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'product' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('product')}>Product</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'achievements' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('achievements')}>Achievements</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'awards' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('awards')}>Awards</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'factories' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('factories')}>Factories</button>
        </div>
        <div className="flex flex-col items-center">
          {renderImages()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;

function FactoryImage(){
  return(
    <div>
      <img src="/images/factory.jpeg" alt="Factory image" />
    </div>
  )
}

