import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Link, LinkProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "GENERAL/Link",
  component: Link,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<LinkProps> = (args) => <Link {...args} icon>Link</Link>
