"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[209],{209:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),c=n(791),o=n(87),i=n(689),u=function(e){return fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("c38399f3218c9d1cc74e683392b12119","&query=").concat(e)).then((function(e){return e.ok?e.json():new Promise.reject(new Error("Something went wrong. Please, try again later"))}))},a=n(184),s=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],l=(0,c.useState)(null),h=(0,r.Z)(l,2),f=h[0],m=h[1],p=(0,i.TH)();(0,c.useEffect)((function(){""!==n&&u(n).then((function(e){return m(e.results)})).catch((function(e){return console.log(e)}))}),[n]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{children:(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(e.target.elements.input.value)},children:[(0,a.jsx)("input",{name:"input",type:"text",placeholder:"type movie name"}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})}),f&&(0,a.jsx)("ul",{children:f.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:p},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=209.3cc7abc7.chunk.js.map