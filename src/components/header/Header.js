import { Link } from "react-router-dom";
import '../../styles/header.css';
import $ from 'jquery';
import React from 'react';

function Header(props) {
    $(document).ready(function(){

        var navHeight = $(".header").height(); 
    
        $(".header").show();
    
        $(window).scroll(function(){
            var rollIt = $(this).scrollTop() >= navHeight; 
    
        if(rollIt){ 
                $(".header").show().css({"backgroundColor":"black"});
            }
            else{
                $(".header").show().css({"backgroundColor":"unset"});
            }
        });
        
    });

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