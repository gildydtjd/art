import React, { Component } from 'react';
import ArtistContent from '../Contents/ArtistContent';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import '../../styles/artistHome.css';
class ArtistHome extends Component {
    render() {
        return (
            <div className="artisthome">
                <Header/>
                <ArtistContent />
                <Footer />
            </div>
        );
    }
}

export default ArtistHome;