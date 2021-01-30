import React from 'react';

function Hi(props) {
    return (
            <div className="content_wrapper">
                <div className="grid posts" style={{position: 'relative', display :'inline-flex'}}>
                <div className="col" style={{position: 'absolute', left: '0px', top: '0px'}}></div>
                <article className="listing">
                <a href="/"><img alt="" src="./assets/img/mile_1.jpg" style={{width:'450px', height:'450px'}}/></a>
                <div className="details">
                <h2><a href="/">Easy, Tiger: Cards for Awesome People</a></h2>
                <div className="post_meta">
                  <div className="author">By: <a href="/" title="Posts by Courtney" className="author url fn" rel="author">Courtney</a></div>
                    <div className="date"><time datetime="2020-03-04T09:00:31-08:00">Mar 4, 2020</time></div>
                    <div className="category">Filed In:
                    <a href="/">Design</a>, <a href="/">Paper Goods</a>
                    </div>
                    </div>
              </div>
              </article>
            </div>
          </div>
    );
}

export default Hi;