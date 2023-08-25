import{j as n}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as p}from"./index-c4905b50.js";import{C as d}from"./config-provider-context-8630f055.js";import{z as f}from"./zh-CN-1e4cd595.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";import"./_commonjsHelpers-042e6b4d.js";function a(e){({...e})}try{a.displayName="setConfigProviderProps",a.__docgenInfo={description:"",displayName:"setConfigProviderProps",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}}}}}catch{}const o=e=>{const{locale:r}=e;return p.useEffect(()=>{a({locale:r})},[r]),n(d.Provider,{value:{locale:r},children:e.children})};o.displayName="ConfigProvider";try{o.displayName="ConfigProvider",o.__docgenInfo={description:"",displayName:"ConfigProvider",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}}}}}catch{}const P={title:"OTHERS/ConfigProvider",component:o},i=e=>n(o,{...e,locale:f,children:n(d.Consumer,{children:r=>{var t;return n("div",{children:(t=r.locale)==null?void 0:t.popover.close})}})});var s,c,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <ConfigProvider {...args} locale={zhCN}>
      <ConfigProviderContext.Consumer>
        {value => {
        return <div>{value.locale?.popover["close"]}</div>;
      }}
      </ConfigProviderContext.Consumer>
    </ConfigProvider>;
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const y=["Basic"];export{i as Basic,y as __namedExportsOrder,P as default};
//# sourceMappingURL=config-provider.stories-ac388b7c.js.map
