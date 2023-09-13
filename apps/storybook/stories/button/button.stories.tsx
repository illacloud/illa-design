import { Meta, StoryFn } from "@storybook/react"
import { Space, Button, ButtonProps } from "@illa-design/react"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Button",
  component: Button,

  argTypes: {
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
} as Meta

export const Basic: StoryFn<ButtonProps> = (args) => {
  return (
    <Space direction="vertical" align="start" wrap>
      <Button {...args}>Hello</Button>
      <Button {...args} leftIcon={<BsFacebook />}>
        Hello
      </Button>
      <Button {...args} rightIcon={<BsFacebook />}>
        Hello
      </Button>
      <Button {...args} leftIcon={<BsFacebook />} variant="outline">
        Hello
      </Button>
      <Button {...args} loading loadingText="loading text">
        Hello
      </Button>
      <Button {...args} loading>
        Hello
      </Button>
      <Button {...args} leftIcon={<BsFacebook />} />
      <Button {...args} loading />
      <Button {...args} disabled={true}>
        Disable
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </Space>
  )
}
