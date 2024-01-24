import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from "../../Components/Footer";
import ProductImages from './ProductImages';
import AwardImages from './AwardImages';
import AchievementsImages from './AchievementsImages';
import FunctionImage from './FunctionImage'
import Banner from "../../Components/Banner"


function Gallery() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const renderImages = () => {
    switch (filter) {
  
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
            <AwardImages />
            <FunctionImage />
            <FactoryImage />
            <AchievementsImages />
          </>
        );
    }
  };

  return (
    <div>
      <Navbar />        
      <div className=" min-h-screen">
        <Banner image="gallery.jpg"/>
        <div className="grid grid-cols-3  gap-3 lg:flex items-center justify-center space-x-3 mt-4 mb-4">
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'all' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('all')}>All</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'functions' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('functions')}>Functions</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'achievements' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('achievements')}>Achievements</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'awards' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('awards')}>Awards</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'factories' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('factories')}>Factories</button>
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

