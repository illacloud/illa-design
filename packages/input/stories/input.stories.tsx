import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { InputProps, Input } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Radio, RadioProps } from "@illa-design/radio/src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Input",
  component: Input,
  decorators: [withTests({ results })],
} as Meta

const Template: Story<InputProps> = (props) => {
  return (
    <div>
      <Input {...props} />
      <Input prefix="prefix" suffix="suffix" {...props} />
      <Input addonAfter="After" addonBefore="Before" {...props} />
      <Input addonAfter="After" addonBefore="Before" {...props} />
    </div>
  )
}

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
