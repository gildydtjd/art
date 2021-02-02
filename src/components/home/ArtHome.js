import Footer from '../footer/Footer';
import Header from '../header/Header';
import ArtContent from '../Contents/ArtContent';
import '../../styles/artHome.css';
import React from 'react';

function ArtHome(props) {
    const style = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art7.jpg)`
    }

    return (
        <div className="arthome" style={style}>
        <Header/>
        <ArtContent />
        <Footer />
    </div>
    );
}

export default ArtHome;

