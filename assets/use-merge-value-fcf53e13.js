import{r as u}from"./index-1cdf6ce0.js";import{a as r}from"./is-47f46886.js";import{u as l}from"./use-previous-5c929b6e.js";function v(o,t){const{defaultValue:a,value:e}=t||{},s=u.useRef(!0),i=l(t==null?void 0:t.value),[f,n]=u.useState(r(e)?r(a)?o:a:e);return u.useEffect(()=>{if(s.current){s.current=!1;return}e===void 0&&i!==e&&n(e)},[e]),[r(e)?f:e,n,f]}export{v as u};
//# sourceMappingURL=use-merge-value-fcf53e13.js.map