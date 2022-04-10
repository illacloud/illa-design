import { Meta, Story } from "@storybook/react"
import { Breadcrumb, BreadcrumbProps, BreadcrumbItem } from "../src"

export default {
  title: "NAVIGATION/Breadcrumb",
  component: Breadcrumb,
} as Meta

const Template: Story<BreadcrumbProps> = (args) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  )
}

export const Basic = Template.bind({})
