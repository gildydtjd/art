import { Link } from "react-router-dom";
import '../../styles/header.css';
import $ from 'jquery';
import React from 'react';

function Header(props) {
    $(document).ready(function(){

        var navHeight = $(".header").height(); 
    
        $(".header").show();
        //스크롤시 나타날 객체 미리 숨기기
    
        $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
            var rollIt = $(this).scrollTop() >= navHeight; 
    // 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다
    
    /*
    scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
    스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
    */
    
        if(rollIt){ 
            //윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
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