import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Space, SpaceProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Tag } from "@illa-design/tag"
import { Image } from "@illa-design/image"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Space",
  decorators: [withTests({ results })],
  component: Space,
  argTypes: {
    size: {
      control: {
        type: "text",
      },
    },
    align: {
      options: ["start", "center", "end", "baseline"],
      control: {
        type: "select",
      },
    },
    direction: {
      options: ["vertical", "horizontal"],
      control: {
        type: "select",
      },
    },
    divider: {
      control: {
        type: "boolean",
      },
    },
    wrap: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta

const Template: Story<SpaceProps> = (props) => {
  return <Space {...props} style={{
    width: "100px",
  }}>
    <Tag size="large">B</Tag>
    <Tag>我</Tag>
    <Image style={{
      marginLeft: "10px",
    }} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
    <Tag>English</Tag>
    <Tag>开</Tag>
  </Space>
}

export const Basic = Template.bind({})


