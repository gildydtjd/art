import React from 'react';
import ArtistContent from '../Contents/ArtistContent';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import '../../styles/artistHome.css';

function ArtistHome(props) {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art7.jpg)`,
  };

  return (
    <div className="artisthome" style={style}>
      <Header />
      <ArtistContent />
      <Footer />
    </div>
  );
}

export default ArtistHome;
