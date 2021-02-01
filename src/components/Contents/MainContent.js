import React from 'react';
import '../../styles/mainContent.css';
import ArtList from './ArtList';

function MainContent(props) {
    const style = {
        backgroundImage: "url('/assets/img/art13.jpg')"
    }

    const art = [
        {
            key : 1,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art1.jpg'
        },
        {
            key : 5,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art5.jpg'
                },
        {
            key : 8,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art8.jpg'
                },
        {
            key : 14,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art14.jpg'
                },
        {
            key : 9,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            url : process.env.PUBLIC_URL + 'assets/img/art9.jpg'
        },
        {
            key : 6,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art6.jpg'
        },

        {
            key : 4,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art4.jpg'
        },

        {
            key : 18,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art18.jpg'
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
                <div className="art__back" style={style}>
                    <span className="art__back__text">If you hear a voice within you say ‘you cannot <br></br> paint’ then by all means paint, and then that<br></br> voice will be silenced</span>
                </div>
                <div className="art__list">
                {aarts}
                </div>
        </div>
    );
}

export default MainContent;

