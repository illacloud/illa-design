import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tree, TreeProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tree",
  component: Tree,
  argTypes: {},
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
      title: "floor 1️⃣",
      key: "0-0",
      children: [
        {
          title: "floor 2️⃣ ",
          key: "0-0-0",
          disabled: true,
          children: [
            {
              title: "🍃",
              key: "0-0-0-0",
              disableCheckbox: true,
            },
            {
              title: "🍃",
              key: "0-0-0-1",
            },
          ],
        },
        {
          title: "floor 2️⃣ ",
          key: "0-0-1",
          children: [
            {
              title: (
                <span
                  style={{
                    color: "#1890ff",
                  }}
                >
                  🍃
                </span>
              ),
              key: "0-0-1-0",
            },
          ],
        },
      ],
    },
  ]

  return <Tree treeData={data} />
}

export const Basic = Template.bind({})
