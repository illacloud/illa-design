import * as React from "react"
import { Meta, Story } from "@storybook/react"
import {
  TimePicker,
  TimePickerProps,
  TimeRangePicker,
  RangePickerProps,
} from "../src"
import { Space } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/TimePicker",
  component: TimePicker,
  argTypes: {
    value: {
      type: "string",
    },
  },
} as Meta

export const timePicker: Story<TimePickerProps> = (args) => {
  return (
    <Space direction={"vertical"} size={"25px"}>
      <TimePicker {...args} />
      <TimePicker use12Hours format="hh:mm:ss a" {...args} />
      <TimePicker disabled {...args} />
    </Space>
  )
}

export const rangePicker: Story<RangePickerProps> = (args) => {
  return (
    <Space wrap>
      <TimeRangePicker {...args} />
      <TimeRangePicker disabled={[true, false]} {...args} />
      <TimeRangePicker value={["10:00:00", "12:00:00"]} {...args} />
    </Space>
  )
}
