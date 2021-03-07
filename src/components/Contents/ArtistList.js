import React from 'react';
import '../../styles/artistContent.css';

function ArtistList({ artist }) {
  console.log(artist);
  return (
    <div className="ArtistList">
      <div className="ArtistList__top">{artist.key}</div>
      <div className="ArtistList__body">
        <img src={process.env.PUBLIC_URL + artist.url} alt=""></img>
      </div>
      <div className="ArtistList__bottom">
        <article>{artist.about}</article>
      </div>
      <div className="ArtistList__name">{artist.name}</div>
    </div>
  );
}

export default ArtistList;
