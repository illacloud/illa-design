import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarProps } from "../src"
import { BsFacebook } from "react-icons/bs"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Avatar",
  component: Avatar,
  decorators: [withTests({ results })],
  argTypes: {
    icon: {
      control: false,
    }
  }
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({
  icon: <BsFacebook />,
})


