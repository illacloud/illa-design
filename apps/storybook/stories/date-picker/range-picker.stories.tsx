import { Meta, StoryFn } from "@storybook/react"
import { RangeDatePicker, RangeDatePickerProps } from "@illa-design/react"

export default {
  title: "DATA INPUT/DatePicker",
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
