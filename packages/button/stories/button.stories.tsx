import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Button, ButtonProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { BsAlarm } from "react-icons/all"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "zpl://screen?pid=617f7cd2526c70be1a3bf3ff&sid=61a096b8454c7f89bcaa83df",
  },
  argTypes: {
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    }
  },
} as Meta

const T: Story<ButtonProps> = (args) => <Button {...args}>Hello</Button>

export const Basic = T.bind({})
