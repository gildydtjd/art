import React from 'react';
import '../../styles/artContent.css';
import ArtList from './ArtList';
function ArtContent(props) {
  const art = [
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

  const aart = art.map((e) => {
    return <ArtList art={e} key={e.key} />;
  });

  return (
    <div className="artContent">
      <div className="artContent__box">{aart}</div>
    </div>
  );
}

export default ArtContent;
