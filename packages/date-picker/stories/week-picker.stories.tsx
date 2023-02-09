import { Meta, StoryFn } from "@storybook/react"
import { SingleWeekPicker } from "../src/single-week-picker"
import { SingleWeekPickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleWeekPicker,
} as Meta

export const WeekPicker: StoryFn<SingleWeekPickerProps> = (args) => {
  return <SingleWeekPicker {...args} />
}
