import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { RadioGroup, RadioGroupProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/RadioGroup",
  component: RadioGroup,
} as Meta

const Template: Story<RadioGroupProps<any>> = (args) => {
  return (
    <div>
      <RadioGroup {...args} options={["A", "B", "C"]}></RadioGroup>
    </div>
  )
}

export const Basic = Template.bind({})
