"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[425],{9425:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r,i,c=t(9439),o=t(2791),s=t(1087),a=t(7689),u=function(){return fetch("".concat("https://api.themoviedb.org/3/trending/","movie/day?api_key=").concat("c38399f3218c9d1cc74e683392b12119")).then((function(n){return n.ok?n.json():new Promise.reject(new Error("Something went wrong, try again later"))}))},l=t(168),h=t(6444),d=h.ZP.ul(r||(r=(0,l.Z)(["\n  font-size: 24px;\n  margin: 0;\n  padding: 0;\n  list-style-position: inside;\n"]))),f=h.ZP.h1(i||(i=(0,l.Z)(["\nfont-size: 32px;\n"]))),m=t(184),p=function(){var n=(0,o.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,o.useState)(null),l=(0,c.Z)(i,2),h=l[0],p=l[1],g=(0,a.TH)();(0,o.useEffect)((function(){u().then((function(n){return r(n.results)})).catch((function(n){return p(n)}))}),[]);var j=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{children:"Trending today"}),(0,m.jsx)(d,{children:t&&t.map((function(n){var e=n.id,t=n.title;return(0,m.jsx)("li",{children:(0,m.jsx)(s.rU,{to:"/movies/".concat(e),state:{from:g},children:t})},e)}))})]});return(0,m.jsx)("div",{children:null===h?j:(0,m.jsx)("h2",{children:h.message})})}}}]);
//# sourceMappingURL=425.1c776d6f.chunk.js.map