import React from 'react';
import '../../styles/artContent.css';
function ArtContent({number}) {
    const artNumber = number.key;
    console.log('artContent'+ artNumber);
    console.log(`url(./assets/img/art${artNumber}.jpg)`)
    const style = {
        fontSize : '100px',
        color : 'white'
    }
    const backStyle = {
        backgroundImage : `url(${process.env.PUBLIC_URL}/assets/img/art${artNumber}.jpg)`,
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width : '400px',
        height : '400px'
    }

    const art = [
        {
            key : 1,
            artist : '',
            name : '11',
            url : process.env.PUBLIC_URL + 'assets/img/art1.jpg'
        },
        {
            key : 5,
            artist : '',
            name : '22',
            url : process.env.PUBLIC_URL + 'assets/img/art5.jpg'
                },
        {
            key : 8,
            artist : '',
            name : '33',
            url : process.env.PUBLIC_URL + 'assets/img/art8.jpg'
                },
        {
            key : 14,
            artist : '',
            name : '44',
            url : process.env.PUBLIC_URL + 'assets/img/art14.jpg'
                },
        {
            key : 9,
            artist : '',
            name : '55',
            url : process.env.PUBLIC_URL + 'assets/img/art9.jpg'
        },
        {
            key : 6,
            artist : '',
            name : '66',
            url : process.env.PUBLIC_URL + 'assets/img/art6.jpg'
        },
        
    ]
    console.log(art);
   
    return (
        <div className="artContent">
            <article>
                <h2 style={style}>{artNumber}</h2>
                <div style={backStyle}></div>
            </article>
        </div>
    );
}

export default ArtContent;