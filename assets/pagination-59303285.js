import{j as n,F as $,a as j}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as g}from"./index-c4905b50.js";import{c as t,a as pe,d as me}from"./style-eba6b849.js";import{g as s,a as fe}from"./color-palette-cd133b87.js";import{c as ce}from"./is-6e11be7b.js";import{M}from"./more-9a2a378b.js";import{P as A}from"./previous-19f6b2ba.js";import{N as Q}from"./next-04b59426.js";import{S as ge}from"./select-d03c9c38.js";import{C as ye,d as be}from"./config-provider-context-8630f055.js";import{u as U}from"./use-merge-value-460a468d.js";const he=t`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`,Z=t`
  font-size: 14px;
  margin-right: 8px;
  color: ${s("grayBlue","02")};
`;function Ve(f){return t`
    font-size: 14px;
    margin-left: 8px;
    margin-right: 16px;
    white-space: nowrap;
    color: ${f?s("grayBlue","07"):s("grayBlue","02")};
  `}const qe=t`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`,ee=t`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;function F(f,y){let e=t`
    color: ${s("grayBlue","02")};
  `;return y&&(e=t`
      color: ${s("grayBlue","07")};
    `),t`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: ${y?"not-allowed":"auto"};
    ${f};
    ${e};
  `}function k(f,y,e,x,V){let S=t`
    color: ${V?s(x??"blue","01"):s("grayBlue","02")};
  `,w=t`
    background-color: ${V?s(x??"blue","07"):"unset"};
  `;e&&(S=t`
      color: ${V?s(x??"blue","05"):s("grayBlue","07")};
    `,w=t`
      background-color: ${V?x?s(x,"07"):s("grayBlue","09"):"unset"};
    `);let z=t``;!e&&!V&&(z=t`
      &:hover {
        background-color: ${s("grayBlue","09")};
      }
    `);let q="32px";switch(y){case"small":q="24px";break;case"medium":q="32px";break;case"large":q="40px";break}return t`
    font-size: 14px;
    width: ${q};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${q};
    border-radius: 4px;
    cursor: ${e?"not-allowed":"pointer"};
    ${f};
    ${S};
    ${w};
    ${z};
  `}function ae(f,y){let e="32px";switch(f){case"small":e="24px";break;case"medium":e="32px";break;case"large":e="40px";break}return t`
    font-family: inherit;
    font-size: 14px;
    color: ${s("grayBlue","02")};
    width: ${e};
    box-sizing: border-box;
    text-align: center;
    background-color: ${s("grayBlue","09")};
    border-radius: 4px;
    height: ${e};
    outline: none;
    border: none;

    &:hover {
      background-color: ${s("grayBlue","08")};
    }

    &:focus-within {
      outline: none;
      background: none;
      border: 1px solid
        ${y?s(y,"01"):s("blue","01")};
      box-shadow: 0 0 8px 0 ${fe("blue","01")};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${s("grayBlue","05")};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  `}const H=g.forwardRef((f,y)=>{var Y;const{disabled:e,hideOnSinglePage:x,pageSizeChangeResetCurrent:V,showJumper:S,showMore:w,simple:z,disableSimplePageJump:q,sizeCanChange:L,bufferSize:C=0,current:I,defaultCurrent:ne,pageSize:_,defaultPageSize:le,total:d=0,itemRender:m,size:b="medium",icons:i,onChange:B,onPageSizeChange:P,showTotal:N,inputBorderColorScheme:T,activeColorScheme:re,...te}=f,R=5,J=g.useContext(ye),c=((Y=J==null?void 0:J.locale)==null?void 0:Y.pagination)??be.pagination,[l,O]=U(1,{defaultValue:ne,value:I}),[u,G]=U(10,{defaultValue:le,value:_}),[K,E]=g.useState(""),[W,X]=g.useState(""),o=Math.ceil(d/u),p=g.useCallback(r=>{let a=r;return r<1?a=1:r>o&&(a=o),d===0&&(a=0),I===void 0&&O(a),B==null||B(a,u),a},[I,u,B,O,d,o]),ie=g.useMemo(()=>ce(N)?n("div",{css:Z,children:N(d,[(l-1)*u,(l-1)*u+u<=d?(l-1)*u+u:(l-1)*u+d%u])}):n($,{children:N&&n("span",{css:Z,children:c.total.replace("{0}",(d==null?void 0:d.toString())??"")})}),[l,u,c.total,N,d]),ue=g.useMemo(()=>n($,{children:S&&j("div",{css:qe,children:[n("span",{css:Ve(e),children:c.go}),n("input",{css:ae(b,T),value:K,type:"number",min:1,max:o,disabled:e,onChange:r=>{E(r.currentTarget.value)},onBlur:r=>{r.currentTarget.value!=""&&(p(Number(r.currentTarget.value)),E(""))},onKeyDown:r=>{r.key==="Enter"&&r.currentTarget.value!=""&&(p(Number(r.currentTarget.value)),E(""))}})]})}),[p,e,T,K,c.go,S,b,o]),D=g.useCallback(r=>{let a=!1;return l+C>=r&&l-C<=r&&(a=!0),(r===1||r==o)&&(a=!0),l<R&&r<R&&(a=!0),a},[C,l,o,R]);g.useEffect(()=>{X(l.toString())},[l]);const se=g.useMemo(()=>{let r;if(z)r=j("div",{css:ee,children:[q?n("span",{css:F(t``,e),children:W}):n("input",{css:ae(b),type:"number",min:1,max:o,value:W,disabled:e,onChange:a=>{X(a.currentTarget.value)},onBlur:a=>{a.currentTarget.value!=""&&p(Number(a.currentTarget.value))},onKeyDown:a=>{a.key==="Enter"&&a.currentTarget.value!=""&&p(Number(a.currentTarget.value))}}),n("span",{css:F(t`
                  margin-left: 8px;
                  margin-right: 8px;
                `,e),children:"/"}),n("span",{css:F(t``,e),children:o})]});else{const a=[];for(let h=0;h<o;h++){const v=h+1,de=l===v;D(v)?a.push(n("span",{css:k(t`
                    margin-right: ${h!=o-1?"8px":"unset"};
                  `,b,e,re,de),onClick:()=>{e||p(v)},children:h+1})):D(v-1)&&a.push(n("span",{css:k(t`
                      margin-right: ${h!=o-1?"8px":"unset"};
                    `,b,e),onClick:()=>{e||(v<l?p(l-C-1):v>l&&p(l+C+1))},children:(m==null?void 0:m(u,"more",(i==null?void 0:i.more)??n(M,{})))??n(M,{})}))}r=n($,{children:a})}return j("div",{css:ee,children:[n("span",{css:k(t`
                margin-right: 8px;
              `,b,e||l===1||d===0),onClick:()=>{e||l===1||d===0||p(l-1)},children:(m==null?void 0:m(u,"prev",(i==null?void 0:i.prev)??n(A,{})))??n(A,{})}),r,w&&n("span",{css:k(t`
                  margin-left: 8px;
                `,b,e),onClick:()=>{e||p(l+C+1)},children:(m==null?void 0:m(u,"more",(i==null?void 0:i.more)??n(M,{})))??n(M,{})}),n("span",{css:k(t`
                margin-left: 8px;
              `,b,e||l===o||d===0),onClick:()=>{e||l===o||d===0||p(l+1)},children:(m==null?void 0:m(u,"next",(i==null?void 0:i.next)??n(Q,{})))??n(Q,{})})]})},[C,p,D,e,l,u,i==null?void 0:i.more,i==null?void 0:i.next,i==null?void 0:i.prev,m,w,z,W,q,b,d,o]),oe=g.useMemo(()=>n($,{children:L&&n(ge,{options:[{label:`10/${c.page}`,value:"10"},{label:`20/${c.page}`,value:"20"},{label:`30/${c.page}`,value:"30"},{label:`40/${c.page}`,value:"40"},{label:`50/${c.page}`,value:"50"}],disabled:e,ml:"8px",defaultValue:{label:u+"/"+c.page,value:u.toString()},colorScheme:T,onChange:r=>{if(r!==null){let a=Number(r),h=V?o>0?1:0:Math.ceil(l*u/a);P==null||P(a,h),p(h),_===void 0&&G(a)}}})}),[p,e,l,u,T,c.page,P,_,V,G,L,o]);return x&&d<=u?n($,{}):j("div",{css:[he,pe(f)],ref:y,...me(te),children:[ie,se,oe,ue]})});H.displayName="Pagination";try{H.displayName="Pagination",H.__docgenInfo={description:"",displayName:"Pagination",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideOnSinglePage:{defaultValue:null,description:"",name:"hideOnSinglePage",required:!1,type:{name:"boolean"}},pageSizeChangeResetCurrent:{defaultValue:null,description:"",name:"pageSizeChangeResetCurrent",required:!1,type:{name:"boolean"}},showJumper:{defaultValue:null,description:"",name:"showJumper",required:!1,type:{name:"boolean"}},showMore:{defaultValue:null,description:"",name:"showMore",required:!1,type:{name:"boolean"}},simple:{defaultValue:null,description:"",name:"simple",required:!1,type:{name:"boolean"}},disableSimplePageJump:{defaultValue:null,description:"",name:"disableSimplePageJump",required:!1,type:{name:"boolean"}},sizeCanChange:{defaultValue:null,description:"",name:"sizeCanChange",required:!1,type:{name:"boolean"}},bufferSize:{defaultValue:null,description:"",name:"bufferSize",required:!1,type:{name:"number"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"number"}},defaultCurrent:{defaultValue:null,description:"",name:"defaultCurrent",required:!1,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!1,type:{name:"number"}},defaultPageSize:{defaultValue:null,description:"",name:"defaultPageSize",required:!1,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!1,type:{name:"number"}},itemRender:{defaultValue:null,description:"",name:"itemRender",required:!1,type:{name:"((page: number, type: PaginationItemType, originElement: ReactNode) => ReactNode)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:"{ prev?: ReactNode; next?: ReactNode; more?: ReactNode; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((pageNumber: number, pageSize: number) => void)"}},onPageSizeChange:{defaultValue:null,description:"",name:"onPageSizeChange",required:!1,type:{name:"((size: number, current: number) => void)"}},showTotal:{defaultValue:null,description:"",name:"showTotal",required:!1,type:{name:"boolean | ((total: number, range: number[]) => ReactNode)"}},inputBorderColorScheme:{defaultValue:null,description:"",name:"inputBorderColorScheme",required:!1,type:{name:"string"}},activeColorScheme:{defaultValue:null,description:"",name:"activeColorScheme",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"width",name:"w",required:!1,type:{name:"string"}},maxW:{defaultValue:null,description:"max-width",name:"maxW",required:!1,type:{name:"string"}},minW:{defaultValue:null,description:"min-width",name:"minW",required:!1,type:{name:"string"}},h:{defaultValue:null,description:"height",name:"h",required:!1,type:{name:"string"}},maxH:{defaultValue:null,description:"max-height",name:"maxH",required:!1,type:{name:"string"}},minH:{defaultValue:null,description:"min-height",name:"minH",required:!1,type:{name:"string"}},pd:{defaultValue:null,description:"padding",name:"pd",required:!1,type:{name:"string"}},pt:{defaultValue:null,description:"padding-top",name:"pt",required:!1,type:{name:"string"}},pb:{defaultValue:null,description:"padding-bottom",name:"pb",required:!1,type:{name:"string"}},pl:{defaultValue:null,description:"padding-left",name:"pl",required:!1,type:{name:"string"}},pr:{defaultValue:null,description:"padding-right",name:"pr",required:!1,type:{name:"string"}},mg:{defaultValue:null,description:"margin",name:"mg",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"margin-left",name:"ml",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"margin-right",name:"mr",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-top",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"margin-bottom",name:"mb",required:!1,type:{name:"string"}},bd:{defaultValue:null,description:"border",name:"bd",required:!1,type:{name:"string"}},bdRadius:{defaultValue:null,description:"border-radius",name:"bdRadius",required:!1,type:{name:"string"}},bt:{defaultValue:null,description:"border-top",name:"bt",required:!1,type:{name:"string"}},bl:{defaultValue:null,description:"border-left",name:"bl",required:!1,type:{name:"string"}},bb:{defaultValue:null,description:"border-bottom",name:"bb",required:!1,type:{name:"string"}},br:{defaultValue:null,description:"border-right",name:"br",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"background",name:"bg",required:!1,type:{name:"string"}},bdColor:{defaultValue:null,description:"border-color",name:"bdColor",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"background-color",name:"bgColor",required:!1,type:{name:"string"}},c:{defaultValue:null,description:"color",name:"c",required:!1,type:{name:"string"}},opac:{defaultValue:null,description:"opacity",name:"opac",required:!1,type:{name:"number"}},pos:{defaultValue:null,description:"",name:"pos",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"fixed"'},{value:'"static"'}]}},posT:{defaultValue:null,description:"",name:"posT",required:!1,type:{name:"string"}},posL:{defaultValue:null,description:"",name:"posL",required:!1,type:{name:"string"}},posB:{defaultValue:null,description:"",name:"posB",required:!1,type:{name:"string"}},posR:{defaultValue:null,description:"",name:"posR",required:!1,type:{name:"string"}},z:{defaultValue:null,description:"",name:"z",required:!1,type:{name:"string | number"}},ov:{defaultValue:null,description:"over-flow,over-flow-x,over-flow-y",name:"ov",required:!1,type:{name:"string"}},ovX:{defaultValue:null,description:"",name:"ovX",required:!1,type:{name:"string"}},ovY:{defaultValue:null,description:"",name:"ovY",required:!1,type:{name:"string"}},v:{defaultValue:null,description:"visibility",name:"v",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},o:{defaultValue:null,description:"order",name:"o",required:!1,type:{name:"string"}},_css:{defaultValue:null,description:"",name:"_css",required:!1,type:{name:"SerializedStyles"}},fs:{defaultValue:null,description:"font-size",name:"fs",required:!1,type:{name:"string"}},ff:{defaultValue:null,description:"font-family",name:"ff",required:!1,type:{name:"string"}},fw:{defaultValue:null,description:"font-weight",name:"fw",required:!1,type:{name:"string"}},cur:{defaultValue:null,description:"",name:"cur",required:!1,type:{name:"string"}}}}}catch{}export{H as P};
//# sourceMappingURL=pagination-59303285.js.map
