import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { TPTimePicker, TimePickerProps } from "../src"
import { TPRangePicker, RangePickerProps } from "../src"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/TimePicker",
  component: TPTimePicker,
  argTypes: {
    value: {
      type: "string",
    },
  },
} as Meta

export const timePicker: Story<TimePickerProps> = (args) => {
  return (
    <Space direction={"vertical"} size={"25px"}>
      <TPTimePicker {...args} />
      <TPTimePicker use12Hours format="hh:mm:ss a" {...args} />
      <TPTimePicker disabled {...args} />
    </Space>
  )
}

export const rangePicker: Story<RangePickerProps> = (args) => {
  return (
    <Space wrap>
      <TPRangePicker {...args} />
      <TPRangePicker disabled={[true, false]} {...args} />
      <TPRangePicker value={["10:00:00", "12:00:00"]} {...args} />
    </Space>
  )
}
