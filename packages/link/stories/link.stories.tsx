import { Meta, Story } from "@storybook/react"
import { Link, LinkProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "GENERAL/Link",
  component: Link,
} as Meta

export const Basic: Story<LinkProps> = (args) => (
  <div>
    <Link {...args} icon>
      Link
    </Link>
    <Link {...args}>Link</Link>
  </div>
)
