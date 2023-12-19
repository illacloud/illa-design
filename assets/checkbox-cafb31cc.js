import{j as h,a as d}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as p}from"./index-1cdf6ce0.js";import{c as n,g as t,i,a as _,d as B}from"./style-4011d251.js";import{a as z,g as o}from"./color-palette-83e58897.js";import{R as I}from"./reduce-49d5fe2d.js";import{S as R}from"./success-97405a8a.js";import{u as W}from"./use-merge-value-fcf53e13.js";function H(e,a="blue"){let l=n();return e&&(l=n`
      border-color: transparent;
      background-color: ${z(a)};

      &:hover {
        background-color: ${o(a,"04")};
      }

      &:disabled {
        background-color: ${o(a,"07")};
      }
    `),n`
    position: relative;
    appearance: none;
    border-radius: 2px;
    margin: auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${t(`--${i}-grayBlue-08`)};
    cursor: pointer;
    transition: 0.15s all linear;

    &:hover {
      border-color: ${o(a,"07")};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${t(`--${i}-grayBlue-08`)};
      background-color: ${t(`--${i}-grayBlue-09`)};
    }

    ${l}
  `}function q(e){return n`
    position: absolute;
    left: 0;
    width: 16px;
    height: 8px;
    transform: ${e?"scale(1);":"scale(0);"};
    color: white;
    transition: 0.15s all linear;
    pointer-events: none;
  `}function D(e){const a=e.disabled??!1;return n`
    position: relative;
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 22px;
    color: ${t(`--${i}-grayBlue-02`)};
    cursor: ${a?"not-allowed":"pointer"};
  `}function Y(e){const a=typeof e=="string"?e:`${e}px`;return n`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px ${a};
    margin-right: ${a};
  `}function A(e){const a=typeof e=="string"?e:`${e}px`;return n`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    align-items: flex-start;
    gap: ${a};
    margin-bottom: ${a};
  `}const E=n`
  margin-left: 8px;
`,x=p.createContext({});x.displayName="CheckboxGroupContext";const f=p.forwardRef((e,a)=>{var b,V;const{value:l,disabled:C,checked:m,defaultChecked:v,indeterminate:c,onChange:u,colorScheme:k="blue",children:g,...w}=e,y=p.useContext(x),$=m??((b=y.value)==null?void 0:b.some(r=>r===l)),S=v??((V=y.defaultValue)==null?void 0:V.some(r=>r===l)),[s,j]=W(!1,{value:$,defaultValue:S});return h("label",{css:[D(e),_(e)],ref:a,...B(w),children:[d("input",{type:"checkbox",css:H(s||c,k),value:typeof l=="object"?l.value:l,checked:s,disabled:C,onChange:r=>{m===void 0&&j(r.target.checked),u==null||u(r.target.checked,r)}}),c?d(I,{css:q(!0)}):d(R,{css:q(s)}),g&&h("span",{css:E,children:[" ",g]})]})});f.displayName="Checkbox";try{f.displayName="Checkbox",f.__docgenInfo={description:"",displayName:"Checkbox",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(checked: boolean, event: SyntheticEvent<Element, Event>) => void"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{f as C,Y as a,A as b,x as c};
//# sourceMappingURL=checkbox-cafb31cc.js.map
