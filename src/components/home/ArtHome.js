import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import '../../styles/artHome.css';
import ArtContent from '../Contents/ArtContent';

class ArtHome extends Component {
    render() {
        return (
            <div className="arthome">
                <Header />
                <ArtContent />
                <Footer />
            </div>
        );
    }
}

export default ArtHome;