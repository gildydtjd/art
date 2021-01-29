import React from 'react';
import '../../styles/mainContent.css';
import ArtList from './ArtList';
function MainContent(props) {
    const art = [
        {
            key : 1,
            artist : 'Leonardo di ser Piero da Vinci',
            name : 'Mona Lisa',
            url : process.env.PUBLIC_URL + 'assets/img/daVinci.jpg'
        },
        {
            key : 2,
            artist : 'Jean-François Millet',
            name : 'The Gleaners',
            url : process.env.PUBLIC_URL + 'assets/img/mile_1.jpg'
                },
        {
            key : 3,
            artist : 'Vincent Van Gogh',
            name : 'Sunflowers',
            url : process.env.PUBLIC_URL + 'assets/img/bean_1.jpg'
                },
        {
            key : 4,
            artist : 'Pablo Ruiz Picasso',
            name : 'The Weeping Woman',
            url : process.env.PUBLIC_URL + 'assets/img/picasso_1.jpg'
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
                <div className="art__list">
                    {aarts}
                </div>
        </div>
    );
}

export default MainContent;

