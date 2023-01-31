import { Meta, StoryFn } from "@storybook/react"
import { Menu, MenuItemProps, MenuProps, SubMenuProps } from "../src"
import { AiFillFacebook, AiFillInstagram } from "react-icons/all"
import { BsTwitter } from "react-icons/bs"

export default {
  title: "NAVIGATION/Menu",
  component: Menu,
} as Meta

export const Vertical: StoryFn<MenuProps> = (args) => {
  return <Menu mode="vertical" items={[]} {...args} />
}

export const Horizontal: StoryFn<MenuProps> = (args) => {
  return (
    <>
      <Menu
        mode="horizontal"
        items={[
          {
            value: "first",
            label: "First",
            icon: <AiFillFacebook />,
            subItems: [
              {
                value: "first:first",
                label: "First",
                icon: <AiFillInstagram />,
              } as MenuItemProps,
              { value: "second:second", label: "Second" } as MenuItemProps,
            ],
          } as SubMenuProps,
          { value: "second", label: "Second" } as MenuItemProps,
          {
            icon: <BsTwitter />,
            value: "third",
            label: "Third",
          } as MenuItemProps,
        ]}
        {...args}
      />
      <Menu
        style={{ marginTop: 20 }}
        mode="horizontal"
        selectedValues={["first:first"]}
        items={[
          {
            value: "first",
            label: "First",
            icon: <AiFillFacebook />,
            subItems: [
              {
                value: "first:first",
                label: "First",
                icon: <AiFillInstagram />,
              } as MenuItemProps,
              { value: "second:second", label: "Second" } as MenuItemProps,
            ],
          } as SubMenuProps,
          { value: "second", label: "Second" } as MenuItemProps,
          {
            icon: <BsTwitter />,
            value: "third",
            label: "Third",
          } as MenuItemProps,
        ]}
        {...args}
      />
    </>
  )
}
