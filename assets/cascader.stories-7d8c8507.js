import{j as A,a as i,F as me}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as v}from"./index-1cdf6ce0.js";import{c as _}from"./style-4011d251.js";import{g as I}from"./color-palette-2f9095e4.js";import{C as re}from"./checkbox-42dfd355.js";import{E as te}from"./empty-b3af2cb3.js";import{N as ce}from"./next-aefb080b.js";import{u as D}from"./use-merge-value-fcf53e13.js";import{I as ge}from"./input-abc06790.js";import{L as ie}from"./loading-9fdd5a3f.js";import{U as ue}from"./up-3a461bc7.js";import{D as se}from"./down-576466d9.js";import{T as de}from"./trigger-1cc56147.js";import{I as ye}from"./input-tag-14961490.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./reduce-49d5fe2d.js";import"./create-icon-e804097a.js";import"./success-97405a8a.js";import"./empty-058d90a1.js";import"./config-provider-context-e3e0b003.js";import"./image-a6e34fb7.js";import"./image-default-69467f7d.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";import"./style-aedf7f23.js";import"./z-index-efffafd0.js";import"./clear-c3d7638a.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./use-force-update-497a924b.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./index-4cd6a639.js";import"./web-cc1a3eed.js";import"./tag-d5f0dc5a.js";import"./close-56bf4497.js";_`
  display: flex;
  flex-direction: row;
  align-items: center;
`;const Ve=_`
  display: inline-flex;
  flex-direction: row;
`,qe=_`
  display: inline-flex;
  padding: 8px 0;
  flex-direction: column;
`;function be(l){return _`
    padding: 9px 16px;
    display: flex;
    flex-direction: row;
    max-height: 216px;
    overflow-y: auto;
    align-items: center;
    background-color: ${l?I("grayBlue","09"):"unset"};

    &:hover {
      background-color: ${I("grayBlue","09")};
    }
  `}function he(l){return _`
    color: ${I("grayBlue",l?"02":"03")};
  `}function ve(l){let f=_``;return l&&(f=_`
      border-right: 1px solid ${I("grayBlue","08")};
    `),_`
    padding: 8px 0;
    max-height: 216px;
    overflow-y: auto;
    ${f};
  `}function xe(l){return _`
    display: flex;
    align-items: center;
    color: ${I("grayBlue",l?"02":"03")};
    background-color: ${l?I("grayBlue","09"):"unset"};
    padding: 9px 16px;

    &:hover {
      background-color: ${I("grayBlue","09")};
    }
  `}const we=_`
  flex-grow: 1;
`;function M(l,f){const d=[];let t=f;return l.forEach(g=>{let a=t==null?void 0:t.find(b=>b.value===g);a&&(d.push(a.label),a.children&&(t=a.children))}),d.length===0?l.join("/"):d.join("/")}function Z(l,f,d){let t=[...f,{label:d.label,value:d.value}];d.children===void 0||d.children.length===0?l.push(t):d.children.forEach(g=>{Z(l,t,g)})}const F=v.forwardRef((l,f)=>{const{multiple:d,value:t=[],options:g=[],onChange:a,inputValue:b="",filterOption:y,colorScheme:S,onClick:C}=l,V=v.useMemo(()=>{let m=[];return g==null||g.forEach(o=>{Z(m,[],o)}),m},[g]),j=v.useMemo(()=>y&&b&&b!==""?V.filter((m,o)=>{let p=m.map(s=>s.label).join(" / ");return typeof y=="boolean"?p.includes(b):y(b)}):[],[y,b,V]),x=v.useMemo(()=>{const m=(t==null?void 0:t.map(o=>o.join(" / ")))??[];return j.map(o=>{const p=o.map(s=>s.value).join(" / ");return{selectorOptions:o,labelCollection:o.map(s=>s.label).join(" / "),checked:m.some(s=>s===p)}})},[j,t]);return A("div",{ref:f,css:qe,onClick:C,children:[x.map((m,o)=>A("div",{css:be(m.checked),onClick:()=>{d||a==null||a([m.selectorOptions.map(p=>p.value)])},children:[d&&i(re,{colorScheme:S,mr:"8px",checked:m.checked,onChange:p=>{p?a==null||a([...t,m.selectorOptions.map(s=>s.value)]):a==null||a(t.filter(s=>s.join(" / ")===m.labelCollection))}}),i("span",{css:he(m.checked??!1),children:m.labelCollection})]},`${o}:${m.labelCollection}`)),x.length===0&&i(te,{w:"320px"})]})});F.displayName="ListSelector";try{F.displayName="ListSelector",F.__docgenInfo={description:"",displayName:"ListSelector",props:{multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[][]"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},filterOption:{defaultValue:null,description:"",name:"filterOption",required:!1,type:{name:"boolean | ((inputValue: string) => boolean)"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CascaderOptionObject[]"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[][]) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}function oe(l){if(l.children===void 0||l.children.length===0)return 0;{let f=0;return l.children.forEach(d=>{f+=oe(d)}),f+=l.children.length,f}}function ee(l,f,d){let t=l.filter(y=>y.length>d&&y[d]===f.value);if(f.children===void 0||f.children.length===0)return[t.length>0,!1];let g=new Set;t.forEach(y=>{y.forEach((S,C)=>{C>d&&g.add(`${C}:${S}`)})});let a=g.size,b=oe(f);return a===0?[!1,!1]:a!==0&&b!==0&&a===b?[!0,!1]:[!0,!0]}const H=v.forwardRef((l,f)=>{const{multiple:d,value:t=[],options:g=[],onChange:a,colorScheme:b,inputValue:y="",filterOption:S,onClick:C}=l,[V,j]=v.useState(d?[]:t[0]),x=v.useMemo(()=>{var p;const o=[];if(V&&g){let s=g.map(e=>{const[c,r]=ee(t,e,0);return{value:e.value,label:e.label,children:e.children,checked:c,selected:V.length>0&&e.value===V[0],indeterminate:r}});o.push(s);for(let e=0;e<V.length;e++){const c=(p=o[e])==null?void 0:p.find(r=>r.value===V[e]);if(c&&c.children&&c.children.length>0){let r=c.children.map(h=>{const[u,k]=ee(t,h,e+1);return{value:h.value,label:h.label,children:h.children,selected:V.length>=e+1&&h.value===V[e+1],checked:u,indeterminate:k}});o.push(r)}}}return o},[t,V,g]),m=v.useMemo(()=>{let o=x.map((p,s)=>i("div",{css:ve(s!==x.length-1),children:p.map(e=>A("div",{css:xe(e.selected),onClick:()=>{let c=V.slice(0,s);c.push(e.value),j(c),!d&&(e.children===void 0||e.children.length==0)&&(a==null||a([c]))},children:[d&&i(re,{mr:"8px",checked:e.checked,colorScheme:b,indeterminate:e.indeterminate,onChange:c=>{const r=V.splice(0,s);r.push(e.value);const h=r.join(" / ");if(c)if(e.children===void 0||e.children.length===0)a==null||a([...t,r]);else{let u=t.filter(q=>!q.join(" / ").startsWith(h));const k=[];Z(k,[],e),k.forEach(q=>{u.push([...r.slice(0,s),...q.map(W=>W.value)])}),a==null||a(u)}else a==null||a(t.filter(u=>!u.join(" / ").startsWith(h)))}}),i("span",{css:we,children:e.label}),e.children!==void 0&&e.children.length>0&&i(ce,{ml:"16px",fs:"12px"})]},e.label))},`${s}:${p.map(e=>e.label).join(" / ")}`));return i(me,{children:Array.isArray(x)&&x.flat().length>0?o:i(te,{w:"320px"})})},[x,V,d,a,t]);return i("div",{css:Ve,ref:f,onClick:C,children:m})});H.displayName="Selector";try{H.displayName="Selector",H.__docgenInfo={description:"",displayName:"Selector",props:{multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[][]"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},filterOption:{defaultValue:null,description:"",name:"filterOption",required:!1,type:{name:"boolean | ((inputValue: string) => boolean)"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CascaderOptionObject[]"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[][]) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const K=v.forwardRef((l,f)=>{const{size:d="medium",allowClear:t,placeholder:g,colorScheme:a="blue",defaultPopupVisible:b,popupVisible:y,disabled:S,error:C,loading:V,triggerProps:j,addBefore:x,prefix:m,defaultValue:o,options:p,showSearch:s,value:e,filterOption:c,onChange:r,onClear:h,onInputValueChange:u,onKeyDown:k,onVisibleChange:q,onFocus:W,multiple:pe,onBlur:X,trigger:Y="click",...U}=l,[R,L]=D(!1,{defaultValue:b,value:y}),[E,w]=D("",{defaultValue:o===void 0?void 0:o.join(" / "),value:e===void 0?void 0:M(e,p??[])}),[P,N]=D([],{defaultValue:o===void 0?void 0:o,value:e===void 0?void 0:e}),T=v.useRef(E),z=i(H,{options:p,multiple:!1,colorScheme:a,value:[P],inputValue:E,filterOption:c,onChange:n=>{if(n.length===1&&p){const B=M(n[0],p);e===void 0&&(w(B),u==null||u(B),N(n[0]),T.current=B),r==null||r(n[0]),y===void 0&&L(!1),q==null||q(!1)}}});return i(de,{withoutPadding:!0,showArrow:!1,position:"bottom-start",colorScheme:"white",autoAlignPopupWidth:!1,trigger:Y,closeOnClick:!s,popupVisible:R,disabled:S,content:s&&c&&E!==""?i(F,{options:p,multiple:!1,inputValue:E,filterOption:c,value:[P],onChange:n=>{if(n.length===1){if(e===void 0&&p){const B=M(n[0],p);w(B),N(n[0]),T.current=B}r==null||r(n[0]),y===void 0&&L(!1),q==null||q(!1)}}}):z,onVisibleChange:n=>{y===void 0&&L(n),s&&(n?(w(""),u==null||u("")):(w(T.current??""),u==null||u(""))),q==null||q(n)},...j,children:i(ge,{onFocus:W,onBlur:X,value:E,readOnly:!s,addBefore:x,error:C,onKeyDown:k,disabled:S,colorScheme:a,size:d,allowClear:t,prefix:m,placeholder:g,onChange:n=>{w(n),u==null||u(n)},ref:f,onClear:()=>{e===void 0&&(w(""),N([]),u==null||u("")),h==null||h(),r==null||r(null)},suffix:V?i(ie,{c:I("grayBlue","05"),spin:!0}):R?i(ue,{}):i(se,{}),...U})})});K.displayName="SingleCascader";try{K.displayName="SingleCascader",K.__docgenInfo={description:"",displayName:"SingleCascader",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},defaultPopupVisible:{defaultValue:null,description:"",name:"defaultPopupVisible",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},popupVisible:{defaultValue:null,description:"",name:"popupVisible",required:!1,type:{name:"boolean"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},addBefore:{defaultValue:null,description:"",name:"addBefore",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[] | string[][]"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[] | string[][]"}},filterOption:{defaultValue:null,description:"",name:"filterOption",required:!1,type:{name:"boolean | ((inputValue: string) => boolean)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[] | string[][]) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"() => void"}},onInputValueChange:{defaultValue:null,description:"",name:"onInputValueChange",required:!1,type:{name:"(value: string) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},triggerProps:{defaultValue:null,description:"",name:"triggerProps",required:!1,type:{name:"TriggerProps"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CascaderOptionObject[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const G=v.forwardRef((l,f)=>{const{size:d="medium",allowClear:t,placeholder:g,colorScheme:a="blue",defaultPopupVisible:b,popupVisible:y,disabled:S,error:C,loading:V,triggerProps:j,addBefore:x,prefix:m,defaultValue:o,options:p=[],showSearch:s,value:e,filterOption:c,onChange:r,onClear:h,onInputValueChange:u,onKeyDown:k,onVisibleChange:q,onFocus:W,multiple:pe,onBlur:X,trigger:Y="click",...U}=l,R=v.useRef(),[L,E]=D(!1,{defaultValue:b,value:y}),[w,P]=D([],{defaultValue:o!==void 0?o:void 0,value:e!==void 0?e:void 0}),[N,T]=v.useState(""),z=i(H,{onClick:()=>{var n;(n=R.current)==null||n.focus()},options:p,colorScheme:a,multiple:!0,value:w,inputValue:N,filterOption:c,onChange:n=>{e===void 0&&P(n),r==null||r(n)}});return i(de,{withoutPadding:!0,showArrow:!1,position:"bottom-start",colorScheme:"white",autoAlignPopupWidth:!1,trigger:Y,closeOnClick:!s,popupVisible:L,disabled:S,content:s&&c&&N!==""?i(F,{onClick:()=>{var n;(n=R.current)==null||n.focus()},colorScheme:a,options:p,multiple:!0,inputValue:N,filterOption:c,value:w,onChange:n=>{e===void 0&&P(n),r==null||r(n)}}):z,onVisibleChange:n=>{y===void 0&&E(n),q==null||q(n)},...j,children:i(ye,{onFocus:W,onBlur:X,inputTagRef:R,value:w.map(n=>({label:M(n,p),value:n.join(" / "),closeable:!0})),labelInValue:!0,onRemove:n=>{const B=w.findIndex(fe=>fe.join(" / ")===n.value);let J=[...w];J.splice(B,1),e===void 0&&P(J),r==null||r(J)},readOnly:!s,addBefore:x,error:C,onKeyDown:k,disabled:S,colorScheme:a,size:d,allowClear:t,prefix:m,placeholder:g,onInputChange:n=>{T(n),u==null||u(n)},ref:f,onClear:()=>{e===void 0&&(T(""),u==null||u(""),P([])),h==null||h(),r==null||r(null)},suffix:V?i(ie,{c:I("grayBlue","05"),spin:!0}):L?i(ue,{}):i(se,{}),...U})})});G.displayName="MultipleCascader";try{G.displayName="MultipleCascader",G.__docgenInfo={description:"",displayName:"MultipleCascader",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},defaultPopupVisible:{defaultValue:null,description:"",name:"defaultPopupVisible",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},popupVisible:{defaultValue:null,description:"",name:"popupVisible",required:!1,type:{name:"boolean"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},addBefore:{defaultValue:null,description:"",name:"addBefore",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[] | string[][]"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[] | string[][]"}},filterOption:{defaultValue:null,description:"",name:"filterOption",required:!1,type:{name:"boolean | ((inputValue: string) => boolean)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[] | string[][]) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"() => void"}},onInputValueChange:{defaultValue:null,description:"",name:"onInputValueChange",required:!1,type:{name:"(value: string) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},triggerProps:{defaultValue:null,description:"",name:"triggerProps",required:!1,type:{name:"TriggerProps"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CascaderOptionObject[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const O=v.forwardRef((l,f)=>l.multiple?i(G,{...l}):i(K,{...l}));O.displayName="Cascader";try{O.displayName="Cascader",O.__docgenInfo={description:"",displayName:"Cascader",props:{colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},defaultPopupVisible:{defaultValue:null,description:"",name:"defaultPopupVisible",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},popupVisible:{defaultValue:null,description:"",name:"popupVisible",required:!1,type:{name:"boolean"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},addBefore:{defaultValue:null,description:"",name:"addBefore",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[] | string[][]"}},showSearch:{defaultValue:null,description:"",name:"showSearch",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[] | string[][]"}},filterOption:{defaultValue:null,description:"",name:"filterOption",required:!1,type:{name:"boolean | ((inputValue: string) => boolean)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[] | string[][]) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"() => void"}},onInputValueChange:{defaultValue:null,description:"",name:"onInputValueChange",required:!1,type:{name:"(value: string) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => void"}},triggerProps:{defaultValue:null,description:"",name:"triggerProps",required:!1,type:{name:"TriggerProps"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CascaderOptionObject[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const sl={title:"DATA INPUT/Cascader",component:O},Q=[{value:"beijing",label:"Beijing",children:[{value:"Beijing",label:"Beijing",children:[{value:"chaoyang",label:"Chaoyang",children:[{value:"datunli",label:"Datunli"}]},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng"},{value:"haidian",label:"Haidian"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"shanghaishi",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}],$=l=>A("div",{children:[i(O,{options:void 0,allowClear:!0,...l,value:["a","1"]}),i(O,{style:{marginTop:"20px"},allowClear:!0,filterOption:!0,options:Q,showSearch:!0,...l}),i(O,{multiple:!0,style:{marginTop:"20px"},options:Q,allowClear:!0,...l}),i(O,{multiple:!0,style:{marginTop:"20px"},allowClear:!0,filterOption:!0,options:Q,showSearch:!0,...l})]});var le,ae,ne;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`args => <div>
    <Cascader options={undefined} allowClear={true} {...args} value={["a", "1"]} />
    <Cascader style={{
    marginTop: "20px"
  }} allowClear={true} filterOption={true} options={options} showSearch {...args} />
    <Cascader multiple style={{
    marginTop: "20px"
  }} options={options} allowClear={true} {...args} />
    <Cascader multiple style={{
    marginTop: "20px"
  }} allowClear={true} filterOption={true} options={options} showSearch {...args} />
  </div>`,...(ne=(ae=$.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const dl=["Basic"];export{$ as Basic,dl as __namedExportsOrder,sl as default};
//# sourceMappingURL=cascader.stories-7d8c8507.js.map
