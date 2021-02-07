import React, { useState } from 'react';
import '../../styles/artistContent.css';
function ArtistContent(props) {
  const [height, setHeight] = useState('');
  document.addEventListener('scroll', function () {
    const windowHeight = document.documentElement.scrollTop;
    setHeight(windowHeight);
  });

  return (
    <div className="artistContent">
      <section className="artist_section1">
        <h2>{height}</h2>
        <article style={{ backgroundColor: 'blue' }}></article>
        <article style={{ backgroundColor: 'khaki' }}></article>
      </section>
      <section className="artist_section2">
        <article style={{ backgroundColor: 'green' }}></article>
        <article style={{ backgroundColor: 'yellow' }}></article>
      </section>
      <section className="artist_section3">
        <article style={{ backgroundColor: 'lime' }}></article>
        <article style={{ backgroundColor: 'red' }}></article>
      </section>
    </div>
  );
}

export default ArtistContent;
