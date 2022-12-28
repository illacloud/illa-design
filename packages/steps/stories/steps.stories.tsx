import { Space } from "@illa-design/react"
import { Meta, StoryFn } from "@storybook/react"
import { Step, Steps, StepsProps } from "../src"

export default {
  title: "NAVIGATION/Steps",
  component: Steps,
} as Meta

const Basic: StoryFn<StepsProps> = (args) => {
  return (
    <Space direction={"vertical"}>
      <Steps {...args} style={{ width: 850 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>

      <Steps labelPlacement={"vertical"} {...args} style={{ width: 850 }}>
        <Step title="Succeeded" />
        <Step title="Processing" />
        <Step title="Pending" />
      </Steps>
    </Space>
  )
}
