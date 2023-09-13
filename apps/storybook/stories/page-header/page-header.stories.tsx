import { Meta, StoryFn } from "@storybook/react"
import { PageHeader, PageHeaderProps } from "@illa-design/react"

export default {
  title: "NAVIGATION/PageHeader",
  component: PageHeader,
  argTypes: {},
} as Meta

const Template: StoryFn<PageHeaderProps> = (args) => {
  return (
    <PageHeader
      {...args}
      title="IllaDesign"
      subTitle="This is a description"
      backIcon
      breadcrumb={{
        routes: [
          {
            path: "/",
            breadcrumbName: "Home",
          },
          {
            path: "/channel",
            breadcrumbName: "Channel",
          },
          {
            path: "/news",
            breadcrumbName: "News",
          },
        ],
      }}
      extra={<div>save</div>}
    ></PageHeader>
  )
}

export const Basic = Template.bind({})
