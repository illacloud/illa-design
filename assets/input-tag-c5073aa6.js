import{a as m,F as de,j as L}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as S}from"./index-1cdf6ce0.js";import{c as l,a as oe,d as pe}from"./style-3ea54b04.js";import{g as u,a as fe}from"./color-palette-728b424e.js";import{z as U}from"./z-index-efffafd0.js";import{u as me}from"./web-cc1a3eed.js";import{T as ce}from"./tag-e795cf83.js";import{u as Z}from"./use-merge-value-fcf53e13.js";import{C as ge}from"./clear-bb423cf4.js";function ye(i,n){return l`
    width: ${n}px;
    font-size: inherit;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    font-family: unset;
    line-height: 22px;

    ::placeholder {
      color: ${u("grayBlue","04")};
    }
  `}function be(i){return l`
    color: ${u("grayBlue","04")};
    width: unset;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: ${i==="large"?"32px":"22px"};
  `}function ee(i,n,s){return l`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${u("gray","02")};
    background-color: ${n?u("grayBlue","09"):"unset"};
    border: 1px solid ${u("grayBlue","08")};
    ${ae(i)};
    ${s};
  `}function ae(i){let n=l``;switch(i){case"small":n=l`
        padding: 0 12px;
        min-height: 24px;
      `;break;case"medium":n=l`
        padding: 3px 16px;
        min-height: 32px;
      `;break;case"large":n=l`
        padding: 7px 16px;
        min-height: 40px;
      `;break}return n}function Ve(i,n,s,$,T,k,h){let d=l``;return $||(d=l`
      &:hover {
        border-color: ${s?u("red","02"):u(n,"06")};
        z-index: ${U.inputFocus};

        .clear {
          visibility: visible;
        }
      }

      &:focus-within {
        border-color: ${u(s?"red":n,"03")};
        box-shadow: 0 0 8px 0
          ${fe(s?"red":n,"01")};
        z-index: ${U.inputFocus};
      }
    `),l`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    cursor: ${$?"not-allowed":"text"};
    border-radius: ${T?"0":h[0]}
      ${k?"0":h[1]} ${k?"0":h[2]}
      ${T?"0":h[3]};
    border: 1px solid
      ${s?u("red","03"):u("grayBlue","08")};
    flex-grow: 1;
    flex-shrink: 1;
    background-color: ${$?u("grayBlue","09"):"unset"};
    ${ae(i)};
    ${d};
  `}const xe=l`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  position: relative;
  flex-shrink: 1;
  overflow: hidden;
  align-items: center;
  gap: 8px;
`,qe=l`
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;function le(i,n){return l`
    align-self: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${i?u("gray","05"):u("gray","02")};
    min-height: 22px;
    ${n};
  `}const he=l`
  position: absolute;
  visibility: hidden;
