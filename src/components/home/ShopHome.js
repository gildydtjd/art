import React from 'react';
import '../../styles/shopHome.css';
import ShopContent from '../Contents/ShopContent';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function ShopHome(props) {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art7.jpg)`,
  };
  return (
    <div className="shophome" style={style}>
      <Header />
      <ShopContent />
      <Footer />
    </div>
  );
}

export default ShopHome;
