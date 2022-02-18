/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { PersonIcon } from "@illa-design/icon"
import { InputProps, Input } from "../src"

import { BsFacebook } from "react-icons/bs"
import { Space } from "@illa-design/space"
import { css } from "@emotion/core"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Input,

  argTypes: {
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
    addonAfter: {
      control: false,
    },
    addonBefore: {
      control: false,
    },
    boarderColor: {
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
} as Meta

const Template: Story<InputProps> = (props) => {
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <Input {...props} />
        <Input prefix="prefix" suffix="suffix" {...props} />
        <Input addonAfter="After" {...props} />
        <Input addonAfter={<PersonIcon />} addonBefore="Before" {...props} />
        <Input addonAfter="After" addonBefore="Before" {...props} />
      </Space>
    </div>
  )
}

export const Basic = Template.bind({})
