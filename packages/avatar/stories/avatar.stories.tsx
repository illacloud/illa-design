import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarProps } from "@illa-design/avatar"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    colorScheme: {
      defaultValue: "blue",
      control: {
        type: "text",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      defaultValue: "small",
      control: {
        type: "select",
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    shape: {
      options: ["circle", "square"],
      defaultValue: "circle",
      control: {
        type: "select",
      },
    },
    icon: {},
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({
  icon: <BsFacebook />,
})


