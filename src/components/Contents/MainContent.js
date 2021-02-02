import React from 'react';
import '../../styles/mainContent.css';
import ArtList from './ArtList';

function MainContent(props) {
    const style = {
        backgroundImage: "url('/assets/img/art13.jpg')"
    }

    const art = [
        {
            key : '1',
            artist : 'Sanzio Raffaello',
            name : '1. Pedro Diego Alvarado',
            price : '$10,000',
            url : process.env.PUBLIC_URL + 'assets/img/art1_thumb.jpg'
        },
        {
            key : '2',
            artist : 'Sanzio Raffaello',
            name : '2. Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art2_thumb.jpg'
                },
        {
            key : '3',
            artist : 'Sanzio Raffaello',
            name : '3. Pedro Diego Alvarado',
            price : '$30,000',
            url : process.env.PUBLIC_URL + 'assets/img/art3_thumb.jpg'
                },
        {
            key : '4',
            artist : 'Sanzio Raffaello',
            name : '4. Pedro Diego Alvarado',
            price : '$40,000',
            url : process.env.PUBLIC_URL + 'assets/img/art4_thumb.jpg'
                },
        {
            key : '5',
            artist : 'Sanzio Raffaello',
            name : '5. Pedro Diego Alvarado',
            price : '$0,5000',
            url : process.env.PUBLIC_URL + 'assets/img/art5_thumb.jpg'
        },
        {
            key : '6',
            artist : 'Sanzio Raffaello',
            name : '6. Pedro Diego Alvarado',
            price : '$60,000',
            url : process.env.PUBLIC_URL + 'assets/img/art6_thumb.jpg'
        },
    
        {
            key : '7',
            artist : 'Sanzio Raffaello',
            name : '7. Pedro Diego Alvarado',
            price : '$70,000',
            url : process.env.PUBLIC_URL + 'assets/img/art7_thumb.jpg'
        },
    
        {
            key : '8',
            artist : 'Sanzio Raffaello',
            name : '8. Pedro Diego Alvarado',
            price : '$80,000',
            url : process.env.PUBLIC_URL + 'assets/img/art8_thumb.jpg'
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

