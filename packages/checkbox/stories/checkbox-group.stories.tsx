import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/CheckboxGroup",
  component: CheckboxGroup,
  subcomponents: { Checkbox },

  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onChange: {
      control: {
        type: "Function",
      },
    },
  },
} as Meta

export const checkboxGroup: Story<CheckboxGroupProps> = (args) => {
  return (
    <div>
      <CheckboxGroup
        {...args}
        options={[{ label: "A" }, { label: "B" }, { label: "C" }]}
      />
      <br />
      <CheckboxGroup {...args} options={["Option A", "Option B", "Option C"]} />
    </div>
  )
}
console.log(checkboxGroup.argTypes, 'checkboxGroup.argTypes')