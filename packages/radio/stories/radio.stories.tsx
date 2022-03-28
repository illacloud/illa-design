import { Meta, Story } from "@storybook/react"
import { Radio, RadioProps } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Radio",
  component: Radio,
} as Meta

const Template: Story<RadioProps> = (args) => <Radio {...args}>ILLA</Radio>

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
