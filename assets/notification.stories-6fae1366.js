import{a as e,F as B,j as m}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as l}from"./index-1cdf6ce0.js";import{n as u,u as T}from"./hook-36941598.js";import{c as a,g as c,i as g,a as V}from"./style-4011d251.js";import{z as E}from"./z-index-efffafd0.js";import{m as O}from"./use-force-update-497a924b.js";import{g as C}from"./color-palette-2f9095e4.js";import{W as G}from"./warning-circle-e87f66a6.js";import{S as H}from"./success-circle-ab38d2dd.js";import{E as A}from"./error-circle-96d14faf.js";import{I as M}from"./info-cricle-31ebb878.js";import{C as X}from"./close-56bf4497.js";import{A as S}from"./index-4cd6a639.js";import{S as D}from"./space-3a32656f.js";import{B as p}from"./button-group-context-92db4fd7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./v4-cf522c50.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./index-45a08ae3.js";import"./create-icon-e804097a.js";import"./divider-62b11705.js";import"./loading-9fdd5a3f.js";function Y(t){return a`
    position: relative;
    pointer-events: visible;
    padding: 16px ${t?"40px":"16px"} 16px 16px;
    margin-bottom: 20px;
    width: 320px;
    display: flex;
    box-sizing: border-box;
    box-shadow: 0 4px 10px 0 ${c(`--${g}-blackAlpha-07`)};
    border-radius: 8px;
    border: 1px solid ${c(`--${g}-grayBlue-08`)};
    background-color: ${c(`--${g}-white-01`)};
    flex-direction: column;
  `}a`
  flex: 1;
  word-break: break-all;
`;const F=a`
  font-size: 16px;
  font-weight: 500;
  color: ${c(`--${g}-grayBlue-02`)};
  margin-bottom: 4px;
`,P=a`
  font-size: 14px;
  color: ${c(`--${g}-grayBlue-04`)};
`,K=a`
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 8px;
  line-height: 0;
  color: ${c(`--${g}-grayBlue-03`)};
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,J=a`
  text-align: right;
  margin-top: 16px;
`;function Q(t){return{initial:{x:`${t==="topLeft"||t==="bottomLeft"?"-100%":"100%"}`},animate:{opacity:1,x:0},exit:{opacity:0,transition:{opacity:{duration:.2,ease:"linear"}}}}}const U=a`
  display: flex;
  flex-direction: row;
`;function Z(t){return a`
    flex: 1;
    word-break: break-word;
    margin-left: ${t?"8px":"0"};
  `}a`
  padding-right: 8px;
