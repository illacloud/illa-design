import { Meta, Story } from "@storybook/react"
import {
  DatePicker,
  DatePickerProps,
  MonthPicker,
  MonthPickerProps,
  YearPicker,
  YearPickerProps,
  RangePicker,
  RangePickerProps,
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

const YearTemplate: Story<YearPickerProps> = (args) => {
  return <YearPicker {...args} />
}

const RangeTemplate: Story<RangePickerProps> = (args) => {
  return <RangePicker {...args} />
}

export const date = DateTemplate.bind({})

export const Month = MonthTemplate.bind({})

export const Year = YearTemplate.bind({})

export const Range = RangeTemplate.bind({})
