(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(16)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=n(2),s=n.n(l),u=n(5),i=n(1),m=function(){return fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.ok?e.json():[]}).catch(function(){return"Error"})},d=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.ok?e.json():[]}).catch(function(){return"Error"})},f=function(){return fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.ok?e.json():[]}).catch(function(){return"Error"})},p=function(e){var t=e.comment;return r.a.createElement("article",null,r.a.createElement("h2",{className:"comments__name"},t.name),r.a.createElement("p",null,t.body),r.a.createElement("p",{className:"comments__text"},"Comments by\xa0",r.a.createElement("a",{href:t.email,className:"link"},t.email)))};p.defaultProps={comment:{postId:null,id:null,name:"",email:"",body:""}};var E=p,h=function(e){var t=e.list;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(E,{comment:e,key:e.name})}))},v=(n(12),function(e){var t=e.info;return r.a.createElement("div",null,r.a.createElement("h4",null,t.name),r.a.createElement("address",null,t.address.city,t.address.street,t.address.suite,r.a.createElement("a",{href:t.email,className:"link link--user"},t.email)))});v.defaultProps={info:{}};var b=v,j=(n(13),n(14),function(e){var t=e.post;return r.a.createElement("section",{className:"post"},r.a.createElement("h1",{className:"post__header"},t.title),r.a.createElement("article",null,t.body),r.a.createElement("div",null,r.a.createElement(b,{info:t.user})),r.a.createElement("h3",{className:"post__comments comments"},"Comments"),r.a.createElement("div",null,r.a.createElement(h,{list:t.comments})))});j.defaultProps={post:{}};var y=j,w=function(e){var t=e.list;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(y,{list:t,post:e,key:e.id})}))},k=(n(15),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),p=l[0],E=l[1],h=Object(a.useState)(!1),v=Object(i.a)(h,2),b=v[0],j=v[1],y=Object(a.useState)(""),k=Object(i.a)(y,2),N=k[0],O=k[1],C=N?n.filter(function(e){return e.title.toLowerCase().includes(N.toLocaleLowerCase())||e.body.toLowerCase().includes(N.toLocaleLowerCase())}):n;return p?r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("input",{className:"ui input",type:"text",placeholder:"Search...",value:N,onChange:function(e){O(e.target.value)}})),r.a.createElement(w,{list:C})):r.a.createElement("button",{onClick:function(){var e,t,n,a,r;return s.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return j(!0),o.next=3,s.a.awrap(Promise.all([m(),d(),f()]));case 3:e=o.sent,t=Object(i.a)(e,3),n=t[0],a=t[1],r=t[2],c(n.map(function(e){return Object(u.a)({},e,{user:a.find(function(t){return t.id===e.userId}),comments:r.filter(function(t){return t.postId===e.id})})})),E(!0);case 10:case"end":return o.stop()}})},type:"button",className:"glow-on-hover"},b?"Loading...":"Click me")});o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.f1fd224f.chunk.js.map