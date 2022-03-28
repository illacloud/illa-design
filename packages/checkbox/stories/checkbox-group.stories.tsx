import { Meta, ComponentStory } from "@storybook/react"
import { CheckboxGroup } from "../src"

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
  },
  args: {},
} as Meta

const Basic: ComponentStory<typeof CheckboxGroup> = (args) => {
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
    </div>
  )
}

export const checkboxGroup = Basic.bind({})
