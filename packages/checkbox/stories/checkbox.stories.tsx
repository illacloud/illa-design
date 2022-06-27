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
    colorScheme: {
      options: [
        "gray",
        "blue",
        "purple",
        "red",
        "green",
        "yellow",
        "orange",
        "cyan",
        "white",
        "techPink",
        "techPurple",
        "grayBlue",
      ],
      control: {
        type: "select",
      },
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
