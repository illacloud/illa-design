import { Meta, StoryFn } from "@storybook/react"
import { SingleMonthPicker } from "../src/single-month-picker"
import { SingleMonthPickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleMonthPicker,
} as Meta

export const MonthPicker: StoryFn<SingleMonthPickerProps> = (args) => {
  return <SingleMonthPicker {...args} />
}
