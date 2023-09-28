import{a as u,j as W}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as y}from"./index-1cdf6ce0.js";import{c as r,a as R,d as L}from"./style-3ea54b04.js";import{g as n}from"./color-palette-728b424e.js";import{L as N}from"./loading-be690f19.js";function G(e,t){return r`
    ${e?r`
          width: 100%;
        `:null};
    ${t?r`
          height: 100%;
        `:null};
    transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
    vertical-align: middle;
    white-space: nowrap;
    outline: none;
    border: 0;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}function i(e,t,a){switch(a){case 0:switch(t){case"fill":return e==="white"?[n("white","01"),n("gray","02")]:e!="gray"&&e!="grayBlue"?[n(e,"01"),n("white","01")]:[n(e,"09"),n(e,"02")];case"light":return e==="white"?[n("white","01"),n("gray","02")]:[n(e,"07"),n(e,"01")];case"dashed":case"outline":return e=="white"?[n("white","01"),n("white","01")]:e!="gray"&&e!="grayBlue"?[n(e,"01"),n(e,"01")]:[n(e,"08"),n(e,"02")];case"text":return e=="white"?[n("transparent","01"),n("gray","02")]:[n("transparent","01"),n(e,"01")]}case 1:switch(t){case"fill":return e=="white"?[n("white","02"),n("gray","02")]:e!="gray"&&e!="grayBlue"?[n(e,"02"),n("white","01")]:[n(e,"08"),n(e,"02")];case"light":return e=="white"?[n("white","02"),n("gray","02")]:[n(e,"06"),n(e,"01")];case"dashed":case"outline":return e=="white"?[n("white","02"),n("gray","02")]:e!="gray"&&e!="grayBlue"?[n(e,"02"),n(e,"02")]:[n(e,"07"),n(e,"02")];case"text":return e=="white"?[n("white","02"),n("gray","02")]:[n("grayBlue","09"),n(e,"02")]}case 2:switch(t){case"fill":return e=="white"?[n("white","03"),n("gray","02")]:e!="gray"&&e!="grayBlue"?[n(e,"n-01"),n("white","01")]:[n(e,"06"),n(e,"02")];case"light":return e=="white"?[n("white","02"),n("gray","02")]:[n(e,"05"),n(e,"01")];case"dashed":case"outline":return e=="white"?[n("white","03"),n("gray","02")]:e!="gray"&&e!="grayBlue"?[n(e,"n-01"),n(e,"n-01")]:[n(e,"05"),n(e,"02")];case"text":return e=="white"?[n("white","03"),n("gray","02")]:[n("grayBlue","08"),n(e,"n-01")]}case 3:switch(t){case"fill":return e=="white"?[n("white","04"),n("gray","02")]:e!="gray"&&e!="grayBlue"?[n(e,"05"),n("white","01")]:[n(e,"09"),n(e,"05")];case"light":return e=="white"?[n("white","04"),n("gray","02")]:[n(e,"07"),n(e,"05")];case"dashed":case"outline":return e=="white"?[n("white","04"),n("gray","02")]:e!="gray"&&e!="grayBlue"?[n(e,"05"),n(e,"05")]:[n(e,"08"),n(e,"05")];case"text":return e=="white"?[n("white","04"),n("gray","02")]:[n("transparent","01"),n(e,"05")]}}return[]}function H(e,t){switch(e){case"text":return r`
        &:hover {
          background-color: ${i(t,e,1)[0]};
        }

        &:active {
          transition: none;
          background-color: ${i(t,e,2)[0]};
        }
      `;case"dashed":return r`
        border: dashed 1px
          ${i(t,e,0)[0]};

        &:hover {
          border: dashed 1px
            ${i(t,e,1)[0]};
        }

        &:active {
          transition: none;
          border: dashed 1px
            ${i(t,e,2)[0]};
        }

        &:disabled {
          border: dashed 1px
            ${i(t,e,3)[0]};
        }
      `;case"fill":return r`
        background-color: ${i(t,e,0)[0]};

        &:hover {
          background-color: ${i(t,e,1)[0]};
        }

        &:active {
          transition: none;
          background-color: ${i(t,e,2)[0]};
        }

        &:disabled {
          background-color: ${i(t,e,3)[0]};
        }
      `;case"outline":return r`
        border: solid 1px
          ${i(t,e,0)[0]};

        &:hover {
          border: solid 1px
            ${i(t,e,1)[0]};
        }

        &:active {
          transition: none;
          border: solid 1px
            ${i(t,e,2)[0]};
        }

        &:disabled {
          border: solid 1px
            ${i(t,e,3)[0]};
        }
      `;case"light":return r`
        background-color: ${i(t,e,0)[0]};

        &:hover {
          background-color: ${i(t,e,1)[0]};
        }

        &:active {
          transition: none;
          background-color: ${i(t,e,2)[0]};
        }

        &:disabled {
          background-color: ${i(t,e,3)[0]};
        }
      `}}function P(e){return e?r`
      cursor: default;

      &:disabled {
        cursor: not-allowed;
      }
    `:r`
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    `}function D(e,t){switch(e){case"text":return r`
        color: ${i(t,e,0)[1]};

        &:disabled {
          color: ${i(t,e,3)[1]};
        }
      `;case"light":return r`
        color: ${i(t,e,0)[1]};

        &:hover {
          color: ${i(t,e,1)[1]};
        }

        &:active {
          transition: none;
          color: ${i(t,e,2)[1]};
        }

        &:disabled {
          color: ${i(t,e,3)[1]};
        }
      `;case"outline":case"dashed":return r`
        color: ${i(t,e,0)[1]};

        &:hover {
          color: ${i(t,e,1)[1]};
        }

        &:active {
          transition: none;
          color: ${i(t,e,2)[1]};
        }

        &:disabled {
          color: ${i(t,e,3)[1]};
        }
      `;case"fill":return r`
        color: ${i(t,e,0)[1]};

        &:hover {
          color: ${i(t,e,1)[1]};
        }

        &:active {
          transition: none;
          color: ${i(t,e,2)[1]};
        }

        &:disabled {
          color: ${i(t,e,3)[1]};
        }
      `}return r``}function E(e,t,a,d){switch(e){case"square":return t?a?r`
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          `:d?r`
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          `:r`
            border-radius: 0;
          `:r`
        border-radius: 8px;
      `;case"round":return t?a?r`
            border-top-left-radius: 999px;
            border-bottom-left-radius: 999px;
          `:d?r`
            border-top-right-radius: 999px;
            border-bottom-right-radius: 999px;
          `:r`
            border-radius: 0;
          `:r`
          border-radius: 999px;
        `}}function X(e,t){switch(e){case"small":return r`
        padding: ${t=="outline"||t=="dashed"?"1px 7px":"2px 8px"};
        min-height: 24px;
      `;case"medium":return r`
        padding: ${t=="outline"||t=="dashed"?"4px 15px":"5px 16px"};
        min-height: 32px;
      `;case"large":return r`
        padding: ${t=="outline"||t=="dashed"?"8px 15px":"9px 16px"};
        min-height: 40px;
      `}}function Y(e,t,a){switch(e){case"small":return r`
        justify-content: center;
        width: ${t?"100%":"24px"};
        height: ${a?"100%":"24px"};
        font-size: 16px;
      `;case"medium":return r`
        justify-content: center;
        width: ${t?"100%":"32px"};
        height: ${a?"100%":"32px"};
        font-size: 16px;
      `;case"large":return r`
        justify-content: center;
        width: ${t?"100%":"40px"};
        height: ${a?"100%":"40px"};
        font-size: 16px;
      `}}function F(e){switch(e){case"small":return r`
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 20px;
        letter-spacing: normal;
      `;case"medium":case"large":return r`
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 22px;
        letter-spacing: normal;
      `}}function A(e,t){switch(e){case"small":return r`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-right: ${t?"4px":"0"};
      `;case"medium":case"large":return r`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-right: ${t?"8px":"0"};
      `}}function C(e){switch(e){case"small":case"medium":case"large":return r`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      `}}function J(e,t){switch(e){case"small":return r`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-left: ${t?"6px":"0"};
      `;case"medium":case"large":return r`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-left: ${t?"8px":"0"};
      `}}const Z=r`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function v(e,t,a){return a?r`
      display: inline-flex;
      margin-left: ${t!=0?"-1px":"0px"};
    `:r`
      display: inline-flex;
      margin-left: ${t==0?"0px":e};
    `}const x=y.forwardRef((e,t)=>u(B.Consumer,{children:a=>{const{attached:d,first:k,last:z}=a??{},{colorScheme:b=(a==null?void 0:a.colorScheme)??"blue",size:l=(a==null?void 0:a.size)??"medium",variant:o=(a==null?void 0:a.variant)??"fill",shape:I=(a==null?void 0:a.shape)??"square",fullWidth:c,fullHeight:w,loading:s,loadingText:p,leftIcon:q,disabled:V,rightIcon:h,onClick:g,...$}=e,j=p!=null&&p.length>0,m=y.Children.count(e.children)>=1,f=m||j&&s,_=r`
            ${G(c,w)};
            ${P(s??!1)}
            ${f?X(l,o):Y(l,c,w)};
            ${E(I,d??!1,k??!1,z??!1)};
            ${D(o,b)};
            ${H(o,b)};
          `;return W("button",{ref:t,css:[_,R($)],onClick:T=>{V||s||g==null||g(T)},disabled:V||s,...L($),children:[(s||q)&&u("span",{css:f?A(l,m):C(l),children:s?u(N,{spin:!0}):q}),f&&u("span",{css:F(l),children:s&&p?p:e.children}),h&&u("span",{css:f?J(l,m):C(l),children:h})]})}}));x.displayName="Button";try{x.displayName="Button",x.__docgenInfo={description:"",displayName:"Button",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"fill"'},{value:'"text"'},{value:'"outline"'},{value:'"light"'},{value:'"dashed"'}]}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"square"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},fullHeight:{defaultValue:null,description:"",name:"fullHeight",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactNode"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const B=y.createContext(void 0);B.displayName="ButtonGroupContext";export{x as B,v as a,B as b,Z as c};
//# sourceMappingURL=button-group-context-91dafb25.js.map
