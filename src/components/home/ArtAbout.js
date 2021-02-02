import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import '../../styles/artAbout.css';
import ArtaboutContent from '../Contents/ArtaboutContent';

function ArtAbout({match}) {
    const style = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art7.jpg)`
    }
    const number = match.params;
    console.log(match.params);
    return (
        <div className="arthome" style={style}>
                <Header />
                <ArtaboutContent number={number}/>
                <Footer />
            </div>
    );
}

export default ArtAbout;
