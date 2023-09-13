import{j as i,a as e}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as w}from"./index-1cdf6ce0.js";import{c as n,g as d,i as u,a as S,d as A}from"./style-3ea54b04.js";import{A as s}from"./avatar-92fb141e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./people-0aeaca60.js";import"./create-icon-907f0980.js";import"./image-c56aa3a3.js";import"./image-default-3cbff2d8.js";const N=n`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`,j=n`
  display: inline-flex;
  width: 100%;
`,k=n`
  margin-top: 4px;
  color: ${d(`--${u}-grayBlue-02`)};
  font-size: 14px;
  font-family: SFProDisplay;
  margin-bottom: 8px;
`;n`
  font-size: 14px;
  font-family: SFProDisplay;
`;const _=n`
  margin-left: 16px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
`,B=n`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;function R(a){let t;return a=="right"?t=n`
      justify-content: space-between;
    `:t=n`
      justify-content: start;
    `,n`
    display: inline-flex;
    ${t}
  `}const $=n`
  display: inline-flex;
  align-items: flex-end;
  font-weight: 500;
  font-family: SFProDisplay;
  font-size: 14px;
  margin-right: 8px;
  color: ${d(`--${u}-grayBlue-04`)}; ;
`,z=n`
  display: inline-flex;
  align-items: flex-end;
  font-weight: 400;
  font-family: SFProDisplay;
  font-size: 12px;
  color: ${d(`--${u}-grayBlue-04`)};
`;function D(a){let t;return a=="right"&&(t=n`
      align-self: flex-end;
    `),n`
    ${t};
    font-size: 14px;
    color: ${d(`--${u}-grayBlue-03`)};

    > *:not(:last-child) {
      margin-right: 8px;
    }
  `}const T=n`
  margin-left: 48px;
  margin-top: 20px;
`,r=w.forwardRef((a,t)=>{const{placeholder:y,avatar:h,actions:q,author:V,datetime:v,children:b,content:x,align:l,...C}=a;let m,c;return typeof l=="object"?(m=(l==null?void 0:l.datetime)??"left",c=(l==null?void 0:l.actions)??"left"):(m=l??"left",c=l??"left"),i("div",{placeholder:y,css:[N,S(a)],ref:t,...A(C),children:[i("div",{css:j,children:[e("span",{css:B,children:h}),i("div",{css:_,children:[i("div",{css:R(m),children:[i("span",{css:$,children:[" ",V]}),e("span",{css:[z],children:v})]}),e("span",{css:k,children:x}),i("span",{css:D(c),children:[" ",q]})]})]}),e("div",{css:T,children:b})]})});r.displayName="Comment";try{r.displayName="Comment",r.__docgenInfo={description:"",displayName:"Comment",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},author:{defaultValue:null,description:"",name:"author",required:!1,type:{name:"ReactNode"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},datetime:{defaultValue:null,description:"",name:"datetime",required:!1,type:{name:"ReactNode"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"left" | "right" | { datetime?: "left" | "right"; actions?: "left" | "right"; }'}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const X={title:"DATA DISPLAY/Comment",component:r,argTypes:{author:{control:{type:"text"}},datetime:{control:{type:"text"}}}},o=a=>{const t=i("div",{"data-testid":"test-action",children:[e("span",{className:"custom-comment-action",onClick:()=>{},children:"like   "},"heart"),e("span",{className:"custom-comment-action",onClick:()=>{},children:"star   "},"star"),e("span",{className:"custom-comment-action",children:"reply   "},"reply")]});return i("div",{children:[e(r,{align:{actions:"right"},actions:t,avatar:e(s,{}),author:e("span",{children:"aoao"}),content:e("div",{children:"Comment body content."}),datetime:"1 hour",...a}),i(r,{align:{actions:"right"},actions:t,avatar:e(s,{}),author:"aoao",content:e("div",{children:"Comment body content."}),datetime:"1 hour",...a,children:[i(r,{align:{actions:"right"},actions:t,avatar:e(s,{}),author:"aoao",content:e("div",{children:"Comment body content."}),datetime:"1 hour",...a,children:[" ",e(r,{align:{actions:"right"},actions:t,avatar:e(s,{}),author:"aoao",content:e("div",{children:"Comment body content."}),datetime:"1 hour"})]}),e(r,{align:{actions:"right"},actions:t,avatar:e(s,{}),author:"aoao",content:e("div",{children:"Comment body content."}),datetime:"1 hour"})]})]})};var p,f,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const actions = <div data-testid="test-action">
      <span className="custom-comment-action" key="heart" onClick={() => {}}>
        {\`like   \`}
      </span>
      <span className="custom-comment-action" key="star" onClick={() => {}}>
        {\`star   \`}
      </span>
      <span className="custom-comment-action" key="reply">
        {\`reply   \`}
      </span>
    </div>;
  return <div>
      <Comment align={{
      actions: "right"
    }} actions={actions} avatar={<Avatar />} author={<span>aoao</span>} content={<div>Comment body content.</div>} datetime="1 hour" {...args} />

      <Comment align={{
      actions: "right"
    }} actions={actions} avatar={<Avatar />} author={"aoao"} content={<div>Comment body content.</div>} datetime="1 hour" {...args}>
        <Comment align={{
        actions: "right"
      }} actions={actions} avatar={<Avatar />} author={"aoao"} content={<div>Comment body content.</div>} datetime="1 hour" {...args}>
          {" "}
          <Comment align={{
          actions: "right"
        }} actions={actions} avatar={<Avatar />} author={"aoao"} content={<div>Comment body content.</div>} datetime="1 hour" />
        </Comment>
        <Comment align={{
        actions: "right"
      }} actions={actions} avatar={<Avatar />} author={"aoao"} content={<div>Comment body content.</div>} datetime="1 hour" />
      </Comment>
    </div>;
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const O=["Basic"];export{o as Basic,O as __namedExportsOrder,X as default};
//# sourceMappingURL=comment.stories-5bd9531d.js.map
