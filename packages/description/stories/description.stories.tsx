import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Description, DescriptionProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Description",
  component: Description,
} as Meta

export const Basic: Story<DescriptionProps> = (args) => (
  <Description {...args} />
)
