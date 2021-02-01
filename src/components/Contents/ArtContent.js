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
        backgroundImage : `url(${process.env.PUBLIC_URL}/assets/img/art${artNumber}.jpg)`,
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