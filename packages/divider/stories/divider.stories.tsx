import { Meta, Story } from "@storybook/react"
import { Divider, DividerProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Layout/Divider",

  component: Divider,
} as Meta

const Template: Story<DividerProps> = (props) => <Divider {...props} />

export const Basic = Template.bind({})
