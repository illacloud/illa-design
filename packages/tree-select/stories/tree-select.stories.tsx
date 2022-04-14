import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { TreeSelect, TreeSelectProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/TreeSelect",
  component: TreeSelect,
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as Meta

const Template: Story<TreeSelectProps> = (args) => {
  const treeData = [
    {
      title: "Trunk 0-0",
      value: "Trunk 0-0",
      key: "0-0",
      children: [
        {
          title: "Leaf 0-0-1",
          value: "Leaf 0-0-1",
          key: "Leaf 0-0-1",
        },
        {
          title: "Branch 0-0-2",
          value: "Branch 0-0-2",
          key: "0-0-2",
          children: [
            {
              title: "Leaf 0-0-2-1",
              value: "Leaf 0-0-2-1",
              key: "Leaf 0-0-2-1",
            },
          ],
        },
      ],
    },
    {
      title: "Trunk 0-1",
      value: "Trunk 0-1",
      key: "0-1",
      children: [
        {
          title: "Branch 0-1-1",
          value: "Branch 0-1-1",
          key: "0-1-1",
          checkable: false,
          children: [
            {
              title: "Leaf 0-1-1-1",
              value: "Leaf 0-1-1-1",
              key: "0-1-1-1",
            },
            {
              title: "Leaf 0-1-1-2",
              value: "Leaf 0-1-1-2",
              key: "0-1-1-2",
              disabled: true,
            },
          ],
        },
        {
          title: "Leaf 0-1-2",
          value: "Leaf 0-1-2",
          key: "0-1-2",
        },
      ],
    },
  ]
  return <TreeSelect {...args} treeData={treeData} showSearch={true} />
}

export const Basic = Template.bind({})
