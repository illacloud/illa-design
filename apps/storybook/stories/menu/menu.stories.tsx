import { Meta, StoryFn } from "@storybook/react"
import {
  Menu,
  MenuItemProps,
  MenuProps,
  SubMenuProps,
} from "@illa-design/react"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"

export default {
  title: "NAVIGATION/Menu",
  component: Menu,
} as Meta

const Vertical: StoryFn<MenuProps> = (args) => {
  return (
    <>
      <Menu
        mode="vertical"
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
              {
                value: "third:third",
                label: "Third",
                disabled: true,
              } as MenuItemProps,
            ],
          } as SubMenuProps,
          { value: "second", label: "Second", disabled: true } as MenuItemProps,
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
        mode="vertical"
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
      <Menu
        style={{ marginTop: 20, width: "200px" }}
        mode="vertical"
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

const Horizontal: StoryFn<MenuProps> = (args) => {
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
              {
                value: "third:third",
                label: "Third",
                disabled: true,
              } as MenuItemProps,
            ],
          } as SubMenuProps,
          { value: "second", label: "Second", disabled: true } as MenuItemProps,
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
      <Menu
        style={{ marginTop: 20, width: "200px" }}
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
    </>
  )
}

export const Basic: StoryFn<MenuProps> = (props) => {
  return (
    <>
      <Vertical {...props} />
      <Horizontal {...props} />
    </>
  )
}
