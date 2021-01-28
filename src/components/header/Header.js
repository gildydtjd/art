import { Link } from "react-router-dom";
import '../../styles/header.css';
import React from 'react';

function Header(props) {
        return (
            <div className="header">
                <div className="header__link" style={{display:'flex'}}>
                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2 className="header__menu">ART</h2>
                    </Link>

                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2 className="header__menu">ARTISTS</h2>
                    </Link>

                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2 className="header__menu">SHOP</h2>
                    </Link>

                    <Link to='/Home2' style={{textDecoration:'none'}}>
                        <h2 className="header__menu">QNA</h2>
                    </Link>
                </div>
            </div>
        );
    }

export default Header;