import{a as n,j as h}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as w}from"./index-1cdf6ce0.js";import{c as i,d as k,a as D}from"./style-4011d251.js";import{g as l}from"./color-palette-83e58897.js";import{E as j}from"./error-ae8150a6.js";import{S as R}from"./success-97405a8a.js";import{N as H}from"./next-aefb080b.js";import{u as T}from"./use-merge-value-fcf53e13.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./create-icon-e804097a.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";function L(e){return i`
    display: flex;
    width: ${e==="vertical"?"auto":"100%"};
    flex-direction: ${e==="vertical"?"column":"row"};
  `}const P=i`
  width: 24px;
  height: 24px;
  font-size: 24px;
`;function E(e){let t;switch(e){case"wait":t=l("grayBlue","06");break;case"process":case"finish":t=l("blue","03");break;case"error":t=l("red","03");break}return i`
    border-radius: 4px;
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    background-color: ${t};
  `}function x(e){let t=i``;switch(e){case"wait":t=i`
        color: ${l("grayBlue","04")};
        background-color: ${l("gray","08")};
      `;break;case"process":t=i`
        color: ${l("white","01")};
        background-color: ${l("blue","03")};
      `;break;case"finish":t=i`
        color: ${l("blue","03")};
        background-color: ${l("blue","08")};
      `;break;case"error":t=i`
        color: ${l("red","03")};
        background-color: ${l("red","08")};
      `;break}return i`
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    ${t};
  `}function G(e,t,a){let r=i``;return e==="vertical"&&!t&&(r=i`
      margin-bottom: 16px;
    `),i`
    width: ${e==="vertical"?"100%":"auto"};
    display: inline-flex;
    overflow: hidden;
    align-self: start;
    height: 64px;
    flex-direction: column;
    flex: 1;
    ${r};
    cursor: ${a?"not-allowed":"auto"};
  `}const X=i`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`,Y=i`
  margin-left: 16px;
  margin-right: 16px;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=i`
  margin-left: 40px;
  margin-top: 4px;
  flex-grow: 1;
  margin-right: 40px;
  font-size: 12px;
  word-wrap: break-word;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
  color: ${l("grayBlue","04")};
`;function A(e,t){let a=i``;switch(e){case"finish":case"wait":a=i`
        border-color: transparent;
      `;break;case"process":a=i`
        border-color: ${t?"transparent":l("blue","03")};
      `;break;case"error":a=i`
        border-color: ${t?"transparent":l("red","03")};
      `;break}return i`
    margin-right: 16px;
    margin-top: 14px;
    border-top: 2px solid ${l("grayBlue","08")};
    ${a};
  `}const C=w.forwardRef((e,t)=>{const{icon:a,status:r="wait",index:m=0,disabled:b,lineStatus:V="wait",lineless:p,canClick:q,description:v,title:c,type:g,last:y,direction:u,...s}=e,f=w.useMemo(()=>{let d=null;switch(r){case"wait":d=n("div",{css:x(r),children:m+1});break;case"process":d=n("div",{css:x(r),children:m+1});break;case"finish":d=n("div",{css:x(r),children:n(R,{c:l("blue","03")})});break;case"error":d=n("div",{css:x(r),children:n(j,{c:l("red","03")})});break}return a?n("span",{css:P,children:a}):d},[a,m,r]);return h("div",{css:G(u,y,b),ref:t,...k(s),children:[h("div",{css:X,children:[f,n("div",{css:Y,children:c}),n(H,{fs:"12px",mr:"16px",c:l("grayBlue","06")})]}),n("div",{css:M,children:v}),n("span",{css:A(V,p)})]})});C.displayName="NavigateStep";try{C.displayName="NavigateStep",C.__docgenInfo={description:"",displayName:"NavigateStep",props:{lineStatus:{defaultValue:null,description:"",name:"lineStatus",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"wait"'},{value:'"process"'},{value:'"finish"'}]}},lineless:{defaultValue:null,description:"",name:"lineless",required:!1,type:{name:"boolean"}},canClick:{defaultValue:null,description:"",name:"canClick",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"wait"'},{value:'"process"'},{value:'"finish"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"navigation"'},{value:'"line"'},{value:'"dot"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},last:{defaultValue:null,description:"",name:"last",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}function O(e,t,a){return i`
    flex-shrink: 0;
    display: inline-flex;
    flex-grow: ${a?0:1};
    flex-direction: column;
    cursor: ${t?"not-allowed":e?"pointer":"auto"};
  `}function J(e){return i`
    margin-right: 16px;
    white-space: pre;
    word-break: break-word;
    margin-top: 4px;
    margin-left: ${e==="dot"?"24px":"40px"};
    font-size: 12px;
    color: ${l("grayBlue","04")};
  `}const K=i`
  align-items: center;
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
`,Q=i`
  font-size: 16px;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 16px;
  margin-right: 16px;
  color: ${l("grayBlue","02")};
