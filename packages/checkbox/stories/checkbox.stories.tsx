import { Meta, Story } from "@storybook/react"
import { Checkbox, CheckboxProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Checkbox",
  component: Checkbox,
  argTypes: {
    value: {
      control: false,
    },
  },
} as Meta

export const checkbox: Story<CheckboxProps> = (args) => {
  return (
    <div>
      <Checkbox {...args}>ILLA</Checkbox>
    </div>
  )
}
