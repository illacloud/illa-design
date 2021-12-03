import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tag, TagProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { BsFacebook, BsTwitch, BsTwitter } from "react-icons/bs"
import { withTests } from "@storybook/addon-jest"
import { Space } from "@illa-design/space"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Data Display/Tag",
  component: Tag,
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "zpl://screen?sid=617f92d08bb52d043a5dc189&pid=617f7cd2526c70be1a3bf3ff",
  },
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
