import{j as C,a as h}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as D}from"./index-1cdf6ce0.js";import{d as le}from"./dayjs.min-acd82c3b.js";import{s as se,a as ue,b as oe,c as z,d as de,e as fe}from"./style-20f50605.js";import{S as me}from"./skeleton-037f86e0.js";import{i as ce,f as pe,c as ge,a as ye,b as he,S as Ve,H as qe,v as _,s as be,d as Se,e as ve,g as xe,h as Ae,j as we,r as Ee,k as Z,l as De,n as Te,p as Ie,o as Be,q as $,t as Ce}from"./SVGVisualElement-c2d20f19.js";import{a as Me,d as _e}from"./style-4011d251.js";import{d as L}from"./is-47f46886.js";import{I as je}from"./image-default-69467f7d.js";import{U as K}from"./up-3a461bc7.js";import{B as Re}from"./button-group-context-9000c136.js";import{S as Ue}from"./space-29f127a3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./color-palette-83e58897.js";import"./index-45a08ae3.js";import"./is-browser-3ff01602.js";import"./create-icon-e804097a.js";import"./loading-9fdd5a3f.js";import"./divider-90977a79.js";function ee(e,t,a){var n;if(typeof e=="string"){let r=document;t&&(ce(!!t.current),r=t.current),a?((n=a[e])!==null&&n!==void 0||(a[e]=r.querySelectorAll(e)),e=a[e]):e=r.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}function ke(e,t){let a;const n=()=>{const{currentTime:r}=t,l=(r===null?0:r.value)/100;a!==l&&e(l),a=l};return pe.update(n,!0),()=>ge(n)}const Ne=ye(()=>window.ScrollTimeline!==void 0);class te{constructor(t){this.animations=t.filter(Boolean)}then(t,a){return Promise.all(this.animations).then(t).catch(a)}getAll(t){return this.animations[0][t]}setAll(t,a){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=a}attachTimeline(t){const a=this.animations.map(n=>{if(Ne()&&n.attachTimeline)n.attachTimeline(t);else return n.pause(),ke(r=>{n.time=n.duration*r},t)});return()=>{a.forEach((n,r)=>{n&&n(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let a=0;a<this.animations.length;a++)t=Math.max(t,this.animations[a].duration);return t}runAll(t){this.animations.forEach(a=>a[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Ge(e){return typeof e=="object"&&!Array.isArray(e)}function Fe(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=he(e)?new Ve(t,{enableHardwareAcceleration:!1}):new qe(t,{enableHardwareAcceleration:!0});a.mount(e),_.set(e,a)}function He(e,t=100){const a=be({keyframes:[0,t],...e}),n=Math.min(Se(a),ve);return{type:"keyframes",ease:r=>a.next(n*r).value/t,duration:xe(n)}}function P(e,t,a,n){var r;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?a:(r=n.get(t))!==null&&r!==void 0?r:e}const We=(e,t,a)=>{const n=t-e;return((a-e)%n+n)%n+e};function ze(e,t){return Ae(e)?e[We(0,e.length,t)]:e}function Le(e,t,a){for(let n=0;n<e.length;n++){const r=e[n];r.at>t&&r.at<a&&(Ee(e,r),n--)}}function Ke(e,t,a,n,r,i){Le(e,r,i);for(let l=0;l<t.length;l++)e.push({value:t[l],at:we(r,i,n[l]),easing:ze(a,l)})}function Pe(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Oe="easeInOut";function Ye(e,{defaultTransition:t={},...a}={},n){const r=t.duration||.3,i=new Map,l=new Map,V={},o=new Map;let v=0,d=0,w=0;for(let E=0;E<e.length;E++){const q=e[E];if(typeof q=="string"){o.set(q,d);continue}else if(!Array.isArray(q)){o.set(q.name,P(d,q.at,v,o));continue}let[x,p,m={}]=q;m.at!==void 0&&(d=P(d,m.at,v,o));let s=0;const b=(f,g,S,y=0,c=0)=>{const u=Xe(f),{delay:M=0,times:I=De(u),type:ae="keyframes",...re}=g;let{ease:j=t.ease||"easeOut",duration:A}=g;const R=typeof M=="function"?M(y,c):M,U=u.length;if(U<=2&&ae==="spring"){let F=100;if(U===2&&Ze(u)){const ie=u[1]-u[0];F=Math.abs(ie)}const H={...re};A!==void 0&&(H.duration=Be(A));const W=He(H,F);j=W.ease,A=W.duration}A??(A=r);const k=d+R,N=k+A;I.length===1&&I[0]===0&&(I[1]=1);const G=I.length-u.length;G>0&&Te(I,G),u.length===1&&u.unshift(null),Ke(S,u,j,I,k,N),s=Math.max(R+A,s),w=Math.max(N,w)};if(Z(x)){const f=O(x,l);b(p,m,Y("default",f))}else{const f=ee(x,n,V),g=f.length;for(let S=0;S<g;S++){p=p,m=m;const y=f[S],c=O(y,l);for(const u in p)b(p[u],Je(m,u),Y(u,c),S,g)}v=d,d+=s}}return l.forEach((E,q)=>{for(const x in E){const p=E[x];p.sort(Pe);const m=[],s=[],b=[];for(let g=0;g<p.length;g++){const{at:S,value:y,easing:c}=p[g];m.push(y),s.push(Ie(0,w,S)),b.push(c||"easeOut")}s[0]!==0&&(s.unshift(0),m.unshift(m[0]),b.unshift(Oe)),s[s.length-1]!==1&&(s.push(1),m.push(null)),i.has(q)||i.set(q,{keyframes:{},transition:{}});const f=i.get(q);f.keyframes[x]=m,f.transition[x]={...t,duration:w,ease:b,times:s,...a}}}),i}function O(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function Y(e,t){return t[e]||(t[e]=[]),t[e]}function Xe(e){return Array.isArray(e)?e:[e]}function Je(e,t){return e[t]?{...e,...e[t]}:{...e}}const Qe=e=>typeof e=="number",Ze=e=>e.every(Qe);function ne(e,t,a,n){const r=ee(e,n),i=r.length,l=[];for(let V=0;V<i;V++){const o=r[V];_.has(o)||Fe(o);const v=_.get(o),d={...a};typeof d.delay=="function"&&(d.delay=d.delay(V,i)),l.push(...Ce(v,{...t,transition:d},{}))}return new te(l)}const $e=e=>Array.isArray(e)&&Array.isArray(e[0]);function et(e,t,a){const n=[];return Ye(e,t,a).forEach(({keyframes:i,transition:l},V)=>{let o;Z(V)?o=$(V,i.default,l.default):o=ne(V,i,l),n.push(o)}),new te(n)}const tt=e=>{function t(a,n,r){let i;return $e(a)?i=et(a,n,e):Ge(n)?i=ne(a,n,r,e):i=$(a,n,r),e&&e.animations.push(i),i}return t},nt=tt(),T=D.forwardRef((e,t)=>{const{title:a,value:n=0,decimalSeparator:r=".",format:i,groupSeparator:l=",",loading:V,precision:o,suffix:v,prefix:d,extra:w,countUp:E,countFrom:q=0,countDuration:x=2e3,colorScheme:p="grayBlue",...m}=e,[s,b]=D.useState(n),f=D.useRef();function g(y=q,c=n){y!==c&&(f.current=nt(y,Number(c),{duration:Math.floor(x/1e3),ease:"easeOut",onUpdate:u=>{b(u)},onComplete:()=>{b(c)}}))}D.useEffect(()=>(e.countUp?(f.current&&f.current.stop(),s!==n?g(Number(s),n):g()):b(n),()=>{f.current&&f.current.stop(),f.current=null}),[n]),D.useImperativeHandle(t,()=>({onCountUp:g}));const S=D.useMemo(()=>{if(i)return le(s).format(i);let y=Number(s);if(!isFinite(y))return s;o!==void 0&&(y=y.toFixed(o));let[c,u]=String(y).split(".");return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,l),u!==void 0?c+r+u:c},[i,n,l,r,o,s]);return C("div",{css:[se,Me(e)],..._e(m),children:[a&&h("div",{css:ue(p),children:a}),C("div",{children:[h(me,{animation:!0,visible:!!V,text:{rows:1,width:"100%"},children:C("div",{css:oe(p),children:[d&&h("span",{css:z(!0,!L(d)),children:d}),h("span",{css:de,children:S.toString()}),v&&h("span",{css:z(!1,!L(v)),children:v})]})}),w&&h("div",{css:fe(p),children:w})]})]})});T.displayName="Statistic";try{T.displayName="Statistic",T.__docgenInfo={description:"",displayName:"Statistic",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | Dayjs"}},decimalSeparator:{defaultValue:null,description:"",name:"decimalSeparator",required:!1,type:{name:"string"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},countUp:{defaultValue:null,description:"",name:"countUp",required:!1,type:{name:"boolean"}},countDuration:{defaultValue:null,description:"",name:"countDuration",required:!1,type:{name:"number"}},countFrom:{defaultValue:null,description:"",name:"countFrom",required:!1,type:{name:"number"}},groupSeparator:{defaultValue:null,description:"",name:"groupSeparator",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},precision:{defaultValue:null,description:"",name:"precision",required:!1,type:{name:"number"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const xt={title:"DATA DISPLAY/Statistic",component:T},at=e=>{let t=D.useRef(null);return C(Ue,{size:"large",children:[h(T,{...e}),h(T,{...e,title:h(je,{}),suffix:h(K,{})}),h(T,{ref:a=>t=a,...e,precision:2,prefix:h(K,{}),suffix:"%",countUp:!0}),h(Re,{onClick:()=>{t.onCountUp()},style:{display:"block",marginTop:10},children:"Start"})]})},B=at.bind({});B.args={title:"Amount",value:50,prefix:"",suffix:""};var X,J,Q;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(Q=(J=B.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const At=["Basic"];export{B as Basic,At as __namedExportsOrder,xt as default};
//# sourceMappingURL=statistic.stories-5d113fb9.js.map
