(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,i){e.exports=i(16)},16:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i(4),r=i(8),u=i(5),o=i(9),l=i(0),s=i.n(l),m=i(6),c=i.n(m),d=i(7),p=(i(2),function(e){return s.a.createElement("header",null,s.a.createElement("div",{className:"logo"},"Logo"),s.a.createElement("input",{style:{color:"orange",textAlign:"center"},placeholder:" filter news by title ",type:"text",onChange:e.keywords}))}),v=function(e){var t=e.item;return s.a.createElement("div",{className:".news_item"},s.a.createElement("h3",null,t.title),s.a.createElement("div",null,t.feed))},f=function(e){var t=e.news.map(function(e){return s.a.createElement(v,{key:e.id,item:e})});return s.a.createElement("div",null,e.children,t)},q=function(e){function t(){var e,i;Object(a.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(i=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={news:d,filtered:[]},i.getKeyword=function(e){var t=e.target.value,a=i.state.news.filter(function(e){return e.title.indexOf(t)>-1});i.setState({filtered:a})},i}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.state.filtered,t=this.state.news;return s.a.createElement("div",{style:{margin:"2%"}},s.a.createElement(p,{keywords:this.getKeyword}),s.a.createElement(f,{news:0===e.length?t:e},s.a.createElement("h3",null,"The news are:")))}}]),t}(l.Component);c.a.render(s.a.createElement(q,null),document.querySelector("#root"))},2:function(e,t,i){},7:function(e){e.exports=[{id:1,title:"New reactjs upgrade available",feed:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},{id:2,title:"The importance of REACT in the development",feed:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},{id:3,title:"REACT developers going crazy over new version! Facebook office is under attack! Troops sent to Cali.",feed:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{id:4,title:"Say what again. I dare you,...motherfxxxx. You don't like js? Arrrrgh! Get over here!",feed:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{id:5,title:"Breaking! Pavel loves es6 - shocking confessinon! And React too. Stay tuned!",feed:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.b7e27c8b.chunk.js.map