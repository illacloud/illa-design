import { Meta, Story } from "@storybook/react"
import {
  DatePicker,
  DatePickerProps,
  MonthPicker,
  MonthPickerProps,
  YearPicker,
  YearPickerProps,
  DateRangePicker,
  CommonRangeProps,
} from "../src"
import dayjs from "dayjs"

export default {
  title: "DATA INPUT/DatePicker",
  component: DatePicker,
  args: {},
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

const RangeTemplate: Story<CommonRangeProps> = (args) => {
  return <DateRangePicker placeholder={['test change header']} defaultPickerValue={['2022-04-01']} {...args} />
}

export const date = DateTemplate.bind({})

export const Month = MonthTemplate.bind({})

export const Year = YearTemplate.bind({})

export const Range = RangeTemplate.bind({})
