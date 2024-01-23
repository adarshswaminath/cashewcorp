import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from "../../Components/Footer"
import ProductBanner from './ProductBanner';
import ProductList from './ProductList';
import TranslateButton from '../../Components/TranslateButton';
import Banner from '../../Components/Banner';

function Product() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className="fixed bottom-4 right-3 z-50">
        <TranslateButton/>
      </div>
      <Banner image="product.jpg"/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default Product;
