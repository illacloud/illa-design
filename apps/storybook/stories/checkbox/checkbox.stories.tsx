import { Meta, StoryFn } from "@storybook/react"
import { Checkbox, CheckboxProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Checkbox",
  component: Checkbox,
} as Meta

export const Basic: StoryFn<CheckboxProps> = (args) => {
  return <Checkbox {...args}>ILLA</Checkbox>
}
