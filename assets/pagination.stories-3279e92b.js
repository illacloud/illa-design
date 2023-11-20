import{a,F as k,j as B}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as g}from"./index-1cdf6ce0.js";import{c as t,a as be,d as he}from"./style-3ea54b04.js";import{g as o,a as Ve}from"./color-palette-728b424e.js";import{c as qe}from"./is-47f46886.js";import{M as I}from"./more-d500bdb0.js";import{P as U}from"./previous-29e467a3.js";import{N as Z}from"./next-2684e9e6.js";import{S as xe}from"./select-d5df451d.js";import{C as Se,d as Ce}from"./config-provider-context-e3e0b003.js";import{u as ee}from"./use-merge-value-fcf53e13.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./create-icon-907f0980.js";import"./empty-aff91d97.js";import"./empty-3c50aa28.js";import"./image-c56aa3a3.js";import"./image-default-3cbff2d8.js";import"./input-7a42d9dd.js";import"./style-4ee563c0.js";import"./z-index-efffafd0.js";import"./clear-bb423cf4.js";import"./up-1088cd79.js";import"./droplist-item-b7c2fc5b.js";import"./trigger-63b86d98.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./use-force-update-497a924b.js";import"./use-isomorphic-effect-1eadbd01.js";import"./is-browser-3ff01602.js";import"./SVGVisualElement-c2d20f19.js";import"./index-4cd6a639.js";import"./loading-be690f19.js";import"./down-3d8ebd18.js";import"./checkbox-1e093970.js";import"./reduce-2a80ac7e.js";import"./success-73b35753.js";import"./input-tag-c5073aa6.js";import"./web-cc1a3eed.js";import"./tag-e795cf83.js";import"./close-b3537d01.js";import"./use-previous-5c929b6e.js";const ve=t`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`,ae=t`
  font-size: 14px;
  margin-right: 8px;
  color: ${o("grayBlue","02")};
`;function ze(s){return t`
    font-size: 14px;
    margin-left: 8px;
    margin-right: 16px;
    white-space: nowrap;
    color: ${s?o("grayBlue","07"):o("grayBlue","02")};
  `}const we=t`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`,ne=t`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function H(s,h){let e=t`
    color: ${o("grayBlue","02")};
  `;return h&&(e=t`
      color: ${o("grayBlue","07")};
    `),t`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: ${h?"not-allowed":"auto"};
    ${s};
    ${e};
  `}function P(s,h,e,S,q){let z=t`
    color: ${q?o(S??"blue","01"):o("grayBlue","02")};
  `,w=t`
    background-color: ${q?o(S??"blue","07"):"unset"};
  `;e&&(z=t`
      color: ${q?o(S??"blue","05"):o("grayBlue","07")};
    `,w=t`
      background-color: ${q?S?o(S,"07"):o("grayBlue","09"):"unset"};
    `);let $=t``;!e&&!q&&($=t`
      &:hover {
        background-color: ${o("grayBlue","09")};
      }
    `);let x="32px";switch(h){case"small":x="24px";break;case"medium":x="32px";break;case"large":x="40px";break}return t`
    font-size: 14px;
    width: ${x};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${x};
    border-radius: 4px;
    cursor: ${e?"not-allowed":"pointer"};
    ${s};
    ${z};
    ${w};
    ${$};
  `}function re(s,h){let e="32px";switch(s){case"small":e="24px";break;case"medium":e="32px";break;case"large":e="40px";break}return t`
    font-family: inherit;
    font-size: 14px;
    color: ${o("grayBlue","02")};
    width: ${e};
    box-sizing: border-box;
    text-align: center;
    background-color: ${o("grayBlue","09")};
    border-radius: 4px;
    height: ${e};
    outline: none;
    border: none;

    &:hover {
      background-color: ${o("grayBlue","08")};
    }

    &:focus-within {
      outline: none;
      background: none;
      border: 1px solid
        ${h?o(h,"01"):o("blue","01")};
      box-shadow: 0 0 8px 0 ${Ve("blue","01")};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${o("grayBlue","05")};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  `}const b=g.forwardRef((s,h)=>{var Q;const{disabled:e,hideOnSinglePage:S,pageSizeChangeResetCurrent:q,showJumper:z,showMore:w,simple:$,disableSimplePageJump:x,sizeCanChange:L,bufferSize:C=0,current:D,defaultCurrent:ue,pageSize:oe,pageSizeOptions:T,defaultPageSize:se,total:d=0,itemRender:c,size:V="medium",icons:i,onChange:N,onPageSizeChange:M,showTotal:j,inputBorderColorScheme:_,activeColorScheme:pe,...de}=s,R=5,O=g.useContext(Se),y=((Q=O==null?void 0:O.locale)==null?void 0:Q.pagination)??Ce.pagination,[r,Y]=ee(1,{defaultValue:ue,value:D}),[u,G]=ee(10,{defaultValue:se,value:oe}),[K,E]=g.useState(""),[W,X]=g.useState(""),p=Math.ceil(d/u),f=g.useCallback((n,l)=>{let m=n;return n<1?m=1:n>p&&(m=p),d===0&&(m=0),D===void 0&&Y(m),N==null||N(m,l??u),m},[D,u,N,Y,d,p]),me=g.useMemo(()=>qe(j)?a("div",{css:ae,children:j(d,[(r-1)*u,(r-1)*u+u<=d?(r-1)*u+u:(r-1)*u+d%u])}):a(k,{children:j&&a("span",{css:ae,children:y.total.replace("{0}",(d==null?void 0:d.toString())??"")})}),[r,u,y.total,j,d]),fe=g.useMemo(()=>a(k,{children:z&&B("div",{css:we,children:[a("span",{css:ze(e),children:y.go}),a("input",{css:re(V,_),value:K,type:"number",min:1,max:p,disabled:e,onChange:n=>{E(n.currentTarget.value)},onBlur:n=>{n.currentTarget.value!=""&&(f(Number(n.currentTarget.value)),E(""))},onKeyDown:n=>{n.key==="Enter"&&n.currentTarget.value!=""&&(f(Number(n.currentTarget.value)),E(""))}})]})}),[f,e,_,K,y.go,z,V,p]),F=g.useCallback(n=>{let l=!1;return r+C>=n&&r-C<=n&&(l=!0),(n===1||n==p)&&(l=!0),r<R&&n<R&&(l=!0),l},[C,r,p,R]);g.useEffect(()=>{X(r.toString())},[r]);const ce=g.useMemo(()=>{let n;if($)n=B("div",{css:ne,children:[x?a("span",{css:H(t``,e),children:W}):a("input",{css:re(V),type:"number",min:1,max:p,value:W,disabled:e,onChange:l=>{X(l.currentTarget.value)},onBlur:l=>{l.currentTarget.value!=""&&f(Number(l.currentTarget.value))},onKeyDown:l=>{l.key==="Enter"&&l.currentTarget.value!=""&&f(Number(l.currentTarget.value))}}),a("span",{css:H(t`
                  margin-left: 8px;
                  margin-right: 8px;
                `,e),children:"/"}),a("span",{css:H(t``,e),children:p})]});else{const l=[];for(let m=0;m<p;m++){const v=m+1,ye=r===v;F(v)?l.push(a("span",{css:P(t`
                    margin-right: ${m!=p-1?"8px":"unset"};
                  `,V,e,pe,ye),onClick:()=>{e||f(v)},children:m+1})):F(v-1)&&l.push(a("span",{css:P(t`
                      margin-right: ${m!=p-1?"8px":"unset"};
                    `,V,e),onClick:()=>{e||(v<r?f(r-C-1):v>r&&f(r+C+1))},children:(c==null?void 0:c(u,"more",(i==null?void 0:i.more)??a(I,{})))??a(I,{})}))}n=a(k,{children:l})}return B("div",{css:ne,children:[a("span",{css:P(t`
                margin-right: 8px;
              `,V,e||r===1||d===0),onClick:()=>{e||r===1||d===0||f(r-1)},children:(c==null?void 0:c(u,"prev",(i==null?void 0:i.prev)??a(U,{})))??a(U,{})}),n,w&&a("span",{css:P(t`
                  margin-left: 8px;
                `,V,e),onClick:()=>{e||f(r+C+1)},children:(c==null?void 0:c(u,"more",(i==null?void 0:i.more)??a(I,{})))??a(I,{})}),a("span",{css:P(t`
                margin-left: 8px;
              `,V,e||r===p||d===0),onClick:()=>{e||r===p||d===0||f(r+1)},children:(c==null?void 0:c(u,"next",(i==null?void 0:i.next)??a(Z,{})))??a(Z,{})})]})},[C,f,F,e,r,u,i==null?void 0:i.more,i==null?void 0:i.next,i==null?void 0:i.prev,c,w,$,W,x,V,d,p]),A=g.useMemo(()=>!T||T.length===0?[{label:`10/${y.page}`,value:"10"},{label:`20/${y.page}`,value:"20"},{label:`30/${y.page}`,value:"30"},{label:`40/${y.page}`,value:"40"},{label:`50/${y.page}`,value:"50"}]:T.map(n=>({label:`${n}/${y.page}`,value:n.toString()})),[y.page,T]),ge=g.useMemo(()=>a(k,{children:!!L&&a(xe,{options:A,disabled:e,ml:"8px",defaultValue:A[0].value.toString(),colorScheme:_,onChange:n=>{if(n!==null){let l=Number(n),m=q?p>0?1:0:Math.ceil(r*u/l);M==null||M(l,m),f(m,l),G(l)}}})}),[f,e,r,u,A,_,M,q,G,L,p]);return S&&d<=u?a(k,{}):B("div",{css:[ve,be(s)],ref:h,...he(de),children:[me,ce,ge,fe]})});b.displayName="Pagination";try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideOnSinglePage:{defaultValue:null,description:"",name:"hideOnSinglePage",required:!1,type:{name:"boolean"}},pageSizeChangeResetCurrent:{defaultValue:null,description:"",name:"pageSizeChangeResetCurrent",required:!1,type:{name:"boolean"}},showJumper:{defaultValue:null,description:"",name:"showJumper",required:!1,type:{name:"boolean"}},showMore:{defaultValue:null,description:"",name:"showMore",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},disableSimplePageJump:{defaultValue:null,description:"",name:"disableSimplePageJump",required:!1,type:{name:"boolean"}},sizeCanChange:{defaultValue:null,description:"",name:"sizeCanChange",required:!1,type:{name:"boolean"}},bufferSize:{defaultValue:null,description:"",name:"bufferSize",required:!1,type:{name:"number"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"number"}},defaultCurrent:{defaultValue:null,description:"",name:"defaultCurrent",required:!1,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},pageSizeOptions:{defaultValue:null,description:"",name:"pageSizeOptions",required:!1,type:{name:"string[] | number[]"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!1,type:{name:"number"}},itemRender:{defaultValue:null,description:"",name:"itemRender",required:!1,type:{name:"(page: number, type: PaginationItemType, originElement: ReactNode) => ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:"{ prev?: ReactNode; next?: ReactNode; more?: ReactNode; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(pageNumber: number, pageSize: number) => void"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number, current: number) => void"}},showTotal:{defaultValue:null,description:"",name:"showTotal",required:!1,type:{name:"boolean | ((total: number, range: number[]) => ReactNode)"}},inputBorderColorScheme:{defaultValue:null,description:"",name:"inputBorderColorScheme",required:!1,type:{name:"string"}},activeColorScheme:{defaultValue:null,description:"",name:"activeColorScheme",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const ya={title:"DATA DISPLAY/Pagination",component:b},$e=s=>B("div",{style:{display:"flex",flexDirection:"column",gap:"50px"},children:[a(b,{...s,total:100,pageSize:10}),a(b,{...s,total:100,pageSize:10,showJumper:!0}),a(b,{...s,total:100,pageSize:10,showMore:!0}),a(b,{...s,total:100,pageSize:10,simple:!0}),a(b,{...s,total:100,pageSize:10,simple:!0,sizeCanChange:!0}),a(b,{...s,total:100,pageSize:10,showTotal:!0})]}),J=$e.bind({});var le,te,ie;J.parameters={...J.parameters,docs:{...(le=J.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "50px"
  }}>
      <Pagination {...args} total={100} pageSize={10} />
      <Pagination {...args} total={100} pageSize={10} showJumper={true} />
      <Pagination {...args} total={100} pageSize={10} showMore={true} />
      <Pagination {...args} total={100} pageSize={10} simple={true} />
      <Pagination {...args} total={100} pageSize={10} simple={true} sizeCanChange />
      <Pagination {...args} total={100} pageSize={10} showTotal />
    </div>;
}`,...(ie=(te=J.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const ba=["Basic"];export{J as Basic,ba as __namedExportsOrder,ya as default};
//# sourceMappingURL=pagination.stories-3279e92b.js.map
