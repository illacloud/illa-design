import{a as d,F as ue,j as M}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as S}from"./index-1cdf6ce0.js";import{c as l,a as se,d as de}from"./style-3ea54b04.js";import{g as i,a as oe}from"./color-palette-728b424e.js";import{z as Y}from"./z-index-efffafd0.js";import{u as pe}from"./web-cc1a3eed.js";import{T as fe}from"./tag-47108fb9.js";import{u as J}from"./use-merge-value-fcf53e13.js";import{C as me}from"./clear-bb423cf4.js";function ce(r,n){return l`
    width: ${n}px;
    font-size: inherit;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    font-family: unset;
    line-height: 22px;

    ::placeholder {
      color: ${i("grayBlue","04")};
    }
  `}function ge(r){return l`
    color: ${i("grayBlue","04")};
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    line-height: ${r==="large"?"32px":r==="small"?"22px":"24px"};
  `}function Q(r,n,c){return l`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${i("gray","02")};
    background-color: ${n?i("grayBlue","09"):"unset"};
    border: 1px solid ${i("grayBlue","08")};
    ${Z(r)};
    ${c};
  `}function Z(r){let n=l``;switch(r){case"small":n=l`
        padding: 0 12px;
      `;break;case"medium":n=l`
        padding: 4px 16px;
      `;break;case"large":n=l`
        padding: 8px 16px;
      `;break}return n}function ye(r,n,c,I,k,u,h){let x=l``;return I||(x=l`
      &:hover {
        border-color: ${c?i("red","02"):i(n,"06")};
        z-index: ${Y.inputFocus};

        .clear {
          visibility: visible;
        }
      }

      &:focus-within {
        border-color: ${i(c?"red":n,"03")};
        box-shadow: 0 0 8px 0
          ${oe(c?"red":n,"01")};
        z-index: ${Y.inputFocus};
      }
    `),l`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    cursor: ${I?"not-allowed":"text"};
    border-radius: ${k?"0":h[0]}
      ${u?"0":h[1]} ${u?"0":h[2]}
      ${k?"0":h[3]};
    border: 1px solid
      ${c?i("red","03"):i("grayBlue","08")};
    flex-grow: 1;
    flex-shrink: 1;
    background-color: ${I?i("grayBlue","09"):"unset"};
    ${Z(r)};
    ${x};
  `}const be=l`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  position: relative;
  flex-shrink: 1;
  overflow: hidden;
  align-items: center;
  gap: 4px;
`,Ve=l`
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;function U(r,n){return l`
    align-self: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${r?i("gray","05"):i("gray","02")};
    min-height: 22px;
    ${n};
  `}const xe=l`
  position: absolute;
  visibility: hidden;
