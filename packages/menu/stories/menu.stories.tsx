import { Meta, Story } from "@storybook/react"
import { Menu, MenuProps } from "../src"
import { Indent } from "../src/indent"
import { Item } from "../src/item"
import { SubMenu } from "../src/sub-menu"

export default {
  title: "NAVIGATION/Menu",
  component: Menu,
} as Meta

const Template: Story<MenuProps> = (args) => {
  return (
    <>
      <Menu {...args} style={{ width: 200 }} accordion>
        <Item title={"Menu-item-1"} key={"1"} />
        <Item title={"Menu-item-2"} key={"2"} />
        <Item title={"Menu-item-3"} key={"3"} />
        <SubMenu key={"2-1"} title={"SubMenu"}>
          <Item title={"Menu-item-2"} key={"4"} />
          <Item title={"Menu-item-3"} key={"5"} />
          <Item title={"Menu-item-2"} key={"11"} />
          <Item title={"Menu-item-3"} key={"15"} />
          <Item title={"Menu-item-2"} key={"14"} />
          <Item title={"Menu-item-3"} key={"512"} />
          <Item title={"Menu-item-2"} key={"423"} />
          <Item title={"Menu-item-3"} key={"1205"} />
          <Item title={"Menu-item-2"} key={"4-92"} />
          <Item title={"Menu-item-3"} key={"5112"} />
          <Item title={"Menu-item-2"} key={"4900"} />
          <Item title={"Menu-item-3"} key={"5sf"} />
        </SubMenu>

        {/* <SubMenu key={"2-2"} title={"SubMenu2"}>
            <Item title={"Menu-item-2"} key={"1231234"} />
            <Item title={"Menu-item-3"} key={"1231235"} />
            <Item title={"Menu-item-2"} key={"12312311"} />
            <Item title={"Menu-item-3"} key={"12312315"} />
            <Item title={"Menu-item-2"} key={"12312314"} />
            <Item title={"Menu-item-3"} key={"123123512"} />
            <SubMenu title={"SubMenu2-1"} key={"2-3"}>
            <Item title={"Menu-item-2"} key={"123123423"} />
            <Item title={"Menu-item-3"} key={"1231231205"} />
            </SubMenu>
            <SubMenu title={"SubMenu2-2"} key={"2-4"}>
            <Item title={"Menu-item-2"} key={"1231234-92"} />
            <Item title={"Menu-item-3"} key={"1231235112"} />
            <Item title={"Menu-item-2"} key={"1231234900"} />
            <Item title={"Menu-item-3"} key={"1231235sf"} />
            </SubMenu>
            </SubMenu> */}
      </Menu>
    </>
  )
}

export const Basic = Template.bind({})
