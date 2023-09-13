import { Meta, StoryFn } from "@storybook/react"
import { Text, TextProps, Typography } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Typography/Text",
  component: Text,
} as Meta

export const Basic: StoryFn<TextProps> = (args) => (
  <Typography>
    <Text {...args}>Hello Text</Text>
  </Typography>
)
