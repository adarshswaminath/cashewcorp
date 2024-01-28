import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from "../../Components/Footer";
import AwardImages from './AwardImages';
import AchievementsImages from './AchievementsImages';
import FunctionImage from './FunctionImage'
import Banner from "../../Components/Banner"
import Videos from './Videos';
import DownloadMedia from './DownloadMedia';


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
      case 'downloads':
        return <DownloadMedia/>;
      case 'achievements':
        return <AchievementsImages />;
      case 'video':
        return <Videos/>
      default:
        // Display all images when 'all' or an unknown filter is selected
        return (
          <>
            <AwardImages />
            <FunctionImage />
            <AchievementsImages />
            <Videos/>
          </>
        );
    }
  };

  return (
    <div>
      <Navbar />        
      <div className=" min-h-screen">
        <Banner image="gallery.jpg"/>
        <div className="grid grid-cols-3  gap-3 lg:flex items-center justify-center space-x-3 mt-4 mb-4 p-3">
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'all' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('all')}>All</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'functions' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('functions')}>Functions</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'video' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('video')}>Videos</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'achievements' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('achievements')}>Achievements</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'awards' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('awards')}>Awards</button>
          <button className={`px-5 py-1 border hover:bg-[#FF1E1E] hover:text-white ${filter === 'downloads' && 'bg-[#FF1E1E] text-white'}`} onClick={() => handleFilterChange('downloads')}>Downloads</button>
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


