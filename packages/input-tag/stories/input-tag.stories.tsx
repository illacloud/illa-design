/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { InputTagProps, InputTag } from "../src"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputTag",
  component: InputTag,
} as Meta

const Template: Story<InputTagProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <InputTag style={{ maxWidth: "350px" }} {...props} />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
