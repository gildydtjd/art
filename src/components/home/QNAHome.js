import React from 'react';
import '../../styles/qnaHome.css';
import QNAContent from '../Contents/QNAContent';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function QNAHome(props) {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art7.jpg)`,
  };
  return (
    <div className="QNAhome" style={style}>
      <Header />
      <QNAContent />
      <Footer />
    </div>
  );
}

export default QNAHome;
