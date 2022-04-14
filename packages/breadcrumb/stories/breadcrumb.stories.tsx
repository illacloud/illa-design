import { Meta, Story } from "@storybook/react"
import { Breadcrumb, BreadcrumbProps } from "../src"

export default {
  title: "NAVIGATION/Breadcrumb",
  component: Breadcrumb,
  args: {}
} as Meta

const Template: Story<BreadcrumbProps> = (args) => {
  const routes = [
    {
      path: "/",
      breadcrumbName: "Home",
    },
    {
      path: "/Channel",
      breadcrumbName: "Channel",
      children: [
        {
          path: "/users",
          breadcrumbName: "Users",
        },
        {
          path: "/permission",
          breadcrumbName: "Permission",
        },
      ],
    },
    {
      path: "/news",
      breadcrumbName: "News",
    },
  ]
  return (
    <Breadcrumb routes={routes} {...args} />
  )
}

export const Basic = Template.bind({})
