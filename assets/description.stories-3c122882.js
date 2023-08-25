import{a as z,j as u}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as y}from"./index-c4905b50.js";import{c as o,g as m,i as g,a as F,d as H}from"./style-eba6b849.js";import{a as P}from"./_commonjsHelpers-042e6b4d.js";import{t as W}from"./tslib.es6-bfc81c0b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";const L=P(W),M=o`
  padding: 24px;
  display: inline-flex;
  flex-direction: column;
  vertical-align: center;
  min-width: 372px;
  max-width: 100%;
`;function N(e){let a;switch(e){case"small":a="12px";break;case"medium":a="16px";break;case"large":a="24px";break}return o`
    font-weight: bold;
    color: ${m(`--${g}-grayBlue-02`)};
    font-size: 16px;
    line-height: 24px;
    margin-bottom: ${a};
  `}const T=o`
  display: inline-flex;
  flex-direction: row;
`,Y=o`
  display: inline-flex;
  flex-direction: column;
`;function O(e,a){switch(a){case"horizontal":return e?o`
          line-height: 22px;
          font-size: 14px;
          color: ${m(`--${g}-grayBlue-04`)};
          background-color: ${m(`--${g}-grayBlue-09`)};
        `:o`
          line-height: 22px;
          font-size: 14px;
          color: ${m(`--${g}-grayBlue-04`)};
        `;case"vertical":return e?o`
          line-height: 22px;
          font-size: 14px;
          background-color: ${m(`--${g}-grayBlue-09`)};
          color: ${m(`--${g}-grayBlue-04`)};
        `:o`
          line-height: 22px;
          font-size: 14px;
          color: ${m(`--${g}-grayBlue-04`)};
        `;case"inline-horizontal":return o`
        line-height: 22px;
        font-size: 14px;
        color: ${m(`--${g}-grayBlue-04`)};
        margin-right: 16px;
      `;case"inline-vertical":return o`
        line-height: 22px;
        font-size: 14px;
        color: ${m(`--${g}-grayBlue-04`)};
        margin-bottom: 4px;
      `}}function C(){return o`
    line-height: 22px;
    font-size: 14px;
    color: ${m(`--${g}-grayBlue-02`)};
  `}function v(e,a,l){let n;switch(e){case"small":a?n="5px 24px":l>1?n="5px 48px 5px 0px":n="5px 40px 5px 0px";break;case"medium":a?n="7px 24px":l>1?n="7px 48px 7px 0px":n="7px 40px 7px 0px";break;case"large":a?n="9px 24px":l>1?n="9px 48px 9px 0px":n="9px 40px 9px 0px";break}const r=o`
    box-sizing: border-box;
    padding: ${n};
    margin: 0;
    min-width: 115px;
  `,t=o`
    border: solid 1px ${m(`--${g}-grayBlue-08`)};
  `;return a?o`
      ${r};
      ${t};
    `:o`
      ${r};
    `}function G(e,a){const l=o`
    border: solid 1px ${m(`--${g}-grayBlue-08`)};
  `,n=o`
    width: 100%;
    box-sizing: border-box;
    border-collapse: collapse;
    table-layout: ${e};
  `;return a?o`
      ${l};
      ${n};
    `:o`
      ${n};
    `}var A={},w={},S={},_={},R;function X(){if(R)return _;R=1,Object.defineProperty(_,"__esModule",{value:!0});var e=y,a=function(l){e.useEffect(l,[])};return _.default=a,_}var k;function J(){if(k)return S;k=1,Object.defineProperty(S,"__esModule",{value:!0});var e=L,a=y,l=e.__importDefault(X()),n=function(r){var t=a.useRef(r);t.current=r,l.default(function(){return function(){return t.current()}})};return S.default=n,S}var I;function K(){if(I)return w;I=1,Object.defineProperty(w,"__esModule",{value:!0});var e=L,a=y,l=e.__importDefault(J()),n=function(r){var t=a.useRef(0),d=a.useState(r),i=d[0],f=d[1],s=a.useCallback(function(c){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){f(c)})},[]);return l.default(function(){cancelAnimationFrame(t.current)}),[i,s]};return w.default=n,w}var p={},j;function Q(){if(j)return p;j=1,Object.defineProperty(p,"__esModule",{value:!0}),p.isNavigator=p.isBrowser=p.off=p.on=p.noop=void 0;var e=function(){};p.noop=e;function a(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];n&&n.addEventListener&&n.addEventListener.apply(n,r)}p.on=a;function l(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];n&&n.removeEventListener&&n.removeEventListener.apply(n,r)}return p.off=l,p.isBrowser=typeof window<"u",p.isNavigator=typeof navigator<"u",p}Object.defineProperty(A,"__esModule",{value:!0});var Z=L,ee=y,ne=Z.__importDefault(K()),b=Q(),ae=function(e,a){e===void 0&&(e=1/0),a===void 0&&(a=1/0);var l=ne.default({width:b.isBrowser?window.innerWidth:e,height:b.isBrowser?window.innerHeight:a}),n=l[0],r=l[1];return ee.useEffect(function(){if(b.isBrowser){var t=function(){r({width:window.innerWidth,height:window.innerHeight})};return b.on(window,"resize",t),function(){b.off(window,"resize",t)}}},[]),n},te=A.default=ae;function le(e,a){let l=a,n=[],r=[];for(let t of e)l-(t.span??1)>=0?(l=l-(t.span??1),r.push(t),l==0&&(n.push([...r]),r=[],l=a)):(r.push(t),n.push([...r]),r=[]);return r.length!=0&&n.push([...r]),n}function q(e,a){return typeof e=="number"?e:a>=1600?e.xxl??3:a>=1200?e.xl??3:a>=992?e.lg??3:a>=768?e.md??3:a>=576?e.sm??3:a>=0?e.xs??3:3}function re(e,a,l,n,r,t){const d=[];for(let i of e){const f=[];for(let s of i)f.push(z(y.Fragment,{children:[u("td",{css:o`
              ${v(n,l??!1,t)};
              ${O(l??!1,r)};
            `,align:a,colSpan:1,children:s.label},i.indexOf(s)+"label"),u("td",{css:o`
              ${v(n,l??!1,t)};
              ${C()};
            `,colSpan:(s.span??1)*2-1,children:s.value},i.indexOf(s)+"value")]},i.indexOf(s)));d.push(u("tr",{children:f},e.indexOf(i)))}return d}function ie(e,a,l,n,r,t){const d=[];for(let i of e){const f=[];for(let s of i)f.push(u(y.Fragment,{children:u("td",{align:a,css:v(n,l??!1,t),colSpan:(s.span??1)*2,children:z("div",{css:T,children:[u("span",{css:O(l??!1,r),children:s.label}),u("span",{css:C(),children:s.value})]})},i.indexOf(s)+"value")},i.indexOf(s)));d.push(u("tr",{children:f},e.indexOf(i)))}return d}function se(e,a,l,n,r,t){const d=[];for(let i of e){const f=[];for(let s of i)f.push(u(y.Fragment,{children:u("td",{align:a,css:v(n,l??!1,t),colSpan:(s.span??1)*2,children:z("div",{css:Y,children:[u("span",{css:O(l??!1,r),children:s.label}),u("span",{css:C(),children:s.value})]})},i.indexOf(s)+"value")},i.indexOf(s)));d.push(u("tr",{children:f},e.indexOf(i)))}return d}function ue(e,a,l,n,r,t){const d=[];for(let i of e){const f=[],s=[];for(let c of i)f.push(u(y.Fragment,{children:u("td",{css:o`
              ${v(n,l??!1,t)};
              ${O(l??!1,r)};
            `,align:a,colSpan:(c.span??1)*2,children:c.label},i.indexOf(c)+"label")},i.indexOf(c)+"first")),s.push(u(y.Fragment,{children:u("td",{align:a,css:o`
              ${v(n,l??!1,t)};
              ${C()};
            `,colSpan:(c.span??1)*2,children:c.value},i.indexOf(c)+"value")},i.indexOf(c)+"second"));d.push(u("tr",{children:f},e.indexOf(i)+"first")),d.push(u("tr",{children:s},e.indexOf(i)+"second"))}return d}const V=y.forwardRef((e,a)=>{const{data:l,bordered:n,column:r=3,align:t="left",size:d="medium",layout:i="horizontal",title:f,tableLayout:s="auto",...c}=e,{width:x}=te(),$=l!=null?le(l,q(r,x)):[];let h;switch(i){case"horizontal":h=re($,t,n??!1,d,i,q(r,x));break;case"inline-horizontal":h=ie($,t,n??!1,d,i,q(r,x));break;case"vertical":h=ue($,t,n??!1,d,i,q(r,x));break;case"inline-vertical":h=se($,t,n??!1,d,i,q(r,x));break}return z("div",{ref:a,css:[M,F(e)],...H(c),children:[f&&u("div",{css:N(d),children:f}),l&&u("table",{css:G(s,n??!1),children:u("tbody",{children:h})})]})});V.displayName="Description";try{V.displayName="Description",V.__docgenInfo={description:"",displayName:"Description",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"DescriptionItem[]"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"number | DescriptionColumn"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"inline-horizontal"'},{value:'"inline-vertical"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tableLayout:{defaultValue:null,description:"",name:"tableLayout",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"auto"'}]}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}}}}}catch{}const ge={title:"DATA DISPLAY/Description",component:V},B=e=>u(V,{...e,data:[{label:"Name",value:"ILLA"},{label:"Mobile",value:"123-1234-1234"},{label:"Residence",value:"Beijing"},{label:"Hometown",value:"Beijing"},{label:"Date of Birth",value:"2020-05-15",span:2},{label:"Address",value:"Building, Road, Beijing",span:3}]});var D,E,U;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`args => <Description {...args} data={[{
  label: "Name",
  value: "ILLA"
}, {
  label: "Mobile",
  value: "123-1234-1234"
}, {
  label: "Residence",
  value: "Beijing"
}, {
  label: "Hometown",
  value: "Beijing"
}, {
  label: "Date of Birth",
  value: "2020-05-15",
  span: 2
}, {
  label: "Address",
  value: "Building, Road, Beijing",
  span: 3
}]} />`,...(U=(E=B.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const ye=["Basic"];export{B as Basic,ye as __namedExportsOrder,ge as default};
//# sourceMappingURL=description.stories-3c122882.js.map
