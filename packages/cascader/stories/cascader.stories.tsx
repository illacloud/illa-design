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
  "Beijing",
  "Shanghai",
  "Guangzhou",
  "Shenzhen",
  "Chengdu",
  "Wuhan",
]

const Template: Story<CascaderProps> = (args) => (
  <Space direction="vertical">
    <Cascader style={{ width: 280 }} {...args} />
    <Cascader style={{ width: 280 }} {...args} />
  </Space>
)

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
