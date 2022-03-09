import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Timeline, TimelineProps } from "../src"

export default {
  title: "DATA DISPLAY/Timeline",
  component: Timeline,
  argTypes: {
    pending: {
      control: false,
    },
    pendingDot: {
      control: false,
    },
  },
} as Meta

const Template: Story<TimelineProps> = (props) => {
  return <Timeline></Timeline>
}

export const Basic = Template.bind({})
