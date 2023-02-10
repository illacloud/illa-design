import { Meta, StoryFn } from "@storybook/react"
import { SingleDatePicker } from "../src/signle-date-picker"
import { SingleDatePickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleDatePicker,
} as Meta

export const DatePickerWithInput: StoryFn<SingleDatePickerProps> = (args) => {
  return <SingleDatePicker {...args} showTime />
}