`;function U(e,t){let a=i``;switch(e){case"wait":a=i`
        border-color: ${t?"transparent":l("grayBlue","08")};
      `;break;case"process":a=i`
        border-color: ${t?"transparent":l("white","01")};
      `;break;case"finish":a=i`
        border-color: ${t?"transparent":l("blue","03")};
      `;break;case"error":a=i`
        border-color: ${t?"transparent":l("red","03")};
      `;break}return i`
    flex-grow: 1;
    margin-right: 16px;
    border-bottom: 1px solid;
    ${a};
  `}function Z(e,t,a){return i`
    display: inline-flex;
    flex-shrink: 0;
    flex-grow: ${a?0:1};
    flex-direction: column;
    cursor: ${t?"not-allowed":e?"pointer":"auto"};
  `}const ee=i`
  align-items: center;
  display: inline-flex;
  flex-direction: row;
`,ie=i`
  font-size: 16px;
  flex-shrink: 0;
  margin-left: 16px;
  color: ${l("grayBlue","02")};
`,ne=i`
  display: inline-flex;
  margin-top: 4px;
  margin-bottom: 8px;
  flex-grow: 1;
`;function te(e,t,a){let r=i``;switch(e){case"wait":r=i`
        border-color: ${a?"transparent":l("grayBlue","08")};
      `;break;case"process":r=i`
        border-color: ${a?"transparent":l("white","01")};
      `;break;case"finish":r=i`
        border-color: ${a?"transparent":l("blue","03")};
      `;break;case"error":r=i`
        border-color: ${a?"transparent":l("red","03")};
      `;break}return i`
    margin-top: 4px;
    margin-left: ${t==="dot"?"3px":"11px"};
    border-left: 1px solid;
    ${r};
  `}function le(e){return i`
    margin-right: 16px;
    word-wrap: break-word;
    white-space: pre;
    margin-left: ${e==="dot"?"20px":"28px"};
    font-size: 12px;
    color: ${l("grayBlue","04")};
  `}const $=w.forwardRef((e,t)=>{const{icon:a,status:r="wait",index:m=0,disabled:b,lineStatus:V="wait",lineless:p,canClick:q,description:v,title:c,type:g="dot",last:y,direction:u,...s}=e,f=w.useMemo(()=>{let d=null;switch(g){case"dot":d=n("div",{css:E(r)});break;case"line":switch(r){case"wait":d=n("div",{css:x(r),children:m+1});break;case"process":d=n("div",{css:x(r),children:m+1});break;case"finish":d=n("div",{css:x(r),children:n(R,{c:l("blue","03")})});break;case"error":d=n("div",{css:x(r),children:n(j,{c:l("red","03")})});break}break}return a?n("span",{css:P,children:a}):d},[g,a,m,r]);return u==="horizontal"?h("div",{ref:t,css:O(q,b,y),...k(s),children:[h("div",{css:K,children:[f,n("div",{css:Q,children:c}),!y&&n("div",{css:U(V,p)})]}),v&&n("div",{css:J(g),children:v})]}):h("div",{ref:t,css:Z(q,b,y),...k(s),children:[h("div",{css:ee,children:[f,n("div",{css:ie,children:c})]}),h("div",{css:ne,children:[!y&&n("div",{css:te(V,g,p)}),v&&n("div",{css:le(g),children:v})]})]})});$.displayName="DotStep";try{$.displayName="DotStep",$.__docgenInfo={description:"",displayName:"DotStep",props:{lineStatus:{defaultValue:null,description:"",name:"lineStatus",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"wait"'},{value:'"process"'},{value:'"finish"'}]}},lineless:{defaultValue:null,description:"",name:"lineless",required:!1,type:{name:"boolean"}},canClick:{defaultValue:null,description:"",name:"canClick",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"wait"'},{value:'"process"'},{value:'"finish"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"navigation"'},{value:'"line"'},{value:'"dot"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},last:{defaultValue:null,description:"",name:"last",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const o=w.forwardRef((e,t)=>{const{children:a,direction:r="horizontal",lineless:m,current:b,type:V="dot",items:p,onChange:q,...v}=e,[c,g]=T(-1,{value:b,defaultValue:0}),y=w.useCallback((u,s)=>{s||(b===void 0&&g(u),q==null||q(u))},[b,q,g]);return n("div",{css:[L(r),D(e)],ref:t,...k(v),children:p&&p.map((u,s)=>{let f="wait";u.status===void 0?f=c>s?"finish":c===s?"process":"wait":f=u.status;let d=c>s?"finish":"wait";switch(s+1<p.length&&(d=p[s+1].status==="error"?"error":d),V){case"navigation":return n(C,{status:f,lineless:m||s!==c,last:s===p.length-1,canClick:!0,lineStatus:f,icon:u.icon,disabled:u.disabled,type:V,direction:r,description:u.description,title:u.title,index:s,onClick:()=>{y(s,u.disabled)}},s);case"dot":case"line":default:return n($,{status:f,lineless:m,last:s===p.length-1,canClick:!1,lineStatus:d,icon:u.icon,disabled:u.disabled,type:V,direction:r,description:u.description,title:u.title,index:s,onClick:()=>{y(s,u.disabled)}},s)}})})});o.displayName="Steps";try{o.displayName="Steps",o.__docgenInfo={description:"",displayName:"Steps",props:{lineless:{defaultValue:null,description:"",name:"lineless",required:!1,type:{name:"boolean"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"number"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"StepItem[]"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"navigation"'},{value:'"line"'},{value:'"dot"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(current: number) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const be={title:"NAVIGATION/Steps",component:o},F=e=>h("div",{style:{display:"flex",flexDirection:"column"},children:[n(o,{...e,style:{width:850},type:"dot",items:[{title:"Finished",description:"Finished"},{title:"In Progress",status:"error"},{title:"Waiting"}]}),n(o,{...e,style:{width:850,marginTop:"20px"},type:"line",items:[{title:"Finished",description:"Finished"},{title:"In Progress"},{title:"Waiting"}]}),n(o,{...e,style:{width:850,marginTop:"20px"},type:"navigation",items:[{title:"Finished",description:"Finished"},{title:"In Progress",status:"error"},{title:"Waiting"}]}),n(o,{...e,style:{width:850,marginTop:"20px"},type:"navigation",items:[{title:"Finished",description:"FinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinished"},{title:"In Progress"},{title:"Waiting"}]})]}),S=e=>h("div",{style:{display:"flex",flexDirection:"row"},children:[n(o,{...e,style:{height:300},direction:"vertical",type:"dot",items:[{title:"Finished",description:"Finished"},{title:"In Progress",status:"error"},{title:"Waiting"}]}),n(o,{...e,style:{height:300,marginLeft:"20px"},direction:"vertical",type:"line",items:[{title:"Finished",description:"Finished"},{title:"In Progress"},{title:"Waiting"}]}),n(o,{...e,style:{height:300,marginLeft:"20px"},direction:"vertical",type:"navigation",items:[{title:"Finished",description:"Finished"},{title:"In Progress",status:"error"},{title:"Waiting"}]}),n(o,{...e,style:{height:300,marginLeft:"20px"},direction:"vertical",type:"navigation",items:[{title:"Finished",description:"Finished"},{title:"In Progress"},{title:"Waiting"}]})]});var I,z,W;F.parameters={...F.parameters,docs:{...(I=F.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "column"
  }}>
      <Steps {...args} style={{
      width: 850
    }} type="dot" items={[{
      title: "Finished",
      description: "Finished"
    }, {
      title: "In Progress",
      status: "error"
    }, {
      title: "Waiting"
    }]} />
      <Steps {...args} style={{
      width: 850,
      marginTop: "20px"
    }} type="line" items={[{
      title: "Finished",
      description: "Finished"
    }, {
      title: "In Progress"
    }, {
      title: "Waiting"
    }]} />
      <Steps {...args} style={{
      width: 850,
      marginTop: "20px"
    }} type="navigation" items={[{
      title: "Finished",
      description: "Finished"
    }, {
      title: "In Progress",
      status: "error"
    }, {
      title: "Waiting"
    }]} />
      <Steps {...args} style={{
      width: 850,
      marginTop: "20px"
    }} type="navigation" items={[{
      title: "Finished",
      description: "FinishedFinished" + "FinishedFinished" + "FinishedFinishedFinishedFinishedFin" + "ishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinishedFinished"
    }, {
      title: "In Progress"
    }, {
      title: "Waiting"
    }]} />
    </div>;
}`,...(W=(z=F.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var _,N,B;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "row"
  }}>
      <Steps {...args} style={{
      height: 300
    }} direction="vertical" type="dot" items={[{
      title: "Finished",
      description: "Finished"
    }, {
      title: "In Progress",
      status: "error"
    }, {
      title: "Waiting"
    }]} />
      <Steps {...args} style={{
      height: 300,
      marginLeft: "20px"
    }} direction="vertical" type="line" items={[{
      title: "Finished",
      description: "Finished"
    }, {
      title: "In Progress"
    }, {
      title: "Waiting"
    }]} />
      <Steps {...args} style={{
      height: 300,
      marginLeft: "20px"
    }} direction="vertical" type="navigation" items={[{
      title: "Finished",
      description: "Finished"
    }, {
      title: "In Progress",
      status: "error"
    }, {
      title: "Waiting"
    }]} />
      <Steps {...args} style={{
      height: 300,
      marginLeft: "20px"
    }} direction="vertical" type="navigation" items={[{
      title: "Finished",
      description: "Finished"
    }, {
      title: "In Progress"
    }, {
      title: "Waiting"
    }]} />
    </div>;
}`,...(B=(N=S.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const Ve=["Basic","Vertical"];export{F as Basic,S as Vertical,Ve as __namedExportsOrder,be as default};
//# sourceMappingURL=steps.stories-a9f2fede.js.map
