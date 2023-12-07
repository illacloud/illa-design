import{c as n}from"./style-4011d251.js";import{g as e,a as g,b as y}from"./color-palette-2f9095e4.js";import{z as p}from"./z-index-efffafd0.js";function d(t){let l=n``;switch(t){case"small":l=n`
        padding: 1px 12px;
      `;break;case"medium":l=n`
        padding: 4px 16px;
      `;break;case"large":l=n`
        padding: 8px 16px;
      `;break}return l}function $(){return n`
    display: flex;
    width: 100%;
    overflow: auto;
    flex-direction: row;
    box-sizing: border-box;
    font-size: 14px;
  `}function m(t,l,a,i){let r=n``;switch(l){case"outline":r=n`
        border: 1px solid ${e("grayBlue","08")};
      `;break}return n`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: -1px;
    color: ${e("gray","02")};
    background-color: ${l==="fill"?e("grayBlue","09"):a?e("grayBlue","09"):"unset"};
    border-radius: ${i[0]} 0 0 ${i[3]};
    ${r};
    ${d(t)};
  `}function h(t,l,a,i){let r=n``;switch(l){case"outline":r=n`
        border: 1px solid ${e("grayBlue","08")};
      `;break}return n`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: -1px;
    color: ${e("gray","02")};
    background-color: ${l==="fill"?e("grayBlue","09"):a?e("grayBlue","09"):"unset"};
    border-radius: 0 ${i[1]} ${i[2]} 0;
    ${r};
    ${d(t)};
  `}function k(t,l,a,i,r,s,o){let u=n``,c=n``;return l==="fill"&&(r&&(u=n`
        border-left: 1px solid ${e("grayBlue","08")};
      `),s&&(c=n`
        border-right: 1px solid ${e("grayBlue","08")};
      `)),n`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    box-sizing: border-box;
    border-radius: ${r?"0":o[0]}
      ${s?"0":o[1]} ${s?"0":o[2]}
      ${r?"0":o[3]};
    background-color: ${l==="fill"?i?e("red","07"):e("grayBlue","09"):"unset"};

    border: 1px solid
      ${l==="outline"?i?e("red","03"):e("grayBlue","08"):"transparent"};

    ${d(t)};
    ${u};
    ${c};

    &:hover {
      border-color: ${l==="outline"?i?e("red","02"):e(a,"07"):"transparent"};
      z-index: ${p.inputFocus};
      background-color: ${l==="fill"?i?e("red","06"):e("grayBlue","08"):"unset"};

      .clear {
        visibility: visible;
      }
    }

    &:focus-within {
      border-color: ${g(i?"red":a)};
      box-shadow: 0 0 8px 0 ${y(i?"red":a,"03")};
      z-index: ${p.inputFocus};
      background-color: unset;
    }
  `}function w(t,l,a,i,r,s,o){let u=n``,c=n``;return l==="fill"&&(r&&(u=n`
        border-left: 1px solid ${e("grayBlue","08")};
      `),s&&(c=n`
        border-right: 1px solid ${e("grayBlue","08")};
      `)),n`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    cursor: not-allowed;
    border-radius: ${r?"0":o[0]}
      ${s?"0":o[1]} ${s?"0":o[2]}
      ${r?"0":o[3]};
    background-color: ${l==="fill"?i?e("red","07"):e("grayBlue","09"):e("grayBlue","09")};

    border: 1px solid
      ${l==="outline"?i?e("red","03"):e("grayBlue","08"):"transparent"};
    ${d(t)};
    ${u};
    ${c};
  `}function S(t){return n`
    flex-shrink: 1;
    width: 100%;
    flex-grow: 1;
    min-height: ${t==="small"?"20px":"22px"};
    line-height: ${t==="small"?"20px":"22px"};
    display: flex;
    align-items: center;
    color: ${e("grayBlue","02")};
  `}function B(t){return n`
    font-size: inherit;
    color: ${e("grayBlue","02")};
    outline: none;
    line-height: ${t==="small"?"20px":"22px"};
    border: none;
    flex-shrink: 1;
    width: 100%;
    flex-grow: 1;
    font-family: unset;
    background: none;
    padding: 0;

    ::placeholder {
      color: ${e("grayBlue","04")};
    }

    &:focus-within {
      outline: none;
      border: none;
      background: none;
    }

    &:active {
      outline: none;
      border: none;
      background: none;
    }

    &:disabled {
      cursor: not-allowed;
      color: ${e("grayBlue","05")};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  `}function z(t,l){return n`
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    color: ${l?e("gray","05"):e("gray","02")};
    margin-right: ${t==="small"?"8px":"12px"};
    min-height: 22px;
  `}function j(t,l){return n`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${l?e("gray","05"):e("gray","02")};
    margin-left: ${t==="small"?"8px":"12px"};
    align-self: center;
    min-height: 22px;
  `}function C(t){return n`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${e("grayBlue","04")};
    margin-left: ${t==="small"?"8px":"12px"};
  `}function I(t){return t?n`
        color: ${e("red","03")};
      `:n``}const v=n`
  color: ${e("grayBlue","05")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,D=n`
  resize: vertical;
  color: ${e("grayBlue","02")};
  outline: none;
  font-family: unset;
  background: none;
  width: 100%;
  font-size: 14px;
  min-height: 32px;

  ::placeholder {
    color: ${e("grayBlue","04")};
  }
`,E=n`
  position: relative;
  display: flex;
  align-items: end;
  flex-direction: column;
  font-size: 14px;

  &:hover {
    .clear {
      visibility: visible;
    }
  }
`,F=n`
  margin-top: 4px;
`;export{$ as a,m as b,w as c,k as d,z as e,B as f,S as g,j as h,C as i,I as j,h as k,D as l,F as m,v as s,E as t};
//# sourceMappingURL=style-aedf7f23.js.map
