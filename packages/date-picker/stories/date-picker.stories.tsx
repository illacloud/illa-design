import { Meta, Story } from "@storybook/react"
import { DatePicker, DatePickerProps } from "../src"

export default {
  title: "DATA INPUT/DatePicker",
  component: DatePicker,
} as Meta

const Template: Story<DatePickerProps> = (args) => {
  return <DatePicker {...args} />
}

export const Basic = Template.bind({})
