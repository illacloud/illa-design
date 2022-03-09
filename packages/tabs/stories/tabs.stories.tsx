/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tabs, TabsProps } from "../src"
import { css } from "@emotion/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tabs",
  component: Tabs,
  argTypes: {
    icon: {
      control: false,
    },
    element: {
      control: false,
    },
    tip: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

const Template: Story<TabsProps> = (props) => {
  return <Tabs {...props} />
}

export const Basic = Template.bind({})
