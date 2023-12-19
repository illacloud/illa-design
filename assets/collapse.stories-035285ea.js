import{a as s,j as R}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as C,a as K}from"./index-1cdf6ce0.js";import{c as g,a as ee,d as Q}from"./style-4011d251.js";import{g as V}from"./color-palette-83e58897.js";import{u as ne}from"./use-merge-value-fcf53e13.js";import{C as ae,a as te}from"./caret-right-efa277b1.js";import{_ as le}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as ie}from"./inheritsLoose-d541526f.js";import{R as H}from"./index-a01a9712.js";import{L as re}from"./like-fill-c4fe25a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";import"./create-icon-e804097a.js";import"./setPrototypeOf-0bb37fbe.js";const j=C.createContext({});j.displayName="CollapseContext";function oe(l){const p=l?g`
        border: solid 1px ${V("grayBlue","08")};
      `:g``;return g`
    ${p}
  `}const se=g`
  display: flex;
  flex-direction: column;
`;function ue(l){return g`
    display: ${l?"block":"none"};
    overflow: hidden;
    transition: height 0.2s ease-in-out;
  `}function de(){return g`
    background-color: ${V("grayBlue","09")};
    padding: 8px 32px;
  `}function pe(l){return g`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    cursor: ${l?"not-allowed":"auto"};
  `}const B=g`
  display: flex;
  align-items: center;
  padding: 4px;
  font-size: 8px;
`;function fe(l,p){return g`
    margin-left: ${l?"4px":"0"};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 1;
    color: ${p?V("gray","05"):V("gray","02")};
  `}function G(l,p){return g`
    transform: rotate(
      ${l?p==="left"?"90deg":"-90deg":"0deg"}
    );
    transition: transform 200ms ease-in-out;
    transform-origin: center;
  `}function me(l){return g`
    margin-right: ${l?"4px":"0"}; ;
  `}const ce=g`
  flex: 1;
`,U=(l,p)=>{typeof l=="string"&&(l=[l]);const u=l.map(t=>t);return p?u.slice(0,1):u},k=C.forwardRef((l,p)=>{const{children:u,bordered:t=!0,expandIcon:n,lazyload:e=!0,expandIconPosition:a="left",destroyOnHide:r,accordion:d,defaultActiveKey:m,activeKey:f,onChange:h,showExpandIcon:I=!0,triggerRegion:P="header",...o}=l,[z,N]=ne([],{defaultValue:m?U(m,d):void 0,value:f?U(f,d):void 0}),S=C.useCallback((x,q,_)=>{let c=[];d?q.some(O=>O===x)?c=[x]:c=[]:c=q,f===void 0&&N(c),h==null||h(x,c,_)},[d,f,h,N]);return s(j.Provider,{value:{destroyOnHide:r,lazyload:e,expandIconPosition:a,triggerRegion:P,expandIcon:n,showExpandIcon:I,activeKey:z,onToggle:S},children:s("div",{ref:p,css:[oe(t),ee(l)],...Q(o),children:u})})});k.displayName="Collapse";try{k.displayName="Collapse",k.__docgenInfo={description:"",displayName:"Collapse",props:{accordion:{defaultValue:null,description:"",name:"accordion",required:!1,type:{name:"boolean"}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(key: string, keys: string[], e?: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string | string[]"}},lazyload:{defaultValue:null,description:"",name:"lazyload",required:!1,type:{name:"boolean"}},showExpandIcon:{defaultValue:null,description:"",name:"showExpandIcon",required:!1,type:{name:"boolean"}},triggerRegion:{defaultValue:null,description:"",name:"triggerRegion",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"header"'}]}},expandIconPosition:{defaultValue:null,description:"",name:"expandIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},destroyOnHide:{defaultValue:null,description:"",name:"destroyOnHide",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const X={disabled:!1},Z=K.createContext(null);var ge=function(p){return p.scrollTop},D="unmounted",w="exited",E="entering",T="entered",W="exiting",v=function(l){ie(p,l);function p(t,n){var e;e=l.call(this,t,n)||this;var a=n,r=a&&!a.isMounting?t.enter:t.appear,d;return e.appearStatus=null,t.in?r?(d=w,e.appearStatus=E):d=T:t.unmountOnExit||t.mountOnEnter?d=D:d=w,e.state={status:d},e.nextCallback=null,e}p.getDerivedStateFromProps=function(n,e){var a=n.in;return a&&e.status===D?{status:w}:null};var u=p.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(n){var e=null;if(n!==this.props){var a=this.state.status;this.props.in?a!==E&&a!==T&&(e=E):(a===E||a===T)&&(e=W)}this.updateStatus(!1,e)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var n=this.props.timeout,e,a,r;return e=a=r=n,n!=null&&typeof n!="number"&&(e=n.exit,a=n.enter,r=n.appear!==void 0?n.appear:a),{exit:e,enter:a,appear:r}},u.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:H.findDOMNode(this);a&&ge(a)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===w&&this.setState({status:D})},u.performEnter=function(n){var e=this,a=this.props.enter,r=this.context?this.context.isMounting:n,d=this.props.nodeRef?[r]:[H.findDOMNode(this),r],m=d[0],f=d[1],h=this.getTimeouts(),I=r?h.appear:h.enter;if(!n&&!a||X.disabled){this.safeSetState({status:T},function(){e.props.onEntered(m)});return}this.props.onEnter(m,f),this.safeSetState({status:E},function(){e.props.onEntering(m,f),e.onTransitionEnd(I,function(){e.safeSetState({status:T},function(){e.props.onEntered(m,f)})})})},u.performExit=function(){var n=this,e=this.props.exit,a=this.getTimeouts(),r=this.props.nodeRef?void 0:H.findDOMNode(this);if(!e||X.disabled){this.safeSetState({status:w},function(){n.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:W},function(){n.props.onExiting(r),n.onTransitionEnd(a.exit,function(){n.safeSetState({status:w},function(){n.props.onExited(r)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},u.setNextCallback=function(n){var e=this,a=!0;return this.nextCallback=function(r){a&&(a=!1,e.nextCallback=null,n(r))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},u.onTransitionEnd=function(n,e){this.setNextCallback(e);var a=this.props.nodeRef?this.props.nodeRef.current:H.findDOMNode(this),r=n==null&&!this.props.addEndListener;if(!a||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],m=d[0],f=d[1];this.props.addEndListener(m,f)}n!=null&&setTimeout(this.nextCallback,n)},u.render=function(){var n=this.state.status;if(n===D)return null;var e=this.props,a=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var r=le(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return K.createElement(Z.Provider,{value:null},typeof a=="function"?a(n,r):K.cloneElement(K.Children.only(a),r))},p}(K.Component);v.contextType=Z;v.propTypes={};function L(){}v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:L,onEntering:L,onEntered:L,onExit:L,onExiting:L,onExited:L};v.UNMOUNTED=D;v.EXITED=w;v.ENTERING=E;v.ENTERED=T;v.EXITING=W;const ye=v,y=C.forwardRef((l,p)=>{const{children:u,name:t,header:n,extra:e,disabled:a,destroyOnHide:r,expandIcon:d,showExpandIcon:m,lazyload:f,triggerRegion:h,expandIconPosition:I,...P}=l,o=C.useContext(j),z=f||(o.lazyload??!1),N=r||(o.destroyOnHide??!1),S=m||(o.showExpandIcon??!1),x=I||(o.expandIconPosition??!1),q=d||o.expandIcon,_=h||(o.triggerRegion??"header"),c=C.useMemo(()=>{var i;return o.activeKey?typeof o.activeKey=="string"?t===o.activeKey:(i=o.activeKey)==null?void 0:i.some(b=>b===t):!1},[o.activeKey,t]),O=C.useCallback(i=>{var M,$;if(a)return;let b=new Set(o.activeKey);c?(b.delete(t),(M=o==null?void 0:o.onToggle)==null||M.call(o,t,Array.from(b.values()),i)):(b.add(t),($=o==null?void 0:o.onToggle)==null||$.call(o,t,Array.from(b.values()),i))},[c,o,a,t]);return R("div",{css:se,ref:p,...Q(P),children:[R("div",{css:pe(a),onClick:i=>{_==="header"&&O(i)},children:[S&&x==="left"&&s("div",{css:B,onClick:i=>{_==="icon"&&O(i)},children:q||s(ae,{css:G(c,x),c:a?V("gray","05"):V("gray","03")})}),s("div",{css:fe(S&&x==="left",a),children:n}),s("div",{css:ce}),s("div",{css:me(S&&x==="right"),children:e}),S&&x==="right"&&s("div",{css:B,onClick:i=>{_==="icon"&&O(i)},children:q||s(te,{css:G(c,x),c:a?V("gray","05"):V("gray","03")})})]}),s(ye,{in:c,addEndListener:(i,b)=>{i.addEventListener("transitionend",b,!1)},mountOnEnter:N||z,unmountOnExit:N,onEnter:i=>{i.style.height="0",i.style.display="block"},onEntering:i=>{i.style.height=`${i.scrollHeight}px`},onEntered:i=>{i.style.height="auto"},onExit:i=>{i.style.display="block",i.style.height=`${i.offsetHeight}px`,i.offsetHeight},onExiting:i=>{i.style.height="0"},onExited:i=>{i.style.display="none",i.style.height="auto"},children:s("div",{css:ue(c),children:s("div",{css:de(),children:u})})})]})});y.displayName="CollapseItem";try{y.displayName="CollapseItem",y.__docgenInfo={description:"",displayName:"CollapseItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},lazyload:{defaultValue:null,description:"",name:"lazyload",required:!1,type:{name:"boolean"}},showExpandIcon:{defaultValue:null,description:"",name:"showExpandIcon",required:!1,type:{name:"boolean"}},triggerRegion:{defaultValue:null,description:"",name:"triggerRegion",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"header"'}]}},expandIconPosition:{defaultValue:null,description:"",name:"expandIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},destroyOnHide:{defaultValue:null,description:"",name:"destroyOnHide",required:!1,type:{name:"boolean"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const _e={title:"DATA DISPLAY/Collapse",component:k,argTypes:{expandIcon:{control:!1},activeKey:{control:!1},defaultActiveKey:{control:!1}}},A=l=>R("div",{children:[R(k,{defaultActiveKey:["1","2"],style:{width:"100px"},...l,children:[s(y,{header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get",name:"1",children:"header1"}),s(y,{header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get",name:"2",disabled:!0,children:"header2"}),s(y,{header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get",name:"3",children:"header3"})]}),R(k,{...l,defaultActiveKey:["1","2"],style:{maxWidth:1e3},children:[s(y,{header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get",name:"1",children:R(k,{defaultActiveKey:"1.1",...l,children:[s(y,{header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get.",name:"1.1",extra:s(re,{}),children:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"}),s(y,{header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get",name:"1.2",children:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"})]})}),s(y,{header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get",name:"2",children:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"}),s(y,{disabled:!0,header:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get",name:"3",children:"Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"})]})]});var F,Y,J;A.parameters={...A.parameters,docs:{...(F=A.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <div>
      <Collapse defaultActiveKey={["1", "2"]} style={{
      width: "100px"
    }} {...args}>
        <CollapseItem header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get" name="1">
          header1
        </CollapseItem>

        <CollapseItem header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get" name="2" disabled>
          header2
        </CollapseItem>

        <CollapseItem header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get" name="3">
          header3
        </CollapseItem>
      </Collapse>
      <Collapse {...args} defaultActiveKey={["1", "2"]} style={{
      maxWidth: 1000
    }}>
        <CollapseItem header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get" name="1">
          <Collapse defaultActiveKey={"1.1"} {...args}>
            <CollapseItem header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get." name="1.1" extra={<LikeFillIcon />}>
              Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
            </CollapseItem>
            <CollapseItem header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get" name="1.2">
              Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
            </CollapseItem>
          </Collapse>
        </CollapseItem>
        <CollapseItem header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get" name="2">
          Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
        </CollapseItem>
        <CollapseItem disabled header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get" name="3">
          Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
        </CollapseItem>
      </Collapse>
    </div>;
}`,...(J=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const Oe=["Template"];export{A as Template,Oe as __namedExportsOrder,_e as default};
//# sourceMappingURL=collapse.stories-035285ea.js.map