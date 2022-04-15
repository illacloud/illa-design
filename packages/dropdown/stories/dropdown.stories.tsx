import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Dropdown, DropdownProps } from "../src"
import { Button } from "@illa-design/button"
import { Menu } from "@illa-design/menu"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "NAVIGATION/Dropdown",
  component: Dropdown,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

const { Item } = Menu

const dropList = (
  <Menu>
    <Item title={"Blog"} key={"1"} disabled />
    <Item title={"Tutorial"} key={"2"} />
    <Item title={"Docs"} key={"3"} />
    <Item title={"Community"} key={"4"} />
    <Item title={"Github"} key={"5"} />
  </Menu>
)

export const Basic: Story<DropdownProps> = (args) => (
  <Space>
    <Dropdown droplist={dropList} {...args}>
      <Button>Hover me</Button>
    </Dropdown>
    <Dropdown droplist={dropList} trigger={"click"} {...args}>
      <Button>Click me</Button>
    </Dropdown>
  </Space>
)
