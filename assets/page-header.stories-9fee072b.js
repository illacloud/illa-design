import{a as e,F as p,j as u}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as f}from"./index-1cdf6ce0.js";import{c as r,g as b,i as V,a as C,d as N}from"./style-4011d251.js";import{g as q}from"./color-palette-83e58897.js";import{B as I}from"./breadcrumb-a1b32f65.js";import{P as H}from"./previous-5546111f.js";import{D as k}from"./divider-90977a79.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./down-576466d9.js";import"./create-icon-e804097a.js";import"./droplist-item-3244616a.js";import"./use-merge-value-fcf53e13.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";import"./trigger-54fa4cde.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./use-force-update-497a924b.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./index-4cd6a639.js";import"./slash-4659ecf8.js";const B=r`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;r`
  display: flex;
  align-items: center;
`;r`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  margin-right: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${b(`--${V}-grayBlue-09`)};
  }
`;const P=r`
  margin-left: 16px;
  height: 28px;
  flex-grow: 0;
  font-weight: 600;
  font-size: 20px;
  color: ${q("grayBlue","02")};
`;r`
  width: 1px;
  margin: 0 12px;
  height: 16px;
  background-color: ${q("grayBlue","08")};
`;const T=r`
  color: ${b(`--${V}-grayBlue-04`)};
  font-size: 14px;
`,_=r`
  flex-grow: 1;
`,l=f.forwardRef((n,x)=>{const{title:d,subTitle:o,breadcrumb:m,backIcon:t,extra:h,onBack:a,...v}=n,w=f.useMemo(()=>typeof t=="boolean"?t?e(H,{onClick:s=>{a==null||a(s)}}):e("span",{onClick:s=>{a==null||a(s)},children:t}):e(p,{}),[t,a]);return u("div",{ref:x,css:C(n),...N(v),children:[m&&e(I,{...m}),u("div",{css:B,children:[w,d&&e("div",{css:P,children:d}),o&&u(p,{children:[e(k,{direction:"vertical",ml:"12px",mr:"12px"}),e("div",{css:T,children:o})]}),e("div",{css:_}),h]})]})});l.displayName="PageHeader";try{l.displayName="PageHeader",l.__docgenInfo={description:"",displayName:"PageHeader",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"ReactNode"}},breadcrumb:{defaultValue:null,description:"",name:"breadcrumb",required:!1,type:{name:"BreadcrumbProps"}},backIcon:{defaultValue:null,description:"",name:"backIcon",required:!1,type:{name:"ReactNode"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const le={title:"NAVIGATION/PageHeader",component:l,argTypes:{}},S=n=>e(l,{...n,title:"IllaDesign",subTitle:"This is a description",backIcon:!0,breadcrumb:{routes:[{path:"/",breadcrumbName:"Home"},{path:"/channel",breadcrumbName:"Channel"},{path:"/news",breadcrumbName:"News"}]},extra:e("div",{children:"save"})}),i=S.bind({});var c,g,y;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <PageHeader {...args} title="IllaDesign" subTitle="This is a description" backIcon breadcrumb={{
    routes: [{
      path: "/",
      breadcrumbName: "Home"
    }, {
      path: "/channel",
      breadcrumbName: "Channel"
    }, {
      path: "/news",
      breadcrumbName: "News"
    }]
  }} extra={<div>save</div>}></PageHeader>;
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const te=["Basic"];export{i as Basic,te as __namedExportsOrder,le as default};
//# sourceMappingURL=page-header.stories-9fee072b.js.map
