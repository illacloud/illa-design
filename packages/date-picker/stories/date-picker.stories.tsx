import { Meta, Story } from "@storybook/react"
import {
  DatePicker,
  DatePickerProps,
  MonthPicker,
  MonthPickerProps,
  YearPicker,
  YearPickerProps,
} from "../src"

export default {
  title: "DATA INPUT/DatePicker",
  component: DatePicker,
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

const DateTemplate: Story<DatePickerProps> = (args) => {
  return <DatePicker w={"280px"} {...args} showTime />
}

const MonthTemplate: Story<MonthPickerProps> = (args) => {
  return <MonthPicker w={"280px"} {...args} />
}

const YearTemplate: Story<YearPickerProps> = (args) => {
  return <YearPicker w={"280px"} {...args} />
}

export const date = DateTemplate.bind({})

export const Month = MonthTemplate.bind({})

export const Year = YearTemplate.bind({})
