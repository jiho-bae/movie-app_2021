(this["webpackJsonpmovie-app_2021"]=this["webpackJsonpmovie-app_2021"]||[]).push([[0],{36:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(28),i=a.n(c),r=a(8),o=a(2),l=(a(36),a(1));var m=function(e){return console.log(e),Object(l.jsx)("div",{className:"about__container",children:Object(l.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that i granted, all else follows."'})})},j=a(17),d=a.n(j),u=a(29),b=a(11),h=a(12),v=a(14),p=a(13),O=a(30),x=a.n(O);a(57);var _=function(e){var t=e.id,a=e.year,s=e.title,n=e.summary,c=e.poster,i=e.genres;return Object(l.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:s,summary:n,poster:c,genres:i}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:c,alt:s,title:s}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:s}),Object(l.jsx)("h5",{className:"movie__year",children:a}),Object(l.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})},f=(a(66),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(b.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:a.map((function(e){return Object(l.jsx)(_,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(n.a.Component)),g=(a(67),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(t),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return e?Object(l.jsxs)("div",{className:"detail",children:[Object(l.jsx)("img",{src:e.poster,alt:e.title,title:e.title}),Object(l.jsxs)("div",{className:"detail__data",children:[Object(l.jsx)("span",{className:"detail__title",children:e.title}),Object(l.jsx)("span",{className:"detail__year",children:e.year}),Object(l.jsx)("ul",{className:"detail__genres",children:e.genres.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"detail__summary",children:e.summary})]})]}):null}}]),a}(n.a.Component));a(68);var y=function(){return Object(l.jsxs)("div",{className:"Navigation",children:[Object(l.jsx)(r.b,{className:"HomeLink",to:"/",children:"Home"}),Object(l.jsx)(r.b,{className:"AboutLink",to:"/about",children:"About"})]})};var N=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(l.jsx)(o.a,{path:"/about",component:m}),Object(l.jsx)(o.a,{path:"/movie/:id",component:g})]})};i.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.fe4d77f2.chunk.js.map