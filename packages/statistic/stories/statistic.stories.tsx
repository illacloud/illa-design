import { Meta, Story } from "@storybook/react"
import { Statistic, StatisticProps } from "../src"
import { Space, ImageDefaultIcon, UpIcon, Button } from "@illa-design/react"
import React, { useRef } from "react"

export default {
  title: "DATA DISPLAY/Statistic",
  component: Statistic,
} as Meta

const Template: Story<StatisticProps> = (args) => {
  let refGrowth = useRef<HTMLElement>(null)

  return (
    <Space size={"large"}>
      <Statistic {...args} />
      <Statistic {...args} title={<ImageDefaultIcon />} suffix={<UpIcon />} />
      <Statistic
        ref={(ref) => (refGrowth = ref)}
        title="User Growth Rate"
        value={123344}
        precision={2}
        prefix={<UpIcon />}
        suffix="%"
        countUp
      />
      <Button
        onClick={() => {
          refGrowth && refGrowth.onCountUp()
        }}
        style={{ display: "block", marginTop: 10 }}
      >
        Start
      </Button>
    </Space>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  title: "Amount",
  value: 12345,
  prefix: "",
  suffix: "",
}
