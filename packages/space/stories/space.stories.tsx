import { Meta, Story } from "@storybook/react"
import { Space, SpaceProps } from "../src"

import { Tag } from "@illa-design/tag"
import { Image } from "@illa-design/image"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Layout/Space",

  component: Space,
} as Meta

const Template: Story<SpaceProps> = (props) => {
  return (
    <Space
      {...props}
      style={{
        width: "300px",
      }}
    >
      <Tag>B</Tag>
      <Tag>我</Tag>
      <Tag>English</Tag>
      <Tag>开</Tag>
    </Space>
  )
}

export const Basic = Template.bind({})
