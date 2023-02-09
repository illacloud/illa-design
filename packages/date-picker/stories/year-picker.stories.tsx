import { Meta, StoryFn } from "@storybook/react"
import { SingleYearPicker } from "../src/signle-year-picker"
import { SingleYearPickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleYearPicker,
} as Meta

export const YearPicker: StoryFn<SingleYearPickerProps> = (args) => {
  return <SingleYearPicker {...args} />
}
