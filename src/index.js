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
        // assigned json object (array) to news;
        news:JSON,
        // filtered data empty property (array)
        filtered:[]
    }

    // text typing interceptor method
    getKeyword = (event) => {
        //console.log(event.target.value)

        // get input value
        let keyword = event.target.value;
        
        // using filter array method for news array
        // if news has keyword in title (i.e. has indes > -1) return it
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
        // now new array of filtered news produced (in filtered)

        // setState to change state property (assign filterted var to filtered prop)
        this.setState({
            filtered
            // instead of filtered: filtered (using destructuring)
        })
       // console.log(filtered)
    }

    // render method
    render(){
        // shorhand variables for raw news array and filtered array
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news
        return (

            <div style={{margin: '2%'}}>
                  {/*
                render header
                passing keyword func as prop 
        let newsFiltered = this.state.filtered;
                then render newslist (logical expression if newsFiltered empty or not)  
                */}
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

// reactDom renders our parent class component to #root
ReactDOM.render(<App/>,document.querySelector('#root'));
