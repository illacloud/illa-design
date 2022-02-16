import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Select, RadioProps } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Select",
  component: Select,
} as Meta

const Template: Story<RadioProps> = (args) => <Select {...args}>ILLA</Select>

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
