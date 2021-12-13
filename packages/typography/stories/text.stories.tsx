import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Text, TextProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Typography/Text",
  component: Text,
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "zpl://screen?sid=61a0a0a4fbcccd86b144a380&pid=617f7cd2526c70be1a3bf3ff",
  },
} as Meta

export const Basic: Story<TextProps> = (args) => <Text {...args}>Hello Text</Text>
