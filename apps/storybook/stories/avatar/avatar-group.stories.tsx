import { Meta, StoryFn } from "@storybook/react"
import { Avatar, AvatarGroup, AvatarProps } from "@illa-design/react"
import { BsGithub, BsMailbox, BsTwitch } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/AvatarGroup",
  component: AvatarGroup,
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

const Template: StoryFn<AvatarProps> = (args) => {
  return (
    <AvatarGroup {...args}>
      <Avatar icon={<BsMailbox />} />
      <Avatar icon={<BsGithub />} />
      <Avatar icon={<BsTwitch />} />
      <Avatar text="A" />
      <Avatar text="B" />
    </AvatarGroup>
  )
}

export const Basic = Template.bind({})
