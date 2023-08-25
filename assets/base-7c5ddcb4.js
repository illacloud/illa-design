var Z=Object.defineProperty;var ee=(o,e,n)=>e in o?Z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var s=(o,e,n)=>(ee(o,typeof e!="symbol"?e+"":e,n),n);import{j as h,a as T}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as p}from"./index-c4905b50.js";import{c,g as y,i as g}from"./style-eba6b849.js";import{m as z}from"./utils-6a76eaa1.js";import{C as A}from"./copy-8d2e29c5.js";import{S as N}from"./success-circle-02419641.js";import{u as oe}from"./web-3bc7a696.js";import{C as ne,d as P}from"./config-provider-context-8630f055.js";import{T as te}from"./trigger-b1fdcaa0.js";class ie{constructor(){s(this,"expandable",!0);s(this,"rows",2);s(this,"suffix",null);s(this,"expandLabel");s(this,"tooltip",!0);s(this,"onExpand")}}class V{constructor(){s(this,"config",new ie)}expandable(e){return this.config.expandable=e,this}rows(e){return this.config.rows=e,this}suffix(e){return this.config.suffix=e,this}expandLabel(e){return this.config.expandLabel=e,this}tooltip(e){return this.config.tooltip=e,this}onExpand(e){return this.config.onExpand=e,this}create(){return this.config}}const j=["white","blackAlpha","gray","grayBlue","red","orange","yellow","green","blue","cyan","purple"],le=c`
  display: inline-block;
`;c`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function re(o){const e=j.includes(o)?y(`--${g}-${o}-02`):o;return c`
    color: ${e};
  `}function se(o,e,n,t,r){let i=c``;if(o&&(i=c`
      ${i};
      font-weight: bold;
    `),e&&typeof e!="string"&&(i=c`
      ${i};
      background-color: ${y(`--${g}-yellow-06`)};
    `),typeof e=="string"){const l=j.includes(e)?y(`--${g}-${e}-06`):e;i=c`
      ${i};
      background-color: ${l};
    `}return i=c`
    ${i};
    text-decoration: ${n&&"underline"} ${t&&"line-through"};
  `,r&&(i=c`
      ${i};
      cursor: not-allowed;
      color: ${y(`--${g}-grayBlue-05`)};
      user-select: none;
    `),i}function ce(){return c`
    cursor: pointer;
    margin: 0 4px;
    text-decoration: none;
    color: ${y(`--${g}-blue-03`)};
  `}const ae=c`
  cursor: pointer;
  font-size: 0.75em;
  margin-left: 4px;
  color: ${y(`--${g}-grayBlue-02`)};
  display: inline-flex;
  align-items: center;