`;function k(t){let i=a``;switch(t){case"topLeft":i=a`
        top: 20px;
        left: 20px;
        align-items: start;
      `;break;case"topRight":i=a`
        top: 20px;
        right: 20px;
        align-items: end;
      `;break;case"bottomLeft":i=a`
        bottom: 0;
        left: 20px;
        align-items: start;
      `;break;case"bottomRight":i=a`
        bottom: 0;
        right: 20px;
        align-items: end;
      `;break}return a`
    display: inline-flex;
    pointer-events: none;
    z-index: ${E.notification};
    position: fixed;
    flex-direction: column;
    ${i};
  `}const f=l.forwardRef((t,i)=>{const{type:h,action:y,closable:v,showIcon:s=!0,duration:b,id:d="",position:R="topRight",icon:q,content:N,title:w,onClose:r}=t,n=l.useRef(),o=l.useCallback(()=>{var _;let I;b?I=window.setTimeout(()=>{u.remove(d),r==null||r()},b):I=window.setTimeout(()=>{u.remove(d),r==null||r(),n.current=void 0},((_=u.getConfig())==null?void 0:_.duration)??3e3),n.current=I},[b,d,r]);l.useEffect(()=>(o(),()=>{n.current&&(clearTimeout(n.current),n.current=void 0)}),[o]);const z=l.useMemo(()=>{if(s){if(q)return q;switch(h){case"info":return e(M,{mt:"2px",fs:"16px",c:C("blue","03")});case"error":return e(A,{fs:"16px",mt:"2px",c:C("red","03")});case"success":return e(H,{fs:"16px",mt:"2px",c:C("green","03")});case"warning":return e(G,{fs:"16px",mt:"2px",c:C("red","03")});case"normal":default:return e(B,{})}}else return e(B,{})},[s,q,h]);return m(O.div,{ref:i,css:[Y(v),V(t)],layout:!0,initial:"initial",animate:"animate",exit:"exit",variants:Q(R),onMouseEnter:()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},onMouseLeave:()=>{o()},children:[m("div",{css:U,children:[z,m("div",{css:Z(s),children:[w&&e("div",{css:F,children:w}),N&&e("div",{css:P,children:N})]})]}),y&&e("div",{css:J,children:y}),v&&e("div",{css:K,onClick:()=>{r==null||r()},children:e(X,{})})]})});f.displayName="Notice";try{Notice.displayName="Notice",Notice.__docgenInfo={description:"",displayName:"Notice",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"normal"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(id?: string) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const L=t=>{const[i,h]=l.useState([]),[y,v]=l.useState([]),[s,b]=l.useState([]),[d,R]=l.useState([]);l.useEffect(()=>{const n=u.subscribe(()=>{h(u.getNotification().filter(o=>o.position==="topLeft")),v(u.getNotification().filter(o=>o.position==="topRight")),b(u.getNotification().filter(o=>o.position==="bottomLeft")),R(u.getNotification().filter(o=>o.position==="bottomRight"))});return()=>{u.unSubscribe(n.listenerId)}},[]);const q=l.useMemo(()=>i.map(n=>e(f,{...n},n.id)),[i]),N=l.useMemo(()=>y.map(n=>e(f,{...n},n.id)),[y]),w=l.useMemo(()=>s.map(n=>e(f,{...n},n.id)),[s]),r=l.useMemo(()=>d.map(n=>e(f,{...n},n.id)),[d]);return m(B,{children:[e("div",{css:[k("topLeft"),V(t)],children:e(S,{children:q})}),e("div",{css:[k("topRight"),V(t)],children:e(S,{children:N})}),e("div",{css:[k("bottomLeft"),V(t)],children:e(S,{children:w})}),e("div",{css:[k("bottomRight"),V(t)],children:e(S,{children:r})})]})};L.displayName="NotificationGroup";try{L.displayName="NotificationGroup",L.__docgenInfo={description:"",displayName:"NotificationGroup",props:{w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const Ce={title:"FEEDBACK/Notification",component:f,argTypes:{icon:{control:!1},type:{control:!1},update:{control:!1},noticeType:{control:!1},closeElement:{control:!1},action:{control:!1},removeHook:{control:!1},onClose:{control:!1},afterClose:{control:!1},position:{options:["topLeft","topRight","bottomLeft","bottomRight"]}}},ee=t=>{const i=T();return m(B,{children:[e(L,{}),m(D,{direction:"vertical",children:[e(p,{onClick:()=>{i.info({title:"Info",...t})},children:"Open Notification(Info)"}),e(p,{onClick:()=>{i.success({title:"Success",...t})},children:"Open Notification(Success)"}),e(p,{onClick:()=>{i.warning({title:"Warning",...t})},children:"Open Notification(Warning)"}),e(p,{onClick:()=>{i.error({title:"Error",...t})},children:"Open Notification(Error)"}),e(p,{onClick:()=>{i.normal({title:"Normal",...t})},children:"Open Notification(normal)"}),e(p,{onClick:()=>{i.clear()},children:"Clear"})]})]})},x=ee.bind({});x.args={title:"Alert Title",content:"Alert Content"};var W,$,j;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const notification = useNotification();
  return <>
      <NotificationGroup />
      <Space direction={"vertical"}>
        <Button onClick={() => {
        notification.info({
          title: "Info",
          ...args
        });
      }}>
          Open Notification(Info)
        </Button>
        <Button onClick={() => {
        notification.success({
          title: "Success",
          ...args
        });
      }}>
          Open Notification(Success)
        </Button>
        <Button onClick={() => {
        notification.warning({
          title: "Warning",
          ...args
        });
      }}>
          Open Notification(Warning)
        </Button>
        <Button onClick={() => {
        notification.error({
          title: "Error",
          ...args
        });
      }}>
          Open Notification(Error)
        </Button>
        <Button onClick={() => {
        notification.normal({
          title: "Normal",
          ...args
        });
      }}>
          Open Notification(normal)
        </Button>
        <Button onClick={() => {
        notification.clear();
      }}>
          Clear
        </Button>
      </Space>
    </>;
}`,...(j=($=x.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const Se=["Basic"];export{x as Basic,Se as __namedExportsOrder,Ce as default};
//# sourceMappingURL=notification.stories-6fae1366.js.map
