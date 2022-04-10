import { Meta, Story } from "@storybook/react"
import { ImageDefaultIcon } from "@illa-design/icon"
import { Menu, MenuProps } from "../src"
export default {
  title: "NAVIGATION/Menu",
  component: Menu,
} as Meta

const { Item, ItemGroup, SubMenu } = Menu

const Template: Story<MenuProps> = (args) => {
  return (
    <>
      <p>Horizontal</p>
      <Menu {...args}>
        <Item title={"Blog"} key={"1"} disabled />
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} />
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </Menu>

      <p>Horizontal overflow</p>
      <Menu {...args} style={{ width: 200 }}>
        <Item title={"Blog"} key={"1"} disabled />
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} />
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </Menu>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  mode: "horizontal"
}

export const VerticalMenu = (args) => {
  return (
    <Menu
      style={{ width: 200, height: 600 }}
      hasCollapseButton
      defaultOpenKeys={['0']}
      defaultSelectedKeys={['0_1']}
    >
      <SubMenu
        key='0'
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 1
          </>
        }
      >
        <Item key='0_0' title={"Menu 1"} />
        <Item key='0_1' title={"Menu 2"} />
        <Item key='0_2' title={"Menu 3"} disabled />
      </SubMenu>
      <SubMenu
        key='1'
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 2
          </>
        }
      >
        <Item key='1_0' title={"Menu 1"} />
        <Item key='1_1' title={"Menu 2"} />
        <Item key='1_2' title={"Menu 3"} />
      </SubMenu>
      <SubMenu
        key='2'
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 3
          </>
        }
      >
        <ItemGroup key='2_0' title='Menu Group 1'>
          <Item key='2_0_0' title={"Menu 1"} />
          <Item key='2_0_1' title={"Menu 2"} />
        </ItemGroup>
        <ItemGroup key='2_1' title='Menu Group 1'>
          <Item key='2_1_0' title={"Menu 3"} />
          <Item key='2_1_1' title={"Menu 4"} />
        </ItemGroup>
      </SubMenu>
    </Menu>
  )
}
VerticalMenu.args = {}
