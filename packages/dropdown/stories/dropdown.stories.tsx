import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Dropdown, DropdownProps, DropList } from "../src"
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

const menuList = () => {
  const { Item } = Menu
  return (
    <Menu>
      <Item title={"Blog"} key={"1"} disabled />
      <Item title={"Tutorial"} key={"2"} />
      <Item title={"Docs"} key={"3"} />
      <Item title={"Community"} key={"4"} />
      <Item title={"Github"} key={"5"} />
    </Menu>
  )
}

const dropList = () => {
  const { Item } = DropList
  return (
    <DropList>
      <Item title={"Blog"} key={"1"} fontColor={"red"} disabled />
      <Item title={"Tutorial"} key={"2"} />
      <Item title={"Docs"} key={"3"} fontColor={"blue"} />
      <Item title={"Community"} key={"4"} />
      <Item title={"Github"} key={"5"} />
    </DropList>
  )
}

export const Basic: Story<DropdownProps> = (args) => (
  <Space>
    <Dropdown dropList={dropList()} {...args}>
      <Button>Hover me</Button>
    </Dropdown>
    <Dropdown dropList={menuList()} trigger={"click"} {...args}>
      <Button>Click me</Button>
    </Dropdown>
  </Space>
)
