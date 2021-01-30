import React from 'react';
import '../../styles/mainContent.css';
function ArtList( {art} ) {
    const style = {
        backgroundImage: `url(${art.url})`
    }
    return (
        <div className="artList_box">
        <div className="artList" style={style}>
            </div>
            </div>
    );
}

export default ArtList;