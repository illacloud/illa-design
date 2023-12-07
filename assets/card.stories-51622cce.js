import{j as u,a as e,F as V}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as x}from"./index-1cdf6ce0.js";import{g as n,i as l,c as r,a as v,d as w}from"./style-4011d251.js";import{S as C}from"./space-3a32656f.js";import{L as k}from"./link-620df12d.js";import{I as z}from"./image-a6e34fb7.js";import{L as _,S as j}from"./start-outline-2484e9e0.js";import{M as I}from"./more-9b18e934.js";import{B as L}from"./button-group-context-b0bf5517.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./divider-62b11705.js";import"./color-palette-2f9095e4.js";import"./index-45a08ae3.js";import"./link-64a4ff65.js";import"./create-icon-e804097a.js";import"./image-default-69467f7d.js";import"./loading-9fdd5a3f.js";function R(a,t){const i=a?`border: solid 1px ${n(`--${l}-grayBlue-08`)}`:"",s=t?`box-shadow: 0 4px 10px 0 ${n(`--${l}-blackAlpha-07`)}`:"";return r`
    font-size: 14px;
    background-color: ${n(`--${l}-white-01`)};
    border-radius: 8px;
    transition: box-shadow 0.2s ease-in-out;
    ${i};
    &:hover {
      ${s};
    }
  `}function M(a){const t=a?`box-shadow: 0 4px 10px 0 ${n(`--${l}-blackAlpha-07`)}`:"";return r`
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      ${t};
    }
  `}function H(a){const t=a==="small"?"8px":"16px";return r`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: solid 1px ${n(`--${l}-grayBlue-08`)};
    padding: ${t};
  `}const N=r`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${n(`--${l}-grayBlue-02`)};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,W=r`
  color: ${n(`--${l}-grayBlue-02`)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function T(a){return r`
    box-sizing: border-box;
    padding: ${a==="small"?"8px":"16px"};
    color: ${n(`--${l}-grayBlue-04`)};
  `}function A(a,t,i){const s=a==="small"?"8px":"16px",d=t?`solid 1px ${n(`--${l}-grayBlue-08`)}`:"";return r`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: ${s};
    background-color: ${n(`--${l}-white-01`)};
    border-radius: ${i?"0 0 8px 8px":"8px"};
    color: ${n(`--${l}-grayBlue-04`)};
    border: ${d};
  `}const F=r`
  margin-right: 8px;
`,D=r`
  font-size: 14px;
  color: ${n(`--${l}-grayBlue-03`)};
`,P=r`
  display: flex;
  flex-grow: 1;
  justify-content: end;
  flex-direction: row;
`;r`
  display: flex;
  align-items: center;
`;r`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: ${n(`--${l}-grayBlue-03`)};
  transition: color 0.2s ease-in-out;

  &:not(:last-child) {
    margin-right: 24px;
  }

  &:hover {
    color: ${n(`--${l}-blue-03`)};
  }
`;const O=r`
  font-size: 16px;
  font-weight: 500;
  color: ${n(`--${l}-grayBlue-02`)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Y=r`
  margin-top: 4px;
  color: ${n(`--${l}-grayBlue-04`)};
`,G=r`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,X=r`
  display: flex;
  align-items: center;
  flex-direction: row;
`,o=x.forwardRef((a,t)=>{const{title:i,extra:s,size:d="medium",hoverable:y,bordered:m=!0,children:f,...c}=a;return u("div",{ref:t,css:[R(m,y??!1),v(a)],...w(c),children:[i||s?u("div",{css:H(d),children:[i&&e("div",{css:N,children:i}),s&&e("div",{css:W,children:s})]}):null,e("div",{css:T(d),children:f})]})});o.displayName="Card";try{o.displayName="Card",o.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},hoverable:{defaultValue:null,description:"",name:"hoverable",required:!1,type:{name:"boolean"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const g=x.forwardRef((a,t)=>{const{title:i,size:s="medium",description:d,actionList:y,avatar:m,nickname:f,cover:c,bordered:S=!0,hoverable:$,...B}=a;return u("div",{ref:t,css:[M($),v(a)],...w(B),children:[c,u("div",{css:[A(s,S,c)],children:[i||d?u(V,{children:[i&&e("div",{css:O,children:i}),d&&e("div",{css:Y,children:d})]}):null,u("div",{css:G,children:[u("div",{css:X,children:[m&&e("div",{css:F,children:m}),f&&e("span",{css:D,children:f})]}),e("div",{css:P,children:e(C,{size:"24px",children:y})})]})]})]})});g.displayName="CardMeta";try{g.displayName="CardMeta",g.__docgenInfo={description:"",displayName:"CardMeta",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},hoverable:{defaultValue:null,description:"",name:"hoverable",required:!1,type:{name:"boolean"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},nickname:{defaultValue:null,description:"",name:"nickname",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},cover:{defaultValue:null,description:"",name:"cover",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actionList:{defaultValue:null,description:"",name:"actionList",required:!1,type:{name:"ReactNode[]"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const me={title:"DATA DISPLAY/Card",component:o,argTypes:{headerStyle:{control:!1},bodyStyle:{control:!1},cover:{control:!1},actions:{control:!1},extra:{control:!1}}},E=a=>u(C,{size:"large",direction:"vertical",children:[e(o,{style:{width:360},extra:e(k,{children:"More"}),...a,children:"France is a land, the British are a nation, and America is the passion in our hearts.People all over the world carrying a Santa Claus came to the United States to chase their ideas of American dreams, but in the end ,there is nothing more than the pursuit of more money, and they slowly get lost in this economically prosperous but utilitarian society. So, sad stories undoubtedly happen in the most brilliant era"}),e(o,{style:{width:360},...a,title:"",children:"Hello world!"}),e(g,{style:{width:360},cover:e(z,{width:"100%",radius:"0",height:"100%",src:"https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg"}),title:"France is a land",actionList:[e("span",{children:e(_,{})},"like"),e("span",{children:e(j,{})},"share"),e("span",{children:e(I,{})},"more")],avatar:e(L,{children:"123"}),nickname:"illa",description:e(V,{children:"France is a land"}),...a})]}),p=E.bind({});p.args={title:"Title"};var b,h,q;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <Space size="large" direction="vertical">
      <Card style={{
      width: 360
    }} extra={<Link>More</Link>} {...args}>
        France is a land, the British are a nation, and America is the passion
        in our hearts.People all over the world carrying a Santa Claus came to
        the United States to chase their ideas of American dreams, but in the
        end ,there is nothing more than the pursuit of more money, and they
        slowly get lost in this economically prosperous but utilitarian society.
        So, sad stories undoubtedly happen in the most brilliant era
      </Card>
      <Card style={{
      width: 360
    }} {...args} title={""}>
        Hello world!
      </Card>
      <CardMeta style={{
      width: 360
    }} cover={<Image width="100%" radius="0" height="100%" src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg" />} title="France is a land" actionList={[<span key="like">
            <LikeOutlineIcon />
          </span>, <span key="share">
            <StartOutlineIcon />
          </span>, <span key="more">
            <MoreIcon />
          </span>]} avatar={<Button>123</Button>} nickname="illa" description={<>France is a land</>} {...args} />
    </Space>;
}`,...(q=(h=p.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const fe=["Basic"];export{p as Basic,fe as __namedExportsOrder,me as default};
//# sourceMappingURL=card.stories-51622cce.js.map
