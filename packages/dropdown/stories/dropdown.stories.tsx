import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Dropdown, DropdownProps, DropList } from "../src"
import {
  Button,
  Menu,
  Space,
  globalColor,
  illaPrefix,
} from "@illa-design/react"

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
      <Item
        title={"Blog"}
        key={"1"}
        fontColor={`${globalColor(`--${illaPrefix}-red-02`)}`}
      />
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
    <Dropdown dropList={dropList()} trigger={"contextmenu"} {...args}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightgray",
          width: 200,
          height: 150,
        }}
      >
        Click me on right
      </div>
    </Dropdown>
  </Space>
)
