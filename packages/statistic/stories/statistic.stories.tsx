import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { StatisticProps, Statistic } from "../src"

export default {
  title: "DATA DISPLAY/Statistic",
  component: Statistic,
} as Meta

const Template: Story<StatisticProps> = (args) => {
  return <Statistic {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  title: "",
  value: 0,
  prefix: "",
  suffix: "",
}
