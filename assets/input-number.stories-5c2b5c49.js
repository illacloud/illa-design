import{j as B,a as u}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as y}from"./index-1cdf6ce0.js";import{c as N}from"./style-3ea54b04.js";import{g as q}from"./color-palette-728b424e.js";import{M as L,P as Y}from"./plus-18c1c265.js";import{u as J}from"./use-merge-value-fcf53e13.js";import{f as v}from"./is-47f46886.js";import{U as Q}from"./up-1088cd79.js";import{D as Z}from"./down-3d8ebd18.js";import{S as W}from"./space-97cf5fad.js";import{I as ee}from"./input-7a42d9dd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./create-icon-907f0980.js";import"./use-previous-5c929b6e.js";import"./divider-bd60f9d7.js";import"./style-4ee563c0.js";import"./z-index-efffafd0.js";import"./clear-bb423cf4.js";const re=N`
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  visibility: hidden;
`;function $(o,b){return N`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 18px;
    height: ${b==="small"?"9px":"11px"};
    border-radius: ${o==="up"?"3px 3px 0 0":"0 0 3px 3px"};
    background-color: ${q("grayBlue","09")};
    font-size: 10px;
    color: ${q("grayBlue","04")};

    &:hover {
      background-color: ${q("grayBlue","07")};
    }
  `}const ae=N`
  &:hover {
    .control {
      visibility: visible;
    }
  }
`;function z(o){return N`
    font-size: 12px;
    margin-left: ${o==="large"?"-2px":"-6px"};
    margin-right: ${o==="large"?"-2px":"-6px"};
    color: ${q("grayBlue","05")};
    &:active {
      color: ${q("grayBlue","02")};
    }
  `}const g=y.forwardRef((o,b)=>{const{size:m="medium",colorScheme:p="blue",disabled:C,precision:h,error:P,hideControl:F,readOnly:E,max:s=Number.MAX_SAFE_INTEGER,min:l=Number.MIN_SAFE_INTEGER,step:d=1,onBlur:w,onFocus:S,placeholder:G,mode:I="embed",prefix:H,suffix:O,defaultValue:U,value:n,icons:t,formatter:f,parser:c,onChange:e,...X}=o,[V,i]=J("",{value:n,defaultValue:U}),_=y.useRef(),j=y.useCallback(()=>{const r=Number(V);if(!v(r)){0<=s&&0>=l?(n===void 0&&i(0),e==null||e(0)):(n===void 0&&i(l),e==null||e(l));return}r+d<=s&&r+d>=l&&(n===void 0&&i(r+d),e==null||e(r+d))},[V,s,l,e,i,d,n]),M=y.useCallback(()=>{const r=Number(V);if(!v(r)){0<=s&&0>=l?(n===void 0&&i(0),e==null||e(0)):(n===void 0&&i(l),e==null||e(l));return}r-d<=s&&r-d>=l&&(n===void 0&&i(r-d),e==null||e(r-d))},[V,s,l,e,i,d,n]),K=B("div",{className:"control",css:re,children:[u("div",{css:$("up",m),onClick:()=>{j()},children:(t==null?void 0:t.up)??u(Q,{})}),u("div",{css:$("bottom",m),onClick:()=>{M()},children:(t==null?void 0:t.down)??u(Z,{})})]}),R=y.useCallback(r=>{if(!v(Number(r)))return 0<=s&&0>=l?0:l;if(h!==void 0){let a=Number(Number(r).toFixed(h));return a=Math.max(a,l),a=Math.min(a,s),a}else{let a=Number(r);return a=Math.max(a,l),a=Math.min(a,s),a}},[s,l,h]);return u(ee,{ref:b,inputRef:_,_css:ae,size:m,value:V,onChange:r=>{const a=c?c(r):r;v(Number(a))?n===void 0&&i(f?f(a):a):n===void 0&&i(r),e==null||e(R(a))},onPressEnter:()=>{const r=c?c(_.current.value):_.current.value,a=R(r);n===void 0&&i(f?f(a):a),e==null||e(a)},onBlur:r=>{const a=c?c(r.target.value):r.target.value,k=R(a);n===void 0&&i(f?f(k):k),e==null||e(k),w==null||w(r)},onFocus:r=>{S==null||S(r)},readOnly:E,placeholder:G,prefix:H,suffix:B(W,{mr:"-8px",children:[O,!F&&!E&&!C&&I==="embed"&&K]}),addBefore:I==="button"?u("span",{css:z(m),onClick:()=>{M()},children:(t==null?void 0:t.minus)??u(L,{})}):void 0,addAfter:I==="button"?u("span",{css:z(m),onClick:()=>{j()},children:(t==null?void 0:t.plus)??u(Y,{})}):void 0,colorScheme:p,disabled:C,error:P,...X})});g.displayName="InputNumber";try{g.displayName="InputNumber",g.__docgenInfo={description:"",displayName:"InputNumber",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideControl:{defaultValue:null,description:"",name:"hideControl",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},precision:{defaultValue:null,description:"",name:"precision",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"embed"'}]}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:"{ up?: ReactNode; down?: ReactNode; plus?: ReactNode; minus?: ReactNode; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: number) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"(value: string | number) => number"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"(value: string | number) => string | number"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const Ne={title:"DATA INPUT/InputNumber",component:g},x=o=>{const[b,m]=y.useState(0);return B(W,{direction:"vertical",align:"start",children:[u(g,{w:"320px",formatter:p=>p+"%",parser:p=>p.replace("%",""),min:0,max:100,...o,mode:"button"}),u(g,{w:"320px",value:b,precision:3,onChange:p=>{m(p)},mode:"button"})]})};var A,D,T;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`props => {
  const [currentValue, setCurrentValue] = useState<number | undefined>(0);
  return <Space direction="vertical" align="start">
      <InputNumber w="320px" formatter={v => {
      return v + "%";
    }} parser={v => {
      return (v as string).replace("%", "");
    }} min={0} max={100} {...props} mode="button" />
      <InputNumber w="320px" value={currentValue} precision={3} onChange={v => {
      setCurrentValue(v);
    }} mode="button" />
    </Space>;
}`,...(T=(D=x.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const he=["Basic"];export{x as Basic,he as __namedExportsOrder,Ne as default};
//# sourceMappingURL=input-number.stories-5c2b5c49.js.map
