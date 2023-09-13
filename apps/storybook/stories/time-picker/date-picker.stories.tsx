import { Meta, StoryFn } from "@storybook/react"
import {
  TimePicker as TimePickerInStory,
  TimePickerProps,
} from "@illa-design/react"

export default {
  title: "DATA INPUT/TimePicker",
  component: TimePickerInStory,
} as Meta

export const TimePicker: StoryFn<TimePickerProps> = (args) => {
  return <TimePickerInStory {...args} />
}
