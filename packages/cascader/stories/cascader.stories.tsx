import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { Cascader, CascaderProps } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Cascader",
  component: Cascader,
  argTypes: {
    value: {
      control: {
        type: "array",
      },
    },
  },
} as Meta

const options = [
  {
    value: "beijing",
    label: "Beijing",
    children: [
      {
        value: 'chaoyang',
        label: 'Chaoyang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'fengtai',
        label: 'fengtai',
      },
      {
        value: 'shijingshan',
        label: 'Shijingshan',
      },
      {
        value: 'mentougou',
        label: 'Mentougou',
      },
      {
        value: 'fangshan',
        label: 'Fangshan',
      },
      {
        value: 'tongzhou',
        label: 'Tongzhou',
      },
      {
        value: 'shunyi',
        label: 'Shunyi',
      },
    ],
  },
  {
    value: "shanghai",
    label: "Shanghai",
    children: [
      {
        value: "shanghaishi",
        label: "Shanghai",
        children: [
          {
            value: "huangpu",
            label: "Huangpu",
          },
        ],
      },
    ],
  },
  {
    value: "guangdong",
    label: "Guangdong",
    children: [
      {
        value: "shenzhen",
        label: "Shenzhen",
        children: [
          {
            value: "nanshan",
            label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio dolorem earum excepturi fugiat id illo illum iure laboriosam minus modi, nam neque non odit officiis provident repudiandae sunt velit!",
          },
        ],
      },
    ],
  },
]

const Template: Story<CascaderProps<any>> = (args) => (
  <Space direction="vertical">
    <Cascader style={{ width: 280 }} showSearch options={options} {...args} />
    <Cascader style={{ width: 280 }} options={options} {...args} />
    <Cascader
      style={{ width: 280 }}
      options={options}
      {...args}
      multiple={false}
    />
  </Space>
)

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
