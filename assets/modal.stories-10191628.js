import{a as l,F as A,j as E}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as s}from"./index-1cdf6ce0.js";import{c as d,g as z,i as $,a as he,d as be,j as xe,o as ke}from"./style-3ea54b04.js";import{z as ue}from"./z-index-efffafd0.js";import{g as L}from"./color-palette-728b424e.js";import{F as Ce}from"./Combination-ada43e66.js";import{A as Ve}from"./index-a6d290df.js";import{m as te}from"./motion-96d4cd12.js";import{T as qe}from"./trigger-context-e9ca2c5c.js";import{C as we,d as Se}from"./config-provider-context-e3e0b003.js";import{W as Le}from"./warning-circle-152ace94.js";import{S as Ee}from"./success-circle-2db98c6b.js";import{E as Me}from"./error-circle-ed4b9289.js";import{I as Be}from"./info-cricle-a9aef4f6.js";import{C as Ie}from"./close-b3537d01.js";import{B as H}from"./button-group-context-2fccf722.js";import{u as Pe,a as _e}from"./hook-1169033e.js";import{v as de}from"./v4-cf522c50.js";import{S as re}from"./space-97cf5fad.js";import{I as Ae}from"./input-7a42d9dd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./tslib.es6-75de5960.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./defineProperty-f749b14d.js";import"./animate-4e967d14.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./create-icon-907f0980.js";import"./loading-be690f19.js";import"./divider-bd60f9d7.js";import"./style-4ee563c0.js";import"./clear-bb423cf4.js";import"./use-merge-value-fcf53e13.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";const W=e=>{const{renderInBody:n,zIndex:t}=e;return l(qe.Provider,{value:{renderInBody:n,zIndex:t},children:e.children})};W.displayName="TriggerProvider";try{W.displayName="TriggerProvider",W.__docgenInfo={description:"",displayName:"TriggerProvider",props:{renderInBody:{defaultValue:null,description:"",name:"renderInBody",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}}}}}catch{}function He(e){return d`
    z-index: ${e||ue.modal};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${L("white","05")};
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
    z-index: ${e||ue.modal};

    &:after {
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 100%;
      content: "";
    }
  `}function $e(){return d`
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
    border: 1px solid ${z(`--${$}-grayBlue-08`)};
    background-color: ${z(`--${$}-white-01`)};
  `}function Ke(e,n){let t=d``;n||(t=d`
      border-bottom: 1px solid ${z(`--${$}-grayBlue-08`)};
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
  `}function Te(){return d`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${z(`--${$}-grayBlue-02`)};
  `}function ie(e){const n=e?d`
        padding: 0;
      `:"";return d`
    font-size: 14px;
    color: ${L("grayBlue","02")};
    font-weight: 400;
    line-height: 22px;
    padding: 8px 24px;
    ${n}
  `}const je=d`
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
  color: ${z(`--${$}-grayBlue-03`)};
`;function Oe(e,n){const t=e?d`
        text-align: ${e};
      `:"",r=n?d``:d`
        border-top: 1px solid ${z(`--${$}-grayBlue-08`)};
      `;return d`
    text-align: right;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 24px;
    ${r};
    ${t};
  `}const We=d`
  margin-right: 8px;
`,Re={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},Ne={initial:{opacity:0,scaleX:.5,scaleY:.5},animate:{opacity:1,scaleX:1,scaleY:1},exit:{opacity:0,scaleX:.5,scaleY:.5}};function U(){return U=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},U.apply(this,arguments)}var ce=["shift","alt","meta","mod","ctrl"],Fe={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function V(e){return(Fe[e]||e).trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function De(e){return ce.includes(e)}function G(e,n){return n===void 0&&(n=","),e.split(n)}function X(e,n,t){n===void 0&&(n="+");var r=e.toLocaleLowerCase().split(n).map(function(u){return V(u)}),a={alt:r.includes("alt"),ctrl:r.includes("ctrl")||r.includes("control"),shift:r.includes("shift"),meta:r.includes("meta"),mod:r.includes("mod")},f=r.filter(function(u){return!ce.includes(u)});return U({},a,{keys:f,description:t})}(function(){typeof document<"u"&&(document.addEventListener("keydown",function(e){e.key!==void 0&&fe([V(e.key),V(e.code)])}),document.addEventListener("keyup",function(e){e.key!==void 0&&pe([V(e.key),V(e.code)])})),typeof window<"u"&&window.addEventListener("blur",function(){q.clear()})})();var q=new Set;function Q(e){return Array.isArray(e)}function Ge(e,n){n===void 0&&(n=",");var t=Q(e)?e:e.split(n);return t.every(function(r){return q.has(r.trim().toLowerCase())})}function fe(e){var n=Array.isArray(e)?e:[e];q.has("meta")&&q.forEach(function(t){return!De(t)&&q.delete(t.toLowerCase())}),n.forEach(function(t){return q.add(t.toLowerCase())})}function pe(e){var n=Array.isArray(e)?e:[e];e==="meta"?q.clear():n.forEach(function(t){return q.delete(t.toLowerCase())})}function Xe(e,n,t){(typeof t=="function"&&t(e,n)||t===!0)&&e.preventDefault()}function Ye(e,n,t){return typeof t=="function"?t(e,n):t===!0||t===void 0}function Ue(e){return me(e,["input","textarea","select"])}function me(e,n){var t=e.target;n===void 0&&(n=!1);var r=t&&t.tagName;return Q(n)?!!(r&&n&&n.some(function(a){return a.toLowerCase()===r.toLowerCase()})):!!(r&&n&&n===!0)}function Je(e,n){return e.length===0&&n?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):n?e.some(function(t){return n.includes(t)})||e.includes("*"):!0}var Qe=function(n,t,r){r===void 0&&(r=!1);var a=t.alt,f=t.meta,u=t.mod,p=t.shift,b=t.ctrl,m=t.keys,w=n.key,i=n.code,S=n.ctrlKey,x=n.metaKey,k=n.shiftKey,M=n.altKey,B=V(i),g=w.toLowerCase();if(!r){if(a===!M&&g!=="alt"||p===!k&&g!=="shift")return!1;if(u){if(!x&&!S)return!1}else if(f===!x&&g!=="meta"&&g!=="os"||b===!S&&g!=="ctrl"&&g!=="control")return!1}return m&&m.length===1&&(m.includes(g)||m.includes(B))?!0:m?Ge(m):!m},Ze=s.createContext(void 0),en=function(){return s.useContext(Ze)};function ge(e,n){return e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(e).length===Object.keys(n).length&&Object.keys(e).reduce(function(t,r){return t&&ge(e[r],n[r])},!0):e===n}var nn=s.createContext({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),tn=function(){return s.useContext(nn)};function rn(e){var n=s.useRef(void 0);return ge(n.current,e)||(n.current=e),n.current}var ae=function(n){n.stopPropagation(),n.preventDefault(),n.stopImmediatePropagation()},an=typeof window<"u"?s.useLayoutEffect:s.useEffect;function ln(e,n,t,r){var a=s.useRef(null),f=s.useRef(!1),u=t instanceof Array?r instanceof Array?void 0:r:t,p=Q(e)?e.join(u==null?void 0:u.splitKey):e,b=t instanceof Array?t:r instanceof Array?r:void 0,m=s.useCallback(n,b??[]),w=s.useRef(m);b?w.current=m:w.current=n;var i=rn(u),S=tn(),x=S.enabledScopes,k=en();return an(function(){if(!((i==null?void 0:i.enabled)===!1||!Je(x,i==null?void 0:i.scopes))){var M=function(o,P){var O;if(P===void 0&&(P=!1),!(Ue(o)&&!me(o,i==null?void 0:i.enableOnFormTags))&&!(i!=null&&i.ignoreEventWhen!=null&&i.ignoreEventWhen(o))){if(a.current!==null&&document.activeElement!==a.current&&!a.current.contains(document.activeElement)){ae(o);return}(O=o.target)!=null&&O.isContentEditable&&!(i!=null&&i.enableOnContentEditable)||G(p,i==null?void 0:i.splitKey).forEach(function(R){var y,h=X(R,i==null?void 0:i.combinationKey);if(Qe(o,h,i==null?void 0:i.ignoreModifiers)||(y=h.keys)!=null&&y.includes("*")){if(P&&f.current)return;if(Xe(o,h,i==null?void 0:i.preventDefault),!Ye(o,h,i==null?void 0:i.enabled)){ae(o);return}w.current(o,h),P||(f.current=!0)}})}},B=function(o){o.key!==void 0&&(fe(V(o.code)),((i==null?void 0:i.keydown)===void 0&&(i==null?void 0:i.keyup)!==!0||i!=null&&i.keydown)&&M(o))},g=function(o){o.key!==void 0&&(pe(V(o.code)),f.current=!1,i!=null&&i.keyup&&M(o,!0))},I=a.current||(u==null?void 0:u.document)||document;return I.addEventListener("keyup",g),I.addEventListener("keydown",B),k&&G(p,i==null?void 0:i.splitKey).forEach(function(C){return k.addHotkey(X(C,i==null?void 0:i.combinationKey,i==null?void 0:i.description))}),function(){I.removeEventListener("keyup",g),I.removeEventListener("keydown",B),k&&G(p,i==null?void 0:i.splitKey).forEach(function(C){return k.removeHotkey(X(C,i==null?void 0:i.combinationKey,i==null?void 0:i.description))})}}},[p,i,x]),a}const K=s.forwardRef((e,n)=>{var ne;const{withoutPadding:t,children:r,visible:a,type:f,mask:u=!0,title:p,withoutLine:b=!0,okLoading:m,maskClosable:w=!0,hideCancel:i,closable:S,closeElement:x,okText:k,cancelText:M,okButtonProps:B,cancelButtonProps:g,footer:I=!0,footerAlign:C="",focusLock:o=!0,autoFocus:P=!0,maskStyle:O,modalContentStyle:R,onCancel:y,onOk:h,afterClose:N,afterOpen:F,z:Z,...ye}=e,D=s.useContext(we),ee=((ne=D==null?void 0:D.locale)==null?void 0:ne.modal)??Se.modal;ln("Enter,Escape",(_,cn)=>{switch(_.key){case"Enter":a&&(h==null||h());break;case"Escape":a&&(y==null||y());break}},{enableOnFormTags:["INPUT"]},[a]);const ve=s.useMemo(()=>{if(f&&p)switch(f){case"info":return l(Be,{fs:"16px",mr:"8px",c:L("blue","03")});case"error":return l(Me,{fs:"16px",mr:"8px",c:L("red","03")});case"success":return l(Ee,{fs:"16px",mr:"8px",c:L("green","03")});case"warning":return l(Le,{fs:"16px",mr:"8px",c:L("red","03")});default:return l(A,{})}else return l(A,{})},[p,f]);return l(W,{renderInBody:!1,zIndex:10,children:l(Ve,{children:a&&E(A,{children:[u?l(te.div,{css:[He(Z),O],variants:Re,animate:"animate",exit:"exit",initial:"initial",transition:{duration:.2}}):null,l("div",{css:[ze(Z),R],onClick:()=>{w&&(y==null||y())},children:E(te.div,{onClick:_=>{_.stopPropagation()},ref:n,role:"dialog",variants:Ne,animate:"animate",transition:{duration:.2},exit:"exit",initial:"initial",css:[$e(),he(e)],onAnimationComplete:_=>{_==="animate"&&(F==null||F()),_==="exit"&&(N==null||N())},...be(ye),children:[p&&E("div",{css:Ke(S,b),children:[ve,l("div",{css:Te(),children:p}),S&&l(A,{children:x||l("div",{css:je,onClick:y,children:l(Ie,{size:"14px",c:L("grayBlue","02")})})})]}),o?l(Ce,{disabled:!a,autoFocus:P,children:r&&l("div",{css:ie(t),children:r})}):r&&l("div",{css:ie(t),children:r}),I&&E("div",{css:Oe(C,b),children:[!i&&l(H,{css:We,onClick:y,colorScheme:"gray",size:"medium",...g,children:M||ee.cancelText}),l(H,{loading:m,size:"medium",onClick:h,...B,children:k||ee.okText})]})]})})]})})})});K.displayName="Modal";try{K.displayName="Modal",K.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},withoutLine:{defaultValue:null,description:"",name:"withoutLine",required:!1,type:{name:"boolean"}},withoutPadding:{defaultValue:null,description:"",name:"withoutPadding",required:!1,type:{name:"boolean"}},mask:{defaultValue:null,description:"",name:"mask",required:!1,type:{name:"boolean"}},okLoading:{defaultValue:null,description:"",name:"okLoading",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},modalContentStyle:{defaultValue:null,description:"",name:"modalContentStyle",required:!1,type:{name:"SerializedStyles"}},maskStyle:{defaultValue:null,description:"",name:"maskStyle",required:!1,type:{name:"SerializedStyles"}},maskClosable:{defaultValue:null,description:"",name:"maskClosable",required:!1,type:{name:"boolean"}},hideCancel:{defaultValue:null,description:"",name:"hideCancel",required:!1,type:{name:"boolean"}},closable:{defaultValue:null,description:"",name:"closable",required:!1,type:{name:"boolean"}},closeElement:{defaultValue:null,description:"",name:"closeElement",required:!1,type:{name:"ReactNode"}},okText:{defaultValue:null,description:"",name:"okText",required:!1,type:{name:"string"}},cancelText:{defaultValue:null,description:"",name:"cancelText",required:!1,type:{name:"string"}},okButtonProps:{defaultValue:null,description:"",name:"okButtonProps",required:!1,type:{name:"ButtonProps"}},cancelButtonProps:{defaultValue:null,description:"",name:"cancelButtonProps",required:!1,type:{name:"ButtonProps"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"boolean"}},footerAlign:{defaultValue:null,description:"",name:"footerAlign",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},focusLock:{defaultValue:null,description:"",name:"focusLock",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"(e?: MouseEvent<Element, MouseEvent>) => void | Promise<any>"}},afterOpen:{defaultValue:null,description:"",name:"afterOpen",required:!1,type:{name:"() => void"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"() => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const c={listener:[],modals:[]};function on(){return{getModals:()=>c.modals,setModals:e=>{c.modals=e,c.listener.forEach(n=>{n.onStoreChange()})},subscribe:e=>{const n={listenerId:de(),onStoreChange:e};return c.listener.push(n),n.onStoreChange(),n},unSubscribe:e=>{c.listener.splice(c.listener.findIndex(n=>n.listenerId===e),1)},update:(e,n)=>{const t=c.modals.findIndex(r=>r.id===e);t!=-1&&(c.modals[t]=n,c.listener.forEach(r=>{r.onStoreChange()}))},add:e=>{c.modals.push(e),c.listener.forEach(n=>{n.onStoreChange()})},remove:e=>{const n=c.modals.findIndex(t=>t.id===e);n!=-1&&(c.modals.splice(n,1),c.listener.forEach(t=>{t.onStoreChange()}))}}}const v=on(),T=e=>(e.id||(e.id=de()),e.visible||(e.visible=!0),v.add(e),e.id),Y=e=>v.getModals().find(n=>n.id===e),sn={info:e=>(e.type="info",T(e)),error:e=>(e.type="error",T(e)),success:e=>(e.type="success",T(e)),warning:e=>(e.type="warning",T(e)),getModalById:Y,update:(e,n)=>{v.update(e,{...Y(e),...n})},close:e=>{const n=Y(e);v.update(e,{...n,visible:!1,afterClose:()=>{var t;(t=n==null?void 0:n.afterClose)==null||t.call(n),v.remove(e)}})},show:T};function un(){return sn}const J=()=>{const[e,n]=s.useState([]);s.useEffect(()=>{const r=v.subscribe(()=>{n([...v.getModals()])});return()=>{v.unSubscribe(r.listenerId)}},[]);const t=s.useMemo(()=>e.map(r=>xe(K,{...ke(r,["blockOkHide","blockCancelHide"]),key:r.id,onCancel:()=>{var a;(a=r.onCancel)==null||a.call(r),r.blockCancelHide!=!0&&r.id&&v.update(r.id,{...r,visible:!1})},onOk:()=>{var a;(a=r.onOk)==null||a.call(r),r.blockOkHide!=!0&&r.id&&v.update(r.id,{...r,visible:!1})},afterClose:()=>{var a;(a=r.afterClose)==null||a.call(r),r.id&&v.remove(r.id)}})),[e]);return l(A,{children:t})};try{J.displayName="ModalGroup",J.__docgenInfo={description:"",displayName:"ModalGroup",props:{}}}catch{}const Un={title:"FEEDBACK/Modal",component:K,args:{onOk:{control:!1},onCancel:{control:!1}}},dn=e=>{const[n,t]=s.useState(!1),[r,a]=s.useState(!1),f=Pe(),u=un();function p(){Promise.resolve().then(b=>{a(!0),setTimeout(()=>{f.success({content:"Success !"}),t(!1),a(!1)},1500)})}return E(A,{children:[l(_e,{}),l(J,{}),E(re,{size:"large",children:[l(H,{onClick:()=>{t(!0)},children:"Open Modal"}),l(K,{...e,visible:n,okLoading:r,onCancel:()=>t(!1),onOk:p,children:"ILLA very good!"}),E(re,{size:"large",direction:"vertical",children:[l(H,{onClick:()=>u.info({children:l(Ae,{}),title:"Confirm"}),children:"Confirm"}),l(H,{onClick:()=>u.warning({children:"Warning",title:"Warning"}),children:"Warning"}),l(H,{onClick:()=>u.info({closable:!0,children:"Warning",title:"Warning"}),children:"Warning"})]})]})]})},j=dn.bind({});j.args={title:"Modal Title"};var le,oe,se;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
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
}`,...(se=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const Jn=["Basic"];export{j as Basic,Jn as __namedExportsOrder,Un as default};
//# sourceMappingURL=modal.stories-10191628.js.map
