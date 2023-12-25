var ee=Object.defineProperty;var oe=(o,e,n)=>e in o?ee(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var s=(o,e,n)=>(oe(o,typeof e!="symbol"?e+"":e,n),n);import{a as g,j as T}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as p}from"./index-1cdf6ce0.js";import{c as a,g as h,i as m}from"./style-4011d251.js";import{a as ne,g as I}from"./color-palette-83e58897.js";import{m as A}from"./utils-8e923a8b.js";import{C as N}from"./copy-4ec48861.js";import{S as P}from"./success-circle-ab38d2dd.js";import{u as te}from"./web-cc1a3eed.js";import{C as ie,d as j}from"./config-provider-context-e3e0b003.js";import{T as le}from"./trigger-54fa4cde.js";class re{constructor(){s(this,"expandable",!0);s(this,"rows",2);s(this,"suffix",null);s(this,"expandLabel");s(this,"tooltip",!0);s(this,"onExpand")}}class q{constructor(){s(this,"config",new re)}expandable(e){return this.config.expandable=e,this}rows(e){return this.config.rows=e,this}suffix(e){return this.config.suffix=e,this}expandLabel(e){return this.config.expandLabel=e,this}tooltip(e){return this.config.tooltip=e,this}onExpand(e){return this.config.onExpand=e,this}create(){return this.config}}const F=["white","blackAlpha","gray","grayBlue","red","orange","yellow","green","blue","cyan","purple"],se=a`
  display: inline-block;
`;a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function ae(o){const e=F.includes(o)?ne(o):o;return a`
    color: ${e};
  `}function ce(o,e,n,t,r){let i=a``;if(o&&(i=a`
      ${i};
      font-weight: bold;
    `),e&&typeof e!="string"&&(i=a`
      ${i};
      background-color: ${h(`--${m}-yellow-07`)};
    `),typeof e=="string"){const l=F.includes(e)?h(`--${m}-${e}-07`):e;i=a`
      ${i};
      background-color: ${l};
    `}return i=a`
    ${i};
    text-decoration: ${n&&"underline"} ${t&&"line-through"};
  `,r&&(i=a`
      ${i};
      cursor: not-allowed;
      color: ${I("grayBlue","05")};
      user-select: none;
    `),i}function pe(){return a`
    cursor: pointer;
    margin: 0 4px;
    text-decoration: none;
    color: ${I("blue","03")};
  `}const de=a`
  cursor: pointer;
  font-size: 0.75em;
  margin-left: 4px;
  color: ${I("grayBlue","02")};
  display: inline-flex;
  align-items: center;
`;function _(o,e,n,t){var l;const r=o.getClientRects().length;return r>t?!1:r<t?!0:(((l=o.getClientRects()[t-1])==null?void 0:l.width)??0)<=n}function E(o,e,n,t,r,i,l=0,d=n.length){if(l>=d-1&&_(o,t,r,i))return;const u=Math.floor((l+d)/2);e.textContent=n.slice(0,u).trim(),_(o,t,r,i)?E(o,e,n,t,r,i,u,d):E(o,e,n,t,r,i,l,u)}function ue(o){let e=0;for(let n of o.getClientRects())e+=n.height;return e}function fe(o){let e=0;const n=o.getClientRects();for(let t=0;t<n.length;t++)e+=n[t].width;return e}function ge(o){return o.getBoundingClientRect().width}function ye(o,e,n,t){var x;const r=((x=o.getClientRects()[0])==null?void 0:x.height)??0,i=fe(e);let l=document.createElement(o.tagName);document.body.appendChild(l);const d=A(p.Children.toArray(t)),u=document.createTextNode(d),C=window.getComputedStyle(o),c=Array.prototype.slice.apply(C).map(y=>`${y}: ${C.getPropertyValue(y)};`).join("");l.setAttribute("style",c),l.insertBefore(u,l.firstChild);const b=r*n;if(ue(l)<=b)return l.remove(),{screenString:d,isClip:!1};const w=ge(l)-i;E(l,u,d,b,w,n);const S=l.textContent??"";return l.remove(),{fullText:d,screenString:S,isClip:!0}}class he{constructor(){s(this,"copyIcon",g(N,{color:h(`--${m}-grayBlue-01`)}));s(this,"copiedIcon",g(P,{color:h(`--${m}-green-03`)}));s(this,"copiedToolTip");s(this,"copyToolTip");s(this,"onCopy")}}class k{constructor(){s(this,"config",new he)}copyIcon(e){return this.config.copyIcon=e,this}copiedIcon(e){return this.config.copiedIcon=e,this}copiedTooltip(e){return this.config.copiedToolTip=e,this}copyTooltip(e){return this.config.copyToolTip=e,this}onCopy(e){return this.config.onCopy=e,this}create(){return this.config}}function me(o,e){var r;let n;typeof e=="boolean"&&e?n=new q().create():typeof e=="boolean"&&!e||e==null?n=new q().expandable(!1).tooltip(!1).create():n=e;const t=((r=o.locale)==null?void 0:r.typography)??j.typography;return n.expandLabel==null&&(n.expandLabel=t.expandLabel),n.rows==null&&(n.rows=2),n}function Ce(o,e){var r;let n;typeof e=="boolean"&&e?n=new k().create():typeof e=="boolean"&&!e||e==null?n=new k().copyIcon(null).copiedIcon(null).create():n=e;const t=((r=o.locale)==null?void 0:r.typography)??j.typography;return n.copyToolTip==null&&(n.copyToolTip=t.copyToolTip),n.copiedToolTip==null&&(n.copiedToolTip=t.copiedToolTip),n.copyIcon==null&&(n.copyIcon=g(N,{color:h(`--${m}-grayBlue-01`)})),n.copiedIcon==null&&(n.copiedIcon=g(P,{color:h(`--${m}-green-03`)})),n}function be(o){navigator.clipboard.writeText(o).then()}const z=o=>{const{colorScheme:e="gray",ellipsis:n,bold:t,disabled:r,mark:i,underline:l,deleted:d,copyable:u}=o;let C=p.useContext(ie),f=me(C,n),c=Ce(C,u);const[b,w]=p.useState(f.expandable),[S,x]=p.useState(!1),y=f.expandable&&b,[O,W]=p.useState(""),[$,H]=p.useState(!1),v=p.useRef(),B=p.useRef(),R=a`
    ${ae(e)};
    ${ce(t,i,l,d,r)};
  `,M=g("span",{ref:v,css:R,children:y?O:o.children}),L=g("span",{onClick:()=>{H(!0),be(A(p.Children.toArray(o.children))),c.onCopy!=null&&c.onCopy()},css:de,children:$?c.copiedIcon:c.copyIcon}),D=$?c.copiedToolTip:c.copyToolTip,G=y&&!S&&T(p.Fragment,{children:[T("span",{css:R,children:["...",f.suffix&&g("span",{children:f.suffix})]}),g("a",{css:pe(),onClick:()=>{f.onExpand!=null&&f.onExpand(),w(!1)},children:f.expandLabel})]}),J=u&&c.copyIcon&&D?g(le,{closeOnClick:!1,content:$?c.copiedToolTip:c.copyToolTip,children:L}):L,K=(b||u)&&T("span",{ref:B,css:se,children:[G,J]}),[Q,{width:U}]=te({polyfill:ResizeObserver}),X=T("span",{ref:Q,children:[M,K]});return p.useEffect(()=>{let V=!0;if(y){const{screenString:Y,isClip:Z}=ye(v.current,B.current,f.rows,o.children);V&&(W(Y),x(!Z))}return()=>{V=!1}},[U,y,f.rows,o.children]),X};try{z.displayName="Base",z.__docgenInfo={description:"",displayName:"Base",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},ellipsis:{defaultValue:null,description:"",name:"ellipsis",required:!1,type:{name:"boolean | Ellipsis"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"string | boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},deleted:{defaultValue:null,description:"",name:"deleted",required:!1,type:{name:"boolean"}},copyable:{defaultValue:null,description:"",name:"copyable",required:!1,type:{name:"boolean | Copyable"}}}}}catch{}export{z as B,k as C,q as E};
//# sourceMappingURL=base-b7a7de4e.js.map
