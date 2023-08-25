import{a as t,j as e,F as y}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as A}from"./index-c4905b50.js";import{S as z}from"./switch-59827713.js";import{S as n}from"./skeleton-24ef4f27.js";import{A as b}from"./avatar-a3b86cd0.js";import{P as v}from"./paragraph-c4a5194c.js";import{T as B}from"./typography-7c684852.js";import{S as m}from"./space-58565126.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";import"./_commonjsHelpers-042e6b4d.js";import"./style-eba6b849.js";import"./is-6e11be7b.js";import"./people-e72103be.js";import"./create-icon-e1f02089.js";import"./image-5ce82922.js";import"./image-default-4f3382b5.js";import"./base-7c5ddcb4.js";import"./utils-6a76eaa1.js";import"./copy-8d2e29c5.js";import"./success-circle-02419641.js";import"./web-3bc7a696.js";import"./config-provider-context-8630f055.js";import"./trigger-b1fdcaa0.js";import"./color-palette-cd133b87.js";import"./index-d85697b4.js";import"./trigger-context-adc67150.js";import"./index-07d1f67e.js";import"./motion-1a692e5b.js";import"./use-isomorphic-effect-4e0215de.js";import"./animate-83017438.js";import"./index-28b4eed0.js";import"./divider-942251de.js";const oe={title:"FEEDBACK/Skeleton",component:n},a=()=>t(y,{children:[e("p",{children:"Basic"}),e(n,{}),e("p",{children:"10 rows"}),e(n,{text:{rows:10}}),e("p",{children:"custom last row width"}),e(n,{text:{rows:5,width:500}}),e("p",{children:"custom all row width"}),e(n,{text:{rows:5,width:["20%","40%","60%",200,400]}})]}),r=()=>t(y,{children:[e("p",{children:"Basic (medium size)"}),e(n,{image:!0}),e("p",{children:"Square image"}),e(n,{image:{shape:"square"}}),e("p",{children:"small"}),e(n,{image:{size:"small"}}),e("p",{children:"large"}),e(n,{image:{size:"large"}}),e("p",{children:"custom size"}),e(n,{image:{size:100}})]}),o=()=>{const[i,k]=A.useState(!0),x=t(m,{children:[e(b,{size:"medium",ml:"16px"}),e(B,{children:Array.from({length:3},(s,f)=>e(v,{mb:"16px",children:"Nothing you can sing that can't be sung. Nothing you can say but you can learn how to play the game. It's easy."},f))})]});return t(m,{children:[t("div",{children:[e("label",{children:"Animation:"}),e(z,{defaultChecked:!0,onChange:s=>k(s)})]}),e(n,{image:!0,animation:i,visible:i,children:x})]})};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => <>
    <p>Basic</p>
    <Skeleton />

    <p>10 rows</p>
    <Skeleton text={{
    rows: 10
  }} />

    <p>custom last row width</p>
    <Skeleton text={{
    rows: 5,
    width: 500
  }} />

    <p>custom all row width</p>
    <Skeleton text={{
    rows: 5,
    width: ["20%", "40%", "60%", 200, 400]
  }} />
  </>`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var h,d,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <>
    <p>Basic (medium size)</p>
    <Skeleton image />

    <p>Square image</p>
    <Skeleton image={{
    shape: "square"
  }} />

    <p>small</p>
    <Skeleton image={{
    size: "small"
  }} />

    <p>large</p>
    <Skeleton image={{
    size: "large"
  }} />

    <p>custom size</p>
    <Skeleton image={{
    size: 100
  }} />
  </>`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,S,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useState(true);
  const content = <Space>
      <Avatar size="medium" ml="16px" />
      <Typography>
        {Array.from({
        length: 3
      }, (v, k) => <Paragraph key={k} mb="16px">
            Nothing you can sing that can&apos;t be sung. Nothing you can say
            but you can learn how to play the game. It&apos;s easy.
          </Paragraph>)}
      </Typography>
    </Space>;
  return <Space>
      <div>
        <label>Animation:</label>
        <Switch defaultChecked onChange={value => setAnimation(value)}></Switch>
      </div>

      <Skeleton image animation={animation} visible={animation}>
        {content}
      </Skeleton>
    </Space>;
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ie=["Basic","WithImage","Animation"];export{o as Animation,a as Basic,r as WithImage,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=skeleton.stories-1b1c200f.js.map
