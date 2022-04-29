import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tree, TreeProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tree",
  component: Tree,
  argTypes: {
    defaultCheckedKeys: {
      control: false,
    },
    checkedKeys: {
      control: false,
    },
    defaultExpandedKeys: {
      control: false,
    },
    expandedKeys: {
      control: false,
    },
    defaultSelectedKeys: {
      control: false,
    },
    selectedKeys: {
      control: false,
    },
    treeData: {
      control: false,
    },
    allowDrop: {
      control: false,
    },
    dragIcon: { control: false },
    switcherIcon: { control: false },
    loadingIcon: { control: false },
  },
} as Meta

const Template: Story<TreeProps> = (args) => {
  const data = [
    {
      title: "toutou 01",
      key: "0-0-0-0-0",
      children: [
        {
          title: "leaf-1",
          key: "0-0-0-0-0-0",
        },
        {
          title: "leaf-2",
          key: "0-0-0-0-0-1",
        },
      ],
    },
    {
      title: "toutou 02",
      key: "0-0-0-1-1",
    },
  ]
  return <Tree {...args} treeData={data} />
}

export const Basic = Template.bind({})
