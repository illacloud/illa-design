import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { List, ListItem, ListItemMeta, ListProps } from "../src"
import { Image } from "@illa-design/image"
import { Button } from "@illa-design/button"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/List",
  component: List,
} as Meta

export const Basic: Story<ListProps<any>> = (args) => (
  <List
    {...args}
    data={[
      { title: "Title A", description: "Desc A" },
      { title: "Title B", description: "Desc B" },
      { title: "Title C", description: "Desc C" },
      { title: "Title D", description: "Desc D" },
      { title: "Title E", description: "Desc E" },
    ]}
    render={(data, index) => {
      return (
        <ListItem
          actions={<Button>Actions</Button>}
          extra={<Image src={"https://devbo.cn/logo.svg"} />}
        >
          <ListItemMeta title={data.title} description={data.description} />
        </ListItem>
      )
    }}
    renderKey={(data, index) => {
      return index.toString()
    }}
    hoverable
    height={300}
    header={<span>Header</span>}
    footer={<span>Footer</span>}
  />
)
