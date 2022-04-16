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
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as Meta

const Template: Story<TreeProps> = (args) => {
  const data = [
    {
      title: "0-0-head",
      key: "0-0",
      children: [
        {
          title: "0-0-0 ",
          key: "0-0-0",
          disabled: true,
          children: [
            {
              title: "aoao",
              key: "0-0-0-0",
              disableCheckbox: true,
            },
            {
              title: "aoao",
              key: "0-0-0-1",
              children: [
                {
                  title: "toutou",
                  key: "0-0-0-0-0",
                  disableCheckbox: true,
                },
                {
                  title: "toutou",
                  key: "0-0-0-1-1",
                },
              ],
            },
          ],
        },
        {
          title: "0-0-1",
          key: "0-0-1",
          children: [
            {
              title: <span>xixi</span>,
              key: "0-0-1-0",
            },
          ],
        },
      ],
    },
    {
      title: "0-1",
      key: "0-1",
    },
  ]

  return <Tree {...args} treeData={data} />
}

export const Basic = Template.bind({})
