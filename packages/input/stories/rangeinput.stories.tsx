import { Meta, Story } from "@storybook/react"
import { RangeInputProps, RangeInput } from "../src"
import { Space, PersonIcon } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: RangeInput,
  argTypes: {
    suffix: {
      control: {
        type: "text",
      },
    },
    borderColor: {
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
      ],
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as Meta

export const rangeInput: Story<RangeInputProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <RangeInput {...props} />
      </Space>
    </div>
  )
}
