import{a as o,j as $}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as i}from"./index-1cdf6ce0.js";import{c as r}from"./style-3ea54b04.js";import{g as p}from"./color-palette-728b424e.js";import{L as P,a as ne,m as ae}from"./use-force-update-7edf8987.js";import{C as le}from"./close-b3537d01.js";import{v as re}from"./v4-cf522c50.js";import{U as ie}from"./up-1088cd79.js";import{P as A}from"./previous-80a0198e.js";import{D as ue}from"./down-3d8ebd18.js";import{I as se}from"./info-0c29ba8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./create-icon-907f0980.js";const oe=i.createContext(null),de=e=>!e.isLayoutDirty&&e.willUpdate(!1);function K(){const e=new Set,a=new WeakMap,t=()=>e.forEach(de);return{add:l=>{e.add(l),a.set(l,l.addEventListener("willUpdate",t))},remove:l=>{var n;e.delete(l),(n=a.get(l))===null||n===void 0||n(),a.delete(l),t()},dirty:t}}const Y=e=>e===!0,ce=e=>Y(e===!0)||e==="id",pe=({children:e,id:a,inheritId:t,inherit:l=!0})=>{t!==void 0&&(l=t);const n=i.useContext(P),u=i.useContext(oe),[s,c]=ne(),y=i.useRef(null),b=n.id||u;y.current===null&&(ce(l)&&b&&(a=a?b+"-"+a:b),y.current={id:a,group:Y(l)&&n.group||K()});const V=i.useMemo(()=>({...y.current,forceRender:s}),[c]);return i.createElement(P.Provider,{value:V},e)},U=i.createContext({}),j=e=>{const{children:a,...t}=e;return o(U.Provider,{value:{...t},children:a})};j.displayName="TabsProvider";try{j.displayName="TabsProvider",j.__docgenInfo={description:"",displayName:"TabsProvider",props:{selectedKey:{defaultValue:null,description:"",name:"selectedKey",required:!1,type:{name:"string"}},handleSelectTab:{defaultValue:null,description:"",name:"handleSelectTab",required:!0,type:{name:"(key: string) => void"}},handleDeleteTab:{defaultValue:null,description:"",name:"handleDeleteTab",required:!0,type:{name:"(key: string) => void"}},tabPosition:{defaultValue:null,description:"",name:"tabPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"line"'},{value:'"capsule"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-around"'},{value:'"space-between"'}]}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string"}},deleteIcon:{defaultValue:null,description:"",name:"deleteIcon",required:!1,type:{name:"ReactNode"}},tabBarSpacing:{defaultValue:null,description:"",name:"tabBarSpacing",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(key: string) => void"}},onClickTab:{defaultValue:null,description:"",name:"onClickTab",required:!1,type:{name:"(key: string) => void"}},onDeleteTab:{defaultValue:null,description:"",name:"onDeleteTab",required:!1,type:{name:"(key: string) => void"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},withoutContent:{defaultValue:null,description:"",name:"withoutContent",required:!1,type:{name:"boolean"}},withoutBorderLine:{defaultValue:null,description:"",name:"withoutBorderLine",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const q=e=>e==="left"||e==="right",fe=(e,a)=>{let t,l,n;switch(a){default:case"line":t="4px";break;case"capsule":t="16px";break;case"text":t="4px";break}switch(e){case"small":a==="line"?(l="1px",n="4px"):(l="1px",n="0");break;case"large":a==="line"?(l="1px",n="8px"):a==="capsule"?(l="7px",n="0"):(l="1px",n="0");break;case"medium":default:a==="line"?(l="1px",n="6px"):a==="capsule"?(l="5px",n="0"):(l="1px",n="0")}return r`
    padding: ${l} ${t};
    margin: ${n} 0;
  `},me=(e,a,t,l)=>{let n;q(e)?n=r`
      height: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `:n=r`
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    `;let u;return t==="line"&&!l&&(e==="top"?u=r`
        border-bottom: 1px solid ${p("grayBlue","08")};
      `:e==="bottom"&&(u=r`
        border-top: 1px solid ${p("grayBlue","08")};
      `)),r`
    gap: 4px;
    display: flex;
    ${n};
    overflow: hidden;
    position: relative;
    ${u};
  `},ye=(e,a,t,l,n,u)=>{let s;switch(t){case"text":s=`
        gap: ${a??8}px;
      `;break;case"capsule":s=`
        gap: ${a??4}px;
        background-color: ${p("grayBlue","09")};
        padding: 4px;
      `;break;default:case"line":s=r`
        gap: ${a??0}px;
      `;break}let c;q(e)?c=r`
      height: 100%;
      flex-direction: column;
      justify-content: ${n};
    `:c=r`
      min-width: 100%;
      justify-content: ${n};
    `;let y;return t==="line"&&!u&&(e==="left"?y=r`
        border-right: 1px solid ${p("grayBlue","08")};
      `:e==="right"&&(y=r`
        border-left: 1px solid ${p("grayBlue","08")};
      `)),r`
    box-sizing: border-box;
    border-radius: 4px;

    display: flex;
    flex: none;
    ${s};
    ${c};
    ${y};
    transform: translateX(${l}px);
    transition: all 0.3s ease-in-out;
  `},G=e=>{let a;return e==="previous"?a=r`
      left: 0;
    `:a=r`
      right: 0;
    `,r`
    display: flex;
    flex: none;
    height: 100%;
    position: absolute;
    z-index: 1;
    ${a};
    justify-content: center;
    background-color: ${p("white","01")};
    cursor: pointer;
  `},be=r`
  transform: rotate(180deg);
`,ge=(e,a)=>{let t;switch(e){default:case"line":t="0px 12px";break;case"text":case"capsule":t="0";break}return r`
      display: flex;
      flex-direction: ${a==="left"?"row-reverse":"row"};
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      padding: ${t};
      /* cursor: pointer; */
    `},qe=(e,a,t,l,n)=>{let u="row";a==="left"&&(u="row-reverse");let s;n&&(s=`
    background-color: ${p("white","01")};
    `);let c;return l?c=r`
      cursor: not-allowed;
    `:n?c=r`
      cursor: default;
    `:t==="line"||t==="text"?c=r`
      background-color: ${p("grayBlue","09")};
      cursor: pointer;
    `:c=r`
      background-color: ${p("white","01")};
      cursor: pointer;
    `,r`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${p("grayBlue","03")};
    ${fe(e,t)};
    flex-direction: ${u};
    border-radius: 4px;
    position: relative;
    ${s};
    &:hover {
      ${c};
    }
  `},Ve=e=>r`
    display: flex;
    width: ${q(e)?"100%":"auto"};
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    flex: none;
    position: relative;
  `,xe=(e,a,t,l,n)=>{let u;return l?u=r`
      background: ${l};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: ${l??p(t??"blue","02")};
      font-weight: 500;
      color: transparent;
    `:e?u=r`
      color: ${p("grayBlue","05")};
      cursor: not-allowed;
    `:a&&(n?u=r`
        background: ${n};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: ${n??p(t??"blue","02")};
        font-weight: 500;
        color: transparent;
      `:u=r`
        color: ${p(t??"blue","02")};
        font-weight: 500;
      `),r`
    ${u};
    display: flex;
    align-items: center;
    & svg {
      width: 16px;
    }
  `},he=(e,a,t,l)=>{let n;switch(a){default:case"top":n=r`
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
      `;break;case"bottom":n=r`
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
      `;break;case"left":n=r`
        top: 0;
        bottom: 0;
        right: -12px;
        width: 2px;
      `;break;case"right":n=r`
        top: 0;
        bottom: 0;
        left: -12px;
        width: 2px;
      `;break}return r`
    position: absolute;
    ${n};
    background: ${t?p("grayBlue","05"):l??p(e??"blue","02")};
  `},ve=e=>q(e)?e==="left"?r`
      transform: translateX(100%);
      padding-left: 8px;
    `:r`
      transform: translateX(-100%);
      padding-right: 8px;
    `:r``,_=e=>{const{title:a,disabled:t=!1,closable:l,tabsItemAfter:n,tabsItemColorScheme:u,tabsItemActiveColorScheme:s}=e,{selectedKey:c,size:y="medium",tabPosition:b="top",variant:V="line",colorScheme:k="blue",handleSelectTab:w,handleDeleteTab:C}=i.useContext(U),S=i.useRef(null),m=c===e["data-key"],I=B=>{B.stopPropagation(),!t&&C(e["data-key"])};return $("div",{css:ge(V,b),ref:S,onClick:()=>!t&&w(e["data-key"]),children:[$("div",{css:Ve(b),children:[$("div",{css:qe(y,b,V,t,m),children:[o("span",{css:xe(t,m,k,u,s),children:a}),l?o(le,{size:"12",onClick:I}):null]}),V==="line"&&m?o(ae.div,{css:he(k,b,t,s),layoutId:"underline"}):null]}),n&&o("div",{css:ve(b),children:n})]})};_.displayName="TabPane";try{_.displayName="TabPane",_.__docgenInfo={description:"",displayName:"TabPane",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},tabsItemAfter:{defaultValue:null,description:"",name:"tabsItemAfter",required:!1,type:{name:"ReactNode"}},tabsItemActiveColorScheme:{defaultValue:null,description:"",name:"tabsItemActiveColorScheme",required:!1,type:{name:"string"}},tabsItemColorScheme:{defaultValue:null,description:"",name:"tabsItemColorScheme",required:!1,type:{name:"string"}},"data-key":{defaultValue:null,description:"",name:"data-key",required:!1,type:{name:"string"}}}}}catch{}const h=12,ke=e=>{if(!e)return[];const a=[];return i.Children.forEach(e,(t,l)=>{var n;if(t&&t.type&&t&&t.props&&t.props&&t.props.title){const u=t.props,s=((n=t==null?void 0:t.key)==null?void 0:n.toString())??u.title+l;a.push(o(_,{"data-key":s,...u},s))}}),a},R=i.forwardRef((e,a)=>{const{children:t,defaultActiveKey:l,variant:n="line",tabBarSpacing:u,tabPosition:s="top",align:c="flex-start",activeKey:y,prefix:b,suffix:V,withoutBorderLine:k,onChange:w,onDeleteTab:C,onClickTab:S}=e,m=i.useMemo(()=>ke(t),[t]),[I,B]=i.useState([...m]),M=i.useMemo(()=>{var d,x;return(x=(d=I[0])==null?void 0:d.key)==null?void 0:x.toString()},[I]),f=i.useRef(null),g=i.useRef(null),[W,z]=i.useState(!1),[T,v]=i.useState(0),[O,F]=i.useState(l??M),J=re(),Q=i.useCallback(d=>{d&&(S&&S(d),F(d),w&&w(d))},[w,S]),Z=i.useCallback(d=>{if(!d||!m)return;const x=m.findIndex(N=>N.key===d);x!==-1&&(m.splice(x,1),B([...m])),C&&C(d)},[C,m]),ee=()=>{f.current&&g.current&&(-(T-f.current.clientWidth/2)+f.current.clientWidth+h>=g.current.scrollWidth?v(-(g.current.scrollWidth+h-f.current.clientWidth)):v(T-f.current.clientWidth/2))},te=()=>{f.current&&g.current&&(T+f.current.clientWidth/2>=h?v(h):v(T+f.current.clientWidth/2))};i.useEffect(()=>{v(W?h:0)},[W]);const L=i.useCallback(d=>{f.current&&g.current&&(d?d+h<g.current.scrollWidth?z(!0):z(!1):f.current.clientWidth+h<g.current.scrollWidth?z(!0):z(!1))},[]);return i.useEffect(()=>{const d=new ResizeObserver(x=>{x.forEach(N=>{L(N.contentRect.width)})});return f.current&&(L(),d.observe(f.current)),()=>{d.disconnect()}},[L]),i.useEffect(()=>{B(m)},[m]),o(pe,{id:J,children:o(j,{...e,selectedKey:y||O,handleSelectTab:Q,handleDeleteTab:Z,children:$("div",{css:me(s,c,n,k),ref:f,children:[b,!q(s)&&W&&o("span",{css:G("previous"),onClick:te,children:q(s)?o(ie,{size:"12"}):o(A,{size:"12"})}),o("div",{ref:g,css:ye(s,u,n,T,c,k),children:I}),!q(s)&&W&&o("span",{css:G("next"),onClick:ee,children:q(s)?o(ue,{size:"12"}):o(A,{css:be,size:"12"})}),V]})})})});R.displayName="Tabs";try{R.displayName="Tabs",R.__docgenInfo={description:"",displayName:"Tabs",props:{tabPosition:{defaultValue:null,description:"",name:"tabPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"line"'},{value:'"capsule"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-around"'},{value:'"space-between"'}]}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string"}},deleteIcon:{defaultValue:null,description:"",name:"deleteIcon",required:!1,type:{name:"ReactNode"}},tabBarSpacing:{defaultValue:null,description:"",name:"tabBarSpacing",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(key: string) => void"}},onClickTab:{defaultValue:null,description:"",name:"onClickTab",required:!1,type:{name:"(key: string) => void"}},onDeleteTab:{defaultValue:null,description:"",name:"onDeleteTab",required:!1,type:{name:"(key: string) => void"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},withoutContent:{defaultValue:null,description:"",name:"withoutContent",required:!1,type:{name:"boolean"}},withoutBorderLine:{defaultValue:null,description:"",name:"withoutBorderLine",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const Ke={title:"DATA DISPLAY/Tabs",component:R,argTypes:{addIcon:{control:!1},deleteIcon:{control:!1},animated:{control:{type:"boolean"}},colorScheme:{options:["blackAlpha","gray","red","orange","yellow","green","blue","cyan","purple","grayBlue","techPink","techPurple"],control:{type:"select"}}}},we=e=>o("div",{style:{width:"100%",height:"100px"},children:o(R,{...e,children:[{key:"1",title:"tab 01",content:"tab content 01"},{key:"2",title:"tab 02",content:"tab content 02"},{key:"3",title:"tab 03",content:"tab content 03",disabled:!0},{key:"4",title:"tab 04",content:"tab content 04",disabled:!0},{key:"5",title:"tab 05",content:"tab content 05",disabled:!0},{key:"6",title:"tab 06",content:"tab content 06"},{key:"7",title:$("span",{children:[o(se,{}),"1234"]}),content:"tab content 07"},{key:"8",title:"tab 08",content:"tab content 08"},{key:"9",title:"tab 08",content:"tab content 08"},{key:"10",title:"tab 08",content:"tab content 08"},{key:"11",title:"tab 08",content:"tab content 08"},{key:"12",title:"tab 08",content:"tab content 08"},{key:"13",title:"tab 13",content:"tab content 08"},{key:"14",title:"tab 14",content:"tab content 08"},{key:"15",title:"tab 15",content:"tab content 08"},{key:"16",title:"tab 16",content:"tab content 08"}].map(t=>o(_,{title:t.title,disabled:t.disabled,closable:t.closable,children:t.content},t.key))})}),D=we.bind({});var E,H,X;D.parameters={...D.parameters,docs:{...(E=D.parameters)==null?void 0:E.docs,source:{originalSource:`props => {
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
}`,...(X=(H=D.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};const Ge=["Basic"];export{D as Basic,Ge as __namedExportsOrder,Ke as default};
//# sourceMappingURL=tabs.stories-ebb3af3c.js.map
