import{j as v,a as o}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as c}from"./index-1cdf6ce0.js";import{c as l,g as n,i,o as $,a as w,d as C}from"./style-4011d251.js";import{a as s}from"./color-palette-83e58897.js";import{C as k}from"./close-56bf4497.js";function S(e){return l`
    display: inline-flex;
    vertical-align: middle;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    padding: 0 7px;
    cursor: ${e?"pointer":"default"};
  `}const z=l`
  font-size: 14px;
  line-height: 22px;
  height: 32px;
  font-weight: 400;
`,_=l`
  font-size: 14px;
  line-height: 22px;
  height: 24px;
  font-weight: 400;
`,j=l`
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  font-weight: 400;
`,B=l`
  font-size: inherit;
  line-height: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,T=l`
  width: 12px;
  font-size: 12px;
  height: 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`;function I(e,p,r){let a,t=l();return p==="small"?a=l({padding:"2px"}):a=l({padding:"4px"}),r==="fill"?t=l`
      &:hover {
        background-color: ${n(`--${i}-white-07`)};
      }
    `:r==="outline"&&(e==="gray"||e==="grayBlue")&&(t=l`
        &:hover {
          background-color: ${n(`--${i}-${e}-08`)};
        }
      `),l`
    margin-left: 4px;
    display: inline-flex;
    align-items: center;
    padding: 3px;
    border-radius: 50%;

    &:hover {
      background-color: ${n(`--${i}-${e}-06`)};
      cursor: pointer;
    }

    ${a}
    ${t}
  `}const P=["white","blackAlpha","gray","grayBlue","red","orange","yellow","green","blue","cyan","purple","techPurple","techPink"];function R(e){return e=="gray"||e=="grayBlue"?l`
      border-radius: 12px;
      border: solid 1px ${n(`--${i}-${e}-08`)};
      color: ${s(e)};
    `:l`
      border-radius: 12px;
      border: solid 1px ${s(e)};
      color: ${s(e)};
    `}function N(e){return l`
    background-color: ${s(e)};
    color: ${n(`--${i}-white-01`)};
    border-radius: 12px;
  `}function W(e){return e=="grayBlue"?l`
      border-radius: 12px;
      background-color: ${n(`--${i}-${e}-09`)};
      color: ${n(`--${i}-${e}-02`)};
    `:l`
      border-radius: 12px;
      background-color: ${n(`--${i}-${e}-08`)};
      color: ${s(e)};
    `}function E(e){return l`
    border-radius: 12px;
    color: ${n(`--${i}-white-01`)};
    background-color: ${e};
  `}function H(e){return l`
    border-radius: 12px;
    color: ${e};
    border: solid 1px ${e};
  `}const m=c.forwardRef((e,p)=>{const{visible:r,colorScheme:a="gray",size:t="medium",variant:f="light",clickable:g,closable:L,...y}=e,b=$(y,["onClose","icon"]);let u;const[h,V]=c.useState(!0);if(P.includes(a))switch(f){case"light":{u=W(a);break}case"fill":{u=N(a);break}case"outline":{u=R(a);break}}else switch(f){case"light":case"fill":{u=E(a);break}case"outline":{u=H(a);break}}let d;switch(t){case"small":{d=j;break}case"medium":{d=_;break}case"large":{d=z;break}}const q=l`
    ${S(g)};
    ${u};
    ${d};
  `;return r??h?v("div",{css:[q,w(e)],ref:p,...C(b),children:[e.icon&&o("span",{css:T,children:e.icon}),o("span",{css:B,children:e.children}),e.closable&&o("span",{css:I(a,t,f),onClick:x=>{e.onClose!=null&&e.onClose(x),r==null&&V(!1)},children:o(k,{size:"8px"})})]}):null});m.displayName="Tag";try{m.displayName="Tag",m.__docgenInfo={description:"",displayName:"Tag",props:{clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"fill"'},{value:'"light"'}]}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{m as T};
//# sourceMappingURL=tag-9723c345.js.map
