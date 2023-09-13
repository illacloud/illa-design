import{j as S,a as o}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as V}from"./index-1cdf6ce0.js";import{g as i,i as r,c as p,a as I,d as j}from"./style-3ea54b04.js";import{d as z}from"./is-47f46886.js";const T=["white","blackAlpha","gray","red","orange","yellow","green","blue","cyan","purple","grayBlue","techPurple","techPink"];function _(e,a,u){const l=u==="medium"?"26px":"40px",n=u==="medium"?"16px":"24px",t=T.indexOf(e)>-1;let s=a?t?i(`--${r}-${e}-01`):e:i(`--${r}-grayBlue-06`);return p`
    position: relative;
    border-radius: 16px;
    min-width: ${l};
    height: ${n};
    line-height: ${n};
    background-color: ${s};
    color: ${s};
    vertical-align: middle;
    cursor: pointer;
    box-sizing: border-box;
    border: none;
    overflow: hidden;
    padding: 0;
    outline: none;
    transition: background-color 0.2s ease-in-out;
    &:disabled {
      cursor: not-allowed;
      background-color: ${t&&a?i(`--${r}-${e}-06`):i(`--${r}-grayBlue-08`)};
      color: ${t&&a?i(`--${r}-${e}-06`):i(`--${r}-grayBlue-08`)};
    }
  `}function B(e,a,u){const l=e==="medium"?"12px":"16px",n=e==="medium"?"2px":"4px",t=a?`
        left: 100%;
        margin-left: -${n};
        transform:translateX(-100%)
      `:`left:${n}`,s=u?"":`box-shadow:0 1px 2px ${i(`--${r}-blackAlpha-05`)}`;return p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position: absolute;
    top: ${n};
    ${t};
    width: ${l};
    height: ${l};
    border-radius: 50%;
    ${s};
    background-color: ${i(`--${r}-white-01`)};
    transition: all 0.2s ease-in-out;
  `}function R(e,a){const u=a==="medium"?`
          font-size: 12px;
          line-height: 1
        `:`
          font-size:14px;
          line-height: 1.14
        `,l=a==="medium"?6:8,n=a==="medium"?19:26,t=e?`margin:0 ${n}px 0 ${l}px`:`margin:0 ${l}px 0 ${n}px`;return p`
    color: ${i(`--${r}-white-01`)};
    ${u};
    ${t};
    white-space: pre;
    transition: margin 0.2s;
  `}const x=p`
  width: 8px;
  height: 8px;
  font-size: 8px;
  line-height: 6px;
  overflow: hidden;
`,f=V.forwardRef((e,a)=>{const{colorScheme:u="blue",disabled:l,size:n="medium",checkedText:t="",uncheckedText:s="",checkedIcon:g,uncheckedIcon:y,checked:m,defaultChecked:v,onChange:h,onClick:b,...w}=e,[$,k]=V.useState(v??!1),d=m!==void 0?m:$,C=q=>{m===void 0&&k(!d),h&&h(!d,q),b&&b(q)},c=d?t:s;return S("button",{css:[_(u,d,n),I(e)],ref:a,onClick:C,disabled:l,type:"button",...j(w),children:[o("div",{css:B(n,d,l??!1),children:(g||y)&&o("div",{css:x,children:d?g:y})}),o("div",{css:R(d,n),children:z(c)?o("div",{css:x,children:c}):c})]})});f.displayName="Switch";try{f.displayName="Switch",f.__docgenInfo={description:"",displayName:"Switch",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},checkedText:{defaultValue:null,description:"",name:"checkedText",required:!1,type:{name:"ReactNode"}},uncheckedText:{defaultValue:null,description:"",name:"uncheckedText",required:!1,type:{name:"ReactNode"}},uncheckedIcon:{defaultValue:null,description:"",name:"uncheckedIcon",required:!1,type:{name:"ReactNode"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: boolean, event: MouseEvent<Element, MouseEvent>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{f as S};
//# sourceMappingURL=switch-225ebe15.js.map
