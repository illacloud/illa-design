import{a as u,j as A}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as i}from"./index-1cdf6ce0.js";import{k as Q,c as p,g as C,i as w,a as Z,d as ee}from"./style-4011d251.js";import{S as ae}from"./star-fill-07f65cbc.js";import{L as te}from"./like-fill-c4fe25a4.js";import{T as re}from"./trigger-54fa4cde.js";import{S as ne}from"./space-29f127a3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./create-icon-e804097a.js";import"./color-palette-83e58897.js";import"./index-45a08ae3.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./use-force-update-497a924b.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./index-4cd6a639.js";import"./divider-90977a79.js";function W(e,a){return a===void 0&&(a=15),+parseFloat(Number(e).toPrecision(a))}function x(e){var a=e.toString().split(/[eE]/),r=(a[0].split(".")[1]||"").length-+(a[1]||0);return r>0?r:0}function $(e){if(e.toString().indexOf("e")===-1)return Number(e.toString().replace(".",""));var a=x(e);return a>0?W(Number(e)*Math.pow(10,a)):Number(e)}function H(e){(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&console.warn(e+" is beyond boundary when transfer to integer, the results may not be accurate")}function D(e){return function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];var n=a[0],o=a.slice(1);return o.reduce(function(d,V){return e(d,V)},n)}}var G=D(function(e,a){var r=$(e),n=$(a),o=x(e)+x(a),d=r*n;return H(d),d/Math.pow(10,o)}),le=D(function(e,a){var r=$(e),n=$(a);return H(r),H(n),G(r/n,W(Math.pow(10,x(a)-x(e))))});const ie=Q`
  0% {
    transform: scale(1);
  }

  57%{
    transform: scale(1.33);
  }
  
  100% {
    transform: scale(1);
  }
`;function se(e){const a=e?p`
        cursor: not-allowed;
      `:p``;return p`
    display: inline-block;
    user-select: none;
    ${a}
  `}const ue=p`
  display: flex;
  align-items: center;
  font-size: 24px;
  min-height: 32px;
  flex-wrap: wrap;
  gap: 7px;
`;function oe(e,a,r){const n=e||a?"":"cursor: pointer",o=r?p`
        animation: ${ie} 0.35s ease-in-out;
      `:"";return p`
    position: relative;
    transition: transform 0.15s ease-in-out;
    color: ${C(`--${w}-grayBlue-08`)};
    ${n};
    ${o};
    &:hover {
      transform: ${a?"":"scale(1.33)"};
    }
  `}function de(e,a){const r=a?`${C(`--${w}-yellow-04`)}`:`${C(`--${w}-red-03`)}`;return p`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    transition: inherit;
    color: ${e?`${r}`:""};
    opacity: ${e?1:0};
    > svg {
      float: left;
    }
  `}function pe(e,a){const r=a?`${C(`--${w}-yellow-04`)}`:`${C(`--${w}-red-03`)}`;return p`
    transition: inherit;
    color: ${e?`${r}`:""};
    > svg {
      float: left;
    }
  `}const y=i.forwardRef((e,a)=>{const{defaultValue:r,character:n=u(ae,{}),count:o=5,value:d,tooltips:V,allowHalf:f,allowClear:T,disabled:b,readonly:S,heart:h,onChange:q,onHoverChange:c,...O}=e,[X,M]=i.useState(r||d||0),[g,j]=i.useState(0),[R,B]=i.useState(),m=d!==void 0?d:X,k=i.useCallback(()=>{g&&(j(0),c&&c(0))},[g,c]),I=i.useCallback((t,l)=>{const s=l&&f?t+.5:t+1;s!==g&&(j(s),c&&c(s))},[f,g,c]),N=i.useCallback((t,l)=>{const s=l&&f?t+.5:t+1;B(!0),s!==m?(M(s),q&&q(s)):T&&(M(0),q&&q(0),k())},[T,f,m,q,k]),_=i.useCallback(t=>{let l=typeof n=="function"?n(t):n;return h&&(l=u(te,{})),l},[n,h]),L=i.useCallback(t=>{const l=f?G(+le(m||0,.5).toFixed(0),.5):Math.round(m),s=g||l,U=S||b?{}:{onMouseEnter:()=>{I(t,!0)},onClick:()=>{N(t,!0)}},J=S||b?{}:{onMouseEnter:()=>{I(t,!1)},onClick:()=>{N(t,!1)}},E=V&&V[t],K=E?re:i.Fragment;return u(K,{...E?{content:E}:{},children:A("div",{css:oe(b??!1,S??!1,R&&t+1<m),style:R?{animationDelay:`${50*t}ms`}:{},onAnimationEnd:()=>{R&&t+1>=m-1&&B(!1)},children:[u("div",{css:de(f&&t+.5===s,!h),...U,children:_(t)}),u("div",{css:pe(t+1<=s,!h),...J,children:_(t)})]})},t)},[f,R,b,h,g,m,N,I,S,V,_]),Y=i.useMemo(()=>{const t=[];for(let l=0;l<o;l++)t.push(L(l));return t},[o,L]);return u("div",{ref:a,css:[se(b??!1),Z(e)],...ee(O),onMouseLeave:k,children:u("div",{css:ue,children:Y})})});y.displayName="Rate";try{y.displayName="Rate",y.__docgenInfo={description:"",displayName:"Rate",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},character:{defaultValue:null,description:"",name:"character",required:!1,type:{name:"ReactNode | ((index: number) => ReactNode)"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},tooltips:{defaultValue:null,description:"",name:"tooltips",required:!1,type:{name:"string[]"}},allowHalf:{defaultValue:null,description:"",name:"allowHalf",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},heart:{defaultValue:null,description:"",name:"heart",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: number) => void"}},onHoverChange:{defaultValue:null,description:"",name:"onHoverChange",required:!1,type:{name:"(value: number) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const He={title:"DATA INPUT/Rate",component:y,argTypes:{character:{control:!1}}},fe=e=>A(ne,{size:"large",direction:"vertical",style:{marginTop:50},children:[u(y,{...e}),u(y,{...e,tooltips:[]})]}),v=fe.bind({});v.args={tooltips:["👌","❤️","🤔","😊","😄"]};var P,F,z;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <Space size={"large"} direction={"vertical"} style={{
    marginTop: 50
  }}>
      <Rate {...args} />
      <Rate {...args} tooltips={[]} />
    </Space>;
}`,...(z=(F=v.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const Te=["Basic"];export{v as Basic,Te as __namedExportsOrder,He as default};
//# sourceMappingURL=rate.stories-ea0e2bab.js.map
