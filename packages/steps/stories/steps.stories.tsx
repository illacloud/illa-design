import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Steps, StepsProps } from "../src"

export default {
  title: "NAVIGATION/Steps",
  component: Steps,
} as Meta

const Template: Story<StepsProps> = (args) => {
  return (
    <Steps {...args} />
  )
}

export const Basic = Template.bind({})
