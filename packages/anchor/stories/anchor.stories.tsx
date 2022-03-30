import { Meta, Story } from "@storybook/react"
import { Anchor, AnchorProps } from "../src"

export default {
  title: "OTHERS/Anchor",
  component: Anchor,
} as Meta

const Template: Story<AnchorProps> = (args) => {
  return (
      <Anchor {...args}  />
  )
}

export const Basic = Template.bind({})
