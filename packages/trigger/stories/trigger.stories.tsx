import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Trigger, TriggerProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Button } from "@illa-design/button"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Trigger",
  component: Trigger,
  decorators: [withTests({ results })],
} as Meta

const T: Story<TriggerProps> = (args) => {
  return <Space style={{ padding: "200px" }} direction="vertical">

    <Space style={{ marginLeft: "70px" }}>
      <Trigger {...args} position="tl"><Button>TL</Button></Trigger>
      <Trigger {...args} position="top"><Button>TOP</Button></Trigger>
      <Trigger {...args} position="tr"><Button>TR</Button></Trigger>
    </Space>

    <Space direction="horizontal" size="200px">
      <Space direction="vertical">
        <Trigger {...args} position="lt"><Button>LT</Button></Trigger>
        <Trigger {...args} position="left"><Button>LEFT</Button></Trigger>
        <Trigger {...args} position="lb"><Button>LB</Button></Trigger>
      </Space>
      <Space direction="vertical">
        <Trigger {...args} position="rt"><Button>RT</Button></Trigger>
        <Trigger {...args} position="right"><Button>RIGHT</Button></Trigger>
        <Trigger {...args} position="rb"><Button>TR</Button></Trigger>
      </Space>
    </Space>

    <Space style={{ marginLeft: "70px" }}>
      <Trigger {...args} position="bl"><Button>BL</Button></Trigger>
      <Trigger {...args} position="bottom"><Button>BOTTOM</Button></Trigger>
      <Trigger {...args} position="br"><Button>BR</Button></Trigger>
    </Space>

  </Space>
}

export const Basic = T.bind({})
