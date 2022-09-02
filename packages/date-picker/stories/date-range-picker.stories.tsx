import { Meta, Story } from "@storybook/react"
import { DateRangePicker, DateRangePickerProps } from "../src"

export default {
  title: "DATA INPUT/DatePicker",
  component: DateRangePicker,
  argTypes: {},
} as Meta

const RangeTemplate: Story<DateRangePickerProps> = (args) => {
  return <DateRangePicker w={"320px"} mode={"year"} {...args} />
}

export const Range = RangeTemplate.bind({})
