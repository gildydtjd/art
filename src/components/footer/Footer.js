import React, { Component } from 'react';
import '../../styles/footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__box">
                    <ul>
                        <li><a href="/" alt="">사이트 도움말</a></li>
                        <li><a href="/" alt="">사이트 이용약관</a></li>
                        <li><a href="/" alt="">사이트 운영원칙</a></li>
                        <li><a href="/" alt=""><strong>개인정보취급방침</strong></a></li>
                        <li><a href="/" alt="">책임의 한계와 법적고지</a></li>
                        <li><a href="/" alt="">게시중단요청서비스</a></li>
                        <li><a href="/" alt="">고객센터</a></li>
                    </ul>
                        <div>
                            Copyright ©
                            <a href="/" alt=""><strong>DragonArt</strong></a>
                                All Rights Reserved.
                        </div>
                    </div>
            </div>
        );
    }
}

export default Footer;