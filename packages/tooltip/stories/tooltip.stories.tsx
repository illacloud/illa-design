import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tooltip, TooltipProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Button } from "@illa-design/button"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tooltip",
  component: Tooltip,
  decorators: [withTests({ results })],
} as Meta

const T: Story<TooltipProps> = (args) => {
  return <Space>
    <Tooltip {...args}><Button>Hover Here</Button></Tooltip>
    <Button>Second</Button>
  </Space>
}

export const Basic = T.bind({})
