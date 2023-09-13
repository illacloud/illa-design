import { Meta, StoryFn } from "@storybook/react"
import { Tag, TagProps, Space } from "@illa-design/react"

import { BsFacebook, BsTwitch, BsTwitter } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tag",
  component: Tag,

  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

const Template: StoryFn<TagProps> = (args) => {
  return (
    <Space size="medium">
      <Tag {...args}>Hello</Tag>
      <Tag icon={<BsFacebook />} variant="outline" {...args}>
        Hello
      </Tag>
      <Tag icon={<BsTwitch />} {...args}>
        e
      </Tag>
      <Tag icon={<BsTwitter />} variant="fill" {...args}>
        Hello
      </Tag>
    </Space>
  )
}

export const Basic = Template.bind({})
