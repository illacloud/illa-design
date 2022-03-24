import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Calendar, CalenderProps } from "../src"

export default {
  title: "DATA DISPLAY/Calendar",
  component: Calendar,
  argTypes: {
    onChange: {
      control: false
    },
    onPanelChange: {
      control: false
    },
    dateRender: {
      control: false
    },
    monthRender: {
      control: false
    },
    dateInnerContent: {
      control: false
    },
    headerRender: {
      control: false
    },
    locale: {
      control: false
    }
  },
} as Meta

const Template: Story<CalenderProps> = (props) => {
  return <Calendar {...props} />
}

export const Basic = Template.bind({})