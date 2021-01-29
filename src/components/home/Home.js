import React, { Component } from 'react';
import Footer from '../footer/Footer.js';
import Header from '../header/Header.js';
import HeaderContainer from '../header/HeaderContainer.js';
import '../../styles/home.css';
import MainContent from '../Contents/MainContent.js';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <HeaderContainer />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default Home;