import React from 'react';
import '../../styles/artistContent.css';
import ArtistList from './ArtistList';
function ArtistContent() {
  const ArtistItem = [
    {
      key: 1,
      url: 'assets/img/artist1.jpg',
      about:
        'The three little pigs build new houses. The first little pig builds a house of straw. The second little pig builds a house of wood.The house is pretty. He likes it very much.',
      name: 'Sam smith',
    },
    {
      key: 2,
      url: 'assets/img/artist2.jpg',
      about:
        'The three little pigs build new houses. The first little pig builds a house of straw. The second little pig builds a house of wood.The house is pretty. He likes it very much.',
      name: 'Nami',
    },
    {
      key: 3,
      url: 'assets/img/artist3.jpg',
      about:
        'The three little pigs build new houses. The first little pig builds a house of straw. The second little pig builds a house of wood.The house is pretty. He likes it very much.',
      name: 'ha jung woo',
    },
    {
      key: 4,
      url: 'assets/img/artist4.jpg',
      about:
        'The three little pigs build new houses. The first little pig builds a house of straw. The second little pig builds a house of wood.The house is pretty. He likes it very much.',
      name: 'set',
    },
  ];

  const artist = ArtistItem.map((e) => {
    return <ArtistList artist={e} key={e.key} />;
  });

  return (
    <div className="artistContent">
      <div className="artistContent__box">{artist}</div>
    </div>
  );
}

export default ArtistContent;
