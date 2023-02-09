import { Meta, StoryFn } from "@storybook/react"
import { RangePicker as RangePickerInStory, RangePickerProps } from "../src"

export default {
  title: "DATA INPUT/TimePicker",
  component: RangePickerInStory,
} as Meta

export const RangePickerStory: StoryFn<RangePickerProps> = (args) => {
  return <RangePickerInStory {...args} />
}
