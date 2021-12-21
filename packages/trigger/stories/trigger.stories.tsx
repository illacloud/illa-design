import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { TriggerProps, Trigger } from "../src"
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
  return <Space>
    <Trigger {...args}><Button>Hover Here</Button></Trigger>
    <Button>Second</Button>
  </Space>
}

export const Basic = T.bind({})
