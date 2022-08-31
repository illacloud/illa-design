import { Meta, Story } from "@storybook/react"
import {
  DateRangePicker,
  DateRangePickerProps,
} from "../src"

export default {
  title: "DATA INPUT/DatePicker",
  component: DateRangePicker,
  argTypes: {
    colorScheme: {
      options: [
        "white",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "cyan",
        "purple",
        "grayBlue",
        "techPink",
        "techPurple",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const RangeTemplate: Story<DateRangePickerProps> = (args) => {
  return <DateRangePicker w={"320px"} mode={'year'} {...args} />
}

export const Range = RangeTemplate.bind({})
