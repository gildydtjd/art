import React, { Component } from 'react';
import MainContent from '../components/Contents/MainContent';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderContainer from '../components/header/HeaderContainer';
import '../styles/home.css';
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