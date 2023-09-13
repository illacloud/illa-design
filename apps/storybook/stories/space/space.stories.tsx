import { Meta, StoryFn } from "@storybook/react"
import { Space, SpaceProps, Tag } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Layout/Space",

  component: Space,
} as Meta

const Template: StoryFn<SpaceProps> = (props) => {
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
