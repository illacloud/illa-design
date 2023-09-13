import { Meta, StoryFn } from "@storybook/react"
import {
  Space,
  ImageDefaultIcon,
  UpIcon,
  Button,
  Statistic,
  StatisticProps,
} from "@illa-design/react"
import { useRef, ElementRef } from "react"

export default {
  title: "DATA DISPLAY/Statistic",
  component: Statistic,
} as Meta

const Template: StoryFn<StatisticProps> = (args) => {
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
