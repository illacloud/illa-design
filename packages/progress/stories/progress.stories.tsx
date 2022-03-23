import { Meta, Story } from "@storybook/react"
import { Progress } from "../src"

import { ProgressProps } from "../dist/types"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "FEEDBACK/Progress",
  component: Progress,

  argTypes: {
    type: {
      control: false,
    },
    percent: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: {
        type: "text",
      },
    },
    trailColor: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Basic: Story<ProgressProps> = (args) => (
  <Space direction="vertical">
    <Progress type="line" {...args} />
    <Progress type="circle" {...args} />
    <Progress type="miniCircle" {...args} />
    <Progress type="miniRing" {...args} />
  </Space>
)
