import{a as r,j as h}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as g}from"./index-1cdf6ce0.js";import{c as n,g as I,i as _,a as $,d as z}from"./style-3ea54b04.js";import{S as N}from"./spin-7f6084a1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./loading-be690f19.js";import"./create-icon-907f0980.js";const x=g.createContext(void 0);x.displayName="TimelineContext";function W(e,l){return n`
    display: inline-flex;
    ${e==="vertical"&&"flex-direction: column"};
    ${e==="horizontal"&&l==="alternate"&&n`
      min-height: 100px;
      align-items: center;
    `};
  `}function B(e,l,t){if(e==="horizontal"){let i;return l==="alternate-same"?i=n`
        margin-top: 16px;
        padding-bottom: 8px;
        transform: translateY(-50%);
      `:l==="alternate-relative"?i=n`
        margin-top: -16px;
        padding-top: 8px;
        transform: translateY(50%);
      `:l==="bottom"?i=n`
        padding-bottom: 8px;
      `:i=n`
        padding-top: 8px;
      `,n`
      ${i};
      flex: ${t?"unset":"1"};
      position: relative;
    `}const a=n`
    &:last-of-type {
      padding-bottom: ${t?"20px":"0"};
    }
  `;return n`
    position: relative;
    margin: 0;
    padding-bottom: 42px;
    ${a};
  `}function H(e,l){let t=e||I(`--${_}-blue-03`),a;return l==="hollow"?a=n`
      border: 1px solid ${t};
    `:a=n`
      background-color: ${t};
    `,n`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    ${a};
  `}function k(e,l){const t=n`
    position: absolute;
    text-align: center;
  `;return e==="horizontal"?l==="bottom"||l==="alternate-same"?n`
        ${t};
        width: 100%;
        bottom: 0;
      `:n`
        ${t};
        width: 100%;
        top: 0;
      `:l==="alternate-same"||l==="alternate-relative"?n`
        ${t};
        height: 100%;
        left: 50%;
      `:l==="right"?n`
        ${t};
        height: 100%;
        right: 0;
      `:n`
        ${t};
        height: 100%;
        left: 0;
      `}function L(e,l,t){let a=t||I(`--${_}-grayBlue-08`);return e==="horizontal"?n`
      box-sizing: border-box;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      bottom: -4px;
      left: 24px;
      right: 0;
      height: 1px;
      border-top: 1px ${l} ${a};
    `:n`
    box-sizing: border-box;
    position: absolute;
    transform: translateX(-50%);
    top: 24px;
    bottom: 0;
    left: 50%;
    width: 1px;
    border-left: 1px ${l} ${a};
  `}const w=n`
  display: flex;
  justify-content: center;
  align-items: center;
`;function Y(e){return e==="horizontal"?n`
      ${w};
      width: 24px;
      height: 16px;
      line-height: 6px;
      position: relative;
    `:n`
    ${w};
    width: 6px;
    height: 24px;
    line-height: 24px;
    position: relative;
  `}function P(e){return e==="alternate-same"?n`
      left: 50%;
      width: 50%;
      margin-left: 22px;
      padding-right: 22px;
    `:e==="alternate-relative"?n`
      left: 0;
      margin-left: -16px;
      margin-right: 0;
      text-align: right;
      width: 50%;
      padding-right: 16px;
    `:e==="right"?n`
      text-align: right;
      margin-left: 0;
      margin-right: 16px;
    `:n`
      margin-left: 16px;
    `}function F(e){return e==="alternate-same"?n`
      margin-bottom: 16px;
      margin-right: 20px;
      padding-bottom: unset;
    `:e==="alternate-relative"?n`
      margin-top: 16px;
      margin-right: 20px;
    `:e==="bottom"?n`
      margin-bottom: 16px;
      margin-right: 20px;
      padding-bottom: unset;
    `:n`
      margin-top: 16px;
      margin-right: 20px;
    `}function A(e,l,t){let a;return e==="horizontal"?a=F(l):a=P(l),n`
    position: relative;
    padding-bottom: 2px;
    ${t&&n`
      font-size: 14px;
      line-height: 22px;
    `};
    ${a};
  `}const X=(e,l,t)=>{let a=["alternate-same","alternate-relative"],i=Math.abs(l%2-(t==="relative"?1:0));return e==="alternate"?a[i]:e},d=g.forwardRef((e,l)=>r(x.Consumer,{children:t=>{const a=t==null?void 0:t.isChildrenLast,{dot:i,direction:u=(t==null?void 0:t.direction)||"vertical",mode:y=(t==null?void 0:t.mode)||"left",index:V=(t==null?void 0:t.index)||0,label:m,labelPosition:s="same",dotColor:v,dotType:q="solid",lineType:f="solid",lineColor:o,autoFixDotSize:D=!0,children:j,...R}=e,b=X(y,V,s);return h("div",{css:[B(u,b,i),$(e)],ref:l,...z(R),children:[h("div",{css:k(u,b),children:[a?null:r("div",{css:L(u,f,o)}),r("div",{css:Y(u),children:i||r("div",{css:H(v,q)})})]}),r("div",{css:A(u,b,D),children:m||j})]})}}));d.displayName="TimelineItem";try{d.displayName="TimelineItem",d.__docgenInfo={description:"",displayName:"TimelineItem",props:{dot:{defaultValue:null,description:"",name:"dot",required:!1,type:{name:"ReactNode"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"relative"'},{value:'"same"'}]}},dotColor:{defaultValue:null,description:"",name:"dotColor",required:!1,type:{name:"string"}},dotType:{defaultValue:null,description:"",name:"dotType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"hollow"'}]}},lineType:{defaultValue:null,description:"",name:"lineType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}},lineColor:{defaultValue:null,description:"",name:"lineColor",required:!1,type:{name:"string"}},autoFixDotSize:{defaultValue:null,description:"",name:"autoFixDotSize",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"alternate"'}]}},pending:{defaultValue:null,description:"",name:"pending",required:!1,type:{name:"ReactNode"}},pendingDot:{defaultValue:null,description:"",name:"pendingDot",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const p=g.forwardRef((e,l)=>{const{reverse:t,mode:a="left",direction:i="vertical",pending:u,pendingDot:y=r(N,{size:"small"}),children:V,...m}=e,s=g.Children.toArray(V)||[];t&&s.reverse();const q=u?r(d,{dot:y||(typeof u=="boolean"?null:u),mode:a,direction:i},s.length):null;return u&&s.push(q),r("div",{ref:l,css:n(W(i,a),$(e)),...z(m),children:s.map((f,o)=>f?r(x.Provider,{value:{direction:i,mode:a,index:o,isChildrenLast:s.length-1===o},children:f},o):null)})});p.displayName="Timeline";try{p.displayName="Timeline",p.__docgenInfo={description:"",displayName:"Timeline",props:{reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"alternate"'}]}},pending:{defaultValue:null,description:"",name:"pending",required:!1,type:{name:"ReactNode"}},pendingDot:{defaultValue:null,description:"",name:"pendingDot",required:!1,type:{name:"ReactNode"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const ne={title:"DATA DISPLAY/Timeline",component:p,argTypes:{pending:{control:!1},pendingDot:{control:!1}}},G=e=>h(p,{pending:!0,...e,children:[r(d,{children:"The first milestone"}),r(d,{children:"The second milestone"}),r(d,{children:"The third milestone"})]}),c=G.bind({});var S,C,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`props => {
  return <Timeline pending {...props}>
      <TimelineItem>The first milestone</TimelineItem>
      <TimelineItem>The second milestone</TimelineItem>
      <TimelineItem>The third milestone</TimelineItem>
    </Timeline>;
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const te=["Basic"];export{c as Basic,te as __namedExportsOrder,ne as default};
//# sourceMappingURL=timeline.stories-d06d2976.js.map
