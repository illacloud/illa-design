import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tree, TreeProps, TreeNode, NodeInstance } from "../src"
import { useState } from "react"
import { infoAllow404 } from "@changesets/cli/dist/declarations/src/commands/publish/npm-utils"

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
      title: "0-0",
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

  const [treeData, setTreeData] = useState(data)

  const loadMore = (node: NodeInstance) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (node?.props?.dataRef) {
          node.props.dataRef.children = [
            { title: `leaf`, key: `${node.props._key}-1`, isLeaf: true },
          ]
        }
        setTreeData([...treeData])
        resolve()
      }, 1000)
    })
  }

  return (
    <Tree {...args}>
      <TreeNode key={"node-0-0"} title={"0-0"} checkable={false} />
      <TreeNode key={"node-0-1"} title={"0-1"}>
        <TreeNode key={"node-0-1-0"} title={"0-1-0"} />
        <TreeNode key={"node-0-1-1"} title={"0-1-1"} />
        <TreeNode key={"node-0-1-2"} title={"0-1-2"}>
          <TreeNode key={"node-0-1-2-0"} title={"0-1-2-0"} />
          <TreeNode key={"node-0-1-2-1"} title={"0-1-2-1"} />
        </TreeNode>
      </TreeNode>
      <TreeNode key={"node-0-2"} title={"0-2"} />
    </Tree>
  )
}

export const Basic = Template.bind({})
