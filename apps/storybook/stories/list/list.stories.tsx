import { Meta, StoryFn } from "@storybook/react"
import { List, ListItem, ListItemMeta, ListProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/List",
  component: List,
  argTypes: {
    header: {
      control: {
        type: "text",
      },
    },
    footer: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Basic: StoryFn<ListProps<any>> = (args) => (
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
        <ListItem>
          <ListItemMeta
            title={data.title}
            description={data.description}
            avatar={"https://devbo.cn/logo.svg"}
          />
        </ListItem>
      )
    }}
    renderKey={(data, index) => {
      return index.toString()
    }}
  />
)
export const Normal: StoryFn<ListProps<any>> = (args) => (
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
      return <span>{data.title}</span>
    }}
    renderKey={(data, index) => {
      return index.toString()
    }}
    hoverable
    height={200}
  />
)
