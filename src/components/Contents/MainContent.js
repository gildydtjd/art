import React from 'react';
import '../../styles/mainContent.css';
import ArtList from './ArtList';

function MainContent(props) {
    const art = [
        {
            key : 1,
            artist : '',
            name : '',
            url : process.env.PUBLIC_URL + 'assets/img/art1.jpg'
        },
        {
            key : 5,
            artist : '',
            name : '',
            url : process.env.PUBLIC_URL + 'assets/img/art5.jpg'
                },
        {
            key : 8,
            artist : '',
            name : '',
            url : process.env.PUBLIC_URL + 'assets/img/art8.jpg'
                },
        {
            key : 14,
            artist : '',
            name : '',
            url : process.env.PUBLIC_URL + 'assets/img/art14.jpg'
                },
        {
            key : 9,
            artist : '',
            name : '',
            url : process.env.PUBLIC_URL + 'assets/img/art9.jpg'
        },
        {
            key : 6,
            artist : '',
            name : '',
            url : process.env.PUBLIC_URL + 'assets/img/art6.jpg'
        },
        
    ]

    const aarts = art.map(a => 
        (   
                <ArtList 
            key={a.key} 
            art={a}/>
        ))
    console.log("메인");
    return (
        <div className="mainContent">
                <div className="art__back">
                    <a className="art__back__text" href="/" alt="">Grief is the agony of an instant, the indulgence of
                        <br></br>grief the blunder of a life.</a>
                </div>
                <div className="art__list">
                {aarts}
                </div>
        </div>
    );
}

export default MainContent;

