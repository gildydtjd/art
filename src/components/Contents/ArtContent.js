import React from 'react';
import '../../styles/artContent.css';
function ArtContent({number}) {
    const artNumber = number.key;
    console.log('artContent'+ artNumber);
    const style = {
        fontSize : '100px',
        color : 'white'
    }

    const art = [
        {
            key : 1,
            artist : '',
            name : '11',
            url : process.env.PUBLIC_URL + 'assets/img/art1.jpg'
        },
        {
            key : 2,
            artist : '',
            name : '22',
            url : process.env.PUBLIC_URL + 'assets/img/art5.jpg'
                },
        {
            key : 3,
            artist : '',
            name : '33',
            url : process.env.PUBLIC_URL + 'assets/img/art8.jpg'
                },
        {
            key : 4,
            artist : '',
            name : '44',
            url : process.env.PUBLIC_URL + 'assets/img/art14.jpg'
                },
        {
            key : 5,
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

    return (
        <div className="artContent">
            <article>
                <h2 style={style}>{artNumber}</h2>
            </article>
        </div>
    );
}

export default ArtContent;