import { Meta, StoryFn } from "@storybook/react"
import { InputNumber, InputNumberProps } from "../src"
import { Space } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputNumber",
  component: InputNumber,
} as Meta

export const Basic: StoryFn<InputNumberProps> = (props) => {
  return (
    <Space direction="vertical" align="start">
      <InputNumber w="320px" {...props} />
      <InputNumber fs={'16px'} w="320px" precision={3} {...props} />
    </Space>
  )
}
