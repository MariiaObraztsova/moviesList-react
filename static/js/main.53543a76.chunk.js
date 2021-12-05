(this["webpackJsonpmovieslist-react"]=this["webpackJsonpmovieslist-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(6),c=a.n(n),r=a(2),i=a(1),o=a.n(i),s=(a(11),a(12),a(13),a(0)),l=function(e){var t=e.selectedMovieId,a=e.preparedMovies,n=e.seeMovieDetails,c=e.closeMovieDetails;return Object(s.jsxs)("div",{className:"MoviesList",children:[Object(s.jsx)("h2",{children:"Movies List"}),Object(s.jsx)("ul",{className:"MoviesList__list",children:a.map((function(e){return Object(s.jsxs)("li",{className:"MoviesList__item",children:["".concat(e.title,", ").concat(e.year),e.id===t?Object(s.jsx)("button",{type:"button",onClick:c,children:"Close"}):Object(s.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:"View details"})]},e.id)}))})]})},u=(a(15),[{id:1,title:"Casablanca",year:1942,format:"DVD",actors:["Humphrey Bogartt","Ingrid Bergman","Claude Rains","Peter Lorre"]},{id:2,title:"Blazing Saddles",year:1974,format:"VHS",actors:["Mel Brooks","Clevon Little","Harvey Korman","Gene Wilder","Slim Pickens","Madeline Kahn"]}]),j=o.a.memo((function(e){var t=e.movieId,a=Object(i.useState)(),n=Object(r.a)(a,2),c=n[0],o=n[1];return Object(i.useEffect)((function(){var e=u.find((function(e){return e.id===t}));o(e)}),[t]),Object(s.jsx)("div",{className:"MovieDetail",children:c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"".concat(c.title,", ").concat(null===c||void 0===c?void 0:c.year)}),Object(s.jsx)("p",{children:"Format: ".concat(c.format)}),Object(s.jsxs)("ul",{className:"MovieDetail__actors",children:["Actors:",c.actors.map((function(e){return Object(s.jsx)("li",{className:"MovieDetail__actor",children:e},e)}))]})]}):Object(s.jsx)("h2",{children:"No movie found"})})})),b=a(3),d=a.n(b),h=a(4),p="http://localhost:8000/api/v1/movies",m=function(){var e=Object(h.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p,{method:"POST",headers:{"Content-type":"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg"},body:JSON.stringify(t)});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(2021),o=Object(r.a)(c,2),l=o[0],u=o[1],j=Object(i.useState)(""),b=Object(r.a)(j,2),p=b[0],O=b[1],v=Object(i.useState)([]),f=Object(r.a)(v,2),x=f[0],y=f[1],C=function(e){var t=e.target,a=t.name,c=t.value;switch(a){case"title":n(c);break;case"year":u(Number(c));break;case"format":O(c);break;case"actors":var r=c.split(",");r.forEach((function(e){return r.push(e)}))}},M=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m({title:a,year:l,format:p,actors:x});case 3:e.sent,n(""),u(2021),O(""),y([]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{onSubmit:M,children:[Object(s.jsx)("label",{htmlFor:"title",children:Object(s.jsx)("input",{type:"text",id:"title",placeholder:"Enter title",value:a,name:"title",onChange:C})}),Object(s.jsx)("label",{htmlFor:"year",children:Object(s.jsx)("input",{type:"text",id:"year",placeholder:"Enter year",value:l,name:"year",onChange:C})}),Object(s.jsx)("label",{htmlFor:"format",children:Object(s.jsxs)("select",{id:"format",value:p,name:"format",onChange:C,children:[Object(s.jsx)("option",{value:"",children:"Choose a format"}),Object(s.jsx)("option",{value:"VHS",children:"VHS"}),Object(s.jsx)("option",{value:"DVD",children:"DVD"}),Object(s.jsx)("option",{value:"Blu-Ray",children:"Blu-Ray"})]})}),Object(s.jsx)("label",{htmlFor:"actors",children:Object(s.jsx)("input",{type:"text",id:"actors",placeholder:"Enter actors divided by , ",value:x,name:"actors",onChange:C})}),Object(s.jsx)("button",{type:"submit",children:"Add a movie"})]})},v=[{id:1,title:"Casablanca",year:1942,format:"DVD",actors:["Humphrey Bogartt","Ingrid Bergman","Claude Rains","Peter Lorre"]},{id:2,title:"Blazing Saddles",year:1974,format:"VHS",actors:["Mel Brooks","Clevon Little","Harvey Korman","Gene Wilder","Slim Pickens","Madeline Kahn"]}],f=function(){var e=Object(i.useState)(),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(""),o=Object(r.a)(c,2),u=o[0],b=o[1],d=Object(i.useState)(""),h=Object(r.a)(d,2),p=h[0],m=h[1],f=Object(i.useState)(!1),x=Object(r.a)(f,2),y=x[0],C=x[1],M=Object(i.useState)(0),S=Object(r.a)(M,2),w=S[0],I=S[1];Object(i.useEffect)((function(){var e=v.filter((function(e){return u?e.title.toLowerCase().includes(u):e})).filter((function(e){return p?e.actors.some((function(e){return e.toLowerCase().includes(p)})):e})).sort((function(e,t){return y?e.title.localeCompare(t.title):0}));n(e)}),[u,p,y]);var N=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"titleToSearch":b(n.toLocaleLowerCase());break;case"actorToSearch":m(n.toLocaleLowerCase())}};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("header",{className:"App__header",children:[Object(s.jsx)("input",{type:"text",placeholder:"Enter title",value:u,name:"titleToSearch",onChange:N}),Object(s.jsx)("input",{type:"text",placeholder:"Enter actor",value:p,name:"actorToSearch",onChange:N}),Object(s.jsx)("button",{type:"button",onClick:function(){return C(!0)},children:"Sort alphabetically"}),Object(s.jsx)("button",{type:"button",onClick:function(){b(""),m(""),C(!1)},children:"Reset"}),Object(s.jsx)(O,{})]}),Object(s.jsxs)("main",{className:"App__main",children:[Object(s.jsx)("div",{className:"App__sidebar",children:a&&Object(s.jsx)(l,{selectedMovieId:w,preparedMovies:a,seeMovieDetails:function(e){I(e)},closeMovieDetails:function(){I(0)}})}),Object(s.jsx)("div",{className:"App__content",children:w>0&&Object(s.jsx)(j,{movieId:w})})]})]})};c.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.53543a76.chunk.js.map