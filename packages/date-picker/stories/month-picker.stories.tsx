import { Meta, StoryFn } from "@storybook/react"
import { SingleDatePicker } from "../src/single-month-picker"
import { SingleMonthPickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleDatePicker,
} as Meta

export const MonthPicker: StoryFn<SingleMonthPickerProps> = (args) => {
  return <SingleDatePicker {...args} />
}
