import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarProps } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Avatar",
  component: Avatar,

  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
