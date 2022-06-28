import { Meta, Story } from "@storybook/react"
import { Loading, LoadingProps } from "../src"

export default {
  title: "GENERAL/Loading",
  component: Loading,
} as Meta

const Template: Story<LoadingProps> = (args) => {
  return <Loading {...args} />
}

export const Basic = Template.bind({})
