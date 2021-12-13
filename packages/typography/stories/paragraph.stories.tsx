import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Paragraph, ParagraphProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Typography/Paragraph",
  component: Paragraph,
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "zpl://screen?sid=61a0a0a4fbcccd86b144a380&pid=617f7cd2526c70be1a3bf3ff",
  },
} as Meta

export const Basic: Story<ParagraphProps> = (args) => <Paragraph {...args}>Hello Text</Paragraph>
