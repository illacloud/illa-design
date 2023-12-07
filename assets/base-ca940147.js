var Z=Object.defineProperty;var ee=(o,e,n)=>e in o?Z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var s=(o,e,n)=>(ee(o,typeof e!="symbol"?e+"":e,n),n);import{a as y,j as T}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as p}from"./index-1cdf6ce0.js";import{c,g,i as h}from"./style-4011d251.js";import{a as oe}from"./color-palette-2f9095e4.js";import{m as z}from"./utils-8e923a8b.js";import{C as A}from"./copy-4ec48861.js";import{S as N}from"./success-circle-ab38d2dd.js";import{u as ne}from"./web-cc1a3eed.js";import{C as te,d as P}from"./config-provider-context-e3e0b003.js";import{T as ie}from"./trigger-1cc56147.js";class le{constructor(){s(this,"expandable",!0);s(this,"rows",2);s(this,"suffix",null);s(this,"expandLabel");s(this,"tooltip",!0);s(this,"onExpand")}}class V{constructor(){s(this,"config",new le)}expandable(e){return this.config.expandable=e,this}rows(e){return this.config.rows=e,this}suffix(e){return this.config.suffix=e,this}expandLabel(e){return this.config.expandLabel=e,this}tooltip(e){return this.config.tooltip=e,this}onExpand(e){return this.config.onExpand=e,this}create(){return this.config}}const j=["white","blackAlpha","gray","grayBlue","red","orange","yellow","green","blue","cyan","purple"],re=c`
  display: inline-block;
`;c`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function se(o){const e=j.includes(o)?oe(o):o;return c`
    color: ${e};
  `}function ce(o,e,n,t,r){let i=c``;if(o&&(i=c`
      ${i};
      font-weight: bold;
    `),e&&typeof e!="string"&&(i=c`
      ${i};
      background-color: ${g(`--${h}-yellow-07`)};
    `),typeof e=="string"){const l=j.includes(e)?g(`--${h}-${e}-07`):e;i=c`
      ${i};
      background-color: ${l};
    `}return i=c`
    ${i};
    text-decoration: ${n&&"underline"} ${t&&"line-through"};
  `,r&&(i=c`
      ${i};
      cursor: not-allowed;
      color: ${g(`--${h}-grayBlue-05`)};
      user-select: none;
    `),i}function ae(){return c`
    cursor: pointer;
    margin: 0 4px;
    text-decoration: none;
    color: ${g(`--${h}-blue-03`)};
  `}const pe=c`
  cursor: pointer;
  font-size: 0.75em;
  margin-left: 4px;
  color: ${g(`--${h}-grayBlue-02`)};
  display: inline-flex;
  align-items: center;
