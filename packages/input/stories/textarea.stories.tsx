import { Meta, Story } from "@storybook/react"
import { TextArea, TextAreaProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: TextArea,
} as Meta

export const textarea: Story<TextAreaProps> = (props) => {
  return (
    <div>
      <TextArea {...props} />
      <TextArea allowClear autoSize {...props} />
      <TextArea allowClear autoSize={{ minRows: 2, maxRows: 5 }} {...props} />
    </div>
  )
}
