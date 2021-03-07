import React from 'react';
import '../../styles/qnaContent.css';
import { Link } from 'react-router-dom';
function QNAContent(props) {
  return (
    <div className="QNAContent">
      <div className="QNA__box">
        <div className="QNA__box__top">
          <span>고객센터</span>
        </div>

        <div className="QNA__box__body">
          <div className="QNA__box__about">
            <Link to="/QNAHome" className="QNA__box__link">
              <img
                className="qna_img"
                src={process.env.PUBLIC_URL + './assets/QNA1.png'}
                alt=""
              ></img>
              종합안내
            </Link>
          </div>
          <div className="QNA__box__about">
            <Link to="/QNAHome" className="QNA__box__link">
              <img
                className="qna_img"
                src={process.env.PUBLIC_URL + './assets/QNA2.png'}
                alt=""
              ></img>
              고객상담
            </Link>
          </div>
          <div className="QNA__box__about">
            <Link to="/QNAHome" className="QNA__box__link">
              <img
                className="qna_img"
                src={process.env.PUBLIC_URL + './assets/QNA3.png'}
                alt=""
              ></img>
              유실물관리
            </Link>
          </div>
        </div>
        <div className="QNA__box__bottom">
          <Link to="/QNAHome" className="QNA__box__link__bottom">
            <p>Call : 010-0000-1587</p>
            <p>Email : gildydjtd@naver.com</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QNAContent;
