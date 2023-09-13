import { Meta, StoryFn } from "@storybook/react"
import { Loading, LoadingProps } from "@illa-design/react"

export default {
  title: "GENERAL/Loading",
  component: Loading,
} as Meta

const Template: StoryFn<LoadingProps> = (args) => {
  return <Loading {...args} />
}

export const Basic = Template.bind({})
