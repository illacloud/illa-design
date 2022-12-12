import { Meta, Story } from "@storybook/react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbProps } from "../src"
import { AiFillHome } from "react-icons/all"

export default {
  title: "NAVIGATION/Breadcrumb",
  component: Breadcrumb,
} as Meta

export const Basic: StoryFn<BreadcrumbProps> = (args: BreadcrumbProps) => {
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
  return <Breadcrumb {...args} routes={routes} {...args} />
}

export const Children: StoryFn<BreadcrumbProps> = (args: BreadcrumbProps) => {
  return (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <AiFillHome />
      </BreadcrumbItem>
      <BreadcrumbItem href="/home">Home</BreadcrumbItem>
      <BreadcrumbItem href="/channel">Channel</BreadcrumbItem>
      <BreadcrumbItem href="/news">News</BreadcrumbItem>
    </Breadcrumb>
  )
}
