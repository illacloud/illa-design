import{j as x,a as d}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as m}from"./index-1cdf6ce0.js";import{c as l,g as a,i as n,o as $,a as v,d as w}from"./style-3ea54b04.js";import{C as k}from"./close-b3537d01.js";function C(e){return l`
    display: inline-flex;
    vertical-align: middle;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    padding: 0 7px;
    cursor: ${e?"pointer":"default"};
  `}const S=l`
  font-size: 14px;
  line-height: 22px;
  height: 32px;
  font-weight: 400;
`,z=l`
  font-size: 14px;
  line-height: 22px;
  height: 24px;
  font-weight: 400;
`,_=l`
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  font-weight: 400;
`,j=l`
  font-size: inherit;
  line-height: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,B=l`
  width: 12px;
  font-size: 12px;
  height: 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`;function I(e,o,r){let i,t=l();return o==="small"?i=l({padding:"2px"}):i=l({padding:"4px"}),r==="fill"?t=l`
      &:hover {
        background-color: ${a(`--${n}-white-07`)};
      }
    `:r==="outline"&&(e==="gray"||e==="grayBlue")&&(t=l`
        &:hover {
          background-color: ${a(`--${n}-${e}-08`)};
        }
      `),l`
    margin-left: 4px;
    display: inline-flex;
    align-items: center;
    padding: 3px;
    border-radius: 50%;

    &:hover {
      background-color: ${a(`--${n}-${e}-06`)};
      cursor: pointer;
    }

    ${i}
    ${t}
  `}const P=["white","blackAlpha","gray","grayBlue","red","orange","yellow","green","blue","cyan","purple","techPurple","techPink"];function T(e){return e=="gray"||e=="grayBlue"?l`
      border-radius: 12px;
      border: solid 1px ${a(`--${n}-${e}-08`)};
      color: ${a(`--${n}-${e}-02`)};
    `:l`
      border-radius: 12px;
      border: solid 1px ${a(`--${n}-${e}-01`)};
      color: ${a(`--${n}-${e}-01`)};
    `}function R(e){return l`
    background-color: ${a(`--${n}-${e}-01`)};
    color: ${a(`--${n}-white-01`)};
    border-radius: 12px;
  `}function N(e){return e=="grayBlue"?l`
      border-radius: 12px;
      background-color: ${a(`--${n}-${e}-09`)};
      color: ${a(`--${n}-${e}-02`)};
    `:l`
      border-radius: 12px;
      background-color: ${a(`--${n}-${e}-07`)};
      color: ${a(`--${n}-${e}-01`)};
    `}function W(e){return l`
    border-radius: 12px;
    color: ${a(`--${n}-white-01`)};
    background-color: ${e};
  `}function E(e){return l`
    border-radius: 12px;
    color: ${e};
    border: solid 1px ${e};
  `}const f=m.forwardRef((e,o)=>{const{visible:r,colorScheme:i="gray",size:t="medium",variant:p="light",clickable:c,closable:H,...g}=e,y=$(g,["onClose","icon"]);let u;const[b,h]=m.useState(!0);if(P.includes(i))switch(p){case"light":{u=N(i);break}case"fill":{u=R(i);break}case"outline":{u=T(i);break}}else switch(p){case"light":case"fill":{u=W(i);break}case"outline":{u=E(i);break}}let s;switch(t){case"small":{s=_;break}case"medium":{s=z;break}case"large":{s=S;break}}const V=l`
    ${C(c)};
    ${u};
    ${s};
  `;return r??b?x("div",{css:[V,v(e)],ref:o,...w(y),children:[e.icon&&d("span",{css:B,children:e.icon}),d("span",{css:j,children:e.children}),e.closable&&d("span",{css:I(i,t,p),onClick:q=>{e.onClose!=null&&e.onClose(q),r==null&&h(!1)},children:d(k,{size:"8px"})})]}):null});f.displayName="Tag";try{f.displayName="Tag",f.__docgenInfo={description:"",displayName:"Tag",props:{clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"outline"'},{value:'"light"'}]}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{f as T};
//# sourceMappingURL=tag-e795cf83.js.map
