import { Meta, Story } from "@storybook/react"
import { Anchor, AnchorProps } from "../src"

const { Link: AnchorLink } = Anchor

export default {
  title: "OTHERS/Anchor",
  component: Anchor,
} as Meta

export const Basic = (args: AnchorProps) => (
  <Anchor>
    <AnchorLink href="#link-1" title="link-1" />
    <AnchorLink href="#link-2" title="link-2">
      <AnchorLink href="#link-2-1" title="link-2-1" />
      <AnchorLink href="#link-2-2" title="link-2-2" />
    </AnchorLink>
    <AnchorLink href="#link-3" title="link-3" />
  </Anchor>
)
