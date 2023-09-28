import{j as t,a as e,F as y}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as A}from"./index-1cdf6ce0.js";import{S as n}from"./skeleton-f29327d4.js";import{A as z}from"./avatar-512eb07d.js";import{P as b}from"./paragraph-539161c8.js";import{T as v}from"./typography-1905d610.js";import{S as m}from"./space-97cf5fad.js";import{S as B}from"./switch-225ebe15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./style-3ea54b04.js";import"./is-47f46886.js";import"./people-0aeaca60.js";import"./create-icon-907f0980.js";import"./image-870cf560.js";import"./image-default-3cbff2d8.js";import"./base-cdf64c2a.js";import"./utils-8e923a8b.js";import"./copy-8d947559.js";import"./success-circle-2db98c6b.js";import"./web-cc1a3eed.js";import"./config-provider-context-e3e0b003.js";import"./trigger-1f30ac55.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./motion-96d4cd12.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./index-a6d290df.js";import"./divider-bd60f9d7.js";const re={title:"FEEDBACK/Skeleton",component:n},a=()=>t(y,{children:[e("p",{children:"Basic"}),e(n,{}),e("p",{children:"10 rows"}),e(n,{text:{rows:10}}),e("p",{children:"custom last row width"}),e(n,{text:{rows:5,width:500}}),e("p",{children:"custom all row width"}),e(n,{text:{rows:5,width:["20%","40%","60%",200,400]}})]}),r=()=>t(y,{children:[e("p",{children:"Basic (medium size)"}),e(n,{image:!0}),e("p",{children:"Square image"}),e(n,{image:{shape:"square"}}),e("p",{children:"small"}),e(n,{image:{size:"small"}}),e("p",{children:"large"}),e(n,{image:{size:"large"}}),e("p",{children:"custom size"}),e(n,{image:{size:100}})]}),o=()=>{const[i,k]=A.useState(!0),x=t(m,{children:[e(z,{size:"medium",ml:"16px"}),e(v,{children:Array.from({length:3},(s,f)=>e(b,{mb:"16px",children:"Nothing you can sing that can't be sung. Nothing you can say but you can learn how to play the game. It's easy."},f))})]});return t(m,{children:[t("div",{children:[e("label",{children:"Animation:"}),e(B,{defaultChecked:!0,onChange:s=>k(s)})]}),e(n,{image:!0,animation:i,visible:i,children:x})]})};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => <>
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
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const oe=["Basic","WithImage","Animation"];export{o as Animation,a as Basic,r as WithImage,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=skeleton.stories-3a9de054.js.map
