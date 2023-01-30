import { Meta, StoryFn } from "@storybook/react"
import { DatePicker, DatePickerProps } from "../src"

export default {
  title: "DATA INPUT/DatePicker",
  component: DatePicker,
} as Meta

export const Basic: StoryFn<DatePickerProps> = (args) => {
  return <DatePicker {...args} />
}
