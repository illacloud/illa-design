import{j as f,a as e}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as l}from"./index-1cdf6ce0.js";import{d as k}from"./dayjs.min-acd82c3b.js";import{s as T,a as z,b as G,c as v,d as W,e as E}from"./style-f3866a0a.js";import{S as F}from"./skeleton-bd4d8b63.js";import{a as H}from"./animate-4e967d14.js";import{a as A,d as L}from"./style-3ea54b04.js";import{d as w}from"./is-47f46886.js";import{I as O}from"./image-default-3cbff2d8.js";import{U as C}from"./up-1088cd79.js";import{B as P}from"./button-group-context-2fccf722.js";import{S as Y}from"./space-97cf5fad.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./create-icon-907f0980.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./loading-be690f19.js";import"./divider-bd60f9d7.js";const i=l.forwardRef((t,o)=>{const{title:p,value:n=0,decimalSeparator:x=".",format:c,groupSeparator:S=",",loading:_,precision:g,suffix:y,prefix:V,extra:h,countUp:X,countFrom:j=0,countDuration:B=2e3,...D}=t,[u,q]=l.useState(n),s=l.useRef();function b(r=j,a=n){r!==a&&(s.current=H(r,Number(a),{duration:Math.floor(B/1e3),ease:"easeOut",onUpdate:m=>{q(m)},onComplete:()=>{q(a)}}))}l.useEffect(()=>(t.countUp?(s.current&&s.current.stop(),u!==n?b(Number(u),n):b()):q(n),()=>{s.current&&s.current.stop(),s.current=null}),[n]),l.useImperativeHandle(o,()=>({onCountUp:b}));const N=l.useMemo(()=>{if(c)return k(u).format(c);let r=Number(u);if(!isFinite(r))return u;g!==void 0&&(r=r.toFixed(g));let[a,m]=String(r).split(".");return a=a.replace(/\B(?=(\d{3})+(?!\d))/g,S),m!==void 0?a+x+m:a},[c,n,S,x,g,u]);return f("div",{css:[T,A(t)],...L(D),children:[p&&e("div",{css:z,children:p}),f("div",{children:[e(F,{animation:!0,visible:!!_,text:{rows:1,width:"100%"},children:f("div",{css:G,children:[V&&e("span",{css:v(!0,!w(V)),children:V}),e("span",{css:W,children:N.toString()}),y&&e("span",{css:v(!1,!w(y)),children:y})]})}),h&&e("div",{css:E,children:h})]})]})});i.displayName="Statistic";try{i.displayName="Statistic",i.__docgenInfo={description:"",displayName:"Statistic",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Dayjs"}},decimalSeparator:{defaultValue:null,description:"",name:"decimalSeparator",required:!1,type:{name:"string"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},countUp:{defaultValue:null,description:"",name:"countUp",required:!1,type:{name:"boolean"}},countDuration:{defaultValue:null,description:"",name:"countDuration",required:!1,type:{name:"number"}},countFrom:{defaultValue:null,description:"",name:"countFrom",required:!1,type:{name:"number"}},groupSeparator:{defaultValue:null,description:"",name:"groupSeparator",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},precision:{defaultValue:null,description:"",name:"precision",required:!1,type:{name:"number"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const fe={title:"DATA DISPLAY/Statistic",component:i},M=t=>{let o=l.useRef(null);return f(Y,{size:"large",children:[e(i,{...t}),e(i,{...t,title:e(O,{}),suffix:e(C,{})}),e(i,{ref:p=>o=p,...t,precision:2,prefix:e(C,{}),suffix:"%",countUp:!0}),e(P,{onClick:()=>{o.onCountUp()},style:{display:"block",marginTop:10},children:"Start"})]})},d=M.bind({});d.args={title:"Amount",value:50,prefix:"",suffix:""};var I,R,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  let refGrowth: ElementRef<typeof Statistic> = useRef(null);
  return <Space size={"large"}>
      <Statistic {...args} />
      <Statistic {...args} title={<ImageDefaultIcon />} suffix={<UpIcon />} />
      <Statistic ref={ref => refGrowth = ref} {...args} precision={2} prefix={<UpIcon />} suffix="%" countUp />
      <Button onClick={() => {
      refGrowth.onCountUp();
    }} style={{
      display: "block",
      marginTop: 10
    }}>
        Start
      </Button>
    </Space>;
}`,...(U=(R=d.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const ce=["Basic"];export{d as Basic,ce as __namedExportsOrder,fe as default};
//# sourceMappingURL=statistic.stories-90e36ab7.js.map