import{a,F as k,j as B}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as g}from"./index-1cdf6ce0.js";import{c as t,a as ge,d as ye}from"./style-3ea54b04.js";import{g as o,a as be}from"./color-palette-728b424e.js";import{c as he}from"./is-47f46886.js";import{M as _}from"./more-d500bdb0.js";import{P as Q}from"./previous-80a0198e.js";import{N as U}from"./next-2684e9e6.js";import{S as Ve}from"./select-2a1f440c.js";import{C as qe,d as xe}from"./config-provider-context-e3e0b003.js";import{u as Z}from"./use-merge-value-fcf53e13.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./index-45a08ae3.js";import"./create-icon-907f0980.js";import"./empty-aff91d97.js";import"./empty-3c50aa28.js";import"./image-c56aa3a3.js";import"./image-default-3cbff2d8.js";import"./input-7a42d9dd.js";import"./style-4ee563c0.js";import"./z-index-efffafd0.js";import"./clear-bb423cf4.js";import"./up-1088cd79.js";import"./droplist-item-4eb8b67a.js";import"./trigger-e5294b4e.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./use-force-update-7edf8987.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./index-c9c44efd.js";import"./loading-be690f19.js";import"./down-3d8ebd18.js";import"./checkbox-93d4b1ac.js";import"./reduce-2a80ac7e.js";import"./success-eaf0bf13.js";import"./input-tag-c8a3320c.js";import"./web-cc1a3eed.js";import"./tag-47108fb9.js";import"./close-b3537d01.js";import"./use-previous-5c929b6e.js";const Se=t`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`,ee=t`
  font-size: 14px;
  margin-right: 8px;
  color: ${o("grayBlue","02")};
`;function Ce(s){return t`
    font-size: 14px;
    margin-left: 8px;
    margin-right: 16px;
    white-space: nowrap;
    color: ${s?o("grayBlue","07"):o("grayBlue","02")};
  `}const ve=t`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`,ae=t`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function H(s,b){let e=t`
    color: ${o("grayBlue","02")};
  `;return b&&(e=t`
      color: ${o("grayBlue","07")};
    `),t`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: ${b?"not-allowed":"auto"};
    ${s};
    ${e};
  `}function P(s,b,e,S,q){let w=t`
    color: ${q?o(S??"blue","01"):o("grayBlue","02")};
  `,z=t`
    background-color: ${q?o(S??"blue","07"):"unset"};
  `;e&&(w=t`
      color: ${q?o(S??"blue","05"):o("grayBlue","07")};
    `,z=t`
      background-color: ${q?S?o(S,"07"):o("grayBlue","09"):"unset"};
    `);let $=t``;!e&&!q&&($=t`
      &:hover {
        background-color: ${o("grayBlue","09")};
      }
    `);let x="32px";switch(b){case"small":x="24px";break;case"medium":x="32px";break;case"large":x="40px";break}return t`
    font-size: 14px;
    width: ${x};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${x};
    border-radius: 4px;
    cursor: ${e?"not-allowed":"pointer"};
    ${s};
    ${w};
    ${z};
    ${$};
  `}function ne(s,b){let e="32px";switch(s){case"small":e="24px";break;case"medium":e="32px";break;case"large":e="40px";break}return t`
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
        ${b?o(b,"01"):o("blue","01")};
      box-shadow: 0 0 8px 0 ${be("blue","01")};
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
  `}const y=g.forwardRef((s,b)=>{var X;const{disabled:e,hideOnSinglePage:S,pageSizeChangeResetCurrent:q,showJumper:w,showMore:z,simple:$,disableSimplePageJump:x,sizeCanChange:L,bufferSize:C=0,current:J,defaultCurrent:ie,pageSize:D,defaultPageSize:ue,total:d=0,itemRender:f,size:h="medium",icons:i,onChange:T,onPageSizeChange:N,showTotal:j,inputBorderColorScheme:M,activeColorScheme:oe,...se}=s,R=5,E=g.useContext(qe),c=((X=E==null?void 0:E.locale)==null?void 0:X.pagination)??xe.pagination,[r,O]=Z(1,{defaultValue:ie,value:J}),[u,Y]=Z(10,{defaultValue:ue,value:D}),[G,W]=g.useState(""),[F,K]=g.useState(""),p=Math.ceil(d/u),m=g.useCallback(l=>{let n=l;return l<1?n=1:l>p&&(n=p),d===0&&(n=0),J===void 0&&O(n),T==null||T(n,u),n},[J,u,T,O,d,p]),pe=g.useMemo(()=>he(j)?a("div",{css:ee,children:j(d,[(r-1)*u,(r-1)*u+u<=d?(r-1)*u+u:(r-1)*u+d%u])}):a(k,{children:j&&a("span",{css:ee,children:c.total.replace("{0}",(d==null?void 0:d.toString())??"")})}),[r,u,c.total,j,d]),de=g.useMemo(()=>a(k,{children:w&&B("div",{css:ve,children:[a("span",{css:Ce(e),children:c.go}),a("input",{css:ne(h,M),value:G,type:"number",min:1,max:p,disabled:e,onChange:l=>{W(l.currentTarget.value)},onBlur:l=>{l.currentTarget.value!=""&&(m(Number(l.currentTarget.value)),W(""))},onKeyDown:l=>{l.key==="Enter"&&l.currentTarget.value!=""&&(m(Number(l.currentTarget.value)),W(""))}})]})}),[m,e,M,G,c.go,w,h,p]),A=g.useCallback(l=>{let n=!1;return r+C>=l&&r-C<=l&&(n=!0),(l===1||l==p)&&(n=!0),r<R&&l<R&&(n=!0),n},[C,r,p,R]);g.useEffect(()=>{K(r.toString())},[r]);const me=g.useMemo(()=>{let l;if($)l=B("div",{css:ae,children:[x?a("span",{css:H(t``,e),children:F}):a("input",{css:ne(h),type:"number",min:1,max:p,value:F,disabled:e,onChange:n=>{K(n.currentTarget.value)},onBlur:n=>{n.currentTarget.value!=""&&m(Number(n.currentTarget.value))},onKeyDown:n=>{n.key==="Enter"&&n.currentTarget.value!=""&&m(Number(n.currentTarget.value))}}),a("span",{css:H(t`
                  margin-left: 8px;
                  margin-right: 8px;
                `,e),children:"/"}),a("span",{css:H(t``,e),children:p})]});else{const n=[];for(let V=0;V<p;V++){const v=V+1,ce=r===v;A(v)?n.push(a("span",{css:P(t`
                    margin-right: ${V!=p-1?"8px":"unset"};
                  `,h,e,oe,ce),onClick:()=>{e||m(v)},children:V+1})):A(v-1)&&n.push(a("span",{css:P(t`
                      margin-right: ${V!=p-1?"8px":"unset"};
                    `,h,e),onClick:()=>{e||(v<r?m(r-C-1):v>r&&m(r+C+1))},children:(f==null?void 0:f(u,"more",(i==null?void 0:i.more)??a(_,{})))??a(_,{})}))}l=a(k,{children:n})}return B("div",{css:ae,children:[a("span",{css:P(t`
                margin-right: 8px;
              `,h,e||r===1||d===0),onClick:()=>{e||r===1||d===0||m(r-1)},children:(f==null?void 0:f(u,"prev",(i==null?void 0:i.prev)??a(Q,{})))??a(Q,{})}),l,z&&a("span",{css:P(t`
                  margin-left: 8px;
                `,h,e),onClick:()=>{e||m(r+C+1)},children:(f==null?void 0:f(u,"more",(i==null?void 0:i.more)??a(_,{})))??a(_,{})}),a("span",{css:P(t`
                margin-left: 8px;
              `,h,e||r===p||d===0),onClick:()=>{e||r===p||d===0||m(r+1)},children:(f==null?void 0:f(u,"next",(i==null?void 0:i.next)??a(U,{})))??a(U,{})})]})},[C,m,A,e,r,u,i==null?void 0:i.more,i==null?void 0:i.next,i==null?void 0:i.prev,f,z,$,F,x,h,d,p]),fe=g.useMemo(()=>a(k,{children:L&&a(Ve,{options:[{label:`10/${c.page}`,value:"10"},{label:`20/${c.page}`,value:"20"},{label:`30/${c.page}`,value:"30"},{label:`40/${c.page}`,value:"40"},{label:`50/${c.page}`,value:"50"}],disabled:e,ml:"8px",defaultValue:{label:u+"/"+c.page,value:u.toString()},colorScheme:M,onChange:l=>{if(l!==null){let n=Number(l),V=q?p>0?1:0:Math.ceil(r*u/n);N==null||N(n,V),m(V),D===void 0&&Y(n)}}})}),[m,e,r,u,M,c.page,N,D,q,Y,L,p]);return S&&d<=u?a(k,{}):B("div",{css:[Se,ge(s)],ref:b,...ye(se),children:[pe,me,fe,de]})});y.displayName="Pagination";try{y.displayName="Pagination",y.__docgenInfo={description:"",displayName:"Pagination",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideOnSinglePage:{defaultValue:null,description:"",name:"hideOnSinglePage",required:!1,type:{name:"boolean"}},pageSizeChangeResetCurrent:{defaultValue:null,description:"",name:"pageSizeChangeResetCurrent",required:!1,type:{name:"boolean"}},showJumper:{defaultValue:null,description:"",name:"showJumper",required:!1,type:{name:"boolean"}},showMore:{defaultValue:null,description:"",name:"showMore",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},disableSimplePageJump:{defaultValue:null,description:"",name:"disableSimplePageJump",required:!1,type:{name:"boolean"}},sizeCanChange:{defaultValue:null,description:"",name:"sizeCanChange",required:!1,type:{name:"boolean"}},bufferSize:{defaultValue:null,description:"",name:"bufferSize",required:!1,type:{name:"number"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"number"}},defaultCurrent:{defaultValue:null,description:"",name:"defaultCurrent",required:!1,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!1,type:{name:"number"}},itemRender:{defaultValue:null,description:"",name:"itemRender",required:!1,type:{name:"(page: number, type: PaginationItemType, originElement: ReactNode) => ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:"{ prev?: ReactNode; next?: ReactNode; more?: ReactNode; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(pageNumber: number, pageSize: number) => void"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"(size: number, current: number) => void"}},showTotal:{defaultValue:null,description:"",name:"showTotal",required:!1,type:{name:"boolean | ((total: number, range: number[]) => ReactNode)"}},inputBorderColorScheme:{defaultValue:null,description:"",name:"inputBorderColorScheme",required:!1,type:{name:"string"}},activeColorScheme:{defaultValue:null,description:"",name:"activeColorScheme",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},disp:{defaultValue:null,description:"",name:"disp",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}},l:{defaultValue:null,description:"",name:"l",required:!1,type:{name:"string | number"}},t:{defaultValue:null,description:"",name:"t",required:!1,type:{name:"string | number"}},r:{defaultValue:null,description:"",name:"r",required:!1,type:{name:"string | number"}},b:{defaultValue:null,description:"",name:"b",required:!1,type:{name:"string | number"}}}}}catch{}const fa={title:"DATA DISPLAY/Pagination",component:y},we=s=>B("div",{style:{display:"flex",flexDirection:"column",gap:"50px"},children:[a(y,{...s,total:100,pageSize:10}),a(y,{...s,total:100,pageSize:10,showJumper:!0}),a(y,{...s,total:100,pageSize:10,showMore:!0}),a(y,{...s,total:100,pageSize:10,simple:!0}),a(y,{...s,total:100,pageSize:10,simple:!0,sizeCanChange:!0}),a(y,{...s,total:100,pageSize:10,showTotal:!0})]}),I=we.bind({});var re,le,te;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
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
}`,...(te=(le=I.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};const ca=["Basic"];export{I as Basic,ca as __namedExportsOrder,fa as default};
//# sourceMappingURL=pagination.stories-b1c59875.js.map
