import{a as u,j as I,F as oe}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as a}from"./index-1cdf6ce0.js";import{r as ve}from"./index-a01a9712.js";import{c as he,u as ye,F as be}from"./Combination-ada43e66.js";import{_ as se,a as R,b as we}from"./tslib.es6-75de5960.js";import{c as w,g as W,i as $,a as xe,d as Ce}from"./style-4011d251.js";import{z as Se}from"./z-index-efffafd0.js";import{A as Ve}from"./index-4cd6a639.js";import{m as G}from"./use-force-update-497a924b.js";import{C as qe,d as ke}from"./config-provider-context-e3e0b003.js";import{C as Ee}from"./close-56bf4497.js";import{B as F}from"./button-group-context-9000c136.js";import{S as Be}from"./space-4ea1e39f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./defineProperty-f749b14d.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./create-icon-e804097a.js";import"./color-palette-83e58897.js";import"./index-45a08ae3.js";import"./loading-9fdd5a3f.js";import"./divider-8f1dc498.js";var ue=function(e){var t=e.sideCar,n=se(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return a.createElement(r,R({},n))};ue.isSideCarExport=!0;function Re(e,t){return e.useMedium(t),ue}var M="right-scroll-bar-position",A="width-before-scroll-bar",De="with-scroll-bars-hidden",Te="--removed-body-scroll-bar-size",ce=he(),Y=function(){},X=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:Y}),s=r[0],c=r[1],f=e.forwardProps,i=e.children,h=e.className,y=e.removeScrollBar,x=e.enabled,b=e.shards,C=e.sideCar,S=e.noIsolation,V=e.inert,l=e.allowPinchZoom,o=e.as,p=o===void 0?"div":o,v=e.gapMode,m=se(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),g=C,d=ye([n,t]),k=R(R({},m),s);return a.createElement(a.Fragment,null,x&&a.createElement(g,{sideCar:ce,removeScrollBar:y,shards:b,noIsolation:S,inert:V,setCallbacks:c,allowPinchZoom:!!l,lockRef:n,gapMode:v}),f?a.cloneElement(a.Children.only(i),R(R({},k),{ref:d})):a.createElement(p,R({},k,{className:h,ref:d}),i))});X.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};X.classNames={fullWidth:A,zeroRight:M};var K,Ie=function(){if(K)return K;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Le(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ie();return t&&e.setAttribute("nonce",t),e}function We(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function $e(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ne=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Le())&&(We(t,n),$e(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},He=function(){var e=Ne();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},de=function(){var e=He(),t=function(n){var r=n.styles,s=n.dynamic;return e(r,s),null};return t},Pe={left:0,top:0,right:0,gap:0},j=function(e){return parseInt(e||"",10)||0},_e=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],s=t[e==="padding"?"paddingRight":"marginRight"];return[j(n),j(r),j(s)]},ze=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Pe;var t=_e(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Me=de(),Ae=function(e,t,n,r){var s=e.left,c=e.top,f=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(De,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(M,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(A,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(A," .").concat(A,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Te,": ").concat(i,`px;
  }
`)},Fe=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,s=r===void 0?"margin":r,c=a.useMemo(function(){return ze(s)},[s]);return a.createElement(Me,{styles:Ae(c,!t,s,n?"":"!important")})},O=!1;if(typeof window<"u")try{var P=Object.defineProperty({},"passive",{get:function(){return O=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch{O=!1}var D=O?{passive:!1}:!1,Xe=function(e){return e.tagName==="TEXTAREA"},fe=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Xe(e)&&n[t]==="visible")},Ye=function(e){return fe(e,"overflowY")},je=function(e){return fe(e,"overflowX")},Q=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var s=me(e,r);if(s){var c=pe(e,r),f=c[1],i=c[2];if(f>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Oe=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ze=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},me=function(e,t){return e==="v"?Ye(t):je(t)},pe=function(e,t){return e==="v"?Oe(t):Ze(t)},Ge=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ke=function(e,t,n,r,s){var c=Ge(e,window.getComputedStyle(t).direction),f=c*r,i=n.target,h=t.contains(i),y=!1,x=f>0,b=0,C=0;do{var S=pe(e,i),V=S[0],l=S[1],o=S[2],p=l-o-c*V;(V||p)&&me(e,i)&&(b+=p,C+=V),i=i.parentNode}while(!h&&i!==document.body||h&&(t.contains(i)||t===i));return(x&&(s&&b===0||!s&&f>b)||!x&&(s&&C===0||!s&&-f>C))&&(y=!0),y},_=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},J=function(e){return[e.deltaX,e.deltaY]},U=function(e){return e&&"current"in e?e.current:e},Qe=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Je=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ue=0,T=[];function et(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),s=a.useState(Ue++)[0],c=a.useState(de)[0],f=a.useRef(e);a.useEffect(function(){f.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var l=we([e.lockRef.current],(e.shards||[]).map(U),!0).filter(Boolean);return l.forEach(function(o){return o.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),l.forEach(function(o){return o.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var i=a.useCallback(function(l,o){if("touches"in l&&l.touches.length===2)return!f.current.allowPinchZoom;var p=_(l),v=n.current,m="deltaX"in l?l.deltaX:v[0]-p[0],g="deltaY"in l?l.deltaY:v[1]-p[1],d,k=l.target,q=Math.abs(m)>Math.abs(g)?"h":"v";if("touches"in l&&q==="h"&&k.type==="range")return!1;var E=Q(q,k);if(!E)return!0;if(E?d=q:(d=q==="v"?"h":"v",E=Q(q,k)),!E)return!1;if(!r.current&&"changedTouches"in l&&(m||g)&&(r.current=d),!d)return!0;var H=r.current||d;return Ke(H,o,l,H==="h"?m:g,!0)},[]),h=a.useCallback(function(l){var o=l;if(!(!T.length||T[T.length-1]!==c)){var p="deltaY"in o?J(o):_(o),v=t.current.filter(function(d){return d.name===o.type&&d.target===o.target&&Qe(d.delta,p)})[0];if(v&&v.should){o.cancelable&&o.preventDefault();return}if(!v){var m=(f.current.shards||[]).map(U).filter(Boolean).filter(function(d){return d.contains(o.target)}),g=m.length>0?i(o,m[0]):!f.current.noIsolation;g&&o.cancelable&&o.preventDefault()}}},[]),y=a.useCallback(function(l,o,p,v){var m={name:l,delta:o,target:p,should:v};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(g){return g!==m})},1)},[]),x=a.useCallback(function(l){n.current=_(l),r.current=void 0},[]),b=a.useCallback(function(l){y(l.type,J(l),l.target,i(l,e.lockRef.current))},[]),C=a.useCallback(function(l){y(l.type,_(l),l.target,i(l,e.lockRef.current))},[]);a.useEffect(function(){return T.push(c),e.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:C}),document.addEventListener("wheel",h,D),document.addEventListener("touchmove",h,D),document.addEventListener("touchstart",x,D),function(){T=T.filter(function(l){return l!==c}),document.removeEventListener("wheel",h,D),document.removeEventListener("touchmove",h,D),document.removeEventListener("touchstart",x,D)}},[]);var S=e.removeScrollBar,V=e.inert;return a.createElement(a.Fragment,null,V?a.createElement(c,{styles:Je(s)}):null,S?a.createElement(Fe,{gapMode:e.gapMode}):null)}const tt=Re(ce,et);var ge=a.forwardRef(function(e,t){return a.createElement(X,R({},e,{ref:t,sideCar:tt}))});ge.classNames=X.classNames;const nt=ge;function rt(e,t,n){return w`
    ${n}: 0;
    width: ${e};
    height: ${t};
    position: absolute;
    background-color: ${W(`--${$}-white-01`)};
  `}function at(e){return w`
    position: ${e?"fixed":"absolute"};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${Se.drawer};
  `}const lt=w`
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`,it=w`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${W(`--${$}-blackAlpha-04`)};
`,ot=w`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid ${W(`--${$}-grayBlue-08`)};
  flex-shrink: 0;
  flex-grow: 0;
`,st=w`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  color: ${W(`--${$}-grayBlue-02`)};
`,ut=w`
  position: absolute;
  cursor: pointer;
  top: 18px;
  right: 20px;
  font-size: 8px;
  color: ${W(`--${$}-grayBlue-03`)};
  line-height: 0;
`,ct=w`
  width: 100%;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: right;
  padding: 8px 24px;
  border-top: 1px solid ${W(`--${$}-grayBlue-08`)};
`,dt=w`
  margin-right: 8px;
`,ft={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}};function mt(e){let t,n;switch(e){case"top":n="-100%";break;case"bottom":n="100%";break;case"left":t="-100%";break;case"right":t="100%";break}return{initial:{x:`${t}`,y:`${n}`},animate:{x:0,y:0},exit:{x:`${t}`,y:`${n}`}}}const ee=w`
  width: 100%;
  height: 100%;
`,L=a.forwardRef((e,t)=>{var Z;const{children:n,title:r,w:s="250px",h:c="100%",footer:f=!0,visible:i,mask:h=!0,maskClosable:y=!0,maskStyle:x,closable:b=!0,okText:C,cancelText:S,focusLock:V=!0,autoFocus:l=!0,placement:o="right",confirmLoading:p,onOk:v,onCancel:m,afterOpen:g,afterClose:d,...k}=e,q=a.useContext(qe),E=((Z=q==null?void 0:q.locale)==null?void 0:Z.drawer)??ke.drawer,H=()=>{const B=u(nt,{css:ee,children:I("div",{css:lt,...Ce(k),children:[r&&u("div",{css:ot,children:u("div",{css:st,children:r})}),b&&u("div",{css:ut,onClick:m,children:u(Ee,{})}),n,f&&I("div",{css:ct,children:[u(F,{css:dt,onClick:m,colorScheme:"gray",size:"medium",children:S||E.cancelText}),u(F,{size:"medium",onClick:v,loading:p,children:C||E.okText})]})]})});return V?u(be,{css:ee,disabled:!i,autoFocus:l,children:B}):B};return u(oe,{children:ve.createPortal(u(Ve,{children:i&&I("div",{ref:t,css:at(!0),children:[h?u(G.div,{variants:ft,animate:"animate",exit:"exit",initial:"initial",transition:{duration:.3},css:[it,x],onClick:B=>{y&&m&&m(B)}}):null,u(G.div,{variants:mt(o),animate:"animate",exit:"exit",initial:"initial",transition:{duration:.3},css:[rt(s,c,o),xe(e)],onAnimationComplete:B=>{B==="animate"&&(g==null||g()),B==="exit"&&(d==null||d())},children:H()})]})}),document.body)})});L.displayName="Drawer";try{L.displayName="Drawer",L.__docgenInfo={description:"",displayName:"Drawer",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"boolean"}},okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"SerializedStyles"}},maskClosable:{defaultValue:null,description:"",name:"maskClosable",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},focusLock:{defaultValue:null,description:"",name:"focusLock",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},confirmLoading:{defaultValue:null,description:"",name:"confirmLoading",required:!1,type:{name:"boolean"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"(e?: MouseEvent<Element, MouseEvent>) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(e?: MouseEvent<Element, MouseEvent>) => void"}},afterOpen:{defaultValue:null,description:"",name:"afterOpen",required:!1,type:{name:"() => void"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"() => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const Ft={title:"FEEDBACK/Drawer",component:L},pt=e=>{const[t,n]=a.useState(!1);return I(Be,{children:[u(F,{onClick:()=>n(!0),children:"Open Drawer"}),I(L,{...e,visible:t,onCancel:()=>n(!1),onOk:()=>n(!1),children:[u("div",{children:"Here is an example text."}),u("div",{children:"Here is an example text."})]})]})},N=pt.bind({});N.args={title:"Drawer Title"};const gt=()=>{const[e,t]=a.useState(!0),n=a.useRef(null);return I(oe,{children:[u(L,{title:"Basic",visible:e,placement:"left",onOk:()=>{t(!1)},onCancel:()=>{t(!1)},children:u("div",{style:{textAlign:"left"},children:"Here is an example text."})}),u("div",{ref:n,style:{width:1200,height:300,backgroundColor:"gray",position:"relative",overflow:"hidden",lineHeight:"300px",textAlign:"center"},children:u(F,{onClick:()=>t(!0),children:"Open"})})]})},z=gt.bind({});var te,ne,re;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  return <Space>
      <Button onClick={() => setVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
        <div>Here is an example text.</div>
        <div>Here is an example text.</div>
      </Drawer>
    </Space>;
}`,...(re=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,le,ie;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(ie=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Xt=["Basic","Container"];export{N as Basic,z as Container,Xt as __namedExportsOrder,Ft as default};
//# sourceMappingURL=drawer.stories-c1488db8.js.map
