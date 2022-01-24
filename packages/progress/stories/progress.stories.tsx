import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Progress, LinkProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "GENERAL/Link",
  component: Progress,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<LinkProps> = (args) => <Progress {...args} icon>Link</Progress>
