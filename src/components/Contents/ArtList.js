import React from 'react';
import '../../styles/mainContent.css';
function ArtList( {art} ) {
    const style = {
        backgroundImage: `url(${art.url})`
    }
    return (
        <div className="artList" style={style}>
            <div className="artList_span">
            <span style={{display:'inline-block', margin :'10px'}}>{art.artist}<br></br>{art.name}</span>
            </div>
        </div>
    );
}

export default ArtList;