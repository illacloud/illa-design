import { Meta, Story } from "@storybook/react"
import { InputNumber, InputNumberProps } from "../src"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputNumber",
  component: InputNumber,
  argTypes: {
    mode: {
      options: ["embed", "button"],
    },
    value: {
      control: {
        type: "text",
      },
    },
    prefix: {
      control: {
        type: "text",
      },
    },
    suffix: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Template: Story<InputNumberProps> = (props) => {
  return (
    <Space wrap direction="vertical">
      <InputNumber {...props} />
      <InputNumber mode="button" {...props} />
    </Space>
  )
}
