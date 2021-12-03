import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Avatar, AvatarGroup, AvatarProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { BsGithub, BsMailbox, BsTwitch } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Data Display/AvatarGroup",
  component: AvatarGroup,
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "zpl://screen?sid=6183c5489b28c93340ca98c5&pid=617f7cd2526c70be1a3bf3ff",
  },
} as Meta

const Template: Story<AvatarProps> = (args) => {
  return <AvatarGroup {...args}>
    <Avatar icon={<BsMailbox />} />
    <Avatar icon={<BsGithub />} />
    <Avatar icon={<BsTwitch />} />
    <Avatar text="A" />
    <Avatar text="B" />
  </AvatarGroup>
}

export const Basic = Template.bind({})


