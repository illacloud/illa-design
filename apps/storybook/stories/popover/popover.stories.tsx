import { Meta, StoryFn } from "@storybook/react"
import { Button, Popover, PopoverProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Popover",
  component: Popover,
  argTypes: {
    content: {
      type: "string",
    },
  },
} as Meta

export const Basic: StoryFn<PopoverProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <Popover {...args}>
      <Button>Hello Popover</Button>
    </Popover>
  </div>
)
