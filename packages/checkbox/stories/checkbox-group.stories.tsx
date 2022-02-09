import * as React from "react"
import { Meta, Story, ComponentStory, ComponentMeta } from "@storybook/react"
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from "../src"
import PropTypes from "prop-types"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Checkbox",
  component: CheckboxGroup,

  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    defaultValue: {
      control: {
        type: "object",
      },
      defaultValue: ["B"],
    },
    value: {
      control: {
        type: "text",
      },
    },
    options: {
      control: {
        type: "object",
      },
      defaultValue: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
      ],
    },
    onChange: {
      control: false,
    },
  },
  args: {},
} as Meta

const Basic: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [value, setValue] = React.useState<React.ReactText[]>([])

  return (
    <div>
      <CheckboxGroup {...args} />
      <br />
      <CheckboxGroup
        {...args}
        options={[
          { label: "A", value: "A" },
          { label: "B", value: "B" },
          { label: "C", value: "C" },
        ]}
      />
      <br />
      <CheckboxGroup {...args} options={["Option A", "Option B", "Option C"]} />
      <br />
      <CheckboxGroup
        value={value}
        onChange={(e) => {
          setValue(e)
        }}
      >
        <Checkbox value={"111"}>111</Checkbox>
        <Checkbox value={"222"}>222</Checkbox>
        <Checkbox value={"333"}>333</Checkbox>
      </CheckboxGroup>
    </div>
  )
}

export const checkboxGroup = Basic.bind({})
