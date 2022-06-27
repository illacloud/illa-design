import { Meta, Story } from "@storybook/react"
import { Text, TextProps, Typography } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Typography/Text",
  component: Text,
} as Meta

export const Basic: Story<TextProps> = (args) => (
  <Typography>
    <Text {...args}>Hello Text</Text>
  </Typography>
)
