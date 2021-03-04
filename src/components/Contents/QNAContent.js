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
                src={process.env.PUBLIC_URL + './assets/QNA1.png'}
                alt=""
                style={{ width: '40px', height: '40px', marginRight: '20px' }}
              ></img>
              종합안내
            </Link>
          </div>
          <div className="QNA__box__about">
            <Link to="/QNAHome" className="QNA__box__link">
              <img
                src={process.env.PUBLIC_URL + './assets/QNA2.png'}
                alt=""
                style={{ width: '40px', height: '40px', marginRight: '20px' }}
              ></img>
              고객상담
            </Link>
          </div>
          <div className="QNA__box__about">
            <Link to="/QNAHome" className="QNA__box__link">
              <img
                src={process.env.PUBLIC_URL + './assets/QNA3.png'}
                alt=""
                style={{ width: '40px', height: '40px', marginRight: '20px' }}
              ></img>
              유실물관리
            </Link>
          </div>
        </div>
        <div className="QNA__box__bottom">
          <Link
            to="/QNAHome"
            className="QNA__box__link"
            style={{ color: '#535353', marginTop: '30px', fontSize: '20px' }}
          >
            Call : 010-0000-1587
            <br></br>
            Email : gildydjtd@naver.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QNAContent;
