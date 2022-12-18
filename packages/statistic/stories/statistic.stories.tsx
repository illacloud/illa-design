import { Meta, StoryFn } from "@storybook/react"
import { Statistic, StatisticProps } from "../src"
import { Space, ImageDefaultIcon } from "@illa-design/react"

export default {
  title: "DATA DISPLAY/Statistic",
  component: Statistic,
} as Meta

const Template: StoryFn<StatisticProps> = (args) => {
  return (
    <Space size={"large"}>
      <Statistic {...args} />
      <Statistic
        {...args}
        title={<ImageDefaultIcon />}
        suffix={<ImageDefaultIcon />}
      />
    </Space>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  title: "Amount",
  value: 0,
  prefix: "",
  suffix: "",
}
