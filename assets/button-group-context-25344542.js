import{a as d,j as R}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as x}from"./index-1cdf6ce0.js";import{c as i,h as G,i as L,a as N,d as H}from"./style-4011d251.js";import{g as t,a as l}from"./color-palette-83e58897.js";import{L as P}from"./loading-9fdd5a3f.js";function D(e,n){return i`
    ${e?i`
          width: 100%;
        `:null};
    ${n?i`
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
  `}function r(e,n,a){switch(a){case 0:switch(n){case"fill":return e==="white"?[t("white","01"),t("gray","02")]:e!="gray"&&e!="grayBlue"?[l(e),t("white","01")]:[t(e,"09"),t(e,"02")];case"light":return e==="white"?[t("white","01"),t("gray","02")]:[t(e,"08"),l(e)];case"dashed":case"outline":return e=="white"?[t("white","01"),t("white","01")]:e!="gray"&&e!="grayBlue"?[l(e),l(e)]:[t(e,"08"),t(e,"02")];case"text":return e=="white"?[t("transparent","01"),t("gray","02")]:[t("transparent","01"),l(e)]}case 1:switch(n){case"fill":return e=="white"?[t("white","02"),t("gray","02")]:e!="gray"&&e!="grayBlue"?[t(e,"04"),t("white","01")]:[t(e,"08"),t(e,"02")];case"light":return e=="white"?[t("white","02"),t("gray","02")]:[t(e,"07"),l(e)];case"dashed":case"outline":return e=="white"?[t("white","02"),t("gray","02")]:e!="gray"&&e!="grayBlue"?[t(e,"04"),t(e,"04")]:[t(e,"07"),t(e,"02")];case"text":return e=="white"?[t("white","02"),t("gray","02")]:[t("grayBlue","09"),t(e,"04")]}case 2:switch(n){case"fill":return e=="white"?[t("white","03"),t("gray","02")]:e!="gray"&&e!="grayBlue"?[t(e,"02"),t("white","01")]:[t(e,"06"),t(e,"02")];case"light":return e=="white"?[t("white","02"),t("gray","02")]:[t(e,"06"),l(e)];case"dashed":case"outline":return e=="white"?[t("white","03"),t("gray","02")]:e!="gray"&&e!="grayBlue"?[t(e,"02"),t(e,"02")]:[t(e,"05"),t(e,"02")];case"text":return e=="white"?[t("white","03"),t("gray","02")]:[t("grayBlue","08"),l(e)]}case 3:switch(n){case"fill":return e=="white"?[t("white","04"),t("gray","02")]:e!="gray"&&e!="grayBlue"?[t(e,G(`--${L}-${e}-07`)?"07":"05"),t("white","01")]:[t(e,"09"),t(e,"05")];case"light":return e=="white"?[t("white","04"),t("gray","02")]:[t(e,"08"),t(e,"05")];case"dashed":case"outline":return e=="white"?[t("white","04"),t("gray","02")]:e!="gray"&&e!="grayBlue"?[t(e,"06"),t(e,"06")]:[t(e,"08"),t(e,"05")];case"text":return e=="white"?[t("white","04"),t("gray","02")]:[t("transparent","01"),t(e,"07")]}}return[]}function E(e,n){switch(e){case"text":return i`
        &:hover {
          background-color: ${r(n,e,1)[0]};
        }

        &:active {
          transition: none;
          background-color: ${r(n,e,2)[0]};
        }
      `;case"dashed":return i`
        border: dashed 1px
          ${r(n,e,0)[0]};

        &:hover {
          border: dashed 1px
            ${r(n,e,1)[0]};
        }

        &:active {
          transition: none;
          border: dashed 1px
            ${r(n,e,2)[0]};
        }

        &:disabled {
          border: dashed 1px
            ${r(n,e,3)[0]};
        }
      `;case"fill":return i`
        background-color: ${r(n,e,0)[0]};

        &:hover {
          background-color: ${r(n,e,1)[0]};
        }

        &:active {
          transition: none;
          background-color: ${r(n,e,2)[0]};
        }

        &:disabled {
          background-color: ${r(n,e,3)[0]};
        }
      `;case"outline":return i`
        border: solid 1px
          ${r(n,e,0)[0]};

        &:hover {
          border: solid 1px
            ${r(n,e,1)[0]};
        }

        &:active {
          transition: none;
          border: solid 1px
            ${r(n,e,2)[0]};
        }

        &:disabled {
          border: solid 1px
            ${r(n,e,3)[0]};
        }
      `;case"light":return i`
        background-color: ${r(n,e,0)[0]};

        &:hover {
          background-color: ${r(n,e,1)[0]};
        }

        &:active {
          transition: none;
          background-color: ${r(n,e,2)[0]};
        }

        &:disabled {
          background-color: ${r(n,e,3)[0]};
        }
      `}}function X(e){return e?i`
      cursor: default;

      &:disabled {
        cursor: not-allowed;
      }
    `:i`
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    `}function Y(e,n){switch(e){case"text":return i`
        color: ${r(n,e,0)[1]};

        &:disabled {
          color: ${r(n,e,3)[1]};
        }
      `;case"light":return i`
        color: ${r(n,e,0)[1]};

        &:hover {
          color: ${r(n,e,1)[1]};
        }

        &:active {
          transition: none;
          color: ${r(n,e,2)[1]};
        }

        &:disabled {
          color: ${r(n,e,3)[1]};
        }
      `;case"outline":case"dashed":return i`
        color: ${r(n,e,0)[1]};

        &:hover {
          color: ${r(n,e,1)[1]};
        }

        &:active {
          transition: none;
          color: ${r(n,e,2)[1]};
        }

        &:disabled {
          color: ${r(n,e,3)[1]};
        }
      `;case"fill":return i`
        color: ${r(n,e,0)[1]};

        &:hover {
          color: ${r(n,e,1)[1]};
        }

        &:active {
          transition: none;
          color: ${r(n,e,2)[1]};
        }

        &:disabled {
          color: ${r(n,e,3)[1]};
        }
      `}return i``}function F(e,n,a,p){switch(e){case"square":return n?a?i`
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          `:p?i`
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          `:i`
            border-radius: 0;
          `:i`
        border-radius: 8px;
      `;case"round":return n?a?i`
            border-top-left-radius: 999px;
            border-bottom-left-radius: 999px;
          `:p?i`
            border-top-right-radius: 999px;
            border-bottom-right-radius: 999px;
          `:i`
            border-radius: 0;
          `:i`
          border-radius: 999px;
        `}}function A(e,n){switch(e){case"small":return i`
        padding: ${n=="outline"||n=="dashed"?"1px 7px":"2px 8px"};
        min-height: 24px;
      `;case"medium":return i`
        padding: ${n=="outline"||n=="dashed"?"4px 15px":"5px 16px"};
        min-height: 32px;
      `;case"large":return i`
        padding: ${n=="outline"||n=="dashed"?"8px 15px":"9px 16px"};
        min-height: 40px;
      `}}function J(e,n,a){switch(e){case"small":return i`
        justify-content: center;
        width: ${n?"100%":"24px"};
        height: ${a?"100%":"24px"};
        font-size: 16px;
      `;case"medium":return i`
        justify-content: center;
        width: ${n?"100%":"32px"};
        height: ${a?"100%":"32px"};
        font-size: 16px;
      `;case"large":return i`
        justify-content: center;
        width: ${n?"100%":"40px"};
        height: ${a?"100%":"40px"};
        font-size: 16px;
      `}}function K(e){switch(e){case"small":return i`
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 20px;
        letter-spacing: normal;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `;case"medium":case"large":return i`
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 22px;
        letter-spacing: normal;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `}}function M(e,n){switch(e){case"small":return i`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-right: ${n?"4px":"0"};
      `;case"medium":case"large":return i`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-right: ${n?"8px":"0"};
      `}}function B(e){switch(e){case"small":case"medium":case"large":return i`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      `}}function O(e,n){switch(e){case"small":return i`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-left: ${n?"6px":"0"};
      `;case"medium":case"large":return i`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-left: ${n?"8px":"0"};
      `}}const ee=i`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function te(e,n,a){return a?i`
      display: inline-flex;
      margin-left: ${n!=0?"-1px":"0px"};
    `:i`
      display: inline-flex;
      margin-left: ${n==0?"0px":e};
    `}const b=x.forwardRef((e,n)=>d(k.Consumer,{children:a=>{const{attached:p,first:z,last:I}=a??{},{colorScheme:c=(a==null?void 0:a.colorScheme)??"blue",size:s=(a==null?void 0:a.size)??"medium",variant:g=(a==null?void 0:a.variant)??"fill",shape:j=(a==null?void 0:a.shape)??"square",fullWidth:w,fullHeight:q,loading:u,loadingText:f,leftIcon:V,disabled:h,rightIcon:$,onClick:m,...C}=e,T=f!=null&&f.length>0,y=x.Children.count(e.children)>=1,o=y||T&&u,_=i`
            ${D(w,q)};
            ${X(u??!1)}
            ${o?A(s,g):J(s,w,q)};
            ${F(j,p??!1,z??!1,I??!1)};
            ${Y(g,c)};
            ${E(g,c)};
          `;return R("button",{ref:n,css:[_,N(C)],onClick:W=>{h||u||m==null||m(W)},disabled:h||u,...H(C),children:[(u||V)&&d("span",{css:o?M(s,y):B(s),children:u?d(P,{spin:!0}):V}),o&&d("span",{css:K(s),children:u&&f?f:e.children}),$&&d("span",{css:o?O(s,y):B(s),children:$})]})}}));b.displayName="Button";try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"fill"'},{value:'"outline"'},{value:'"light"'},{value:'"dashed"'}]}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"square"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},fullHeight:{defaultValue:null,description:"",name:"fullHeight",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:null,description:"",name:"loadingText",required:!1,type:{name:"string"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactNode"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const k=x.createContext(void 0);k.displayName="ButtonGroupContext";export{b as B,te as a,k as b,ee as c};
//# sourceMappingURL=button-group-context-25344542.js.map
