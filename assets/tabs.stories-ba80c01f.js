import{a as o,j as I}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as s}from"./index-1cdf6ce0.js";import{c as a}from"./style-3ea54b04.js";import{g as d}from"./color-palette-728b424e.js";import{m as Q}from"./motion-96d4cd12.js";import{C as Z}from"./close-b3537d01.js";import{U as ee}from"./up-1088cd79.js";import{P}from"./previous-80a0198e.js";import{D as te}from"./down-3d8ebd18.js";import{I as ne}from"./info-0c29ba8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./create-icon-907f0980.js";const E=s.createContext({}),j=t=>{const{children:l,...e}=t;return o(E.Provider,{value:{...e},children:l})};j.displayName="TabsProvider";try{j.displayName="TabsProvider",j.__docgenInfo={description:"",displayName:"TabsProvider",props:{selectedKey:{defaultValue:null,description:"",name:"selectedKey",required:!1,type:{name:"string"}},handleSelectTab:{defaultValue:null,description:"",name:"handleSelectTab",required:!0,type:{name:"(key: string) => void"}},handleDeleteTab:{defaultValue:null,description:"",name:"handleDeleteTab",required:!0,type:{name:"(key: string) => void"}},tabPosition:{defaultValue:null,description:"",name:"tabPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"line"'},{value:'"capsule"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string"}},deleteIcon:{defaultValue:null,description:"",name:"deleteIcon",required:!1,type:{name:"ReactNode"}},tabBarSpacing:{defaultValue:null,description:"",name:"tabBarSpacing",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(key: string) => void"}},onClickTab:{defaultValue:null,description:"",name:"onClickTab",required:!1,type:{name:"(key: string) => void"}},onDeleteTab:{defaultValue:null,description:"",name:"onDeleteTab",required:!1,type:{name:"(key: string) => void"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},withoutContent:{defaultValue:null,description:"",name:"withoutContent",required:!1,type:{name:"boolean"}},withoutBorderLine:{defaultValue:null,description:"",name:"withoutBorderLine",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const b=t=>t==="left"||t==="right",ae=(t,l)=>{let e,r,n;switch(l){default:case"line":e="4px";break;case"capsule":e="16px";break;case"text":e="4px";break}switch(t){case"small":l==="line"?(r="1px",n="4px"):(r="1px",n="0");break;case"large":l==="line"?(r="1px",n="8px"):l==="capsule"?(r="7px",n="0"):(r="1px",n="0");break;case"medium":default:l==="line"?(r="1px",n="6px"):l==="capsule"?(r="5px",n="0"):(r="1px",n="0")}return a`
    padding: ${r} ${e};
    margin: ${n} 0;
  `},le=(t,l,e,r)=>{let n;b(t)?n=a`
      display: grid;
      justify-content: ${t==="left"?"flex-start":"flex-end"};
      grid-template-columns: max-content;
      grid-auto-rows: minmax(0, max-content);
    `:n=a`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: ${l};
    `;let i;return e==="line"&&!r&&(t==="top"?i=a`
        border-bottom: 1px solid ${d("grayBlue","08")};
      `:t==="bottom"&&(i=a`
        border-top: 1px solid ${d("grayBlue","08")};
      `)),a`
    width: 100%;
    gap: 4px;
    ${n};
    overflow: hidden;
    position: relative;
    ${i};
  `},re=(t,l,e,r,n)=>{let i;switch(e){case"text":i=`
        gap: ${l??8}px;
        background-color: ${d("white","01")};
      `;break;case"capsule":i=`
        gap: ${l??4}px;
        background-color: ${d("grayBlue","09")};
        padding: 4px;
      `;break;default:case"line":i=a`
        background-color: ${d("white","01")};
        gap: ${l??0}px;
      `;break}let u;b(t)?u=a`
      display: grid;
      justify-content: center;
      grid-template-columns: max-content;
      grid-auto-rows: minmax(0, max-content);
    `:u=a`
      display: flex;
      align-items: center;
    `;let p;return e==="line"&&!n&&(t==="left"?p=a`
        border-right: 1px solid ${d("grayBlue","08")};
      `:t==="right"&&(p=a`
        border-left: 1px solid ${d("grayBlue","08")};
      `)),a`
    border-radius: 4px;
    flex: none;
    ${i};
    ${u};
    ${p};
    transform: translateX(${r}px);
    transition: all 0.3s ease-in-out;
  `},K=t=>{let l;return t==="previous"?l=a`
      left: 0;
    `:l=a`
      right: 0;
    `,a`
    display: flex;
    flex: none;
    height: 100%;
    position: absolute;
    z-index: 1;
    ${l};
    justify-content: center;
    background-color: ${d("white","01")};
    cursor: pointer;
  `},ie=a`
  transform: rotate(180deg);
`,ue=(t,l)=>{let e;switch(t){default:case"line":e="0px 12px";break;case"text":case"capsule":e="0";break}return a`
      display: flex;
      flex-direction: ${l==="left"?"row-reverse":"row"};
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      padding: ${e};
      /* cursor: pointer; */
    `},se=(t,l,e,r,n)=>{let i="row";l==="left"&&(i="row-reverse");let u;n&&(u=`
    background-color: ${d("white","01")};
    `);let p;return r?p=a`
      cursor: not-allowed;
    `:n?p=a`
      cursor: default;
    `:e==="line"||e==="text"?p=a`
      background-color: ${d("grayBlue","09")};
      cursor: pointer;
    `:p=a`
      background-color: ${d("white","01")};
      cursor: pointer;
    `,a`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${d("grayBlue","03")};
    ${ae(t,e)};
    flex-direction: ${i};
    border-radius: 4px;
    position: relative;
    ${u};
    &:hover {
      ${p};
    }
  `},oe=t=>a`
    display: flex;
    width: ${b(t)?"100%":"auto"};
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    flex: none;
    position: relative;
  `,de=(t,l,e,r,n)=>{let i;return r?i=a`
      background: ${r};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: ${r??d(e??"blue","02")};
      font-weight: 500;
      color: transparent;
    `:t?i=a`
      color: ${d("grayBlue","05")};
      cursor: not-allowed;
    `:l&&(n?i=a`
        background: ${n};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: ${n??d(e??"blue","02")};
        font-weight: 500;
        color: transparent;
      `:i=a`
        color: ${d(e??"blue","02")};
        font-weight: 500;
      `),a`
    ${i};
    display: flex;
    align-items: center;
    & svg {
      width: 16px;
    }
  `},ce=(t,l,e,r)=>{let n;switch(l){default:case"top":n=a`
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
      `;break;case"bottom":n=a`
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
      `;break;case"left":n=a`
        top: 0;
        bottom: 0;
        right: -12px;
        width: 2px;
      `;break;case"right":n=a`
        top: 0;
        bottom: 0;
        left: -12px;
        width: 2px;
      `;break}return a`
    position: absolute;
    ${n};
    background: ${e?d("grayBlue","05"):r??d(t??"blue","02")};
  `},pe=t=>b(t)?t==="left"?a`
      transform: translateX(100%);
      padding-left: 8px;
    `:a`
      transform: translateX(-100%);
      padding-right: 8px;
    `:a``,$=t=>{const{title:l,disabled:e=!1,closable:r,tabsItemAfter:n,tabsItemColorScheme:i,tabsItemActiveColorScheme:u}=t,{selectedKey:p,size:D="medium",tabPosition:g="top",variant:h="line",colorScheme:v="blue",handleSelectTab:k,handleDeleteTab:w}=s.useContext(E),C=s.useRef(null),m=p===t["data-key"],S=B=>{B.stopPropagation(),!e&&w(t["data-key"])};return I("div",{css:ue(h,g),ref:C,onClick:()=>!e&&k(t["data-key"]),children:[I("div",{css:oe(g),children:[I("div",{css:se(D,g,h,e,m),children:[o("span",{css:de(e,m,v,i,u),children:l}),r?o(Z,{size:"12",onClick:S}):null]}),h==="line"&&m?o(Q.div,{css:ce(v,g,e,u),layoutId:"underline"}):null]}),n&&o("div",{css:pe(g),children:n})]})};$.displayName="TabPane";try{$.displayName="TabPane",$.__docgenInfo={description:"",displayName:"TabPane",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},tabsItemAfter:{defaultValue:null,description:"",name:"tabsItemAfter",required:!1,type:{name:"ReactNode"}},tabsItemActiveColorScheme:{defaultValue:null,description:"",name:"tabsItemActiveColorScheme",required:!1,type:{name:"string"}},tabsItemColorScheme:{defaultValue:null,description:"",name:"tabsItemColorScheme",required:!1,type:{name:"string"}},"data-key":{defaultValue:null,description:"",name:"data-key",required:!1,type:{name:"string"}}}}}catch{}const V=12,fe=t=>{if(!t)return[];const l=[];return s.Children.forEach(t,(e,r)=>{var n;if(e&&e.type&&e&&e.props&&e.props&&e.props.title){const i=e.props,u=((n=e==null?void 0:e.key)==null?void 0:n.toString())??i.title+r;l.push(o($,{"data-key":u,...i},u))}}),l},_=s.forwardRef((t,l)=>{const{children:e,defaultActiveKey:r,variant:n="line",tabBarSpacing:i,tabPosition:u="top",align:p="flex-start",activeKey:D,prefix:g,suffix:h,withoutBorderLine:v,onChange:k,onDeleteTab:w,onClickTab:C}=t,m=s.useMemo(()=>fe(e),[e]),[S,B]=s.useState([...m]),Y=s.useMemo(()=>{var c,q;return(q=(c=S[0])==null?void 0:c.key)==null?void 0:q.toString()},[S]),f=s.useRef(null),y=s.useRef(null),[R,W]=s.useState(!1),[T,x]=s.useState(0),[G,O]=s.useState(r??Y),M=s.useCallback(c=>{c&&(C&&C(c),O(c),k&&k(c))},[k,C]),U=s.useCallback(c=>{if(!c||!m)return;const q=m.findIndex(A=>A.key===c);q!==-1&&(m.splice(q,1),B([...m])),w&&w(c)},[w,m]),F=()=>{f.current&&y.current&&(-(T-f.current.clientWidth/2)+f.current.clientWidth+V>=y.current.scrollWidth?x(-(y.current.scrollWidth+V-f.current.clientWidth)):x(T-f.current.clientWidth/2))},J=()=>{f.current&&y.current&&(T+f.current.clientWidth/2>=V?x(V):x(T+f.current.clientWidth/2))};s.useEffect(()=>{x(R?V:0)},[R]);const N=s.useCallback(c=>{f.current&&y.current&&(c?c-V<y.current.scrollWidth?W(!0):W(!1):f.current.clientWidth-V<y.current.scrollWidth?W(!0):W(!1))},[]);return s.useEffect(()=>{const c=new ResizeObserver(q=>{q.forEach(A=>{N(A.contentRect.width)})});return f.current&&(N(),c.observe(f.current)),()=>{c.disconnect()}},[N]),s.useEffect(()=>{B(m)},[m]),o(j,{...t,selectedKey:D||G,handleSelectTab:M,handleDeleteTab:U,children:I("div",{css:le(u,p,n,v),ref:f,children:[g,!b(u)&&R&&o("span",{css:K("previous"),onClick:J,children:b(u)?o(ee,{size:"12"}):o(P,{size:"12"})}),o("div",{ref:y,css:re(u,i,n,T,v),children:S}),!b(u)&&R&&o("span",{css:K("next"),onClick:F,children:b(u)?o(te,{size:"12"}):o(P,{css:ie,size:"12"})}),h]})})});_.displayName="Tabs";try{_.displayName="Tabs",_.__docgenInfo={description:"",displayName:"Tabs",props:{tabPosition:{defaultValue:null,description:"",name:"tabPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"line"'},{value:'"capsule"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string"}},deleteIcon:{defaultValue:null,description:"",name:"deleteIcon",required:!1,type:{name:"ReactNode"}},tabBarSpacing:{defaultValue:null,description:"",name:"tabBarSpacing",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(key: string) => void"}},onClickTab:{defaultValue:null,description:"",name:"onClickTab",required:!1,type:{name:"(key: string) => void"}},onDeleteTab:{defaultValue:null,description:"",name:"onDeleteTab",required:!1,type:{name:"(key: string) => void"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},withoutContent:{defaultValue:null,description:"",name:"withoutContent",required:!1,type:{name:"boolean"}},withoutBorderLine:{defaultValue:null,description:"",name:"withoutBorderLine",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const _e={title:"DATA DISPLAY/Tabs",component:_,argTypes:{addIcon:{control:!1},deleteIcon:{control:!1},animated:{control:{type:"boolean"}},colorScheme:{options:["blackAlpha","gray","red","orange","yellow","green","blue","cyan","purple","grayBlue","techPink","techPurple"],control:{type:"select"}}}},me=t=>o("div",{style:{width:"100%",height:"100px"},children:o(_,{...t,children:[{key:"1",title:"tab 01",content:"tab content 01"},{key:"2",title:"tab 02",content:"tab content 02"},{key:"3",title:"tab 03",content:"tab content 03",disabled:!0},{key:"4",title:"tab 04",content:"tab content 04",disabled:!0},{key:"5",title:"tab 05",content:"tab content 05",disabled:!0},{key:"6",title:"tab 06",content:"tab content 06"},{key:"7",title:I("span",{children:[o(ne,{}),"1234"]}),content:"tab content 07"},{key:"8",title:"tab 08",content:"tab content 08"},{key:"9",title:"tab 08",content:"tab content 08"},{key:"10",title:"tab 08",content:"tab content 08"},{key:"11",title:"tab 08",content:"tab content 08"},{key:"12",title:"tab 08",content:"tab content 08"},{key:"13",title:"tab 13",content:"tab content 08"},{key:"14",title:"tab 14",content:"tab content 08"},{key:"15",title:"tab 15",content:"tab content 08"},{key:"16",title:"tab 16",content:"tab content 08"}].map(e=>o($,{title:e.title,disabled:e.disabled,closable:e.closable,children:e.content},e.key))})}),z=me.bind({});var L,H,X;z.parameters={...z.parameters,docs:{...(L=z.parameters)==null?void 0:L.docs,source:{originalSource:`props => {
  const tabArr: {
    key: string;
    title: string | ReactNode;
    content: string;
    disabled?: boolean;
  }[] = [{
    key: "1",
    title: "tab 01",
    content: "tab content 01"
  }, {
    key: "2",
    title: "tab 02",
    content: "tab content 02"
  }, {
    key: "3",
    title: "tab 03",
    content: "tab content 03",
    disabled: true
  }, {
    key: "4",
    title: "tab 04",
    content: "tab content 04",
    disabled: true
  }, {
    key: "5",
    title: "tab 05",
    content: "tab content 05",
    disabled: true
  }, {
    key: "6",
    title: "tab 06",
    content: "tab content 06"
  }, {
    key: "7",
    title: <span>
          <InfoIcon />
          1234
        </span>,
    content: "tab content 07"
  }, {
    key: "8",
    title: "tab 08",
    content: "tab content 08"
  }, {
    key: "9",
    title: "tab 08",
    content: "tab content 08"
  }, {
    key: "10",
    title: "tab 08",
    content: "tab content 08"
  }, {
    key: "11",
    title: "tab 08",
    content: "tab content 08"
  }, {
    key: "12",
    title: "tab 08",
    content: "tab content 08"
  }, {
    key: "13",
    title: "tab 13",
    content: "tab content 08"
  }, {
    key: "14",
    title: "tab 14",
    content: "tab content 08"
  }, {
    key: "15",
    title: "tab 15",
    content: "tab content 08"
  }, {
    key: "16",
    title: "tab 16",
    content: "tab content 08"
  }];
  return <div style={{
    width: "100%",
    height: "100px"
  }}>
      <Tabs {...props}>
        {tabArr.map(item => {
        return <TabPane title={item.title} key={item.key} disabled={item.disabled} closable={item.closable}>
              {item.content}
            </TabPane>;
      })}
      </Tabs>
    </div>;
}`,...(X=(H=z.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};const Be=["Basic"];export{z as Basic,Be as __namedExportsOrder,_e as default};
//# sourceMappingURL=tabs.stories-ba80c01f.js.map
