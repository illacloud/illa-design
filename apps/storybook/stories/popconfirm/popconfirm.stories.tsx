import { Meta, StoryFn } from "@storybook/react"
import { Button, PopConfirm, PopconfirmProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "FEEDBACK/PopConfirm",
  component: PopConfirm,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

export const Basic: StoryFn<PopconfirmProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <PopConfirm {...args}>
      <Button>Click</Button>
    </PopConfirm>
  </div>
)
