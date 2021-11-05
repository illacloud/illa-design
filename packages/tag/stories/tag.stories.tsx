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
      defaultValue: "small",
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["light", "fill", "outline"],
      defaultValue: "light",
      control: {
        type: "select",
      },
    },
    colorScheme: {
      defaultValue: "gray",
      control: {
        type: "text",
      },
    },
    visible: {
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
    closable: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    icon: {
      defaultValue: <BsGithub />,
    },
  },
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args}>Hello</Tag>

export const Basic = Template.bind({})
