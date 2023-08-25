import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{r as c}from"./index-c4905b50.js";import{a as x}from"./droplist-item-c1ed83e5.js";import{S as o}from"./select-47b6799f.js";import{P as h}from"./people-e72103be.js";import{S as f}from"./space-58565126.js";import{A as g}from"./add-9e2989ed.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";import"./_commonjsHelpers-042e6b4d.js";import"./use-merge-value-460a468d.js";import"./is-6e11be7b.js";import"./use-previous-c448b133.js";import"./trigger-b1fdcaa0.js";import"./style-eba6b849.js";import"./color-palette-cd133b87.js";import"./index-d85697b4.js";import"./create-icon-e1f02089.js";import"./trigger-context-adc67150.js";import"./index-07d1f67e.js";import"./motion-1a692e5b.js";import"./use-isomorphic-effect-4e0215de.js";import"./animate-83017438.js";import"./index-28b4eed0.js";import"./empty-243f75ff.js";import"./empty-b05f5c60.js";import"./config-provider-context-8630f055.js";import"./image-5ce82922.js";import"./image-default-4f3382b5.js";import"./input-1bf8702f.js";import"./style-3106226c.js";import"./z-index-efffafd0.js";import"./clear-972f4ed5.js";import"./up-ab9aa0a3.js";import"./loading-6ba90f9e.js";import"./down-ff61a050.js";import"./checkbox-87e8c1a4.js";import"./reduce-375ae19f.js";import"./success-e9a4a46c.js";import"./input-tag-bcda5c9e.js";import"./web-3bc7a696.js";import"./tag-d4c2a659.js";import"./close-ed08e5ef.js";import"./divider-942251de.js";const n=c.forwardRef((t,r)=>{const{value:i,isSelectOption:p,colorScheme:O,disabled:v,children:d,selected:b,...S}=t;return e(x,{value:i.toString(),isSelectOption:p,colorScheme:O,title:d,selected:b,disabled:v,...S})});n.displayName="Option";try{n.displayName="Option",n.__docgenInfo={description:"",displayName:"Option",props:{isSelectOption:{defaultValue:null,description:"",name:"isSelectOption",required:!1,type:{name:"boolean"}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"DATA INPUT/Select",component:o},l=t=>{const[r,i]=c.useState("option2");return a("div",{children:[e(o,{value:1,options:[1,2,3],...t}),e(o,{mt:"20px",options:[1,2,3],multiple:!0,...t}),e(o,{...t,mt:"20px",value:"option1",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],showSearch:!0}),e(o,{mt:"20px",options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],showSearch:!0,allowClear:!0,filterOption:!0,...t}),e(o,{mt:"20px",options:[{label:e(h,{}),value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],...t}),e(o,{mt:"20px",multiple:!0,showSearch:!0,filterOption:!0,options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],...t}),e(o,{...t,mt:"20px",multiple:!0,showSearch:!0,value:["option2"],filterOption:!0,options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3",disabled:!0}]}),e(o,{...t,mt:"20px",options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}),e(o,{...t,mt:"20px",multiple:!0,options:[{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}]}),e(o,{mt:"20px",options:["option1","option2","option3"],...t}),e(o,{mt:"20px",multiple:!0,options:[1,2,3],...t}),e(o,{mt:"20px",options:[1,2,3],...t}),a(o,{mt:"20px",...t,value:r,onChange:p=>{i(p)},children:[e(n,{value:"option1",isSelectOption:!1,children:a(f,{size:"8px",direction:"horizontal",alignItems:"center",children:[e(g,{size:"14px"}),"Add"]})}),e(n,{value:"option2",children:"Option 2"}),e(n,{value:"option3",children:"Option 3"})]})]})};var u,s,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ce=["Basic"];export{l as Basic,ce as __namedExportsOrder,me as default};
//# sourceMappingURL=select.stories-89aebd53.js.map
