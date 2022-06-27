import { Meta, Story } from "@storybook/react"
import { Popover, PopoverProps } from "../src"
import { Button } from "@illa-design/button"

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

export const Basic: Story<PopoverProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <Popover {...args}>
      <Button>Hello Popover</Button>
    </Popover>
  </div>
)
