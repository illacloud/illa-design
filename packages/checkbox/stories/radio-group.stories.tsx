import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { CheckboxGroup, RadioGroupProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/CheckboxGroup",
  component: CheckboxGroup,
} as Meta

const Template: Story<RadioGroupProps<any>> = (args) => {
  return (
    <div>
      <CheckboxGroup {...args} options={["A", "B", "C"]}></CheckboxGroup>
      <label htmlFor=""></label>
    </div>
  )
}

export const Basic = Template.bind({})
