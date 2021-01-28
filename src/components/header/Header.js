import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../styles/header.css';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__link" style={{display:'flex'}}>
                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2>ART</h2>
                    </Link>

                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2>ARTISTS</h2>
                    </Link>

                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2>SHOP</h2>
                    </Link>

                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2>QNA</h2>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;