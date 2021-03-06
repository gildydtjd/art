import React from 'react';
import '../../styles/mainContent.css';
import { Link } from 'react-router-dom';

function ArtList({ art }) {
  const key = art.key;
  const style = {
    backgroundImage: `url(${art.url})`,
  };
  return (
    <div className="artList_box">
      <Link to={'/artAbout/' + key}>
        <div className="art" style={style}></div>
      </Link>
    </div>
  );
}

export default ArtList;
