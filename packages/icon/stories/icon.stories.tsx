import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { CloseIcon, Icon, IconProps, PersonIcon } from "@illa-design/icon"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Icon",
  argTypes: {
    spin: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Close: Story<IconProps> = (props) => <CloseIcon {...props} />
export const Person: Story<IconProps> = (props) => <PersonIcon {...props} />


