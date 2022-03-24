import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Calendar, CalenderProps } from "../src"

export default {
  title: "DATA DISPLAY/Calendar",
  component: Calendar,
  argTypes: {},
} as Meta

const Template: Story<CalenderProps> = (props) => {
  return <Calendar {...props} />
}

export const Basic = Template.bind({})
