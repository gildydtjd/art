import React, { Component } from 'react';
import Header from '../components/header/Header';
import HeaderContainer from '../components/header/HeaderContainer';
import '../styles/home.css';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <HeaderContainer />
            </div>
        );
    }
}

export default Home;