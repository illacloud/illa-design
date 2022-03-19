import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { TimePicker, CheckboxProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Checkbox",
  component: TimePicker,
  argTypes: {
    value: {
      control: false,
    },
  },
} as Meta

export const checkbox: Story<CheckboxProps> = (args) => {
  return (
    <div>
      <TimePicker {...args}>ILLA</TimePicker>
    </div>
  )
}
