import { Meta, Story } from "@storybook/react"
import { Menu, MenuProps } from "../src"
import { Indent } from "../src/indent"
import { Item } from "../src/item"

export default {
  title: "NAVIGATION/Menu",
  component: Menu,
} as Meta

const Template: Story<MenuProps> = (args) => {
  return (
    <>
      <Menu {...args} style={{ width: 200 }}>
        <Item title={"Menu-item-1"} key={"1"} />
        <Item title={"Menu-item-2"} key={"2"} level={2} />
        <Item title={"Menu-item-3"} key={"3"} level={3} />
      </Menu>
    </>
  )
}

export const Basic = Template.bind({})
