import { Meta, StoryFn } from "@storybook/react"
import { SingleDatePicker, SingleDatePickerProps } from "@illa-design/react"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleDatePicker,
} as Meta

export const DatePickerWithInput: StoryFn<SingleDatePickerProps> = (args) => {
  return <SingleDatePicker {...args} showTime />
}