`;function qe(){return l`
    display: flex;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    font-size: 14px;
  `}const P=S.forwardRef((r,n)=>{const{colorScheme:c="blue",autoFocus:I,allowClear:k,disabled:u,error:h,readOnly:x,saveOnBlur:ee,placeholder:le,inputValue:B,size:o="medium",prefix:L,suffix:W,defaultValue:A,value:p,onBlur:E,onFocus:R,onChange:t,validate:g,onClear:j,onInputChange:C,onKeyDown:z,onPressEnter:O,onRemove:q,renderItem:T,addBefore:F,bdRadius:H,inputTagRef:ae,addAfter:_,labelInValue:f,...D}=r;let a=(H==null?void 0:H.split(" "))??["8px","8px","8px","8px"];a.length==2?a=[a[0],a[1],a[0],a[1]]:a.length==3&&(a=[a[0],a[1],a[2],a[1]]);const[ne,K]=S.useState(!1),[s,w]=J([],{defaultValue:A,value:p}),[y,G]=J("",{defaultValue:"",value:B}),[te,re]=pe(),$=S.useRef(null),N=S.useRef(!1);S.useImperativeHandle(ae,()=>({focus:()=>{var e;return(e=$.current)==null?void 0:e.focus()}}),[]);const ie=S.useMemo(()=>d(ue,{children:s.map((e,v)=>{let b;return f?e.closeable===void 0?b=!x:b=e.closeable:b=!x,u&&(b=!1),d(fe,{css:Ve,visible:!0,size:o,colorScheme:"grayBlue",variant:"light",closable:b,onClose:m=>{const V=[...s];V.splice(v,1),p===void 0&&w(V),t==null||t(V),q==null||q(e,v,m)},children:(T==null?void 0:T(e))??(f?e.label:e)},f?e.label:`${v.toString()}:${p}`)})}),[s,f,u,p,o,T,x,q,t,w]),X=()=>{if(y!==""){let e;f?e=[...s,{label:s.length.toString(),value:y,closeable:!0}]:e=[...s,y],p===void 0&&w(e),B===void 0&&G(""),t==null||t(e)}};return M("div",{css:[qe(),se(D)],ref:n,...de(D),children:[F&&d("span",{css:Q(o,u??!1,l`
                margin-right: -1px;
                border-radius: ${a[0]} 0 0 ${a[3]};
              `),children:F}),M("div",{css:[ye(o,c,h??!1,u??!1,F!==void 0,_!==void 0,a)],onClick:()=>{var e;(e=$.current)==null||e.focus()},children:[L&&d("span",{css:U(u??!1,l`
                  margin-right: ${o==="small"?"8px":"12px"};
                `),children:L}),M("div",{css:be,children:[s.length>0||ne?ie:d("div",{css:ge(o),children:le}),d("input",{disabled:u,ref:$,autoFocus:I,readOnly:x,css:ce(o,re.width+12),onChange:e=>{B===void 0&&G(e.currentTarget.value),C==null||C(e.currentTarget.value)},onBlur:async e=>{ee&&(await(g==null?void 0:g(y,s))||g===void 0)&&X(),E==null||E(e),K(!1)},onFocus:e=>{R==null||R(e),K(!0)},value:y,onCompositionStart:()=>{N.current=!0},onCompositionEnd:()=>{N.current=!1},onKeyDown:async e=>{var v,b;if(!N.current&&(z==null||z(e),e.key==="Enter"&&((v=$.current)==null||v.focus(),O==null||O(e),(await(g==null?void 0:g(y,s))||g===void 0)&&X()),e.key==="Backspace"&&y==="")){(b=$.current)==null||b.focus();let m;f?m=[...s]:m=[...s];const V=m.pop();p===void 0&&w(m),V&&(q==null||q(V,m.length,e)),t==null||t(m)}}},"inputTagInput")]}),k&&!u&&s.length>0&&d(me,{className:"clear",flexShrink:"0",onClick:e=>{e.stopPropagation(),j==null||j(),p===void 0&&w([]),t==null||t([])},cursor:"pointer",fs:"12px",ml:"4px",c:i("grayBlue","06")}),W&&d("span",{css:U(u??!1,l`
                  margin-left: ${o==="small"?"8px":"12px"};
                `),children:W}),d("span",{ref:te,css:xe,children:y.replace(/\s/g," ")})]}),_&&d("span",{css:Q(o,u??!1,l`
                margin-left: -1px;
                border-radius: 0 ${a[1]} ${a[2]} 0;
              `),children:_})]})});P.displayName="InputTag";try{P.displayName="InputTag",P.__docgenInfo={description:"",displayName:"InputTag",props:{labelInValue:{defaultValue:null,description:"",name:"labelInValue",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},addBefore:{defaultValue:null,description:"",name:"addBefore",required:!1,type:{name:"ReactNode"}},addAfter:{defaultValue:null,description:"",name:"addAfter",required:!1,type:{name:"ReactNode"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},saveOnBlur:{defaultValue:null,description:"",name:"saveOnBlur",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"MutableRefObject<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[] | TagObject[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[] | TagObject[]"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[] | TagObject[]) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"() => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"(inputValue: string, event?: SyntheticEvent<Element, Event>) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent<HTMLInputElement>) => void"}},onPressEnter:{defaultValue:null,description:"",name:"onPressEnter",required:!1,type:{name:"(e: KeyboardEvent<HTMLInputElement>) => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"(value: string | TagObject, index: number, e: SyntheticEvent<Element, Event>) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"(inputValue: string, values: string[] | TagObject[]) => boolean | Promise<boolean>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"(value: string | TagObject) => ReactNode"}},inputTagRef:{defaultValue:null,description:"",name:"inputTagRef",required:!1,type:{name:"MutableRefObject<InputTagRefHandler>"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{P as I};
//# sourceMappingURL=input-tag-c8a3320c.js.map
