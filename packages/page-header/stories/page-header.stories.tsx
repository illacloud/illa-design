import { Meta, Story } from "@storybook/react"
import { PageHeader, PageHeaderProps } from "../src"

export default {
  title: "NAVIGATION/PageHeader",
  component: PageHeader,
} as Meta

const Template: Story<PageHeaderProps> = (args) => {
  return (
      <PageHeader {...args}  />
  )
}

export const Basic = Template.bind({})
