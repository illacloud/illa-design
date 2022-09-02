import { Meta, Story } from "@storybook/react"
import { DateRangePicker, DateRangePickerProps } from "../src"

export default {
  title: "DATA INPUT/DatePicker",
  component: DateRangePicker,
  argTypes: {},
} as Meta

const RangeTemplate: Story<DateRangePickerProps> = (args) => {
  return <DateRangePicker w={"400px"} {...args} />
}

export const Range = RangeTemplate.bind({})
