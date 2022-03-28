import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { Select, SelectProps, Option } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Select",
  component: Select,
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

const Template: Story<SelectProps> = (args) => (
  <Space direction="vertical">
    <Select style={{ width: 280 }} {...args} />
    <Select
      style={{ width: 280 }}
      options={options}
      defaultValue={"Shenzhen"}
      {...args}
    />
    <Select style={{ width: 280 }} placeholder="Select items" {...args}>
      <Option>Abc</Option>
      <Option>Bde</Option>
    </Select>
  </Space>
)

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
