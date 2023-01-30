import { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import {
  CloseIcon,
  ImageDefaultIcon,
  SuccessIcon,
  Trigger,
} from "@illa-design/react"
import { Menu, MenuItem, MenuProps, SubMenu } from "../src"

export default {
  title: "NAVIGATION/Menu",
  component: Menu,
} as Meta

const Template: StoryFn<MenuProps> = (args) => {
  return (
    <>
      <p>Horizontal</p>
      <Menu {...args}>
        <MenuItem value={"1"} disabled>
          Blog
        </MenuItem>
        <MenuItem value={"2"}>Tutorial</MenuItem>
        <MenuItem value={"3"}>Docs</MenuItem>
        <MenuItem value={"4"}>Community</MenuItem>
        <MenuItem value={"5"}>Github</MenuItem>
      </Menu>

      <p>Horizontal overflow</p>
      <Menu {...args} style={{ width: 200 }}>
        <MenuItem value={"1"} disabled>
          Blog
        </MenuItem>
        <MenuItem value={"2"}>Tutorial</MenuItem>
        <MenuItem value={"3"}>Docs</MenuItem>
        <MenuItem value={"4"}>Community</MenuItem>
        <MenuItem value={"5"}>Github</MenuItem>
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
      style={{ height: 600 }}
      hasCollapseButton
      defaultOpenKeys={["0"]}
      defaultSelectedKeys={["0_1"]}
      {...args}
    >
      <SubMenu
        value="0"
        label={<ImageDefaultIcon style={{ marginRight: 16 }} />}
      >
        <MenuItem value="0_0">Menu 1</MenuItem>
        <MenuItem value="0_1">Menu 2</MenuItem>
        <MenuItem value="0_2" disabled>
          Menu 3
        </MenuItem>
      </SubMenu>
      <SubMenu
        value="1"
        label={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 2
          </>
        }
      >
        <MenuItem value="1_0">Menu 1</MenuItem>
        <MenuItem value="1_1">Menu 2</MenuItem>
        <MenuItem value="1_2">Menu 3</MenuItem>
        <SubMenu value="0_0_0_0" label={"Second Sub Menu"}>
          <MenuItem value="0_0_1_1">Menu 2</MenuItem>
          <MenuItem value="0_0_1_2">Menu 3</MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu
        value="2"
        label={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 3
          </>
        }
      >
        <MenuItem value="2_0_0">Menu 1</MenuItem>
        <MenuItem value="2_0_1">Menu 2</MenuItem>
        <MenuItem value="2_1_0">Menu 3</MenuItem>
        <MenuItem value="2_1_1">Menu 4</MenuItem>
      </SubMenu>
      <MenuItem value="4_0_0">Menu 1</MenuItem>
      <MenuItem value="4_0_1">Menu 2</MenuItem>
      <MenuItem value="5_0_0">Menu 1</MenuItem>
      <MenuItem value="5_0_1">Menu 2</MenuItem>
      <SubMenu
        value="3"
        label={
          <>
            <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 4
          </>
        }
      >
        <MenuItem value="3_0_0">Menu 1</MenuItem>
        <MenuItem value="3_0_1">Menu 2</MenuItem>
        <MenuItem value="3_1_0">Menu 3</MenuItem>
        <MenuItem value="3_1_1">Menu 4</MenuItem>
      </SubMenu>
    </Menu>
  )
}
VerticalMenu.args = {
  defaultOpenKeys: ["0", "1", "2"],
  triggerProps: {
    trigger: "click",
  },
}

export const PopButton = (args: MenuProps) => {
  const [visible, setVisible] = useState(false)
  const renderMenu = () => (
    <Menu {...args}>
      <MenuItem value="0_0">
        <ImageDefaultIcon style={{ marginRight: 8 }} />
        Menu 1
      </MenuItem>
      <MenuItem value="0_2">
        <ImageDefaultIcon style={{ marginRight: 8 }} />
        Menu 3
      </MenuItem>
      <MenuItem value="0_3">
        <ImageDefaultIcon style={{ marginRight: 8 }} />
        Menu 4
      </MenuItem>
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
          cursor: "pointer",
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
