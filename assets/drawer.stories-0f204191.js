import{j as e,a as r,F as z}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as p}from"./index-c4905b50.js";import{r as Y}from"./index-07d1f67e.js";import{F as G}from"./Combination-09291ed2.js";import{$ as K}from"./Combination-cc7877ab.js";import{c as l,g as o,i as u,a as J,d as Q}from"./style-eba6b849.js";import{z as U}from"./z-index-efffafd0.js";import{A as Z}from"./index-28b4eed0.js";import{m as w}from"./motion-1a692e5b.js";import{C as ee,d as ae}from"./config-provider-context-8630f055.js";import{C as ne}from"./close-ed08e5ef.js";import{B as f}from"./button-group-context-16204ecd.js";import{S as te}from"./space-58565126.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";import"./_commonjsHelpers-042e6b4d.js";import"./setPrototypeOf-51e8cf87.js";import"./defineProperty-147cd0d2.js";import"./medium-b98bd9b0.js";import"./tslib.es6-bfc81c0b.js";import"./inheritsLoose-0bea7c65.js";import"./animate-83017438.js";import"./use-isomorphic-effect-4e0215de.js";import"./create-icon-e1f02089.js";import"./color-palette-cd133b87.js";import"./index-d85697b4.js";import"./loading-e4414da2.js";import"./divider-942251de.js";function le(t,a,n){return l`
    ${n}: 0;
    width: ${t};
    height: ${a};
    position: absolute;
    background-color: ${o(`--${u}-white-01`)};
  `}function ie(t){return l`
    position: ${t?"fixed":"absolute"};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${U.drawer};
  `}const re=l`
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`,se=l`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${o(`--${u}-blackAlpha-04`)};
`,oe=l`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid ${o(`--${u}-grayBlue-08`)};
  flex-shrink: 0;
  flex-grow: 0;
`,ue=l`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  color: ${o(`--${u}-grayBlue-02`)};
`,de=l`
  position: absolute;
  cursor: pointer;
  top: 18px;
  right: 20px;
  font-size: 8px;
  color: ${o(`--${u}-grayBlue-03`)};
  line-height: 0;
`,pe=l`
  width: 100%;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: right;
  padding: 8px 24px;
  border-top: 1px solid ${o(`--${u}-grayBlue-08`)};
`,me=l`
  margin-right: 8px;
`,ce={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}};function fe(t){let a,n;switch(t){case"top":n="-100%";break;case"bottom":n="100%";break;case"left":a="-100%";break;case"right":a="100%";break}return{initial:{x:`${a}`,y:`${n}`},animate:{x:0,y:0},exit:{x:`${a}`,y:`${n}`}}}const k=l`
  width: 100%;
  height: 100%;
`,s=p.forwardRef((t,a)=>{var v;const{children:n,title:x,w:T="250px",h:H="100%",footer:O=!0,visible:h,mask:_=!0,maskClosable:E=!0,maskStyle:W,closable:A=!0,okText:j,cancelText:F,focusLock:L=!0,autoFocus:R=!0,placement:V="right",confirmLoading:M,onOk:N,onCancel:m,afterOpen:g,afterClose:y,...P}=t,b=p.useContext(ee),q=((v=b==null?void 0:b.locale)==null?void 0:v.drawer)??ae.drawer,X=()=>{const i=e(K,{css:k,children:r("div",{css:re,...Q(P),children:[x&&e("div",{css:oe,children:e("div",{css:ue,children:x})}),A&&e("div",{css:de,onClick:m,children:e(ne,{})}),n,O&&r("div",{css:pe,children:[e(f,{css:me,onClick:m,colorScheme:"gray",size:"medium",children:F||q.cancelText}),e(f,{size:"medium",onClick:N,loading:M,children:j||q.okText})]})]})});return L?e(G,{css:k,disabled:!h,autoFocus:R,children:i}):i};return e(z,{children:Y.createPortal(e(Z,{children:h&&r("div",{ref:a,css:ie(!0),children:[_?e(w.div,{variants:ce,animate:"animate",exit:"exit",initial:"initial",transition:{duration:.3},css:[se,W],onClick:i=>{E&&m&&m(i)}}):null,e(w.div,{variants:fe(V),animate:"animate",exit:"exit",initial:"initial",transition:{duration:.3},css:[le(T,H,V),J(t)],onAnimationComplete:i=>{i==="animate"&&(g==null||g()),i==="exit"&&(y==null||y())},children:X()})]})}),document.body)})});s.displayName="Drawer";try{s.displayName="Drawer",s.__docgenInfo={description:"",displayName:"Drawer",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"boolean"}},okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"SerializedStyles"}},maskClosable:{defaultValue:null,description:"",name:"maskClosable",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},focusLock:{defaultValue:null,description:"",name:"focusLock",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},confirmLoading:{defaultValue:null,description:"",name:"confirmLoading",required:!1,type:{name:"boolean"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"((e?: MouseEvent<Element, MouseEvent>) => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((e?: MouseEvent<Element, MouseEvent>) => void)"}},afterOpen:{defaultValue:null,description:"",name:"afterOpen",required:!1,type:{name:"(() => void)"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"(() => void)"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}}}}}catch{}const Ne={title:"FEEDBACK/Drawer",component:s},ge=t=>{const[a,n]=p.useState(!1);return r(te,{children:[e(f,{onClick:()=>n(!0),children:"Open Drawer"}),r(s,{...t,visible:a,onCancel:()=>n(!1),onOk:()=>n(!1),children:[e("div",{children:"Here is an example text."}),e("div",{children:"Here is an example text."})]})]})},d=ge.bind({});d.args={title:"Drawer Title"};const ye=()=>{const[t,a]=p.useState(!0),n=p.useRef(null);return r(z,{children:[e(s,{title:"Basic",visible:t,placement:"left",onOk:()=>{a(!1)},onCancel:()=>{a(!1)},children:e("div",{style:{textAlign:"left"},children:"Here is an example text."})}),e("div",{ref:n,style:{width:1200,height:300,backgroundColor:"gray",position:"relative",overflow:"hidden",lineHeight:"300px",textAlign:"center"},children:e(f,{onClick:()=>a(!0),children:"Open"})})]})},c=ye.bind({});var C,S,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  return <Space>
      <Button onClick={() => setVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
        <div>Here is an example text.</div>
        <div>Here is an example text.</div>
      </Drawer>
    </Space>;
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var $,B,I;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [visibleInner, setVisibleInner] = useState(true);
  const refWrapper = useRef(null);
  return <>
      <Drawer title="Basic" visible={visibleInner} placement={"left"} onOk={() => {
      setVisibleInner(false);
    }} onCancel={() => {
      setVisibleInner(false);
    }}>
        <div style={{
        textAlign: "left"
      }}>Here is an example text.</div>
      </Drawer>
      <div ref={refWrapper} style={{
      width: 1200,
      height: 300,
      backgroundColor: "gray",
      position: "relative",
      overflow: "hidden",
      lineHeight: "300px",
      textAlign: "center"
    }}>
        <Button onClick={() => setVisibleInner(true)}>Open</Button>
      </div>
    </>;
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const Pe=["Basic","Container"];export{d as Basic,c as Container,Pe as __namedExportsOrder,Ne as default};
//# sourceMappingURL=drawer.stories-0f204191.js.map
