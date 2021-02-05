import Footer from '../footer/Footer';
import Header from '../header/Header';
import ArtContent from '../Contents/ArtContent';
import '../../styles/artHome.css';
import React from 'react';

function ArtHome(props) {
    return (
        <div className="arthome">
        <Header/>
        <ArtContent />
        <Footer />
    </div>
    );
}

export default ArtHome;

