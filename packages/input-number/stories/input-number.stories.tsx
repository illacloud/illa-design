/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { InputNumber, InputNumberProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputNumber",
  component: InputNumber,
  argTypes: {
    suffix: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Template: Story<InputNumberProps> = (props) => {
  return (
    <div>
      <InputNumber {...props} />
    </div>
  )
}