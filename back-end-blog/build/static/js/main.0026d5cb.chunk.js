(this["webpackJsonpfront-end-blog"]=this["webpackJsonpfront-end-blog"]||[]).push([[0],{27:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(25),r=a.n(l),o=a(1),s=a(2),m=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Mahmoud Blog"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(o.c,{className:"nav-link",exact:!0,to:"/"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",exact:!0,to:"/blog/"},"Blogs")))))},i=function(e){return c.a.createElement("div",null,c.a.createElement(m,null),e.children)},u=function(){return c.a.createElement("div",{className:"container m-2"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-4"},"Welcome to my Blog Post"),c.a.createElement("p",{className:"lead"},"In this blog post you'll see everthing realted for programming language and the update of it."),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("p",null,"We'll speake about everything about programming language start from hello world end with Full app .I hope you engoy on it."),c.a.createElement(o.b,{className:"btn btn-primary btn-lg",to:"/blog/",role:"button"},"Check our Blog")))},d=a(6),p=a.n(d),b=a(8),g=a(7),h=a(9),E=a.n(h),v=function(e){var t=Object(n.useState)({}),a=Object(g.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){var t=e.match.params.id;(function(){var e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat("http://127.0.0.1:8000","/api/blog/").concat(t));case 3:a=e.sent,r(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var s;return c.a.createElement("div",{className:"container ml-3"},c.a.createElement("h1",{className:"display-2"},l.title),c.a.createElement("img",{width:"200",height:"250",src:l.thumbnail,alt:"thumnail blog post"}),c.a.createElement("h2",{className:"text-muted mt-3"},"Category : ",(s=l.category)?s.charAt(0).toUpperCase()+s.slice(1):""),c.a.createElement("h4",null,l.month," ",l.day," "),c.a.createElement("div",{className:"mt-5 mb-5",dangerouslySetInnerHTML:{__html:l.content}}),c.a.createElement("hr",null),c.a.createElement("p",{className:"lead mb-5"},c.a.createElement(o.b,{to:"/blog",className:"font-weight-bold"},"Back to blogs")," "))},N=function(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),m=Object(g.a)(s,2),i=m[0],u=m[1],d=function(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""};Object(n.useEffect)((function(){var t=e.match.params.id;u(d(t));var a={headers:{"Content-Type":"application/json"}};(function(){var e=Object(b.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("".concat("http://127.0.0.1:8000","/api/blog/category/"),{category:t},a);case 3:n=e.sent,r(n.data),console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);return c.a.createElement("div",{className:"container mt-3"},c.a.createElement("h3",{className:"display-4"},i," Category"),c.a.createElement("div",{className:"nav-scroller py-1 mb-2"},c.a.createElement("nav",{className:"nav d-flex justify-content-between"},c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/world/"},"World"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/environment/"},"Environment"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/busnise/"},"Busnise"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/technology/"},"Technology"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/games/"},"Games"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/embroidery/"},"Embroidery"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/healthy/"},"Healthy"))),function(){var e=[],t=[];l.map((function(t){return e.push(c.a.createElement("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},c.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},c.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},d(t.category)),c.a.createElement("h3",{className:"mb-0"},t.title),c.a.createElement("div",{className:"mb-1 text-muted"},t.month," ",t.day),c.a.createElement("p",{className:"card-text mb-auto"}," ",t.exerpt," "),c.a.createElement(o.b,{to:"/blog/".concat(t.slug,"/"),className:"stretched-link"},"Continue reading")),c.a.createElement("div",{className:"col-auto d-none d-lg-block"},c.a.createElement("img",{width:"200",height:"250",src:t.thumbnail,alt:"thumnail blog post"}))))}));for(var a=0;a<e.length;a+=2)t.push(c.a.createElement("div",{key:a,className:"row mb-2"},c.a.createElement("div",{className:"col-md-6"},e[a]),c.a.createElement("div",{className:"col-md-6"},e[a+1]?e[a+1]:null)));return t}())},f=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),s=Object(g.a)(r,2),m=s[0],i=s[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat("http://127.0.0.1:8000","/api/blog/featured/1"));case 3:t=e.sent,i(t.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat("http://127.0.0.1:8000","/api/blog/"));case 3:t=e.sent,l(t.data),console.log(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return c.a.createElement("div",{className:"container m-3"},c.a.createElement("div",{className:"nav-scroller py-1 mb-2"},c.a.createElement("nav",{className:"nav d-flex justify-content-between"},c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/world/"},"World"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/environment/"},"Environment"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/busnise/"},"Busnise"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/technology/"},"Technology"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/games/"},"Games"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/embroidery/"},"Embroidery"),c.a.createElement(o.b,{className:"p-2 text-muted",to:"/category/healthy/"},"Healthy"))),c.a.createElement("div",{className:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},c.a.createElement("div",{className:"col-md-6 px-0"},c.a.createElement("h1",{className:"display-4 font-italic"},m.title),c.a.createElement("p",{className:"lead my-3"}," ",m.exerpt),c.a.createElement("p",{className:"lead mb-0"},c.a.createElement(o.b,{to:"/blog/".concat(m.slug),className:"text-white font-weight-bold"},"Continue reading...")))),function(){var e=[],t=[];a.map((function(t){return e.push(c.a.createElement("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},c.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},c.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},(a=t.category)?a.charAt(0).toUpperCase()+a.slice(1):""),c.a.createElement("h3",{className:"mb-0"},t.title),c.a.createElement("div",{className:"mb-1 text-muted"},t.month," ",t.day),c.a.createElement("p",{className:"card-text mb-auto"}," ",t.exerpt," "),c.a.createElement(o.b,{to:"/blog/".concat(t.slug,"/"),className:"stretched-link"},"Continue reading")),c.a.createElement("div",{className:"col-auto d-none d-lg-block"},c.a.createElement("img",{width:"200",height:"250",src:t.thumbnail,alt:"thumnail blog post"}))));var a}));for(var n=0;n<e.length;n+=2)t.push(c.a.createElement("div",{key:n,className:"row mb-2"},c.a.createElement("div",{className:"col-md-6"},e[n]),c.a.createElement("div",{className:"col-md-6"},e[n+1]?e[n+1]:null)));return t}())},y=function(){return c.a.createElement(o.a,null,c.a.createElement(i,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:u}),c.a.createElement(s.a,{path:"/blog/",exact:!0,component:f}),c.a.createElement(s.a,{path:"/category/:id",exact:!0,component:N}),c.a.createElement(s.a,{path:"/blog/:id",exact:!0,component:v}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0026d5cb.chunk.js.map