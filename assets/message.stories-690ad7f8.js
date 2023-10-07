import{j as r,a as n,F as l}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{M as p,u as m,a as g}from"./hook-63bd45bf.js";import{S as u}from"./space-eebe5e62.js";import{B as o}from"./button-group-context-2fccf722.js";import"./index-1cdf6ce0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./style-3ea54b04.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./z-index-efffafd0.js";import"./motion-96d4cd12.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./loading-be690f19.js";import"./create-icon-907f0980.js";import"./warning-circle-152ace94.js";import"./success-circle-2db98c6b.js";import"./error-circle-ed4b9289.js";import"./info-cricle-a9aef4f6.js";import"./close-b3537d01.js";import"./index-a6d290df.js";import"./v4-cf522c50.js";import"./divider-52907e36.js";const A={title:"FEEDBACK/Message",component:p,argTypes:{icon:{control:!1},type:{control:!1},title:{control:!1},update:{control:!1},noticeType:{control:!1},closeElement:{control:!1},action:{control:!1},removeHook:{control:!1},onClose:{control:!1},afterClose:{control:!1},position:{options:["top","bottom"]}}},d=t=>{const e=m();return r(l,{children:[n(g,{}),n("div",{children:r(u,{direction:"vertical",children:[n(o,{onClick:()=>{e.info({content:"Info",position:"bottom",...t})},children:"Open Message(Info)"}),n(o,{onClick:()=>{e.normal({content:"Normal",...t})},children:"Open Message(Normal)"}),n(o,{onClick:()=>{e.success({content:"Success",...t})},children:"Open Message(Success)"}),n(o,{onClick:()=>{e.loading({content:"Loading",...t})},children:"Open Message(Loading)"}),n(o,{onClick:()=>{e.warning({content:"Warning",...t})},children:"Open Message(Warning)"}),n(o,{onClick:()=>{e.error({content:"Error",...t})},children:"Open Message(Error)"}),n(o,{onClick:()=>{e.clear()},children:"Clear"})]})})]})},s=d.bind({});s.args={content:"This is Message"};var a,i,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const message = useMessage();
  return <>
      <MessageGroup />
      <div>
        <Space direction={"vertical"}>
          <Button onClick={() => {
          message.info({
            content: "Info",
            position: "bottom",
            ...args
          });
        }}>
            Open Message(Info)
          </Button>
          <Button onClick={() => {
          message.normal({
            content: "Normal",
            ...args
          });
        }}>
            Open Message(Normal)
          </Button>
          <Button onClick={() => {
          message.success({
            content: "Success",
            ...args
          });
        }}>
            Open Message(Success)
          </Button>
          <Button onClick={() => {
          message.loading({
            content: "Loading",
            ...args
          });
        }}>
            Open Message(Loading)
          </Button>
          <Button onClick={() => {
          message.warning({
            content: "Warning",
            ...args
          });
        }}>
            Open Message(Warning)
          </Button>
          <Button onClick={() => {
          message.error({
            content: "Error",
            ...args
          });
        }}>
            Open Message(Error)
          </Button>
          <Button onClick={() => {
          message.clear();
        }}>
            Clear
          </Button>
        </Space>
      </div>
    </>;
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const D=["Basic"];export{s as Basic,D as __namedExportsOrder,A as default};
//# sourceMappingURL=message.stories-690ad7f8.js.map
