import{a as $,j as b}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as p}from"./index-c4905b50.js";import{c as l,g as i,i as t,a as k,d as V}from"./style-eba6b849.js";import{g as o}from"./color-palette-cd133b87.js";import{u as R}from"./use-merge-value-460a468d.js";const h=p.createContext(void 0);h.displayName="RadioGroupContext";function B(e){return l`
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
      border-color: ${o(e,"06")};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${i(`--${t}-grayBlue-08`)};
      background-color: ${i(`--${t}-grayBlue-09`)};
    }

    &:checked {
      border: 4px solid ${o(e,"01")};

      &:hover {
        border-color: ${o(e,"02")};
      }

      &:disabled {
        border-color: ${o(e,"05")};
      }
    }
  `}function z(e){const n=(e==null?void 0:e.disabled)??!1;return l`
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
  `}function S(e){const n=typeof e=="string"?e:`${e}px`;return l`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px ${n};
  `}function j(e){const n=typeof e=="string"?e:`${e}px`;return l`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 6px ${n};
  `}const _=l`
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
`;function W(e){return l`
    border-radius: 8px;
    display: ${e?"inline-flex":"none"};
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    gap: 1px;
    font-size: 14px;
    color: ${i(`--${t}-grayBlue-03`)};
    background-color: ${i(`--${t}-grayBlue-09`)};
    padding: 2px;
  `}function E(e){const{colorScheme:n="blue"}=e;let a,r;switch(e==null?void 0:e.size){case"small":a=l`
        padding: 1px 8px;
        height: 20px;
      `;break;case"medium":a=l`
        padding: 5px 12px;
        height: 28px;
      `;break;case"large":a=l`
        padding: 9px 16px;
        height: 36px;
      `;break}const s=n==="gray"||n==="grayBlue"?i(`--${t}-${n}-02`):o(n,"03");e!=null&&e.disabled&&(e!=null&&e.checked)?r=l`
      color: ${o(n,"06")};
      cursor: not-allowed;
    `:e!=null&&e.disabled?r=l`
      color: ${i(`--${t}-grayBlue-05`)};
      cursor: not-allowed;
    `:e!=null&&e.checked?r=l`
      font-weight: 500;
      border-radius: 7px;
      color: ${s};
      background-color: ${i(`--${t}-white-01`)};
      box-shadow: 0px 0px 2px 0px rgba(29, 33, 41, 0.24);

      &::before,
      & + label::before {
        opacity: 0;
      }
    `:r=l`
      &:hover {
        border-radius: 7px;
        background-color: ${i(`--${t}-white-01`)};
        box-shadow: 0px 0px 2px 0px rgba(29, 33, 41, 0.24);
      }
    `;const d=e.forceEqualWidth?l`
        flex: 1;
      `:l``;return l`
    ${d};
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

    ${a}
    ${r}
  `}const G=(e,n)=>n==="button"?E(e):z(e),H=(e,n)=>n==="button"?_:B(e),L=e=>{const{hasChildren:n,direction:a,spacing:r,type:s}=e;let d;if(s==="button")d=W(n);else switch(a){case"vertical":d=j(r);break;case"horizontal":d=S(r);break}return d},I=l`
  overflow: hidden;
  text-overflow: ellipsis;
`,f=p.forwardRef((e,n)=>{const a=p.useContext(h),r={...e},{children:s,checked:d,disabled:x,value:c,colorScheme:m=(a==null?void 0:a.colorScheme)??"blue",onChange:g,...q}=r;a&&(r.checked=(a==null?void 0:a.value)===(e==null?void 0:e.value),r.disabled=!!(a!=null&&a.disabled||e!=null&&e.disabled));const[u,w]=R(!1,{value:r.checked,defaultValue:r.defaultChecked}),v=y=>{a?a.onChangeValue&&a.onChangeValue(c,y):!("checked"in e)&&!u&&w(!0),!u&&g&&g(!0,y)},C={checked:u,size:a==null?void 0:a.size,disabled:!!(a!=null&&a.disabled||e!=null&&e.disabled),forceEqualWidth:a==null?void 0:a.forceEqualWidth,colorScheme:m};return $("label",{css:[G(C,a==null?void 0:a.type),k(e)],ref:n,...V(q),children:[b("input",{type:"radio",...a!=null&&a.name?{name:a.name}:{},css:H(m,a==null?void 0:a.type),value:c||"",checked:u,disabled:x,onChange:v}),b("span",{css:I,children:s})]})});f.displayName="Radio";try{f.displayName="Radio",f.__docgenInfo={description:"",displayName:"Radio",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean, event: ChangeEvent<Element>) => void)"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}}}}}catch{}export{h as R,L as a,f as b};
//# sourceMappingURL=radio-99a0c4e8.js.map
