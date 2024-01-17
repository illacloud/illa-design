import{j as V,a as h}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as p}from"./index-1cdf6ce0.js";import{c as a,g as i,i as t,a as k,d as R}from"./style-4011d251.js";import{g as s,a as q}from"./color-palette-83e58897.js";import{u as B}from"./use-merge-value-fcf53e13.js";const x=p.createContext(void 0);x.displayName="RadioGroupContext";function z(e){return a`
    position: relative;
    appearance: none;
    border-radius: 50%;
    margin: auto 8px auto auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${i(`--${t}-grayBlue-08`)};
    cursor: pointer;
    transition: 0.15s all linear;

    &:hover {
      border-color: ${s(e,"07")};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${i(`--${t}-grayBlue-08`)};
      background-color: ${i(`--${t}-grayBlue-09`)};
    }

    &:checked {
      border: 4px solid ${q(e)};

      &:hover {
        border-color: ${s(e,"04")};
      }

      &:disabled {
        border-color: ${s(e,"07")};
      }
    }
  `}function S(e){const n=(e==null?void 0:e.disabled)??!1;return a`
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 22px;
    color: ${i(`--${t}-grayBlue-02`)};
    cursor: ${n?"not-allowed":"pointer"};
  `}function j(e){const n=typeof e=="string"?e:`${e}px`;return a`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px ${n};
  `}function _(e){const n=typeof e=="string"?e:`${e}px`;return a`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 6px ${n};
  `}const W=a`
  position: absolute;
  appearance: none;
  opacity: 0;
  width: 0;
  height: 0;
  top: 0;
  left: 0;

  &:target {
    background-color: ${i(`--${t}-grayBlue-09`)};
  }
`,E=e=>{switch(e){case"small":return a`
        border-radius: 6px;
      `;default:return a`
        border-radius: 8px;
      `}};function G(e,n){return a`
    ${E(e)};
    display: ${n?"inline-flex":"none"};
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    gap: 1px;
    font-size: 14px;
    color: ${i(`--${t}-grayBlue-03`)};
    background-color: ${i(`--${t}-grayBlue-09`)};
    padding: 2px;
  `}const H=e=>{switch(e){case"small":return a`
        border-radius: 5px;
      `;default:return a`
        border-radius: 7px;
      `}};function I(e){const{colorScheme:n="blue"}=e;let r,l;switch(e==null?void 0:e.size){case"small":r=a`
        padding: 1px 8px;
        height: 20px;
      `;break;case"medium":r=a`
        padding: 5px 8px;
        height: 28px;
      `;break;case"large":r=a`
        padding: 9px 16px;
        height: 36px;
      `;break}e!=null&&e.disabled&&(e!=null&&e.checked)?l=a`
      color: ${s(n,"07")};
      cursor: not-allowed;
    `:e!=null&&e.disabled?l=a`
      color: ${i(`--${t}-grayBlue-05`)};
      cursor: not-allowed;
    `:e!=null&&e.checked?l=a`
      ${H(e.size??"medium")};
      font-weight: 500;
      color: ${q(n)};
      background-color: ${i(`--${t}-white-01`)};
      box-shadow: 0px 0px 2px 0px rgba(29, 33, 41, 0.24);

      &::before,
      & + label::before {
        opacity: 0;
      }
    `:l=a`
      &:hover {
        border-radius: 7px;
        background-color: ${i(`--${t}-white-01`)};
        box-shadow: 0px 0px 2px 0px rgba(29, 33, 41, 0.24);
      }
    `;const o=e.forceEqualWidth?a`
        flex: 1;
      `:a``;return a`
    ${o};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.15s all linear;
    white-space: nowrap;
    min-width: 0;
    overflow: hidden;

    &:hover::before,
    &:hover + &::before {
      opacity: 0;
    }

    &:not(:first-of-type):before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      display: block;
      height: ${(e==null?void 0:e.size)==="large"?"16px":"12px"};
      width: 1px;
      background-color: ${i(`--${t}-grayBlue-08`)};
      content: "";
      transition: all 0.1s linear;
    }

    ${r}
    ${l}
  `}const N=(e,n)=>n==="button"?I(e):S(e),P=(e,n)=>n==="button"?W:z(e),A=e=>{const{hasChildren:n,direction:r,spacing:l,type:o,size:m}=e;let d;if(o==="button")d=G(m,n);else switch(r){case"vertical":d=_(l);break;case"horizontal":d=j(l);break}return d},T=a`
  overflow: hidden;
  text-overflow: ellipsis;
`,f=p.forwardRef((e,n)=>{const r=p.useContext(x),l={...e},{children:o,checked:m,disabled:d,value:c,colorScheme:g=(r==null?void 0:r.colorScheme)??"blue",onChange:y,...w}=l;r&&(l.checked=(r==null?void 0:r.value)===(e==null?void 0:e.value),l.disabled=!!(r!=null&&r.disabled||e!=null&&e.disabled));const[u,C]=B(!1,{value:l.checked,defaultValue:l.defaultChecked}),v=b=>{r?r.onChangeValue&&r.onChangeValue(c,b):!("checked"in e)&&!u&&C(!0),!u&&y&&y(!0,b)},$={checked:u,size:r==null?void 0:r.size,disabled:!!(r!=null&&r.disabled||e!=null&&e.disabled),forceEqualWidth:r==null?void 0:r.forceEqualWidth,colorScheme:g};return V("label",{css:[N($,r==null?void 0:r.type),k(e)],ref:n,...R(w),children:[h("input",{type:"radio",...r!=null&&r.name?{name:r.name}:{},css:P(g,r==null?void 0:r.type),value:c||"",checked:u,disabled:d,onChange:v}),h("span",{css:T,children:o})]})});f.displayName="Radio";try{f.displayName="Radio",f.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean, event: ChangeEvent<Element>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{f as R,A as a,x as b};
//# sourceMappingURL=radio-2ce99fd9.js.map
