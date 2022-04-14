import { Meta, Story } from "@storybook/react"
import { PageHeader, PageHeaderProps } from "../src"
import { Button } from "@illa-design/button"
import { Tag } from "@illa-design/tag"

export default {
  title: "NAVIGATION/PageHeader",
  component: PageHeader,
  argTypes: {},
} as Meta

const Template: Story<PageHeaderProps> = (args) => {
  return (
    <PageHeader
      title="IllaDesign"
      subTitle={
        <>
          This is a description
          <Tag color="red" size="small" style={{ marginLeft: 8 }}>
            Default
          </Tag>
        </>
      }
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
      extra={
        <div>
          <Button style={{ marginRight: 12 }}>Cancel</Button>
          <Button>Save</Button>
        </div>
      }
      {...args}
    ></PageHeader>
  )
}

export const Basic = Template.bind({})
