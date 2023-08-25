import{j as l,a as y}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as g}from"./index-c4905b50.js";import{k as A,c as d,g as i,i as r,d as z,a as D}from"./style-eba6b849.js";import{d as I}from"./is-6e11be7b.js";import{B as H}from"./button-group-398ecfe6.js";import{A as b}from"./avatar-a3b86cd0.js";import{S as P}from"./search-92ac172d.js";import{B as S}from"./button-group-context-75d431a5.js";import{S as G}from"./space-58565126.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";import"./_commonjsHelpers-042e6b4d.js";import"./people-e72103be.js";import"./create-icon-e1f02089.js";import"./image-5ce82922.js";import"./image-default-4f3382b5.js";import"./z-index-efffafd0.js";import"./color-palette-cd133b87.js";import"./index-d85697b4.js";import"./loading-6ba90f9e.js";import"./divider-942251de.js";const L={default:`--${r}-grayBlue-06`,processing:`--${r}-blue-03`,success:`--${r}-green-03`,warning:`--${r}-yellow-03`,error:`--${r}-red-03`},O=A`
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
`,Y=d`
  display: inline-block;
  position: relative;
  line-height: 1;
`;function _(a,t,n){let e="";return!n&&t&&(e+=`
      position: absolute;
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
      right: 0px;
    `),d`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: solid 1px ${i(`--${r}-white-01`)};
    background-color: ${a};
    display: inline-block;
    ${e}
  `}function h(a,t,n){const e=n>1?"padding: 0 6px;":"",o=t?`
    position: absolute;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    right: 0px;
  `:"";return d`
    min-width: 20px;
    height: 20px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    transition: 0.15s all linear;
    border: solid 2px ${i(`--${r}-white-01`)};
    background-color: ${a};
    color: ${i(`--${r}-white-01`)};
    text-align: center;
    white-space: pre;
    ${o+e}
  `}function X(a=!1){return a?d`
        animation-name: ${O};
        animation-timing-function: cubic-bezier(0.3, 1.3, 0.3, 1);
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-play-state: running;
      `:d``}const E=d`
  display: inline-flex;
  align-items: center;
`,M=d`
  margin-left: 9px;
  font-size: 12px;
  line-height: 1.33;
  color: ${i(`--${r}-grayBlue-02`)};
`;function F(a,t,n){let e;return t&&(e=i(`--${r}-${t}-03`),e||(e=t)),n&&(e=i(L[n])),e=e||(I(a)?i(`--${r}-white-01`):i(`--${r}-red-03`)),e}function x(a){const t=g.useRef();return g.useEffect(()=>{t.current=a}),t.current}try{x.displayName="usePrevious",x.__docgenInfo={description:"",displayName:"usePrevious",props:{}}}catch{}const J=i(`--${r}-red-03`);function v(a){const{count:t,color:n=J,hasChildren:e,...o}=a,f=x(t),q=t!==f;return l("span",{css:h(n,e??!1,t.length),...z(o),children:l("span",{css:X(q),children:t},t)})}try{v.displayName="Count",v.__docgenInfo={description:"",displayName:"Count",props:{count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},hasChildren:{defaultValue:null,description:"",name:"hasChildren",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}}}}}catch{}const s=g.forwardRef((a,t)=>{const{count:n=0,text:e,dot:o,maxCount:f=99,colorScheme:q,offset:N,status:V,children:B,...W}=a,[w,C]=N||[],u={};w&&(u.marginRight=-w),C&&(u.marginTop=C);let p=F(n,q,V);const m=!!B,R=g.useMemo(()=>{if(V)return y("span",{css:E,style:u,children:[l("span",{css:_(p,m,!0)}),e&&l("span",{css:M,children:e})]});if(I(n))return l("span",{css:h(p,m,0),style:u,children:n});if(e)return l("span",{css:h(p,m,e.length),style:u,children:e});if(o&&n&&n>0)return l("span",{css:_(p,m),style:u});let T=n&&n>f?`${f}+`:`${n}`;return n&&n>0?l(v,{count:T,hasChildren:m,color:p,style:u}):null},[p,n,o,u,m,f,V,e]);return y("span",{css:[Y,D(a)],ref:t,...z(W),children:[B,R]})});s.displayName="Badge";try{s.displayName="Badge",s.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},dot:{defaultValue:null,description:"",name:"dot",required:!1,type:{name:"boolean"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"[number, number]"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"default"'},{value:'"processing"'}]}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}}}}}catch{}const qe={title:"DATA DISPLAY/Badge",component:s},K=a=>{const[t,n]=g.useState(0);return y(G,{size:"large",children:[l(s,{...a,children:l(b,{shape:"square"})}),l(s,{...a}),l(s,{...a,count:l(P,{style:{color:"black"}}),children:l(b,{shape:"square"})}),l(s,{count:t,children:l(b,{shape:"square"})}),y(H,{children:[l(S,{onClick:()=>n(e=>e+1),children:"+"}),l(S,{onClick:()=>n(e=>e-1),children:"-"})]})]})},c=K.bind({});c.args={count:1,offset:[0,0]};var $,k,j;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [num, setNum] = useState(0);
  return <Space size={"large"}>
      <Badge {...args}>
        <Avatar shape={"square"} />
      </Badge>
      <Badge {...args} />
      <Badge {...args} count={<SearchIcon style={{
      color: "black"
    }} />}>
        <Avatar shape={"square"} />
      </Badge>
      <Badge count={num}>
        <Avatar shape={"square"} />
      </Badge>
      <ButtonGroup>
        <Button onClick={() => setNum(num => num + 1)}>+</Button>
        <Button onClick={() => setNum(num => num - 1)}>-</Button>
      </ButtonGroup>
    </Space>;
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const Ve=["Basic"];export{c as Basic,Ve as __namedExportsOrder,qe as default};
//# sourceMappingURL=badge.stories-0c957d5e.js.map