`;function ve(){return l`
    display: flex;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    font-size: 14px;
  `}const W=S.forwardRef((i,n)=>{const{onAdd:s,spaceInput:$,colorScheme:T="blue",autoFocus:k,allowClear:h,disabled:d,error:ne,readOnly:B,saveOnBlur:te,placeholder:D,inputValue:R,size:c="medium",prefix:K,suffix:A,defaultValue:G,value:g,onBlur:C,onFocus:O,onChange:t,validate:V,onClear:z,transformValue:E,onInputChange:v,onKeyDown:F,onPressEnter:H,onRemove:q,renderItem:j,addBefore:_,bdRadius:N,inputTagRef:re,addAfter:M,labelInValue:y,...X}=i;let a=(N==null?void 0:N.split(" "))??["8px","8px","8px","8px"];a.length==2?a=[a[0],a[1],a[0],a[1]]:a.length==3&&(a=[a[0],a[1],a[2],a[1]]);const[we,Y]=S.useState(!1),[p,w]=Z([],{defaultValue:G,value:g}),[f,J]=Z("",{defaultValue:"",value:R}),[ie,ue]=me(),I=S.useRef(null),P=S.useRef(!1);S.useImperativeHandle(re,()=>({focus:()=>{var e;return(e=I.current)==null?void 0:e.focus()}}),[]);const se=S.useMemo(()=>m(de,{children:p.map((e,r)=>{let o;return y?e.closeable===void 0?o=!B:o=e.closeable:o=!B,d&&(o=!1),m(ce,{css:qe,visible:!0,size:c,colorScheme:"grayBlue",variant:"light",closable:o,onClose:b=>{const x=[...p];x.splice(r,1),g===void 0&&w(x),t==null||t(x),q==null||q(e,r,b)},children:(j==null?void 0:j(e))??(y?e.label:e)},y?`${r.toString()}:${e.label}`:`${r.toString()}:${g}`)})}),[p,y,d,g,c,j,B,q,t,w]),Q=e=>{if(f!==""){let r;if(y){const o={label:p.length.toString(),value:f,closeable:!0};r=[...p,E?E(o):o],s==null||s(o,r.length-1,e)}else r=[...p,E?E(f):f],s==null||s(f,r.length-1,e);g===void 0&&w(r),R===void 0&&J(""),t==null||t(r),v==null||v("",e)}};return L("div",{css:[ve(),oe(X)],ref:n,...pe(X),children:[_&&m("span",{css:ee(c,d??!1,l`
                margin-right: -1px;
                border-radius: ${a[0]} 0 0 ${a[3]};
              `),children:_}),L("div",{css:[Ve(c,T,ne??!1,d??!1,_!==void 0,M!==void 0,a)],onClick:()=>{var e;(e=I.current)==null||e.focus()},children:[K&&m("span",{css:le(d??!1,l`
                  margin-right: ${c==="small"?"8px":"12px"};
                `),children:K}),L("div",{css:xe,children:[se,m("input",{disabled:d,ref:I,autoFocus:k,readOnly:B,css:ye(c,ue.width+1),onChange:e=>{R===void 0&&J(e.currentTarget.value),v==null||v(e.currentTarget.value)},onBlur:async e=>{te&&(await(V==null?void 0:V(f,p))||V===void 0)&&Q(e),C==null||C(e),Y(!1)},onFocus:e=>{O==null||O(e),Y(!0)},value:f,onCompositionStart:()=>{P.current=!0},onCompositionEnd:()=>{P.current=!1},onKeyDown:async e=>{var r,o;if(!P.current&&(F==null||F(e),(e.key==="Enter"||e.key===" "&&$)&&((r=I.current)==null||r.focus(),H==null||H(e),(await(V==null?void 0:V(f,p))||V===void 0)&&Q(e)),e.key==="Backspace"&&f==="")){(o=I.current)==null||o.focus();let b;y?b=[...p]:b=[...p];const x=b.pop();g===void 0&&w(b),x&&(q==null||q(x,b.length,e)),t==null||t(b)}}},"inputTagInput"),D&&f.length===0&&m("div",{css:be(c),children:D})]}),h&&!d&&p.length>0&&m(ge,{className:"clear",flexShrink:"0",onClick:e=>{e.stopPropagation(),z==null||z(),g===void 0&&w([]),t==null||t([])},cursor:"pointer",fs:"12px",ml:"4px",c:u("grayBlue","06")}),A&&m("span",{css:le(d??!1,l`
                  margin-left: ${c==="small"?"8px":"12px"};
                `),children:A}),m("span",{ref:ie,css:he,children:f.replace(/\s/g," ")})]}),M&&m("span",{css:ee(c,d??!1,l`
                margin-left: -1px;
                border-radius: 0 ${a[1]} ${a[2]} 0;
              `),children:M})]})});W.displayName="InputTag";try{W.displayName="InputTag",W.__docgenInfo={description:"",displayName:"InputTag",props:{labelInValue:{defaultValue:null,description:"",name:"labelInValue",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},addBefore:{defaultValue:null,description:"",name:"addBefore",required:!1,type:{name:"ReactNode"}},addAfter:{defaultValue:null,description:"",name:"addAfter",required:!1,type:{name:"ReactNode"}},transformValue:{defaultValue:null,description:"",name:"transformValue",required:!1,type:{name:"(value: string | TagObject) => string | TagObject"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},saveOnBlur:{defaultValue:null,description:"",name:"saveOnBlur",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},spaceInput:{defaultValue:null,description:"",name:"spaceInput",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"MutableRefObject<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[] | TagObject[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[] | TagObject[]"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string[] | TagObject[]) => void"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"() => void"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: SyntheticEvent<Element, Event>) => void"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"(inputValue: string, event?: SyntheticEvent<Element, Event>) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent<HTMLInputElement>) => void"}},onPressEnter:{defaultValue:null,description:"",name:"onPressEnter",required:!1,type:{name:"(e: KeyboardEvent<HTMLInputElement>) => void"}},onAdd:{defaultValue:null,description:"",name:"onAdd",required:!1,type:{name:"(value: string | TagObject, index: number, e: SyntheticEvent<Element, Event>) => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"(value: string | TagObject, index: number, e: SyntheticEvent<Element, Event>) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"(inputValue: string, values: string[] | TagObject[]) => boolean | Promise<boolean>"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"(value: string | TagObject) => ReactNode"}},inputTagRef:{defaultValue:null,description:"",name:"inputTagRef",required:!1,type:{name:"MutableRefObject<InputTagRefHandler>"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}export{W as I};
//# sourceMappingURL=input-tag-c5073aa6.js.map
