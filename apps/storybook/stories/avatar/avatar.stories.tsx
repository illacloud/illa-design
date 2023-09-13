import { Meta, StoryFn } from "@storybook/react"
import { Avatar, AvatarProps } from "@illa-design/react"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Avatar",
  component: Avatar,

  argTypes: {
    icon: {
      control: false,
    },
    colorScheme: {
      options: [
        "white",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "cyan",
        "purple",
        "grayBlue",
        "techPink",
        "techPurple",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
