import{a as r,j as n,F as l}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{M as p,u as m,a as g}from"./hook-0abeb31d.js";import{S as u}from"./space-58565126.js";import{B as o}from"./button-group-context-75d431a5.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";import"./style-eba6b849.js";import"./color-palette-cd133b87.js";import"./index-d85697b4.js";import"./z-index-efffafd0.js";import"./motion-1a692e5b.js";import"./use-isomorphic-effect-4e0215de.js";import"./animate-83017438.js";import"./loading-6ba90f9e.js";import"./create-icon-e1f02089.js";import"./warning-circle-499917a2.js";import"./success-circle-02419641.js";import"./error-circle-6ffb1a53.js";import"./info-cricle-683f5f3b.js";import"./close-ed08e5ef.js";import"./index-28b4eed0.js";import"./v4-cf522c50.js";import"./divider-942251de.js";const D={title:"FEEDBACK/Message",component:p,argTypes:{icon:{control:!1},type:{control:!1},title:{control:!1},update:{control:!1},noticeType:{control:!1},closeElement:{control:!1},action:{control:!1},removeHook:{control:!1},onClose:{control:!1},afterClose:{control:!1},position:{options:["top","bottom"]}}},d=t=>{const e=m();return r(l,{children:[n(g,{}),n("div",{children:r(u,{direction:"vertical",children:[n(o,{onClick:()=>{e.info({content:"Info",position:"bottom",...t})},children:"Open Message(Info)"}),n(o,{onClick:()=>{e.normal({content:"Normal",...t})},children:"Open Message(Normal)"}),n(o,{onClick:()=>{e.success({content:"Success",...t})},children:"Open Message(Success)"}),n(o,{onClick:()=>{e.loading({content:"Loading",...t})},children:"Open Message(Loading)"}),n(o,{onClick:()=>{e.warning({content:"Warning",...t})},children:"Open Message(Warning)"}),n(o,{onClick:()=>{e.error({content:"Error",...t})},children:"Open Message(Error)"}),n(o,{onClick:()=>{e.clear()},children:"Clear"})]})})]})},s=d.bind({});s.args={content:"This is Message"};var a,i,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const H=["Basic"];export{s as Basic,H as __namedExportsOrder,D as default};
//# sourceMappingURL=message.stories-b440b1c1.js.map
