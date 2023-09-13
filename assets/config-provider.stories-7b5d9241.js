import{a as n}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as p}from"./index-1cdf6ce0.js";import{C as d}from"./config-provider-context-e3e0b003.js";import{z as f}from"./zh-CN-1e4cd595.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";function a(e){({...e})}try{a.displayName="setConfigProviderProps",a.__docgenInfo={description:"",displayName:"setConfigProviderProps",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}}}}}catch{}const o=e=>{const{locale:r}=e;return p.useEffect(()=>{a({locale:r})},[r]),n(d.Provider,{value:{locale:r},children:e.children})};o.displayName="ConfigProvider";try{o.displayName="ConfigProvider",o.__docgenInfo={description:"",displayName:"ConfigProvider",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}}}}}catch{}const _={title:"OTHERS/ConfigProvider",component:o},i=e=>n(o,{...e,locale:f,children:n(d.Consumer,{children:r=>{var t;return n("div",{children:(t=r.locale)==null?void 0:t.popover.close})}})});var s,c,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <ConfigProvider {...args} locale={zhCN}>
      <ConfigProviderContext.Consumer>
        {value => {
        return <div>{value.locale?.popover["close"]}</div>;
      }}
      </ConfigProviderContext.Consumer>
    </ConfigProvider>;
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const P=["Basic"];export{i as Basic,P as __namedExportsOrder,_ as default};
//# sourceMappingURL=config-provider.stories-7b5d9241.js.map
