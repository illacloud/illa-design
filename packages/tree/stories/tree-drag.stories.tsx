import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tree, TreeProps, TreeDataType } from "../src"
import { useState } from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tree/drag",
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

  return (
    <Tree
      draggable
      blockNode
      //checkable={checked}
      onDrop={(info) => {
        const loop = (
          data: TreeDataType[],
          key?: string,
          callback?: (
            item: TreeDataType,
            index: number,
            arr: TreeDataType[],
          ) => void,
        ) => {
          data.some((item, index, arr) => {
            if (item.key === key) {
              callback && callback(item, index, arr)
              return true
            }
            if (item.children) {
              return loop(item.children, key, callback)
            }
          })
        }
        const data = [...treeData]
        let dragItem: TreeDataType
        loop(data, info.dragNode.props._key, (item, index, arr) => {
          arr.splice(index, 1)
          dragItem = item
        })
        if (info.dropPosition === 0) {
          loop(data, info.dropNode.props._key, (item, index, arr) => {
            item.children = item.children || []
            item.children.push(dragItem)
          })
        } else {
          loop(data, info.dropNode.props._key, (item, index, arr) => {
            arr.splice(info.dropPosition < 0 ? index : index + 1, 0, dragItem)
          })
        }
        setTreeData([...data])
      }}
      treeData={treeData}
      {...args}
    />
  )
}

export const Basic = Template.bind({})
