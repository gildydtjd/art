import React from 'react';
import '../../styles/artContent.css';
function ArtContent({number}) {
    const artNumber = number.key;
    const artName = number.name;
    const artArtist = number.artist;
    const artPrice = number.price;
    console.log('artContent'+ artNumber);
    console.log(`url(./assets/img/art${artNumber}.jpg)`)
    const backStyle = {
        backgroundImage : `url(${process.env.PUBLIC_URL}/assets/img/art${artNumber}_thumb.jpg)`,
        backgroundSize : 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width : '500px',
        height : '500px',
        float : 'right'
    }

    const art = [
        {
            key : 1,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art1_thumb.jpg'
        },
        {
            key : 2,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art2_thumb.jpg'
                },
        {
            key : 3,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art3_thumb.jpg'
                },
        {
            key : 4,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art4_thumb.jpg'
                },
        {
            key : 5,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            url : process.env.PUBLIC_URL + 'assets/img/art5_thumb.jpg'
        },
        {
            key : 6,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art6_thumb.jpg'
        },

        {
            key : 7,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art7_thumb.jpg'
        },

        {
            key : 8,
            artist : 'Sanzio Raffaello',
            name : 'Pedro Diego Alvarado',
            price : '$20,000',
            url : process.env.PUBLIC_URL + 'assets/img/art8_thumb.jpg'
        },
    ]
    console.log(art);
   
    return (
        <div className="artContent">
            <article style={{width:'1000px' , height :'700px',backgroundColor:'white', borderRadius:'10px' }}>
                <div className="" style={{float:'left', padding:'65px'}}>
                    <span style={{display:'block', fontSize:'35px'}}>Uncover the art market<br/> with the Price Database</span>
                    <span style={{display:'block', fontSize:'20px'}}>Search the most trusted<br/> database of auction results for<br/> fine art, design, and decorative<br/> artworks.</span>
                    <span style={{display:'block', fontSize:'20px'}}>name : {artName}</span>
                    <span style={{display:'block', fontSize:'20px'}}>artist : {artArtist}</span>
                    <span style={{display:'block', fontSize:'20px'}}>price : ${artPrice}</span>
                </div>

                <div style={backStyle}></div>
            </article>
        </div>
    );
}

export default ArtContent;