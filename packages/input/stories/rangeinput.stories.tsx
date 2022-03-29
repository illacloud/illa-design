import { Meta, Story } from "@storybook/react"
import { RangeInputProps, RangeInput } from "../src"
import { Space } from "@illa-design/space"
import { PersonIcon } from "@illa-design/icon"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/RangeInput",
  component: RangeInput,
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  }
} as Meta

const Template: Story<RangeInputProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <RangeInput {...props} />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
