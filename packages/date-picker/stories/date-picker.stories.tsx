import { Meta, Story } from "@storybook/react"
import {
  DatePicker,
  DatePickerProps,
  MonthPicker,
  MonthPickerProps,
} from "../src"

export default {
  title: "DATA INPUT/DatePicker",
  component: DatePicker,
} as Meta

const DateTemplate: Story<DatePickerProps> = (args) => {
  return <DatePicker {...args} />
}

const MonthTemplate: Story<MonthPickerProps> = (args) => {
  return <MonthPicker {...args} />
}

export const date = DateTemplate.bind({})

export const Month = MonthTemplate.bind({})
