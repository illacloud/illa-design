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
    value: 'beijing',
    label: 'Beijing',
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
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
  {
    value: 'guangdong',
    label: 'Guangdong',
    children: [
      {
        value: 'shenzhen',
        label: 'Shenzhen',
        children: [
          {
            value: 'nanshan',
            label: 'Nanshan',
          },
        ],
      },
    ],
  },
];

const Template: Story<CascaderProps<any>> = (args) => (
  <Space direction="vertical">
    <Cascader style={{ width: 280 }} showSearch options={options} {...args} />
    <Cascader style={{ width: 280 }} options={options} {...args} />
    <Cascader style={{ width: 280 }} options={options} {...args} multiple={false} />
  </Space>
)

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
