import { Meta, StoryFn } from "@storybook/react"
import { {{properCase name}}, {{properCase name}}Props } from "../src"

export default {
  title: "{{type}}/{{properCase name}}",
  component: {{properCase name}},
} as Meta

export const Basic: StoryFn<{{properCase name}}Props> = (args) => {
  return (
      <{{properCase name}} {...args}  />
  )
}
