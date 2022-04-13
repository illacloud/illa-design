import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { NodeInstance, Tree, TreeProps } from "../src"
import { useState } from "react"
import { TreeDataType } from "../dist/types"
import { infoAllow404 } from "@changesets/cli/dist/declarations/src/commands/publish/npm-utils"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tree/loadmore",
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

  const [treeData, setTreeData] = useState(data)

  const loadMore = (treeNode: NodeInstance) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (treeNode?.props?.dataRef) {
          treeNode!.props!.dataRef!.children = [
            { title: `leaf`, key: `${treeNode.props._key}-1`, isLeaf: true },
          ]
        }
        setTreeData([...treeData])

        resolve()
      }, 1000)
    })
  }

  return <Tree blockNode loadMore={loadMore} treeData={treeData} />
}

export const Basic = Template.bind({})
