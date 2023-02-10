import { Meta, StoryFn } from "@storybook/react"
import { SingleQuarterPicker } from "../src/single-quarter-picker"
import { SingleQuarterPickerProps } from "../src/interface"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleQuarterPicker,
} as Meta

export const QuarterPicker: StoryFn<SingleQuarterPickerProps> = (args) => {
  return <SingleQuarterPicker {...args} />
}
