import { Meta, StoryFn } from "@storybook/react"
import {
  Checkbox,
  Space,
  CheckboxGroup,
  CheckboxGroupProps,
} from "@illa-design/react"

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
      defaultValue: [],
    },
    value: {
      control: false,
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
    colorScheme: {
      control: {
        type: "text",
      },
    },
  },
  args: {},
} as Meta

export const Group: StoryFn<CheckboxGroupProps> = (args) => {
  return (
    <Space direction="vertical" align="start">
      <CheckboxGroup {...args} />
      <CheckboxGroup
        {...args}
        options={[
          { label: "AA", value: "A" },
          { label: "BB", value: "B" },
          { label: "CC", value: "C" },
        ]}
      />
      <CheckboxGroup {...args} options={["Option A", "Option B", "Option C"]} />
      <CheckboxGroup>
        <Checkbox value="A">Option A</Checkbox>
        <Checkbox value="A">Option B</Checkbox>
        <Checkbox value="A">Option C</Checkbox>
      </CheckboxGroup>
    </Space>
  )
}
