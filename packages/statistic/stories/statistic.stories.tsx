import { Meta, Story } from "@storybook/react"
import { Statistic, StatisticProps } from "../src"
import { Space, ImageDefaultIcon, UpIcon } from "@illa-design/react"

export default {
  title: "DATA DISPLAY/Statistic",
  component: Statistic,
} as Meta

const Template: Story<StatisticProps> = (args) => {
  return (
    <Space size={"large"}>
      <Statistic {...args} />
      <Statistic {...args} title={<ImageDefaultIcon />} suffix={<UpIcon />} />
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
