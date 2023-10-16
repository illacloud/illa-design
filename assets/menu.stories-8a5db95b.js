import{a as e,j as C,F as ie}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{a as j,b as R}from"./index.esm-aa9e73e6.js";import{b as H}from"./index.esm-52d37734.js";import{r as v}from"./index-1cdf6ce0.js";import{c as a,a as J,d as $}from"./style-3ea54b04.js";import{g as y}from"./color-palette-728b424e.js";import{D as he}from"./down-3d8ebd18.js";import{D as Me,a as Ie,b as Ce}from"./droplist-item-4eb8b67a.js";import{u as ze}from"./web-cc1a3eed.js";import{A as te}from"./index-c9c44efd.js";import{m as ue}from"./use-force-update-7edf8987.js";import{u as N}from"./use-merge-value-fcf53e13.js";import{m as _e}from"./merge-ref-e0695ca7.js";import{P as ke}from"./previous-80a0198e.js";import{N as Be}from"./next-2684e9e6.js";import{U as Pe}from"./up-1088cd79.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./iconBase-4112cc44.js";import"./index-45a08ae3.js";import"./create-icon-907f0980.js";import"./trigger-e5294b4e.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";const Te=a`
  height: 48px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;function Fe(n,u){return a`
    display: flex;
    flex-direction: row;
    justify-content: ${u?"flex-start":n};
    overflow-x: auto;
    height: 100%;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  `}function me(n){const u=n==="left"?a`
          left: 0;
          top: 0;
          bottom: 0;
        `:a`
          right: 0;
          top: 0;
          bottom: 0;
        `,t=n==="left"?a`
          mask-image: linear-gradient(90deg, #000 0, transparent);
        `:a`
          mask-image: linear-gradient(-90deg, #000 0, transparent);
        `;return a`
    background: transparent;
    color: ${y("grayBlue","02")};
    position: absolute;
    width: 28px;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${t};
    ${u};
  `}function We(n,u,t){const r=t?a`
        color: ${y("grayBlue","05")};
      `:u?a`
        color: ${y(n,"03")};
        font-weight: 500;
      `:a`
        color: ${y("grayBlue","02")};
      `;return a`
    cursor: ${t?"not-allowed":"pointer"};
    height: 48px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    ${r};
  `}function ve(n,u,t){const r=t?a`
        color: ${y("grayBlue","05")};
      `:u?a`
        color: ${y(n,"03")};
        font-weight: 500;

        &:hover {
          .horizontalLine {
            opacity: 1;
          }
        }
      `:a`
        color: ${y("grayBlue","02")};

        &:hover {
          .horizontalLine {
            opacity: 1;
          }
        }
      `;return a`
    cursor: ${t?"not-allowed":"pointer"};
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    flex-direction: row;
    ${r};
  `}function xe(n,u,t){const r=u&&!t?a`
          opacity: 1;
        `:a`
          opacity: 0;
        `;return a`
    position: absolute;
    transition: opacity 0.2s ease-in-out;
    bottom: 0;
    height: 2px;
    left: 0;
    right: 0;
    background-color: ${y(n,"03")};
    ${r};
  `}function se(n){return a`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  margin-right: ${n?"0":"8px"}};
`}const de=a`
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
`,F=v.createContext({});F.displayName="MenuContext";const Z=v.forwardRef((n,u)=>{const{children:t,opened:r,selected:q,disabled:f,hidden:b,icon:S,label:h,onVisibleChange:m,...c}=n,i=v.useContext(F),V=(i==null?void 0:i.colorScheme)??"blue",z=(i==null?void 0:i.onlyShowIcon)??!1;return b?null:e(Me,{trigger:"hover",position:"bottom-start",popupVisible:r,disabled:f,onVisibleChange:m,dropList:t,children:C("div",{css:[ve(V,q,f),J(c)],ref:u,...$(c),children:[S&&e("span",{css:se(z),children:S}),!z&&h&&e("span",{css:de,children:h}),t&&e(he,{ml:"8px",fs:"14px"}),e("div",{css:xe(V,q,f),className:"horizontalLine"})]})})});Z.displayName="HorizontalSubMenu";try{Z.displayName="HorizontalSubMenu",Z.__docgenInfo={description:"",displayName:"HorizontalSubMenu",props:{opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"MenuItemProps[]"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const ee=v.forwardRef((n,u)=>{const{selected:t,disabled:r,icon:q,label:f,value:b,hidden:S,...h}=n,m=v.useContext(F),c=(m==null?void 0:m.colorScheme)??"blue",i=(m==null?void 0:m.onlyShowIcon)??!1;return S?null:C("div",{css:[ve(c,t,r),J(h)],ref:u,...$(h),children:[q&&e("span",{css:se(i),children:q}),!i&&f&&e("span",{css:de,children:f}),e("div",{css:xe(c,t,r),className:"horizontalLine"})]})});ee.displayName="HorizontalMenuItem";try{ee.displayName="HorizontalMenuItem",ee.__docgenInfo={description:"",displayName:"HorizontalMenuItem",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const le=v.forwardRef((n,u)=>{const{defaultOpenedSubMenuValues:t,defaultSelectedValues:r,openedSubMenuValues:q,selectedValues:f,colorScheme:b="blue",hoverColorScheme:S="grayBlue",onClickSubMenu:h,onClickMenuItem:m,horizontalAlign:c="flex-start",items:i,onMenuSelect:V,onlyShowIcon:z,...L}=n,[w,A]=N([],{defaultValue:t,value:q}),[_,D]=N([],{defaultValue:r,value:f}),E=[],G=[];i==null||i.forEach(l=>{var P;if("children"in l||"subItems"in l||"opened"in l){const M=l;(P=M.subItems)==null||P.forEach(Y=>{r!=null&&r.includes(Y.value)&&E.push(M.value),f!=null&&f.includes(Y.value)&&G.push(M.value)})}});const[O,X]=N([],{defaultValue:r?E:void 0,value:f?G:void 0}),[W,s]=v.useState(!1),[k,B]=v.useState(!1),x=v.useRef(null),[p,re]=ze();v.useEffect(()=>{if(x.current){const{scrollWidth:l,clientWidth:P,scrollLeft:M}=x.current;P<l&&M+P<l?B(!0):B(!1)}},[re.width,k]);const d=i==null?void 0:i.map((l,P,M)=>{var Y;if("children"in l||"subItems"in l||"opened"in l){const g=l,Se=(Y=g.subItems)==null?void 0:Y.map((o,T,fe)=>e(Ie,{value:o.value,hoverColorScheme:S,disabled:o.disabled,hidden:o.hidden,title:C("div",{css:We(b,o.selected??_.some(we=>we===o.value),o.disabled),children:[o.icon&&e("span",{css:se(z),children:o.icon}),o.label&&e("span",{css:de,children:o.label})]})},o.value));return e(Z,{ml:P!==0?"16px":"0",value:g.value,icon:g.icon,label:g.label,disabled:g.disabled,hidden:g.hidden,selected:g.selected??O.some(o=>o===g.value),opened:g.opened??w.some(o=>o===g.value),onVisibleChange:o=>{q===void 0&&(o?w.includes(g.value)||A([...w,g.value]):A(w.filter(T=>T!==g.value)))},onClick:()=>{if(g.disabled)return;const o=new Set([...i==null?void 0:i.filter(T=>"opened"in T&&T.opened===!0).map(T=>T.value),...w]);h==null||h(g.value,[...o],[l.value])},children:e(Ce,{w:"100%",onClickItem:(o,T,fe)=>{m==null||m(o,[l.value,o],fe),_.includes(o)||(f===void 0&&D([o]),V==null||V(o,[g.value,o],[o])),O.includes(l.value)||f===void 0&&X([l.value])},children:Se})},g.value)}else return e(ee,{ml:P!==0?"16px":"0",value:l.value,icon:l.icon,label:l.label,disabled:l.disabled,hidden:l.hidden,selected:l.selected??_.some(g=>g===l.value),onClick:g=>{l.disabled||(m==null||m(l.value,[l.value],g),_.includes(l.value)||(f===void 0&&(D([l.value]),X([])),V==null||V(l.value,[l.value],[l.value])))}},l.value)});return e(F.Provider,{value:{colorScheme:b,hoverColorScheme:S,onlyShowIcon:z},children:C("div",{css:[Te,J(L)],ref:_e(u,p),...$(L),children:[e("div",{ref:x,css:Fe(c,W||k),onScroll:l=>{l.currentTarget.scrollLeft>0?W||s(!0):W&&s(!1),l.currentTarget.scrollLeft+l.currentTarget.clientWidth>=l.currentTarget.scrollWidth&&k&&B(!1),l.currentTarget.clientWidth<l.currentTarget.scrollWidth&&(k||B(!0))},children:d}),e(te,{initial:!1,children:W&&e(ue.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exit:{opacity:0},css:me("left"),onClick:()=>{var l;x.current&&((l=x.current)==null||l.scrollBy({left:-x.current.clientWidth,behavior:"smooth"}))},children:e(ke,{})})}),e(te,{initial:!1,children:k&&e(ue.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exit:{opacity:0},css:me("right"),onClick:()=>{var l;x.current&&((l=x.current)==null||l.scrollBy({left:x.current.clientWidth,behavior:"smooth"}))},children:e(Be,{})})})]})})});le.displayName="HorizontalMenu";try{le.displayName="HorizontalMenu",le.__docgenInfo={description:"",displayName:"HorizontalMenu",props:{horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},hoverColorScheme:{defaultValue:null,description:"",name:"hoverColorScheme",required:!1,type:{name:"string"}},onlyShowIcon:{defaultValue:null,description:"",name:"onlyShowIcon",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"MenuItemType[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},defaultOpenedSubMenuValues:{defaultValue:null,description:"",name:"defaultOpenedSubMenuValues",required:!1,type:{name:"string[]"}},defaultSelectedValues:{defaultValue:null,description:"",name:"defaultSelectedValues",required:!1,type:{name:"string[]"}},openedSubMenuValues:{defaultValue:null,description:"",name:"openedSubMenuValues",required:!1,type:{name:"string[]"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!1,type:{name:"any[]"}},onClickMenuItem:{defaultValue:null,description:"",name:"onClickMenuItem",required:!1,type:{name:"(value: string, valuePath: string[], event: SyntheticEvent<Element, Event>) => void"}},onClickSubMenu:{defaultValue:null,description:"",name:"onClickSubMenu",required:!1,type:{name:"(value: string, openSubMenuValues: string[], valuePath: string[]) => void"}},onMenuSelect:{defaultValue:null,description:"",name:"onMenuSelect",required:!1,type:{name:"(value: string, valuePath: string[], selectedValues: string[]) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}function je(){return a`
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
  `}function Re(n,u,t,r){const q=r?a`
        color: ${y("grayBlue","05")};
      `:t?a`
        color: ${y(n,"03")};
        font-weight: 500;

        &:hover {
          background-color: ${y(u,"09")};
        }
      `:a`
        color: ${y("grayBlue","02")};

        &:hover {
          background-color: ${y(u,"09")};
        }
      `;return a`
    cursor: ${r?"not-allowed":"pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 24px;
    flex-direction: row;
    ${q};
  `}function He(n,u,t,r,q){const f=r?a`
        color: ${y("grayBlue","05")};
      `:t?a`
        color: ${y(n,"03")};
        font-weight: 500;

        &:hover {
          background-color: ${y(u,"09")};
        }
      `:a`
        color: ${y("grayBlue","02")};

        &:hover {
          background-color: ${y(u,"09")};
        }
      `,b=q?a`
        padding: 0 24px 0 40px;
      `:a`
        padding: 0 24px 0 24px;
      `;return a`
    cursor: ${r?"not-allowed":"pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    padding: 0 24px 0 40px;
    height: 48px;
    flex-direction: row;
    ${f};
    ${b};
  `}const Ne=a`
  flex-grow: 1;
`,oe=a`
  font-size: 14px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`,pe=a`
  overflow-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  flex-shrink: 1;
`,$e=a`
  display: flex;
  padding: 8px 0;
  overflow-y: hidden;
  border-radius: 2px;
  width: 200px;
  flex-direction: column;
`;function Le(n,u,t){const r=t?a`
        color: ${y("grayBlue","05")};
      `:u?a`
        color: ${y(n,"03")};
        font-weight: 500;
      `:a`
        color: ${y("grayBlue","02")};
      `;return a`
    cursor: ${t?"not-allowed":"pointer"};
    height: 48px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    ${r};
  `}const ne=v.forwardRef((n,u)=>{const{children:t,opened:r,selected:q,disabled:f,icon:b,label:S,hidden:h,onVisibleChange:m,...c}=n,i=v.useContext(F),V=(i==null?void 0:i.colorScheme)??"blue",z=(i==null?void 0:i.hoverColorScheme)??"grayBlue";return h?null:C(ie,{children:[C("div",{css:Re(V,z,q,f),ref:u,...$(c),children:[b&&e("span",{css:oe,children:b}),S&&e("span",{css:pe,children:S}),e("div",{css:Ne}),t&&r?e(Pe,{flexShrink:"0",ml:"8px",fs:"14px"}):e(he,{flexShrink:"0",ml:"8px",fs:"14px"})]}),e(te,{children:r&&e(ue.div,{css:je(),initial:{height:0},animate:{height:"auto"},transition:{duration:.2},exit:{height:0},children:t})})]})});ne.displayName="VerticalSubMenu";try{ne.displayName="VerticalSubMenu",ne.__docgenInfo={description:"",displayName:"VerticalSubMenu",props:{opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"MenuItemProps[]"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const U=v.forwardRef((n,u)=>{const{selected:t,disabled:r,icon:q,label:f,value:b,sub:S,hidden:h,...m}=n,c=v.useContext(F),i=(c==null?void 0:c.colorScheme)??"blue",V=(c==null?void 0:c.hoverColorScheme)??"grayBlue";return h?null:C("div",{css:[He(i,V,t,r,S),J(m)],ref:u,...$(m),children:[q&&e("span",{css:oe,children:q}),f&&e("span",{css:pe,children:f})]})});U.displayName="VerticalMenuItem";try{U.displayName="VerticalMenuItem",U.__docgenInfo={description:"",displayName:"VerticalMenuItem",props:{sub:{defaultValue:null,description:"",name:"sub",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const ae=v.forwardRef((n,u)=>{const{defaultOpenedSubMenuValues:t,defaultSelectedValues:r,hoverColorScheme:q="grayBlue",openedSubMenuValues:f,selectedValues:b,horizontalAlign:S,colorScheme:h="blue",onClickSubMenu:m,onClickMenuItem:c,items:i,onMenuSelect:V,onlyShowIcon:z,...L}=n,[w,A]=N([],{defaultValue:t,value:f}),[_,D]=N([],{defaultValue:r,value:b}),E=[],G=[];i==null||i.forEach(s=>{var k;if("children"in s||"subItems"in s||"opened"in s){const B=s;(k=B.subItems)==null||k.forEach(x=>{r!=null&&r.includes(x.value)&&E.push(B.value),b!=null&&b.includes(x.value)&&G.push(B.value)})}});const[O,X]=N([],{defaultValue:r?E:void 0,value:b?G:void 0}),W=i==null?void 0:i.map((s,k,B)=>{var x;if("children"in s||"subItems"in s||"opened"in s){const p=s,re=(x=p.subItems)==null?void 0:x.map((d,l,P)=>e(U,{value:d.value,sub:!0,disabled:d.disabled,hidden:d.hidden,onClick:M=>{d.disabled||(c==null||c(d.value,[p.value,d.value],M),_.includes(d.value)||(b===void 0&&D([d.value]),V==null||V(d.value,[p.value,d.value],[d.value])),O.includes(p.value)||b===void 0&&X([p.value]))},label:C("div",{css:Le(h,d.selected??_.some(M=>M===d.value),d.disabled),children:[d.icon&&e("span",{css:oe,children:d.icon}),d.label&&e("span",{css:pe,children:d.label})]})},d.value));return e(ne,{value:p.value,icon:p.icon,label:p.label,disabled:p.disabled,hidden:p.hidden,selected:p.selected??O.some(d=>d===p.value),opened:p.opened??w.some(d=>d===p.value),onClick:()=>{if(p.disabled)return;const d=new Set([...i==null?void 0:i.filter(l=>"opened"in l&&l.opened===!0).map(l=>l.value),...w]);m==null||m(p.value,[...d],[s.value]),f===void 0&&(w.includes(p.value)?A(w.filter(l=>l!==p.value)):A([...w,p.value]))},children:re},p.value)}else return e(U,{value:s.value,icon:s.icon,label:s.label,sub:!1,disabled:s.disabled,hidden:s.hidden,selected:s.selected??_.some(p=>p===s.value),onClick:p=>{s.disabled||(c==null||c(s.value,[s.value],p),_.includes(s.value)||(b===void 0&&(D([s.value]),X([])),V==null||V(s.value,[s.value],[s.value])))}},s.value)});return e(F.Provider,{value:{colorScheme:h,hoverColorScheme:q,onlyShowIcon:z},children:e("div",{css:[$e,J(L)],ref:u,...$(L),children:W})})});ae.displayName="VerticalMenu";try{ae.displayName="VerticalMenu",ae.__docgenInfo={description:"",displayName:"VerticalMenu",props:{horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},hoverColorScheme:{defaultValue:null,description:"",name:"hoverColorScheme",required:!1,type:{name:"string"}},onlyShowIcon:{defaultValue:null,description:"",name:"onlyShowIcon",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"MenuItemType[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},defaultOpenedSubMenuValues:{defaultValue:null,description:"",name:"defaultOpenedSubMenuValues",required:!1,type:{name:"string[]"}},defaultSelectedValues:{defaultValue:null,description:"",name:"defaultSelectedValues",required:!1,type:{name:"string[]"}},openedSubMenuValues:{defaultValue:null,description:"",name:"openedSubMenuValues",required:!1,type:{name:"string[]"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!1,type:{name:"any[]"}},onClickMenuItem:{defaultValue:null,description:"",name:"onClickMenuItem",required:!1,type:{name:"(value: string, valuePath: string[], event: SyntheticEvent<Element, Event>) => void"}},onClickSubMenu:{defaultValue:null,description:"",name:"onClickSubMenu",required:!1,type:{name:"(value: string, openSubMenuValues: string[], valuePath: string[]) => void"}},onMenuSelect:{defaultValue:null,description:"",name:"onMenuSelect",required:!1,type:{name:"(value: string, valuePath: string[], selectedValues: string[]) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const I=v.forwardRef((n,u)=>{const{mode:t="horizontal"}=n;switch(t){case"horizontal":return e(le,{ref:u,...n});case"vertical":return e(ae,{ref:u,...n})}return e(ie,{})});I.displayName="Menu";try{I.displayName="Menu",I.__docgenInfo={description:"",displayName:"Menu",props:{horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},hoverColorScheme:{defaultValue:null,description:"",name:"hoverColorScheme",required:!1,type:{name:"string"}},onlyShowIcon:{defaultValue:null,description:"",name:"onlyShowIcon",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"MenuItemType[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},defaultOpenedSubMenuValues:{defaultValue:null,description:"",name:"defaultOpenedSubMenuValues",required:!1,type:{name:"string[]"}},defaultSelectedValues:{defaultValue:null,description:"",name:"defaultSelectedValues",required:!1,type:{name:"string[]"}},openedSubMenuValues:{defaultValue:null,description:"",name:"openedSubMenuValues",required:!1,type:{name:"string[]"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!1,type:{name:"any[]"}},onClickMenuItem:{defaultValue:null,description:"",name:"onClickMenuItem",required:!1,type:{name:"(value: string, valuePath: string[], event: SyntheticEvent<Element, Event>) => void"}},onClickSubMenu:{defaultValue:null,description:"",name:"onClickSubMenu",required:!1,type:{name:"(value: string, openSubMenuValues: string[], valuePath: string[]) => void"}},onMenuSelect:{defaultValue:null,description:"",name:"onMenuSelect",required:!1,type:{name:"(value: string, valuePath: string[], selectedValues: string[]) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const gl={title:"NAVIGATION/Menu",component:I},K=n=>C(ie,{children:[e(I,{mode:"vertical",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"},{value:"third:third",label:"Third",disabled:!0}]},{value:"second",label:"Second",disabled:!0},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20},mode:"vertical",selectedValues:["first:first"],items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20,width:"200px"},mode:"vertical",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n})]}),Q=n=>C(ie,{children:[e(I,{mode:"horizontal",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"},{value:"third:third",label:"Third",disabled:!0}]},{value:"second",label:"Second",disabled:!0},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20},mode:"horizontal",selectedValues:["first:first"],items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20,width:"200px"},mode:"horizontal",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n})]});var ce,ge,ye;K.parameters={...K.parameters,docs:{...(ce=K.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
  return <>
      <Menu mode="vertical" items={[({
      value: "first",
      label: "First",
      icon: <AiFillFacebook />,
      subItems: [({
        value: "first:first",
        label: "First",
        icon: <AiFillInstagram />
      } as MenuItemProps), ({
        value: "second:second",
        label: "Second"
      } as MenuItemProps), ({
        value: "third:third",
        label: "Third",
        disabled: true
      } as MenuItemProps)]
    } as SubMenuProps), ({
      value: "second",
      label: "Second",
      disabled: true
    } as MenuItemProps), ({
      icon: <BsTwitter />,
      value: "third",
      label: "Third"
    } as MenuItemProps)]} {...args} />
      <Menu style={{
      marginTop: 20
    }} mode="vertical" selectedValues={["first:first"]} items={[({
      value: "first",
      label: "First",
      icon: <AiFillFacebook />,
      subItems: [({
        value: "first:first",
        label: "First",
        icon: <AiFillInstagram />
      } as MenuItemProps), ({
        value: "second:second",
        label: "Second"
      } as MenuItemProps)]
    } as SubMenuProps), ({
      value: "second",
      label: "Second"
    } as MenuItemProps), ({
      icon: <BsTwitter />,
      value: "third",
      label: "Third"
    } as MenuItemProps)]} {...args} />
      <Menu style={{
      marginTop: 20,
      width: "200px"
    }} mode="vertical" items={[({
      value: "first",
      label: "First",
      icon: <AiFillFacebook />,
      subItems: [({
        value: "first:first",
        label: "First",
        icon: <AiFillInstagram />
      } as MenuItemProps), ({
        value: "second:second",
        label: "Second"
      } as MenuItemProps)]
    } as SubMenuProps), ({
      value: "second",
      label: "Second"
    } as MenuItemProps), ({
      icon: <BsTwitter />,
      value: "third",
      label: "Third"
    } as MenuItemProps)]} {...args} />
    </>;
}`,...(ye=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var be,Ve,qe;Q.parameters={...Q.parameters,docs:{...(be=Q.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  return <>
      <Menu mode="horizontal" items={[({
      value: "first",
      label: "First",
      icon: <AiFillFacebook />,
      subItems: [({
        value: "first:first",
        label: "First",
        icon: <AiFillInstagram />
      } as MenuItemProps), ({
        value: "second:second",
        label: "Second"
      } as MenuItemProps), ({
        value: "third:third",
        label: "Third",
        disabled: true
      } as MenuItemProps)]
    } as SubMenuProps), ({
      value: "second",
      label: "Second",
      disabled: true
    } as MenuItemProps), ({
      icon: <BsTwitter />,
      value: "third",
      label: "Third"
    } as MenuItemProps)]} {...args} />
      <Menu style={{
      marginTop: 20
    }} mode="horizontal" selectedValues={["first:first"]} items={[({
      value: "first",
      label: "First",
      icon: <AiFillFacebook />,
      subItems: [({
        value: "first:first",
        label: "First",
        icon: <AiFillInstagram />
      } as MenuItemProps), ({
        value: "second:second",
        label: "Second"
      } as MenuItemProps)]
    } as SubMenuProps), ({
      value: "second",
      label: "Second"
    } as MenuItemProps), ({
      icon: <BsTwitter />,
      value: "third",
      label: "Third"
    } as MenuItemProps)]} {...args} />
      <Menu style={{
      marginTop: 20,
      width: "200px"
    }} mode="horizontal" items={[({
      value: "first",
      label: "First",
      icon: <AiFillFacebook />,
      subItems: [({
        value: "first:first",
        label: "First",
        icon: <AiFillInstagram />
      } as MenuItemProps), ({
        value: "second:second",
        label: "Second"
      } as MenuItemProps)]
    } as SubMenuProps), ({
      value: "second",
      label: "Second"
    } as MenuItemProps), ({
      icon: <BsTwitter />,
      value: "third",
      label: "Third"
    } as MenuItemProps)]} {...args} />
    </>;
}`,...(qe=(Ve=Q.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};const yl=["Vertical","Horizontal"];export{Q as Horizontal,K as Vertical,yl as __namedExportsOrder,gl as default};
//# sourceMappingURL=menu.stories-8a5db95b.js.map
