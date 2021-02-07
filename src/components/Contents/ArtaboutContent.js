import React, { useState, useEffect } from 'react';
import '../../styles/artContent.css';
const aart = [
  {
    key: '1',
    artist: 'Sanzio Raffaello',
    name: '1. Pedro Diego Alvarado',
    price: '$10,000',
    url: process.env.PUBLIC_URL + 'assets/img/art1_thumb.jpg',
  },
  {
    key: '2',
    artist: 'Sanzio Raffaello',
    name: '2. Pedro Diego Alvarado',
    price: '$20,000',
    url: process.env.PUBLIC_URL + 'assets/img/art2_thumb.jpg',
  },
  {
    key: '3',
    artist: 'Sanzio Raffaello',
    name: '3. Pedro Diego Alvarado',
    price: '$30,000',
    url: process.env.PUBLIC_URL + 'assets/img/art3_thumb.jpg',
  },
  {
    key: '4',
    artist: 'Sanzio Raffaello',
    name: '4. Pedro Diego Alvarado',
    price: '$40,000',
    url: process.env.PUBLIC_URL + 'assets/img/art4_thumb.jpg',
  },
  {
    key: '5',
    artist: 'Sanzio Raffaello',
    name: '5. Pedro Diego Alvarado',
    price: '$0,5000',
    url: process.env.PUBLIC_URL + 'assets/img/art5_thumb.jpg',
  },
  {
    key: '6',
    artist: 'Sanzio Raffaello',
    name: '6. Pedro Diego Alvarado',
    price: '$60,000',
    url: process.env.PUBLIC_URL + 'assets/img/art6_thumb.jpg',
  },

  {
    key: '7',
    artist: 'Sanzio Raffaello',
    name: '7. Pedro Diego Alvarado',
    price: '$70,000',
    url: process.env.PUBLIC_URL + 'assets/img/art7_thumb.jpg',
  },

  {
    key: '8',
    artist: 'Sanzio Raffaello',
    name: '8. Pedro Diego Alvarado',
    price: '$80,000',
    url: process.env.PUBLIC_URL + 'assets/img/art8_thumb.jpg',
  },
];

function ArtaboutContent({ number }) {
  const [artAbout, setArt] = useState({
    name: '',
    artist: '',
    price: '',
  });

  const artNumber = number.key;
  console.log(artNumber);
  const target = aart.filter((a) => a.key === artNumber)[0];
  console.log(target.key);
  console.log(target.name);
  console.log(target.artist);
  console.log(target);

  useEffect(() => {
    setArt({
      name: target.name,
      artist: target.artist,
      price: target.price,
    });
  }, [number, target]);

  const backStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/art${artNumber}_thumb.jpg)`,
  };

  return (
    <div className="artAbout__Content">
      <article className="artAbout__Content__article">
        <div className="artAbout__box">
          <span
            className="artAbout"
            style={{ fontWeight: '600', fontSize: '32px', fontStyle: 'italic' }}
          >
            Uncover the art market
            <br /> with the Price Database
          </span>
          <span
            className="artAbout"
            style={{
              fontSize: '22px',
              marginTop: '16px',
              marginBottom: '20px',
            }}
          >
            Search the most trusted
            <br /> database of auction results for
            <br /> fine art, design, and decorative
            <br /> artworks.
          </span>
          <span className="artAbout">
            <span className="artAbout__list">name : </span>
            {artAbout.name}
          </span>
          <span className="artAbout">
            <span className="artAbout__list">artist : </span>
            {artAbout.artist}
          </span>
          <span className="artAbout">
            <span className="artAbout__list">price : </span>
            {artAbout.price}
          </span>
          <div className="artAbout__Button__box">
            <button>buy</button>
            <button>cart</button>
          </div>
        </div>
        <div className="artAbout__Content__Back" style={backStyle}></div>
        <div className="artAbout__bottom"></div>
      </article>
    </div>
  );
}

export default ArtaboutContent;
