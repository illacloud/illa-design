import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Checkbox, CheckboxProps } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Checkbox",
  component: Checkbox,
  argTypes: {
    disable: {
      control: {
        type: "boolean",
      },
    },
  }
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args}>ILLA</Checkbox>

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
