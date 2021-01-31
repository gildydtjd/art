import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import '../../styles/artHome.css';
import ArtContent from '../Contents/ArtContent';

function ArtHome({match}) {
    const style = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art7.jpg)`
    }
    const number = match.params;
    console.log(match.params);
    return (
        <div className="arthome" style={style}>
                <Header />
                <ArtContent number={number}/>
                <Footer />
            </div>
    );
}

export default ArtHome;
