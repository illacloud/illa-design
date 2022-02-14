import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { StatisticProps, Statistic } from "../src"
import { Space } from "@illa-design/space"
import { ImageDefaultIcon } from "@illa-design/icon"
import dayjs from "dayjs"

export default {
  title: "DATA DISPLAY/Statistic",
  component: Statistic,
} as Meta

const Template: Story<StatisticProps> = (args) => {
  return (
    <Space size={"large"}>
      <Statistic {...args} />
      <Statistic
        {...args}
        title={<ImageDefaultIcon />}
        prefix={<ImageDefaultIcon />}
        suffix={<ImageDefaultIcon />}
      />
    </Space>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  title: "Amount",
  // value: dayjs("2018-04-04 16:00:00.000"),
  value: 0,
  prefix: "",
  suffix: "",
}
