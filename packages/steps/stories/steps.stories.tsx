import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { Step, Steps, StepsProps } from "../src"

export default {
  title: "NAVIGATION/Steps",
  component: Steps,
} as Meta

const Template: Story<StepsProps> = (args) => {
  return (
    <Space>
      <Step id="1" type="dot" status="wait" title="Wait" description="Waiting for process" />
      <Step id="1" status="wait" title="Wait" description="Waiting for process" />
      <Step id="2" status="process" title="Process" labelPlacement="vertical" />
      <Step id="3" status="finish" title="Finish" />
      <Step id="4" status="error" title="Error" />
    </Space>
  )
}

export const Basic = Template.bind({})
