import{c as e}from"./style-4011d251.js";import{g as r}from"./color-palette-2f9095e4.js";const p=t=>{switch(t){case"small":return e`
        font-size: 12px;
        padding: 1px 12px;
      `;case"large":return e`
        font-size: 14px;
        padding: 8px 16px;
      `;case"medium":default:return e`
        font-size: 14px;
        padding: 4px 16px;
      `}},s=e`
  background-color: ${r("red","08")};
  border: 1px solid ${r("red","03")};

  &:hover {
    border-color: ${r("red","03")};
    background-color: ${r("red","07")};
  }
`,n=e`
  color: ${r("grayBlue","05")};
  background-color: ${r("grayBlue","09")};
  border: 1px solid ${r("grayBlue","08")};
  cursor: not-allowed;
  input[disabled] {
    cursor: not-allowed;
    color: ${r("grayBlue","05")};
    -webkit-text-fill-color: ${r("grayBlue","05")};
    &::placeholder {
      color: ${r("grayBlue","05")};
    }
  }
`,c=e`
  ${n};
  :hover {
    ${n};
  }
`,u=t=>e`
    background-color: transparent;
    border: 1px solid ${r("grayBlue","08")};
    :hover {
      border-color: ${r(t,"06")};
      background-color: transparent;
    }
  `,d=e`
  width: 100%;
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.2s ease-in-out;
`,g=t=>{const o=t&&e`
      :hover .suffix-icon {
        display: none;
      }
    `;return e`
    :hover .clear-icon {
      display: inline-block;
    }
    ${o}
  `},b=(t,o,l,a,i)=>e`
    ${d};
    ${p(t)};
    ${u(o)};
    ${l&&c};
    ${!l&&g(i)}
    ${a&&s};
  `,x=t=>{switch(t){case"small":return e`
        padding-right: 8px;
        font-size: 12px;
      `;case"large":return e`
        padding-right: 12px;
        font-size: 14px;
      `;case"medium":default:return e`
        padding-right: 12px;
        font-size: 14px;
      `}},m=t=>e`
    color: ${r("grayBlue","02")};
    ${x(t)};
  `,y=e`
  display: inline-flex;
  flex: 1;
`,h=t=>{switch(t){case"small":return e`
        height: 20px;
        line-height: 20px;
      `;case"large":return e`
        height: 22px;
        line-height: 22px;
      `;case"medium":default:return e`
        height: 22px;
        line-height: 22px;
      `}},B=t=>e`
    text-align: left;
    padding: 0;
    border: none;
    width: 100%;
    color: ${r("grayBlue","02")};
    background-color: transparent;
    outline: none;
    ${h(t)}
  `,I=e`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`,w=e`
  display: none;
  font-size: 12px;
  color: ${r("grayBlue","05")};
  cursor: pointer;
`,z=e`
  color: ${r("grayBlue","01")};
  height: 100%;
  display: inline-flex;
  svg {
    vertical-align: unset;
  }
`,f=e`
  input {
    background-color: ${r("blue","08")};
  }
`,k=t=>e`
    ${y};
    ${t&&f};
  `,v=e`
  min-width: 8px;
  padding: 0 12px;
  color: ${r("grayBlue","06")};
`;export{b as a,m as b,B as c,I as d,w as e,k as f,v as g,y as i,z as s};
//# sourceMappingURL=style-156c5cd0.js.map
