import { Meta, Story } from "@storybook/react"
import { Popconfirm, PopconfirmProps } from "../src"
import { Button } from "@illa-design/button"

//👇 This default export determines where your story goes in the story list
export default {
  title: "FEEDBACK/Popconfirm",
  component: Popconfirm,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

export const Basic: Story<PopconfirmProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <Popconfirm {...args}>
      <Button>Click</Button>
    </Popconfirm>
  </div>
)
