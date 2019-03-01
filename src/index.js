// import React and Component class from it
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// json file with array of objects (news items)
import JSON from './db.json';

// COMPONENTS
import Header from './components/header';
import NewsList from  './components/news_list';


// class based comp
class App extends Component {
    // state object
    state = {
        // assigned json object to news;
        news:JSON,
        // filtered data
        filtered:[]
    }

    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
       // console.log(filtered)
    }

    // render method
    render(){
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news
        return (
            // passing props to compnents
            <div style={{margin: '2%'}}>
                
                 <Header keywords={this.getKeyword}/>
                 <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
                    <h3>
                        The news are:
                    </h3>
                 </NewsList>
            </div>
        )
    }  
}

// reactDom render parent comp to #root
ReactDOM.render(<App/>,document.querySelector('#root'));
