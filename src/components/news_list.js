import React from 'react';
import NewsItem from './news_list_item';

// func comp with props obj
const NewsList = (props) =>{

    // create html markup based on news json object we got from index.js
    const items = props.news.map((item)=>{
        return(
            // react prefer to have keys for array elements so we added key prop - object.id 
            <NewsItem key={item.id} item={item}/>
            // so we got array with multiple <newsItem> components 
        )
    });

    // now render them
    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

// what we export by default (our functional component)
export default NewsList;