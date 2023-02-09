import { Meta, StoryFn } from "@storybook/react"
import { RangePickerPanel } from "../src/panels/range"
import { RangeDatePicker } from "../src/range-date-picker"
import { RangeDatePickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: RangePickerPanel,
} as Meta

export const YearRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangeDatePicker {...args} mode="year" />
}

export const QuaRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangeDatePicker {...args} mode="quarter" />
}

export const WeekRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangeDatePicker {...args} mode="week" />
}
export const MonthRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangeDatePicker {...args} mode="month" />
}
export const DateRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangeDatePicker {...args} mode="date" showTime={true} />
}
