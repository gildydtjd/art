import React from 'react';
import '../../styles/shopHome.css';
import ShopContent from '../Contents/ShopContent';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function ShopHome(props) {
  return (
    <div className="shophome">
      <Header />
      <ShopContent />
      <Footer />
    </div>
  );
}

export default ShopHome;
