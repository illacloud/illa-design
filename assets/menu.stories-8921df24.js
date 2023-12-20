import{a as e,j as C,F as te}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{a as j,b as R}from"./index.esm-aa9e73e6.js";import{b as H}from"./index.esm-52d37734.js";import{r as v}from"./index-1cdf6ce0.js";import{c as a,a as K,d as $,b as ee}from"./style-4011d251.js";import{g as x,a as L}from"./color-palette-83e58897.js";import{D as xe}from"./down-576466d9.js";import{D as Ce,a as ze,b as _e}from"./droplist-item-b17eac96.js";import{u as ke}from"./web-cc1a3eed.js";import{A as se}from"./index-4cd6a639.js";import{m as de}from"./use-force-update-497a924b.js";import{u as N}from"./use-merge-value-fcf53e13.js";import{m as Te}from"./merge-ref-e0695ca7.js";import{P as Be}from"./previous-5546111f.js";import{N as Pe}from"./next-aefb080b.js";import{U as Fe}from"./up-3a461bc7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./iconBase-4112cc44.js";import"./index-45a08ae3.js";import"./create-icon-e804097a.js";import"./trigger-7dad7e5e.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";const We=a`
  height: 48px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;function je(n,r){return a`
    display: flex;
    flex-direction: row;
    justify-content: ${r?"flex-start":n};
    overflow-x: auto;
    height: 100%;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  `}function ge(n){const r=n==="left"?a`
          left: 0;
          top: 0;
          bottom: 0;
        `:a`
          right: 0;
          top: 0;
          bottom: 0;
        `,u=n==="left"?a`
          mask-image: linear-gradient(90deg, #000 0, transparent);
        `:a`
          mask-image: linear-gradient(-90deg, #000 0, transparent);
        `;return a`
    background: transparent;
    color: ${x("grayBlue","02")};
    position: absolute;
    width: 28px;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${u};
    ${r};
  `}function Re(n,r,u){const t=u?a`
        color: ${x("grayBlue","05")};
      `:r?a`
        color: ${L(n)};
        font-weight: 500;
      `:a`
        color: ${x("grayBlue","02")};
      `;return a`
    cursor: ${u?"not-allowed":"pointer"};
    height: 48px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    ${t};
  `}function Se(n,r,u){const t=u?a`
        color: ${x("grayBlue","05")};
      `:r?a`
        color: ${L(n)};
        font-weight: 500;

        &:hover {
          .horizontalLine {
            opacity: 1;
          }
        }
      `:a`
        color: ${x("grayBlue","02")};

        &:hover {
          .horizontalLine {
            opacity: 1;
          }
        }
      `;return a`
    cursor: ${u?"not-allowed":"pointer"};
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    flex-direction: row;
    ${t};
  `}function we(n,r,u){const t=r&&!u?a`
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
    background-color: ${L(n)};
    ${t};
  `}function oe(n){return a`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    margin-right: ${n?"0":"8px"};
  `}const pe=a`
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
`,F=v.createContext({});F.displayName="MenuContext";const le=v.forwardRef((n,r)=>{const{children:u,opened:t,selected:V,disabled:f,hidden:y,icon:S,label:q,onVisibleChange:m,...c}=n,i=v.useContext(F),b=(i==null?void 0:i.colorScheme)??"blue",z=(i==null?void 0:i.onlyShowIcon)??!1;return y?null:e(Ce,{trigger:"hover",position:"bottom-start",popupVisible:t,disabled:f,onVisibleChange:m,dropList:u,children:C("div",{css:[Se(b,V,f),K(c)],ref:r,...$(c),children:[S&&e("span",{css:oe(z),children:S}),!z&&q&&e("span",{css:pe,children:q}),u&&e(xe,{ml:"8px",fs:"14px"}),e("div",{css:we(b,V,f),className:"horizontalLine"})]})})});le.displayName="HorizontalSubMenu";try{le.displayName="HorizontalSubMenu",le.__docgenInfo={description:"",displayName:"HorizontalSubMenu",props:{opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"MenuItemProps[]"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const ne=v.forwardRef((n,r)=>{const{selected:u,disabled:t,icon:V,label:f,value:y,hidden:S,...q}=n,m=v.useContext(F),c=(m==null?void 0:m.colorScheme)??"blue",i=(m==null?void 0:m.onlyShowIcon)??!1;return S?null:C("div",{css:[Se(c,u,t),K(q)],ref:r,...$(q),children:[V&&e("span",{css:oe(i),children:V}),!i&&f&&e("span",{css:pe,children:f}),e("div",{css:we(c,u,t),className:"horizontalLine"})]})});ne.displayName="HorizontalMenuItem";try{ne.displayName="HorizontalMenuItem",ne.__docgenInfo={description:"",displayName:"HorizontalMenuItem",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const ae=v.forwardRef((n,r)=>{const{defaultOpenedSubMenuValues:u,defaultSelectedValues:t,openedSubMenuValues:V,selectedValues:f,colorScheme:y="blue",hoverColorScheme:S="grayBlue",onClickSubMenu:q,onClickMenuItem:m,horizontalAlign:c="flex-start",items:i,onMenuSelect:b,onlyShowIcon:z,...A}=n,[w,D]=N([],{defaultValue:u,value:V}),[_,E]=N([],{defaultValue:t,value:f}),G=[],O=[];i==null||i.forEach(l=>{var B;if("children"in l||"subItems"in l||"opened"in l){const M=l;(B=M.subItems)==null||B.forEach(U=>{t!=null&&t.includes(U.value)&&G.push(M.value),f!=null&&f.includes(U.value)&&O.push(M.value)})}});const[X,Y]=N([],{defaultValue:t?G:void 0,value:f?O:void 0}),[W,s]=v.useState(!1),[k,T]=v.useState(!1),h=v.useRef(null),[p,ue]=ke();v.useEffect(()=>{if(h.current){const{scrollWidth:l,clientWidth:B,scrollLeft:M}=h.current;B<l&&M+B<l?T(!0):T(!1)}},[ue.width,k]);const d=i==null?void 0:i.map((l,B,M)=>{var U;if("children"in l||"subItems"in l||"opened"in l){const g=l,Me=(U=g.subItems)==null?void 0:U.map((o,P,ce)=>e(ze,{value:o.value,hoverColorScheme:S,disabled:o.disabled,hidden:o.hidden,title:C("div",{css:Re(y,o.selected??_.some(Ie=>Ie===o.value),o.disabled),children:[o.icon&&e("span",{css:oe(z),children:o.icon}),o.label&&e("span",{css:pe,children:o.label})]})},o.value));return e(le,{ml:B!==0?"16px":"0",value:g.value,icon:g.icon,label:g.label,disabled:g.disabled,hidden:g.hidden,selected:g.selected??X.some(o=>o===g.value),opened:g.opened??w.some(o=>o===g.value),onVisibleChange:o=>{V===void 0&&(o?w.includes(g.value)||D([...w,g.value]):D(w.filter(P=>P!==g.value)))},onClick:()=>{if(g.disabled)return;const o=new Set([...i==null?void 0:i.filter(P=>"opened"in P&&P.opened===!0).map(P=>P.value),...w]);q==null||q(g.value,[...o],[l.value])},children:e(_e,{w:"100%",onClickItem:(o,P,ce)=>{m==null||m(o,[l.value,o],ce),_.includes(o)||(f===void 0&&E([o]),b==null||b(o,[g.value,o],[o])),X.includes(l.value)||f===void 0&&Y([l.value])},children:Me})},g.value)}else return e(ne,{ml:B!==0?"16px":"0",value:l.value,icon:l.icon,label:l.label,disabled:l.disabled,hidden:l.hidden,selected:l.selected??_.some(g=>g===l.value),onClick:g=>{l.disabled||(m==null||m(l.value,[l.value],g),_.includes(l.value)||(f===void 0&&(E([l.value]),Y([])),b==null||b(l.value,[l.value],[l.value])))}},l.value)});return e(F.Provider,{value:{colorScheme:y,hoverColorScheme:S,onlyShowIcon:z},children:C("div",{css:[We,K(A)],ref:Te(r,p),...$(A),children:[e("div",{ref:h,css:je(c,W||k),onScroll:l=>{l.currentTarget.scrollLeft>0?W||s(!0):W&&s(!1),l.currentTarget.scrollLeft+l.currentTarget.clientWidth>=l.currentTarget.scrollWidth&&k&&T(!1),l.currentTarget.clientWidth<l.currentTarget.scrollWidth&&(k||T(!0))},children:d}),e(se,{initial:!1,children:W&&e(de.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exit:{opacity:0},css:ge("left"),onClick:()=>{var l;h.current&&((l=h.current)==null||l.scrollBy({left:-h.current.clientWidth,behavior:"smooth"}))},children:e(Be,{})})}),e(se,{initial:!1,children:k&&e(de.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},exit:{opacity:0},css:ge("right"),onClick:()=>{var l;h.current&&((l=h.current)==null||l.scrollBy({left:h.current.clientWidth,behavior:"smooth"}))},children:e(Pe,{})})})]})})});ae.displayName="HorizontalMenu";try{ae.displayName="HorizontalMenu",ae.__docgenInfo={description:"",displayName:"HorizontalMenu",props:{horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},hoverColorScheme:{defaultValue:null,description:"",name:"hoverColorScheme",required:!1,type:{name:"string"}},onlyShowIcon:{defaultValue:null,description:"",name:"onlyShowIcon",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"MenuItemType[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},defaultOpenedSubMenuValues:{defaultValue:null,description:"",name:"defaultOpenedSubMenuValues",required:!1,type:{name:"string[]"}},defaultSelectedValues:{defaultValue:null,description:"",name:"defaultSelectedValues",required:!1,type:{name:"string[]"}},openedSubMenuValues:{defaultValue:null,description:"",name:"openedSubMenuValues",required:!1,type:{name:"string[]"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!1,type:{name:"any[]"}},onClickMenuItem:{defaultValue:null,description:"",name:"onClickMenuItem",required:!1,type:{name:"(value: string, valuePath: string[], event: SyntheticEvent<Element, Event>) => void"}},onClickSubMenu:{defaultValue:null,description:"",name:"onClickSubMenu",required:!1,type:{name:"(value: string, openSubMenuValues: string[], valuePath: string[]) => void"}},onMenuSelect:{defaultValue:null,description:"",name:"onMenuSelect",required:!1,type:{name:"(value: string, valuePath: string[], selectedValues: string[]) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}function He(){return a`
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
  `}function Ne(n,r,u,t){const V=t?a`
        color: ${x("grayBlue","05")};
      `:u?a`
        color: ${L(n)};
        font-weight: 500;

        &:hover {
          background-color: ${x(r,ee(r)?"09":"08")};
        }
      `:a`
        color: ${x("grayBlue","02")};

        &:hover {
          background-color: ${x(r,ee(r)?"09":"08")};
        }
      `;return a`
    cursor: ${t?"not-allowed":"pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 24px;
    flex-direction: row;
    ${V};
  `}function $e(n,r,u,t,V){const f=t?a`
        color: ${x("grayBlue","05")};
      `:u?a`
        color: ${L(n)};
        font-weight: 500;

        &:hover {
          background-color: ${x(r,ee(r)?"09":"08")};
        }
      `:a`
        color: ${x("grayBlue","02")};

        &:hover {
          background-color: ${x(r,ee(r)?"09":"08")};
        }
      `,y=V?a`
        padding: 0 24px 0 40px;
      `:a`
        padding: 0 24px 0 24px;
      `;return a`
    cursor: ${t?"not-allowed":"pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    padding: 0 24px 0 40px;
    height: 48px;
    flex-direction: row;
    ${f};
    ${y};
  `}const Le=a`
  flex-grow: 1;
`,fe=a`
  font-size: 14px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`,me=a`
  overflow-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  flex-shrink: 1;
`,Ae=a`
  display: flex;
  padding: 8px 0;
  overflow-y: hidden;
  border-radius: 2px;
  width: 200px;
  flex-direction: column;
`;function De(n,r,u){const t=u?a`
        color: ${x("grayBlue","05")};
      `:r?a`
        color: ${L(n)};
        font-weight: 500;
      `:a`
        color: ${x("grayBlue","02")};
      `;return a`
    cursor: ${u?"not-allowed":"pointer"};
    height: 48px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    ${t};
  `}const ie=v.forwardRef((n,r)=>{const{children:u,opened:t,selected:V,disabled:f,icon:y,label:S,hidden:q,onVisibleChange:m,...c}=n,i=v.useContext(F),b=(i==null?void 0:i.colorScheme)??"blue",z=(i==null?void 0:i.hoverColorScheme)??"grayBlue";return q?null:C(te,{children:[C("div",{css:Ne(b,z,V,f),ref:r,...$(c),children:[y&&e("span",{css:fe,children:y}),S&&e("span",{css:me,children:S}),e("div",{css:Le}),u&&t?e(Fe,{flexShrink:"0",ml:"8px",fs:"14px"}):e(xe,{flexShrink:"0",ml:"8px",fs:"14px"})]}),e(se,{children:t&&e(de.div,{css:He(),initial:{height:0},animate:{height:"auto"},transition:{duration:.2},exit:{height:0},children:u})})]})});ie.displayName="VerticalSubMenu";try{ie.displayName="VerticalSubMenu",ie.__docgenInfo={description:"",displayName:"VerticalSubMenu",props:{opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},subItems:{defaultValue:null,description:"",name:"subItems",required:!1,type:{name:"MenuItemProps[]"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const J=v.forwardRef((n,r)=>{const{selected:u,disabled:t,icon:V,label:f,value:y,sub:S,hidden:q,...m}=n,c=v.useContext(F),i=(c==null?void 0:c.colorScheme)??"blue",b=(c==null?void 0:c.hoverColorScheme)??"grayBlue";return q?null:C("div",{css:[$e(i,b,u,t,S),K(m)],ref:r,...$(m),children:[V&&e("span",{css:fe,children:V}),f&&e("span",{css:me,children:f})]})});J.displayName="VerticalMenuItem";try{J.displayName="VerticalMenuItem",J.__docgenInfo={description:"",displayName:"VerticalMenuItem",props:{sub:{defaultValue:null,description:"",name:"sub",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const re=v.forwardRef((n,r)=>{const{defaultOpenedSubMenuValues:u,defaultSelectedValues:t,hoverColorScheme:V="grayBlue",openedSubMenuValues:f,selectedValues:y,horizontalAlign:S,colorScheme:q="blue",onClickSubMenu:m,onClickMenuItem:c,items:i,onMenuSelect:b,onlyShowIcon:z,...A}=n,[w,D]=N([],{defaultValue:u,value:f}),[_,E]=N([],{defaultValue:t,value:y}),G=[],O=[];i==null||i.forEach(s=>{var k;if("children"in s||"subItems"in s||"opened"in s){const T=s;(k=T.subItems)==null||k.forEach(h=>{t!=null&&t.includes(h.value)&&G.push(T.value),y!=null&&y.includes(h.value)&&O.push(T.value)})}});const[X,Y]=N([],{defaultValue:t?G:void 0,value:y?O:void 0}),W=i==null?void 0:i.map((s,k,T)=>{var h;if("children"in s||"subItems"in s||"opened"in s){const p=s,ue=(h=p.subItems)==null?void 0:h.map((d,l,B)=>e(J,{value:d.value,sub:!0,disabled:d.disabled,hidden:d.hidden,onClick:M=>{d.disabled||(c==null||c(d.value,[p.value,d.value],M),_.includes(d.value)||(y===void 0&&E([d.value]),b==null||b(d.value,[p.value,d.value],[d.value])),X.includes(p.value)||y===void 0&&Y([p.value]))},label:C("div",{css:De(q,d.selected??_.some(M=>M===d.value),d.disabled),children:[d.icon&&e("span",{css:fe,children:d.icon}),d.label&&e("span",{css:me,children:d.label})]})},d.value));return e(ie,{value:p.value,icon:p.icon,label:p.label,disabled:p.disabled,hidden:p.hidden,selected:p.selected??X.some(d=>d===p.value),opened:p.opened??w.some(d=>d===p.value),onClick:()=>{if(p.disabled)return;const d=new Set([...i==null?void 0:i.filter(l=>"opened"in l&&l.opened===!0).map(l=>l.value),...w]);m==null||m(p.value,[...d],[s.value]),f===void 0&&(w.includes(p.value)?D(w.filter(l=>l!==p.value)):D([...w,p.value]))},children:ue},p.value)}else return e(J,{value:s.value,icon:s.icon,label:s.label,sub:!1,disabled:s.disabled,hidden:s.hidden,selected:s.selected??_.some(p=>p===s.value),onClick:p=>{s.disabled||(c==null||c(s.value,[s.value],p),_.includes(s.value)||(y===void 0&&(E([s.value]),Y([])),b==null||b(s.value,[s.value],[s.value])))}},s.value)});return e(F.Provider,{value:{colorScheme:q,hoverColorScheme:V,onlyShowIcon:z},children:e("div",{css:[Ae,K(A)],ref:r,...$(A),children:W})})});re.displayName="VerticalMenu";try{re.displayName="VerticalMenu",re.__docgenInfo={description:"",displayName:"VerticalMenu",props:{horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},hoverColorScheme:{defaultValue:null,description:"",name:"hoverColorScheme",required:!1,type:{name:"string"}},onlyShowIcon:{defaultValue:null,description:"",name:"onlyShowIcon",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"MenuItemType[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},defaultOpenedSubMenuValues:{defaultValue:null,description:"",name:"defaultOpenedSubMenuValues",required:!1,type:{name:"string[]"}},defaultSelectedValues:{defaultValue:null,description:"",name:"defaultSelectedValues",required:!1,type:{name:"string[]"}},openedSubMenuValues:{defaultValue:null,description:"",name:"openedSubMenuValues",required:!1,type:{name:"string[]"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!1,type:{name:"any[]"}},onClickMenuItem:{defaultValue:null,description:"",name:"onClickMenuItem",required:!1,type:{name:"(value: string, valuePath: string[], event: SyntheticEvent<Element, Event>) => void"}},onClickSubMenu:{defaultValue:null,description:"",name:"onClickSubMenu",required:!1,type:{name:"(value: string, openSubMenuValues: string[], valuePath: string[]) => void"}},onMenuSelect:{defaultValue:null,description:"",name:"onMenuSelect",required:!1,type:{name:"(value: string, valuePath: string[], selectedValues: string[]) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const I=v.forwardRef((n,r)=>{const{mode:u="horizontal"}=n;switch(u){case"horizontal":return e(ae,{ref:r,...n});case"vertical":return e(re,{ref:r,...n})}return e(te,{})});I.displayName="Menu";try{I.displayName="Menu",I.__docgenInfo={description:"",displayName:"Menu",props:{horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},hoverColorScheme:{defaultValue:null,description:"",name:"hoverColorScheme",required:!1,type:{name:"string"}},onlyShowIcon:{defaultValue:null,description:"",name:"onlyShowIcon",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"MenuItemType[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},defaultOpenedSubMenuValues:{defaultValue:null,description:"",name:"defaultOpenedSubMenuValues",required:!1,type:{name:"string[]"}},defaultSelectedValues:{defaultValue:null,description:"",name:"defaultSelectedValues",required:!1,type:{name:"string[]"}},openedSubMenuValues:{defaultValue:null,description:"",name:"openedSubMenuValues",required:!1,type:{name:"string[]"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!1,type:{name:"any[]"}},onClickMenuItem:{defaultValue:null,description:"",name:"onClickMenuItem",required:!1,type:{name:"(value: string, valuePath: string[], event: SyntheticEvent<Element, Event>) => void"}},onClickSubMenu:{defaultValue:null,description:"",name:"onClickSubMenu",required:!1,type:{name:"(value: string, openSubMenuValues: string[], valuePath: string[]) => void"}},onMenuSelect:{defaultValue:null,description:"",name:"onMenuSelect",required:!1,type:{name:"(value: string, valuePath: string[], selectedValues: string[]) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const Vl={title:"NAVIGATION/Menu",component:I},Q=n=>C(te,{children:[e(I,{mode:"vertical",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"},{value:"third:third",label:"Third",disabled:!0}]},{value:"second",label:"Second",disabled:!0},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20},mode:"vertical",selectedValues:["first:first"],items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20,width:"200px"},mode:"vertical",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n})]}),Z=n=>C(te,{children:[e(I,{mode:"horizontal",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"},{value:"third:third",label:"Third",disabled:!0}]},{value:"second",label:"Second",disabled:!0},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20},mode:"horizontal",selectedValues:["first:first"],items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n}),e(I,{style:{marginTop:20,width:"200px"},mode:"horizontal",items:[{value:"first",label:"First",icon:e(j,{}),subItems:[{value:"first:first",label:"First",icon:e(R,{})},{value:"second:second",label:"Second"}]},{value:"second",label:"Second"},{icon:e(H,{}),value:"third",label:"Third"}],...n})]});var ye,be,Ve;Q.parameters={...Q.parameters,docs:{...(ye=Q.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
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
}`,...(Ve=(be=Q.parameters)==null?void 0:be.docs)==null?void 0:Ve.source}}};var qe,ve,he;Z.parameters={...Z.parameters,docs:{...(qe=Z.parameters)==null?void 0:qe.docs,source:{originalSource:`args => {
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
}`,...(he=(ve=Z.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const ql=["Vertical","Horizontal"];export{Z as Horizontal,Q as Vertical,ql as __namedExportsOrder,Vl as default};
//# sourceMappingURL=menu.stories-8921df24.js.map
