import React from 'react';
import '../css/styles.css'

// shorhand prop syntax using destructaring
const NewsItem = ({item}) =>{
    // instead of (props) argument we just specified the exact prop ({})
    // render by return ()
    return(
        <div className='.news_item'>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div> 
    )
}

export default NewsItem;

