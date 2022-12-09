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
      <Statistic
        {...args}
        title={<ImageDefaultIcon />}
        suffix={<ImageDefaultIcon />}
      />
      <Statistic
        {...args}
        prefix={<UpIcon style={{ color: "#ee4d38" }} />}
        suffix={<UpIcon style={{ color: "#0fbf60" }} />}
      />
      <Statistic
        {...args}
        precision={2}
        prefix={<UpIcon style={{ color: "#ee4d38" }} />}
        suffix="%"
      />
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
