import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Select, SelectProps, Option } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Select",
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => (
  <div>
    <Select {...args}>
      <Option>Abc</Option>
      <Option>Bde</Option>
    </Select>
    <br />
    <Select />
  </div>
)

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
