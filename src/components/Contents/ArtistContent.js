import React from 'react';
import '../../styles/artistContent.css';
import ArtistList from './ArtistList';
function ArtistContent() {
  const ArtistItem = [
    {
      key: 1,
      url:
        'https://lh3.googleusercontent.com/proxy/XUlKbjTupyHyGVpq1uML7DeC1_viOge0fgABjQeomP_qTmwfiqeTN6VZCejjSGWUzgwj1HI5mAUNFWy0Nl7idrxTtn5i9qlrG_xIDzNxQReK5e7U_9dTSwc',
      about:
        'The three little pigs build new houses. The first little pig builds a house of straw. The second little pig builds a house of wood.The house is pretty. He likes it very much.',
      name: 'Sam smith',
    },
    {
      key: 2,
      url:
        'https://artage.org/wp-content/uploads/2020/11/GettyImages-922707682-5b90467bc9e77c0025931eef.jpg',
      about:
        'The three little pigs build new houses. The first little pig builds a house of straw. The second little pig builds a house of wood.The house is pretty. He likes it very much.',
      name: 'Nami',
    },
    {
      key: 3,
      url:
        'https://img.insight.co.kr/static/2017/08/23/700/3m0xvnm0779kw5o0e95a.jpg',
      about:
        'The three little pigs build new houses. The first little pig builds a house of straw. The second little pig builds a house of wood.The house is pretty. He likes it very much.',
      name: 'ha jung woo',
    },
    {
      key: 4,
      url:
        'https://pds.joins.com/news/component/joongang_sunday/2011/04/09234404.jpg',
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
