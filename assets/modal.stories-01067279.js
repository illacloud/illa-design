import{a as l,F as _,j as L}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as s}from"./index-1cdf6ce0.js";import{c as d,g as R,i as $,a as he,d as xe,j as ke,o as Ce}from"./style-4011d251.js";import{z as de}from"./z-index-efffafd0.js";import{g as h}from"./color-palette-2f9095e4.js";import{F as Ve}from"./Combination-ada43e66.js";import{A as qe}from"./index-4cd6a639.js";import{m as re}from"./use-force-update-497a924b.js";import{T as we}from"./trigger-context-e9ca2c5c.js";import{C as Se,d as Le}from"./config-provider-context-e3e0b003.js";import{W as Ee}from"./warning-circle-e87f66a6.js";import{S as Me}from"./success-circle-ab38d2dd.js";import{E as Be}from"./error-circle-96d14faf.js";import{I as Ie}from"./info-cricle-31ebb878.js";import{C as Pe}from"./close-56bf4497.js";import{B as A}from"./button-group-context-b0bf5517.js";import{u as _e,a as Ae}from"./hook-3354df85.js";import{v as ce}from"./v4-cf522c50.js";import{S as ie}from"./space-3a32656f.js";import{I as He}from"./input-abc06790.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./tslib.es6-75de5960.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./defineProperty-f749b14d.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./create-icon-e804097a.js";import"./loading-9fdd5a3f.js";import"./divider-62b11705.js";import"./style-aedf7f23.js";import"./clear-c3d7638a.js";import"./use-merge-value-fcf53e13.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";const W=e=>{const{renderInBody:n,zIndex:t}=e;return l(we.Provider,{value:{renderInBody:n,zIndex:t},children:e.children})};W.displayName="TriggerProvider";try{W.displayName="TriggerProvider",W.__docgenInfo={description:"",displayName:"TriggerProvider",props:{renderInBody:{defaultValue:null,description:"",name:"renderInBody",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}}}}}catch{}function Te(e){return d`
    z-index: ${e||de.modal};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${h("white","05")};
    backdrop-filter: blur(5px);
  `}function ze(e){return d`
    position: fixed;
    cursor: auto;
    overflow: auto;
    text-align: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: ${e||de.modal};

    &:after {
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 100%;
      content: "";
    }
  `}function Oe(){return d`
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
    box-sizing: content-box;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: left;
    min-width: 520px;
    width: 520px;
    margin: 24px auto;
    border-radius: 8px;
    border: 1px solid ${h("grayBlue","08")};
    background-color: ${h("white","01")};
  `}function Ke(e,n){let t=d``;n||(t=d`
      border-bottom: 1px solid ${R(`--${$}-grayBlue-08`)};
    `);const r=e?d`
        padding: 16px 40px;
      `:d`
        padding: 16px;
      `;return d`
    ${r};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    ${t};
  `}function je(){return d`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${R(`--${$}-grayBlue-02`)};
  `}function ae(e){const n=e?d`
        padding: 0;
      `:"";return d`
    font-size: 14px;
    color: ${h("grayBlue","02")};
    font-weight: 400;
    line-height: 22px;
    padding: 16px 24px;
    ${n}
  `}const We=d`
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  top: 16px;
  right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${R(`--${$}-grayBlue-03`)};
`;function Re(e){const n=e?d``:d`
        border-top: 1px solid ${R(`--${$}-grayBlue-08`)};
      `;return d`
    display: flex;
    gap: 8px;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    padding: 24px 24px;
    ${n};
  `}const $e={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},Fe={initial:{opacity:0,scaleX:.5,scaleY:.5},animate:{opacity:1,scaleX:1,scaleY:1},exit:{opacity:0,scaleX:.5,scaleY:.5}};function J(){return J=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},J.apply(this,arguments)}var fe=["shift","alt","meta","mod","ctrl"],Ne={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function C(e){return(Ne[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function De(e){return fe.includes(e)}function X(e,n){return n===void 0&&(n=","),e.split(n)}function Y(e,n,t){n===void 0&&(n="+");var r=e.toLocaleLowerCase().split(n).map(function(u){return C(u)}),a={alt:r.includes("alt"),ctrl:r.includes("ctrl")||r.includes("control"),shift:r.includes("shift"),meta:r.includes("meta"),mod:r.includes("mod")},p=r.filter(function(u){return!fe.includes(u)});return J({},a,{keys:p,description:t})}(function(){typeof document<"u"&&(document.addEventListener("keydown",function(e){e.key!==void 0&&pe([C(e.key),C(e.code)])}),document.addEventListener("keyup",function(e){e.key!==void 0&&me([C(e.key),C(e.code)])})),typeof window<"u"&&window.addEventListener("blur",function(){V.clear()})})();var V=new Set;function Z(e){return Array.isArray(e)}function Ge(e,n){n===void 0&&(n=",");var t=Z(e)?e:e.split(n);return t.every(function(r){return V.has(r.trim().toLowerCase())})}function pe(e){var n=Array.isArray(e)?e:[e];V.has("meta")&&V.forEach(function(t){return!De(t)&&V.delete(t.toLowerCase())}),n.forEach(function(t){return V.add(t.toLowerCase())})}function me(e){var n=Array.isArray(e)?e:[e];e==="meta"?V.clear():n.forEach(function(t){return V.delete(t.toLowerCase())})}function Xe(e,n,t){(typeof t=="function"&&t(e,n)||t===!0)&&e.preventDefault()}function Ye(e,n,t){return typeof t=="function"?t(e,n):t===!0||t===void 0}function Ue(e){return ye(e,["input","textarea","select"])}function ye(e,n){var t=e.target;n===void 0&&(n=!1);var r=t&&t.tagName;return Z(n)?!!(r&&n&&n.some(function(a){return a.toLowerCase()===r.toLowerCase()})):!!(r&&n&&n===!0)}function Je(e,n){return e.length===0&&n?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):n?e.some(function(t){return n.includes(t)})||e.includes("*"):!0}var Qe=function(n,t,r){r===void 0&&(r=!1);var a=t.alt,p=t.meta,u=t.mod,m=t.shift,b=t.ctrl,y=t.keys,q=n.key,i=n.code,w=n.ctrlKey,x=n.metaKey,k=n.shiftKey,E=n.altKey,M=C(i),g=q.toLowerCase();if(!r){if(a===!E&&g!=="alt"||m===!k&&g!=="shift")return!1;if(u){if(!x&&!w)return!1}else if(p===!x&&g!=="meta"&&g!=="os"||b===!w&&g!=="ctrl"&&g!=="control")return!1}return y&&y.length===1&&(y.includes(g)||y.includes(M))?!0:y?Ge(y):!y},Ze=s.createContext(void 0),en=function(){return s.useContext(Ze)};function ge(e,n){return e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(e).length===Object.keys(n).length&&Object.keys(e).reduce(function(t,r){return t&&ge(e[r],n[r])},!0):e===n}var nn=s.createContext({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),tn=function(){return s.useContext(nn)};function rn(e){var n=s.useRef(void 0);return ge(n.current,e)||(n.current=e),n.current}var le=function(n){n.stopPropagation(),n.preventDefault(),n.stopImmediatePropagation()},an=typeof window<"u"?s.useLayoutEffect:s.useEffect;function ln(e,n,t,r){var a=s.useRef(null),p=s.useRef(!1),u=t instanceof Array?r instanceof Array?void 0:r:t,m=Z(e)?e.join(u==null?void 0:u.splitKey):e,b=t instanceof Array?t:r instanceof Array?r:void 0,y=s.useCallback(n,b??[]),q=s.useRef(y);b?q.current=y:q.current=n;var i=rn(u),w=tn(),x=w.enabledScopes,k=en();return an(function(){if(!((i==null?void 0:i.enabled)===!1||!Je(x,i==null?void 0:i.scopes))){var E=function(o,I){var O;if(I===void 0&&(I=!1),!(Ue(o)&&!ye(o,i==null?void 0:i.enableOnFormTags))&&!(i!=null&&i.ignoreEventWhen!=null&&i.ignoreEventWhen(o))){if(a.current!==null&&document.activeElement!==a.current&&!a.current.contains(document.activeElement)){le(o);return}(O=o.target)!=null&&O.isContentEditable&&!(i!=null&&i.enableOnContentEditable)||X(m,i==null?void 0:i.splitKey).forEach(function(F){var K,c=Y(F,i==null?void 0:i.combinationKey);if(Qe(o,c,i==null?void 0:i.ignoreModifiers)||(K=c.keys)!=null&&K.includes("*")){if(I&&p.current)return;if(Xe(o,c,i==null?void 0:i.preventDefault),!Ye(o,c,i==null?void 0:i.enabled)){le(o);return}q.current(o,c),I||(p.current=!0)}})}},M=function(o){o.key!==void 0&&(pe(C(o.code)),((i==null?void 0:i.keydown)===void 0&&(i==null?void 0:i.keyup)!==!0||i!=null&&i.keydown)&&E(o))},g=function(o){o.key!==void 0&&(me(C(o.code)),p.current=!1,i!=null&&i.keyup&&E(o,!0))},B=a.current||(u==null?void 0:u.document)||document;return B.addEventListener("keyup",g),B.addEventListener("keydown",M),k&&X(m,i==null?void 0:i.splitKey).forEach(function(S){return k.addHotkey(Y(S,i==null?void 0:i.combinationKey,i==null?void 0:i.description))}),function(){B.removeEventListener("keyup",g),B.removeEventListener("keydown",M),k&&X(m,i==null?void 0:i.splitKey).forEach(function(S){return k.removeHotkey(Y(S,i==null?void 0:i.combinationKey,i==null?void 0:i.description))})}}},[m,i,x]),a}const H=s.forwardRef((e,n)=>{var te;const{withoutPadding:t,children:r,visible:a,type:p,mask:u=!0,title:m,withoutLine:b=!0,okLoading:y,maskClosable:q=!0,hideCancel:i,closable:w,closeElement:x,okText:k,cancelText:E,okButtonProps:M,cancelButtonProps:g,footer:B=!0,footerAlign:S="",focusLock:o=!0,autoFocus:I=!0,maskStyle:O,modalContentStyle:F,enableOnFormTags:K,onCancel:c,onOk:j,afterClose:N,afterOpen:D,z:ee,...ve}=e,G=s.useContext(Se),ne=((te=G==null?void 0:G.locale)==null?void 0:te.modal)??Le.modal;ln("Enter,Escape",(P,cn)=>{switch(P.key){case"Enter":a&&(j==null||j());break;case"Escape":a&&(c==null||c());break}},{enableOnFormTags:K??["INPUT"]},[a]);const be=s.useMemo(()=>{if(p&&m)switch(p){case"info":return l(Ie,{fs:"16px",mr:"8px",c:h("blue","03")});case"error":return l(Be,{fs:"16px",mr:"8px",c:h("red","03")});case"success":return l(Me,{fs:"16px",mr:"8px",c:h("green","03")});case"warning":return l(Ee,{fs:"16px",mr:"8px",c:h("red","03")});default:return l(_,{})}else return l(_,{})},[m,p]);return l(W,{renderInBody:!1,zIndex:10,children:l(qe,{children:a&&L(_,{children:[u?l(re.div,{css:[Te(ee),O],variants:$e,animate:"animate",exit:"exit",initial:"initial",transition:{duration:.2}}):null,l("div",{css:[ze(ee),F],onClick:()=>{q&&(c==null||c())},children:L(re.div,{onClick:P=>{P.stopPropagation()},ref:n,role:"dialog",variants:Fe,animate:"animate",transition:{duration:.2},exit:"exit",initial:"initial",css:[Oe(),he(e)],onAnimationComplete:P=>{P==="animate"&&(D==null||D()),P==="exit"&&(N==null||N())},...xe(ve),children:[m&&L("div",{css:Ke(w,b),children:[be,l("div",{css:je(),children:m}),w&&l(_,{children:x||l("div",{css:We,onClick:c,children:l(Pe,{size:"14px",c:h("grayBlue","02")})})})]}),o?l(Ve,{disabled:!a,autoFocus:I,children:r&&l("div",{css:ae(t),children:r})}):r&&l("div",{css:ae(t),children:r}),B&&L("div",{css:Re(b),children:[!i&&l(A,{type:"button",onClick:c,colorScheme:"gray",size:"medium",flex:"1",...g,children:E||ne.cancelText}),l(A,{type:"button",loading:y,size:"medium",onClick:j,flex:"1",...M,children:k||ne.okText})]})]})})]})})})});H.displayName="Modal";try{H.displayName="Modal",H.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},withoutLine:{defaultValue:null,description:"",name:"withoutLine",required:!1,type:{name:"boolean"}},withoutPadding:{defaultValue:null,description:"",name:"withoutPadding",required:!1,type:{name:"boolean"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},okLoading:{defaultValue:null,description:"",name:"okLoading",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},modalContentStyle:{defaultValue:null,description:"",name:"modalContentStyle",required:!1,type:{name:"SerializedStyles"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"SerializedStyles"}},maskClosable:{defaultValue:null,description:"",name:"maskClosable",required:!1,type:{name:"boolean"}},hideCancel:{defaultValue:null,description:"",name:"hideCancel",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},closeElement:{defaultValue:null,description:"",name:"closeElement",required:!1,type:{name:"ReactNode"}},okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},okButtonProps:{defaultValue:null,description:"",name:"okButtonProps",required:!1,type:{name:"ButtonProps"}},cancelButtonProps:{defaultValue:null,description:"",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"boolean"}},footerAlign:{defaultValue:null,description:"",name:"footerAlign",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},focusLock:{defaultValue:null,description:"",name:"focusLock",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},enableOnFormTags:{defaultValue:null,description:"",name:"enableOnFormTags",required:!1,type:{name:"boolean | readonly FormTags[]"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"(e?: MouseEvent<Element, MouseEvent>) => void | Promise<any>"}},afterOpen:{defaultValue:null,description:"",name:"afterOpen",required:!1,type:{name:"() => void"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"() => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const f={listener:[],modals:[]};function on(){return{getModals:()=>f.modals,setModals:e=>{f.modals=e,f.listener.forEach(n=>{n.onStoreChange()})},subscribe:e=>{const n={listenerId:ce(),onStoreChange:e};return f.listener.push(n),n.onStoreChange(),n},unSubscribe:e=>{f.listener.splice(f.listener.findIndex(n=>n.listenerId===e),1)},update:(e,n)=>{const t=f.modals.findIndex(r=>r.id===e);t!=-1&&(f.modals[t]=n,f.listener.forEach(r=>{r.onStoreChange()}))},add:e=>{f.modals.push(e),f.listener.forEach(n=>{n.onStoreChange()})},remove:e=>{const n=f.modals.findIndex(t=>t.id===e);n!=-1&&(f.modals.splice(n,1),f.listener.forEach(t=>{t.onStoreChange()}))}}}const v=on(),T=e=>(e.id||(e.id=ce()),e.visible||(e.visible=!0),v.add(e),e.id),U=e=>v.getModals().find(n=>n.id===e),sn={info:e=>(e.type="info",T(e)),error:e=>(e.type="error",T(e)),success:e=>(e.type="success",T(e)),warning:e=>(e.type="warning",T(e)),getModalById:U,update:(e,n)=>{v.update(e,{...U(e),...n})},close:e=>{const n=U(e);v.update(e,{...n,visible:!1,afterClose:()=>{var t;(t=n==null?void 0:n.afterClose)==null||t.call(n),v.remove(e)}})},show:T};function un(){return sn}const Q=()=>{const[e,n]=s.useState([]);s.useEffect(()=>{const r=v.subscribe(()=>{n([...v.getModals()])});return()=>{v.unSubscribe(r.listenerId)}},[]);const t=s.useMemo(()=>e.map(r=>ke(H,{...Ce(r,["blockOkHide","blockCancelHide"]),key:r.id,onCancel:()=>{var a;(a=r.onCancel)==null||a.call(r),r.blockCancelHide!=!0&&r.id&&v.update(r.id,{...r,visible:!1})},onOk:()=>{var a;(a=r.onOk)==null||a.call(r),r.blockOkHide!=!0&&r.id&&v.update(r.id,{...r,visible:!1})},afterClose:()=>{var a;(a=r.afterClose)==null||a.call(r),r.id&&v.remove(r.id)}})),[e]);return l(_,{children:t})};try{Q.displayName="ModalGroup",Q.__docgenInfo={description:"",displayName:"ModalGroup",props:{}}}catch{}const Jn={title:"FEEDBACK/Modal",component:H,args:{onOk:{control:!1},onCancel:{control:!1}}},dn=e=>{const[n,t]=s.useState(!1),[r,a]=s.useState(!1),p=_e(),u=un();function m(){Promise.resolve().then(b=>{a(!0),setTimeout(()=>{p.success({content:"Success !"}),t(!1),a(!1)},1500)})}return L(_,{children:[l(Ae,{}),l(Q,{}),L(ie,{size:"large",children:[l(A,{onClick:()=>{t(!0)},children:"Open Modal"}),l(H,{...e,visible:n,okLoading:r,onCancel:()=>t(!1),onOk:m,children:"ILLA very good!"}),L(ie,{size:"large",direction:"vertical",children:[l(A,{onClick:()=>u.info({children:l(He,{}),title:"Confirm"}),children:"Confirm"}),l(A,{onClick:()=>u.warning({children:"Warning",title:"Warning"}),children:"Warning"}),l(A,{onClick:()=>u.info({closable:!0,children:"Warning",title:"Warning"}),children:"Warning"})]})]})]})},z=dn.bind({});z.args={title:"Modal Title"};var oe,se,ue;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const message = useMessage();
  const modal = useModal();
  function onOk() {
    Promise.resolve().then(res => {
      setConfirmLoading(true);
      setTimeout(() => {
        message.success({
          content: "Success !"
        });
        setVisible(false);
        setConfirmLoading(false);
      }, 1500);
    });
  }
  return <>
      <MessageGroup />
      <ModalGroup />
      <Space size={"large"}>
        <Button onClick={() => {
        setVisible(true);
      }}>
          Open Modal
        </Button>
        <Modal {...args} visible={visible} okLoading={confirmLoading} onCancel={() => setVisible(false)} onOk={onOk}>
          ILLA very good!
        </Modal>
        <Space size={"large"} direction={"vertical"}>
          <Button onClick={() => modal.info({
          children: <Input />,
          title: "Confirm"
        })}>
            Confirm
          </Button>
          <Button onClick={() => modal.warning({
          children: "Warning",
          title: "Warning"
        })}>
            Warning
          </Button>
          <Button onClick={() => modal.info({
          closable: true,
          children: "Warning",
          title: "Warning"
        })}>
            Warning
          </Button>
        </Space>
      </Space>
    </>;
}`,...(ue=(se=z.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};const Qn=["Basic"];export{z as Basic,Qn as __namedExportsOrder,Jn as default};
//# sourceMappingURL=modal.stories-01067279.js.map
