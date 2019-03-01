import React from 'react';
import NewsItem from './news_list_item';

// func compo with props obj
const NewsList = (props) =>{

    // create html markup based on news json object we got from index.js
    const items = props.news.map((item)=>{
        return(
            // react prefer to have keys for array elements so we added key prop - object.id 
            <NewsItem key={item.id} item={item}/>
        )
    });
    // now items is array with html templates for news

    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;