import{r as p}from"./index-1cdf6ce0.js";import{b as s}from"./is-47f46886.js";function i(o,r,n=" "){const e=String(o);if(!r)return e;const t=e.length<r?`${n}${e}`:e;return t.length<r?i(t,r,n):t}function f(o){const r=[""];return p.Children.forEach(o,n=>{const e=r.length-1,t=r[e];s(n)&&s(t)?r[e]=`${t}${n}`:n&&n.props&&n.props.children&&r.push(f(n.props.children))}),r.join("")}export{f as m,i as p};
//# sourceMappingURL=utils-8e923a8b.js.map