import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Space, SpaceProps } from "../src"
import results from "../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Tag } from "@illa-design/tag"
import { Image } from "@illa-design/image"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Layout/Space",
  decorators: [withTests({ results })],
  component: Space,
} as Meta

const Template: Story<SpaceProps> = (props) => {
  return <Space {...props} style={{
    width: "300px",
  }}>
    <Tag>B</Tag>
    <Tag>我</Tag>
    <Tag>English</Tag>
    <Tag>开</Tag>
  </Space>
}

export const Basic = Template.bind({})


