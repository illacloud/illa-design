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
  const data = [
    {
      title: "0-0-head",
      key: "0-0",
      value: "0-0",
      children: [
        {
          title: "0-0-0 ",
          key: "0-0-0",
          value: "0-0-0",
          disabled: true,
          children: [
            {
              title: "aoao",
              key: "0-0-0-0",
              value: "0-0-0-0",
              disableCheckbox: true,
            },
            {
              title: "aoao",
              key: "0-0-0-1",
              value: "0-0-0-1",
              children: [
                {
                  title: "toutou",
                  key: "0-0-0-0-0",
                  value: "0-0-0-0-0",
                  disableCheckbox: true,
                },
                {
                  title: "toutou",
                  value: "0-0-0-1-1",
                  key: "0-0-0-1-1",
                },
              ],
            },
          ],
        },
        {
          title: "0-0-1",
          key: "0-0-1",
          value: "0-0-1",
          children: [
            {
              title: <span>xixi</span>,
              key: "0-0-1-0",
              value: "0-0-1-0",
            },
          ],
        },
      ],
    },
    {
      title: "0-1-xixixixixix",
      value: "0-1",
      key: "0-1",
    },
  ]
  return <TreeSelect {...args} treeData={data} showSearch={true} />
}

export const Basic = Template.bind({})
