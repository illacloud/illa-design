import { Meta, Story } from "@storybook/react"
import { Statistic, StatisticProps } from "../src"
import { Space, ImageDefaultIcon, UpIcon, Button } from "@illa-design/react"
import React, { useRef, ElementRef } from "react"

export default {
  title: "DATA DISPLAY/Statistic",
  component: Statistic,
} as Meta

const Template: Story<StatisticProps> = (args) => {
  let refGrowth: ElementRef<typeof Statistic> = useRef(null)

  return (
    <Space size={"large"}>
      <Statistic {...args} />
      <Statistic {...args} title={<ImageDefaultIcon />} suffix={<UpIcon />} />
      <Statistic
        ref={(ref) => (refGrowth = ref)}
        {...args}
        precision={2}
        prefix={<UpIcon />}
        suffix="%"
        countUp
      />
      <Button
        onClick={() => {
          refGrowth.onCountUp()
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
  value: 50,
  prefix: "",
  suffix: "",
}
