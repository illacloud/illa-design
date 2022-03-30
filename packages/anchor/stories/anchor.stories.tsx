import { Meta, Story } from "@storybook/react"
import { Anchor, AnchorProps } from "../src"
import { Link } from "../src/link"

export default {
  title: "OTHERS/Anchor",
  component: Anchor,
} as Meta

const Template: Story<AnchorProps> = (args) => {
  return <Anchor {...args} />
}

export const Basic = Template.bind({})

export const LinkBasic = () => <Link href="#hello" title="Hello" />
