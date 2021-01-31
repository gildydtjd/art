import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import '../../styles/artHome.css';
import ArtContent from '../Contents/ArtContent';

function ArtHome({match}) {
    const number = match.params;
    console.log(match.params);
    return (
        <div className="arthome">
                <Header />
                <ArtContent number={number}/>
                <Footer />
            </div>
    );
}

export default ArtHome;
