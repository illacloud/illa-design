import { Meta, StoryFn } from "@storybook/react"
import { RangePickerPanel } from "../src/panels/range"
import { RangePicker } from "../src/RangePicker"
import { RangeDatePickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: RangePickerPanel,
} as Meta

export const YearRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangePicker {...args} mode="year" />
}

export const QuaRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangePicker {...args} mode="quarter" />
}

export const WeekRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangePicker {...args} mode="week" />
}
export const MonthRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangePicker {...args} mode="month" />
}
export const DateRangePickerWithInput: StoryFn<RangeDatePickerProps> = (
  args,
) => {
  return <RangePicker {...args} mode="date" showTime={true} />
}
