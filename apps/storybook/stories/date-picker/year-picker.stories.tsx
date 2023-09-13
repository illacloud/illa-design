import { Meta, StoryFn } from "@storybook/react"
import { SingleYearPickerProps, SingleYearPicker } from "@illa-design/react"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleYearPicker,
} as Meta

export const YearPicker: StoryFn<SingleYearPickerProps> = (args) => {
  return <SingleYearPicker {...args} />
}
