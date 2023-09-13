import { Meta, StoryFn } from "@storybook/react"
import { Space, Progress, ProgressProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "FEEDBACK/Progress",
  component: Progress,
} as Meta

export const Basic: StoryFn<ProgressProps> = (args) => (
  <Space direction="vertical">
    <Progress type="line" {...args} />
    <Progress type="circle" {...args} />
    <Progress type="miniCircle" {...args} />
    <Progress type="miniRing" {...args} />
  </Space>
)
