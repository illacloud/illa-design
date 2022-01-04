import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tag, TagProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { BsFacebook, BsTwitch, BsTwitter } from "react-icons/bs"
import { withTests } from "@storybook/addon-jest"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tag",
  component: Tag,
  decorators: [withTests({ results })],
  argTypes: {
    icon: {
      control: false,
    },
    onClose: {
      control: false,
    },
  },
} as Meta

const Template: Story<TagProps> = (args) => {
  return <Space size="medium">
    <Tag {...args}>Hello</Tag>
    <Tag icon={<BsFacebook />} variant="outline" {...args}>Hello</Tag>
    <Tag icon={<BsTwitch />} {...args}>e</Tag>
    <Tag icon={<BsTwitter />} variant="fill" {...args}>Hello</Tag>
  </Space>
}

export const Basic = Template.bind({})
