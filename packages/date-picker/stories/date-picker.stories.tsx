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
  return (
    <DateRangePicker
      {...args}
      popupVisible
      placeholder={["", "date-2"]}
      defaultPickerValue={["2022-05-01"]}
    />
  )
}

export const date = DateTemplate.bind({})

export const Month = MonthTemplate.bind({})

export const Year = YearTemplate.bind({})

export const Range = RangeTemplate.bind({})
