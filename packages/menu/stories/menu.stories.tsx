import { useState } from "react"
import { Meta, Story } from "@storybook/react"
import {
  ImageDefaultIcon,
  LikeIcon,
  CloseIcon,
  SuccessIcon,
} from "@illa-design/icon"
import { Trigger } from "@illa-design/trigger"
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
  mode: "horizontal",
}

export const VerticalMenu = (args: MenuProps) => {
  return (
    <Menu
      style={{ width: 200, height: 600 }}
      hasCollapseButton
      defaultOpenKeys={["0"]}
      defaultSelectedKeys={["0_1"]}
      {...args}
    >
      <SubMenu
        key="0"
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 1
          </>
        }
      >
        <Item key="0_0" title={"Menu 1"} />
        <Item key="0_1" title={"Menu 2"} />
        <Item key="0_2" title={"Menu 3"} disabled />
      </SubMenu>
      <SubMenu
        key="1"
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 2
          </>
        }
      >
        <Item key="1_0" title={"Menu 1"} />
        <Item key="1_1" title={"Menu 2"} />
        <Item key="1_2" title={"Menu 3"} />
      </SubMenu>
      <SubMenu
        key="2"
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 3
          </>
        }
      >
        <ItemGroup key="2_0" title="Menu Group 1">
          <Item key="2_0_0" title={"Menu 1"} />
          <Item key="2_0_1" title={"Menu 2"} />
        </ItemGroup>
        <ItemGroup key="2_1" title="Menu Group 1">
          <Item key="2_1_0" title={"Menu 3"} />
          <Item key="2_1_1" title={"Menu 4"} />
        </ItemGroup>
      </SubMenu>
    </Menu>
  )
}
VerticalMenu.args = {}

export const PopButton = (args: MenuProps) => {
  const [visible, setVisible] = useState(false)
  const renderMenu = () => (
    <Menu {...args}>
      <Item
        key="0_0"
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 8 }} />
            Menu 1
          </>
        }
      />
      <Item
        key="0_1"
        title={
          <>
            <LikeIcon style={{ marginRight: 8 }} />
            Menu 2
          </>
        }
      />
      <Item
        key="0_2"
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 8 }} />
            Menu 3
          </>
        }
      />
      <Item
        key="0_3"
        title={
          <>
            <ImageDefaultIcon style={{ marginRight: 8 }} />
            Menu 4
          </>
        }
      />
    </Menu>
  )
  return (
    <Trigger
      colorScheme={"white"}
      content={renderMenu()}
      trigger={"hover"}
      closeOnClick
      position="top"
      onVisibleChange={(v) => setVisible(v)}
    >
      <div
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          top: 400,
          left: 200,
          borderRadius: "50%",
          background: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        {visible ? <SuccessIcon /> : <CloseIcon />}
      </div>
    </Trigger>
  )
}
PopButton.args = {
  mode: "popButton",
}