`;function q(o,e,n,t){var l;const r=o.getClientRects().length;return r>t?!1:r<t?!0:(((l=o.getClientRects()[t-1])==null?void 0:l.width)??0)<=n}function E(o,e,n,t,r,i,l=0,d=n.length){if(l>=d-1&&q(o,t,r,i))return;const u=Math.floor((l+d)/2);e.textContent=n.slice(0,u).trim(),q(o,t,r,i)?E(o,e,n,t,r,i,u,d):E(o,e,n,t,r,i,l,u)}function de(o){let e=0;for(let n of o.getClientRects())e+=n.height;return e}function ue(o){let e=0;const n=o.getClientRects();for(let t=0;t<n.length;t++)e+=n[t].width;return e}function fe(o){return o.getBoundingClientRect().width}function ye(o,e,n,t){var x;const r=((x=o.getClientRects()[0])==null?void 0:x.height)??0,i=ue(e);let l=document.createElement(o.tagName);document.body.appendChild(l);const d=z(p.Children.toArray(t)),u=document.createTextNode(d),C=window.getComputedStyle(o),a=Array.prototype.slice.apply(C).map(m=>`${m}: ${C.getPropertyValue(m)};`).join("");l.setAttribute("style",a),l.insertBefore(u,l.firstChild);const b=r*n;if(de(l)<=b)return l.remove(),{screenString:d,isClip:!1};const w=fe(l)-i;E(l,u,d,b,w,n);const S=l.textContent??"";return l.remove(),{fullText:d,screenString:S,isClip:!0}}class ge{constructor(){s(this,"copyIcon",y(A,{color:g(`--${h}-grayBlue-01`)}));s(this,"copiedIcon",y(N,{color:g(`--${h}-green-03`)}));s(this,"copiedToolTip");s(this,"copyToolTip");s(this,"onCopy")}}class _{constructor(){s(this,"config",new ge)}copyIcon(e){return this.config.copyIcon=e,this}copiedIcon(e){return this.config.copiedIcon=e,this}copiedTooltip(e){return this.config.copiedToolTip=e,this}copyTooltip(e){return this.config.copyToolTip=e,this}onCopy(e){return this.config.onCopy=e,this}create(){return this.config}}function he(o,e){var r;let n;typeof e=="boolean"&&e?n=new V().create():typeof e=="boolean"&&!e||e==null?n=new V().expandable(!1).tooltip(!1).create():n=e;const t=((r=o.locale)==null?void 0:r.typography)??P.typography;return n.expandLabel==null&&(n.expandLabel=t.expandLabel),n.rows==null&&(n.rows=2),n}function me(o,e){var r;let n;typeof e=="boolean"&&e?n=new _().create():typeof e=="boolean"&&!e||e==null?n=new _().copyIcon(null).copiedIcon(null).create():n=e;const t=((r=o.locale)==null?void 0:r.typography)??P.typography;return n.copyToolTip==null&&(n.copyToolTip=t.copyToolTip),n.copiedToolTip==null&&(n.copiedToolTip=t.copiedToolTip),n.copyIcon==null&&(n.copyIcon=y(A,{color:g(`--${h}-grayBlue-01`)})),n.copiedIcon==null&&(n.copiedIcon=y(N,{color:g(`--${h}-green-03`)})),n}function Ce(o){navigator.clipboard.writeText(o).then()}const k=o=>{const{colorScheme:e="gray",ellipsis:n,bold:t,disabled:r,mark:i,underline:l,deleted:d,copyable:u}=o;let C=p.useContext(te),f=he(C,n),a=me(C,u);const[b,w]=p.useState(f.expandable),[S,x]=p.useState(!1),m=f.expandable&&b,[F,O]=p.useState(""),[$,W]=p.useState(!1),I=p.useRef(),v=p.useRef(),B=c`
    ${se(e)};
    ${ce(t,i,l,d,r)};
  `,H=y("span",{ref:I,css:B,children:m?F:o.children}),R=y("span",{onClick:()=>{W(!0),Ce(z(p.Children.toArray(o.children))),a.onCopy!=null&&a.onCopy()},css:pe,children:$?a.copiedIcon:a.copyIcon}),M=$?a.copiedToolTip:a.copyToolTip,D=m&&!S&&T(p.Fragment,{children:[T("span",{css:B,children:["...",f.suffix&&y("span",{children:f.suffix})]}),y("a",{css:ae(),onClick:()=>{f.onExpand!=null&&f.onExpand(),w(!1)},children:f.expandLabel})]}),G=u&&a.copyIcon&&M?y(ie,{closeOnClick:!1,content:$?a.copiedToolTip:a.copyToolTip,children:R}):R,J=(b||u)&&T("span",{ref:v,css:re,children:[D,G]}),[K,{width:Q}]=ne({polyfill:ResizeObserver}),U=T("span",{ref:K,children:[H,J]});return p.useEffect(()=>{let L=!0;if(m){const{screenString:X,isClip:Y}=ye(I.current,v.current,f.rows,o.children);L&&(O(X),x(!Y))}return()=>{L=!1}},[Q,m,f.rows,o.children]),U};try{k.displayName="Base",k.__docgenInfo={description:"",displayName:"Base",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},ellipsis:{defaultValue:null,description:"",name:"ellipsis",required:!1,type:{name:"boolean | Ellipsis"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"string | boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},deleted:{defaultValue:null,description:"",name:"deleted",required:!1,type:{name:"boolean"}},copyable:{defaultValue:null,description:"",name:"copyable",required:!1,type:{name:"boolean | Copyable"}}}}}catch{}export{k as B,_ as C,V as E};
//# sourceMappingURL=base-ca940147.js.map
