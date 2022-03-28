import { Meta, Story } from "@storybook/react"
import { Skeleton, SkeletonProps } from "../src"

export default {
  title: "FEEDBACK/Skeleton",
  component: Skeleton,
} as Meta

const Template: Story<SkeletonProps> = (args) => {
  return (
      <Skeleton {...args}  />
  )
}

export const Basic = Template.bind({})
