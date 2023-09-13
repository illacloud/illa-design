import{a as e,j as a}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{r as c}from"./index-1cdf6ce0.js";import{a as x}from"./droplist-item-5fe4f77f.js";import{S as o}from"./select-7a46d746.js";import{P as h}from"./people-0aeaca60.js";import{S as f}from"./space-97cf5fad.js";import{A as g}from"./add-57bcdba4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./use-merge-value-fcf53e13.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";import"./trigger-1f30ac55.js";import"./style-3ea54b04.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./create-icon-907f0980.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./motion-96d4cd12.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./index-a6d290df.js";import"./empty-aff91d97.js";import"./empty-3c50aa28.js";import"./config-provider-context-e3e0b003.js";import"./image-c56aa3a3.js";import"./image-default-3cbff2d8.js";import"./input-7a42d9dd.js";import"./style-4ee563c0.js";import"./z-index-efffafd0.js";import"./clear-bb423cf4.js";import"./up-1088cd79.js";import"./loading-be690f19.js";import"./down-3d8ebd18.js";import"./checkbox-93d4b1ac.js";import"./reduce-2a80ac7e.js";import"./success-eaf0bf13.js";import"./input-tag-c8a3320c.js";import"./web-cc1a3eed.js";import"./tag-47108fb9.js";import"./close-b3537d01.js";import"./divider-bd60f9d7.js";const n=c.forwardRef((t,r)=>{const{value:i,isSelectOption:p,colorScheme:O,disabled:v,children:d,selected:b,...S}=t;return e(x,{value:i.toString(),isSelectOption:p,colorScheme:O,title:d,selected:b,disabled:v,...S})});n.displayName="Option";try{n.displayName="Option",n.__docgenInfo={description:"",displayName:"Option",props:{isSelectOption:{defaultValue:null,description:"",name:"isSelectOption",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const se={title:"DATA INPUT/Select",component:o},l=t=>{const[r,i]=c.useState("option2");return a("div",{children:[e(o,{value:1,options:[1,2,3],...t}),e(o,{mt:"20px",options:[1,2,3],multiple:!0,...t}),e(o,{...t,mt:"20px",value:"option1",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],showSearch:!0}),e(o,{mt:"20px",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],showSearch:!0,allowClear:!0,filterOption:!0,...t}),e(o,{mt:"20px",options:[{label:e(h,{}),value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],...t}),e(o,{mt:"20px",multiple:!0,showSearch:!0,filterOption:!0,options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],...t}),e(o,{...t,mt:"20px",multiple:!0,showSearch:!0,value:["option2"],filterOption:!0,options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3",disabled:!0}]}),e(o,{...t,mt:"20px",options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}),e(o,{...t,mt:"20px",multiple:!0,options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}),e(o,{mt:"20px",options:["option1","option2","option3"],...t}),e(o,{mt:"20px",multiple:!0,options:[1,2,3],...t}),e(o,{mt:"20px",options:[1,2,3],...t}),a(o,{mt:"20px",...t,value:r,onChange:p=>{i(p)},children:[e(n,{value:"option1",isSelectOption:!1,children:a(f,{size:"8px",direction:"horizontal",alignItems:"center",children:[e(g,{size:"14px"}),"Add"]})}),e(n,{value:"option2",children:"Option 2"}),e(n,{value:"option3",children:"Option 3"})]})]})};var u,s,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [currentValue, setCurrentValue] = useState("option2");
  return <div>
      <Select value={1} options={[1, 2, 3]} {...args} />
      <Select mt="20px" options={[1, 2, 3]} multiple {...args} />
      <Select {...args} mt="20px" value="option1" options={[{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }]} showSearch={true} />
      <Select mt="20px" options={[{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }]} showSearch allowClear filterOption={true} {...args} />
      <Select mt="20px" options={[{
      label: <PeopleIcon />,
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }]} {...args} />
      <Select mt="20px" multiple showSearch filterOption={true} options={[{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }]} {...args} />
      <Select {...args} mt="20px" multiple showSearch value={["option2"]} filterOption={true} options={[{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3",
      disabled: true
    }]} />
      <Select {...args} mt="20px" options={[{
      label: "Option 1",
      value: 1
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }]} />
      <Select {...args} mt="20px" multiple options={[{
      label: "Option 1",
      value: 1
    }, {
      label: "Option 2",
      value: 2
    }, {
      label: "Option 3",
      value: 3
    }]} />
      <Select mt="20px" options={["option1", "option2", "option3"]} {...args} />
      <Select mt="20px" multiple options={[1, 2, 3]} {...args} />
      <Select mt="20px" options={[1, 2, 3]} {...args} />
      <Select mt="20px" {...args} value={currentValue} onChange={value => {
      setCurrentValue((value as string));
    }}>
        <Option value="option1" isSelectOption={false}>
          <Space size="8px" direction="horizontal" alignItems="center">
            <AddIcon size="14px" />
            Add
          </Space>
        </Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </div>;
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const me=["Basic"];export{l as Basic,me as __namedExportsOrder,se as default};
//# sourceMappingURL=select.stories-f600b186.js.map
