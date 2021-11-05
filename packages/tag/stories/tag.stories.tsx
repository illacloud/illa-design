import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tag } from "@illa-design/tag"
import { BsGithub } from "react-icons/bs"
import { TagProps } from "../dist/types/interface"


//👇 This default export determines where your story goes in the story list
export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    size: {
      options: ["large", "small", "medium"],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["light", "fill", "outline"],
      control: {
        type: "select",
      },
    },
    colorScheme: {
      control: {
        type: "text",
      },
    },
    visible: {
      control: {
        type: "boolean",
      },
    },
    closable: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args}>Hello</Tag>

export const Basic = Template.bind({})

Basic.args = {
  icon: <BsGithub />,
}
