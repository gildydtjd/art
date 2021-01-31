import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import HeaderContainer from '../header/HeaderContainer.js';
import '../../styles/home.css';
import MainContent from '../Contents/MainContent.js';
import React from 'react';

function Home(props) {
    const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art_main.jpg)`
    }
    return (
        <div className="home" style={style}>
                <Header />
                <HeaderContainer />
                <MainContent />
                <Footer />
            </div>
    );
}


export default Home;