import { Meta, StoryFn } from "@storybook/react"
import { Link, LinkProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "GENERAL/Link",
  component: Link,
} as Meta

export const Basic: StoryFn<LinkProps> = (args) => (
  <div>
    <Link {...args} icon>
      Link
    </Link>
    <Link {...args}>Link</Link>
  </div>
)