`;function q(o,e,n,t){var l;const r=o.getClientRects().length;return r>t?!1:r<t?!0:(((l=o.getClientRects()[t-1])==null?void 0:l.width)??0)<=n}function E(o,e,n,t,r,i,l=0,d=n.length){if(l>=d-1&&q(o,t,r,i))return;const u=Math.floor((l+d)/2);e.textContent=n.slice(0,u).trim(),q(o,t,r,i)?E(o,e,n,t,r,i,u,d):E(o,e,n,t,r,i,l,u)}function pe(o){let e=0;for(let n of o.getClientRects())e+=n.height;return e}function de(o){let e=0;const n=o.getClientRects();for(let t=0;t<n.length;t++)e+=n[t].width;return e}function ue(o){return o.getBoundingClientRect().width}function fe(o,e,n,t){var x;const r=((x=o.getClientRects()[0])==null?void 0:x.height)??0,i=de(e);let l=document.createElement(o.tagName);document.body.appendChild(l);const d=z(p.Children.toArray(t)),u=document.createTextNode(d),m=window.getComputedStyle(o),a=Array.prototype.slice.apply(m).map(b=>`${b}: ${m.getPropertyValue(b)};`).join("");l.setAttribute("style",a),l.insertBefore(u,l.firstChild);const C=r*n;if(pe(l)<=C)return l.remove(),{screenString:d,isClip:!1};const w=ue(l)-i;E(l,u,d,C,w,n);const $=l.textContent??"";return l.remove(),{fullText:d,screenString:$,isClip:!0}}class ye{constructor(){s(this,"copyIcon",h(A,{color:y(`--${g}-grayBlue-01`)}));s(this,"copiedIcon",h(N,{color:y(`--${g}-green-03`)}));s(this,"copiedToolTip");s(this,"copyToolTip");s(this,"onCopy")}}class _{constructor(){s(this,"config",new ye)}copyIcon(e){return this.config.copyIcon=e,this}copiedIcon(e){return this.config.copiedIcon=e,this}copiedTooltip(e){return this.config.copiedToolTip=e,this}copyTooltip(e){return this.config.copyToolTip=e,this}onCopy(e){return this.config.onCopy=e,this}create(){return this.config}}function ge(o,e){var r;let n;typeof e=="boolean"&&e?n=new V().create():typeof e=="boolean"&&!e||e==null?n=new V().expandable(!1).tooltip(!1).create():n=e;const t=((r=o.locale)==null?void 0:r.typography)??P.typography;return n.expandLabel==null&&(n.expandLabel=t.expandLabel),n.rows==null&&(n.rows=2),n}function he(o,e){var r;let n;typeof e=="boolean"&&e?n=new _().create():typeof e=="boolean"&&!e||e==null?n=new _().copyIcon(null).copiedIcon(null).create():n=e;const t=((r=o.locale)==null?void 0:r.typography)??P.typography;return n.copyToolTip==null&&(n.copyToolTip=t.copyToolTip),n.copiedToolTip==null&&(n.copiedToolTip=t.copiedToolTip),n.copyIcon==null&&(n.copyIcon=h(A,{color:y(`--${g}-grayBlue-01`)})),n.copiedIcon==null&&(n.copiedIcon=h(N,{color:y(`--${g}-green-03`)})),n}function be(o){navigator.clipboard.writeText(o).then()}const k=o=>{const{colorScheme:e="gray",ellipsis:n,bold:t,disabled:r,mark:i,underline:l,deleted:d,copyable:u}=o;let m=p.useContext(ne),f=ge(m,n),a=he(m,u);const[C,w]=p.useState(f.expandable),[$,x]=p.useState(!1),b=f.expandable&&C,[F,O]=p.useState(""),[S,W]=p.useState(!1),I=p.useRef(),v=p.useRef(),B=c`
    ${re(e)};
    ${se(t,i,l,d,r)};
  `,H=h("span",{ref:I,css:B,children:b?F:o.children}),R=h("span",{onClick:()=>{W(!0),be(z(p.Children.toArray(o.children))),a.onCopy!=null&&a.onCopy()},css:ae,children:S?a.copiedIcon:a.copyIcon}),M=S?a.copiedToolTip:a.copyToolTip,D=b&&!$&&T(p.Fragment,{children:[T("span",{css:B,children:["...",f.suffix&&h("span",{children:f.suffix})]}),h("a",{css:ce(),onClick:()=>{f.onExpand!=null&&f.onExpand(),w(!1)},children:f.expandLabel})]}),G=u&&a.copyIcon&&M?h(te,{closeOnClick:!1,content:S?a.copiedToolTip:a.copyToolTip,children:R}):R,J=(C||u)&&T("span",{ref:v,css:le,children:[D,G]}),[K,{width:Q}]=oe({polyfill:ResizeObserver}),U=T("span",{ref:K,children:[H,J]});return p.useEffect(()=>{let L=!0;if(b){const{screenString:X,isClip:Y}=fe(I.current,v.current,f.rows,o.children);L&&(O(X),x(!Y))}return()=>{L=!1}},[Q,b,f.rows,o.children]),U};try{k.displayName="Base",k.__docgenInfo={description:"",displayName:"Base",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},ellipsis:{defaultValue:null,description:"",name:"ellipsis",required:!1,type:{name:"boolean | Ellipsis"}},bold:{defaultValue:null,description:"",name:"bold",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"string | boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},deleted:{defaultValue:null,description:"",name:"deleted",required:!1,type:{name:"boolean"}},copyable:{defaultValue:null,description:"",name:"copyable",required:!1,type:{name:"boolean | Copyable"}}}}}catch{}export{k as B,_ as C,V as E};
//# sourceMappingURL=base-7c5ddcb4.js.map
