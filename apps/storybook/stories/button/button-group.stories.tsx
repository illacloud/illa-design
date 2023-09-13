import { Meta, StoryFn } from "@storybook/react"
import { Button, ButtonGroup, ButtonGroupProps } from "@illa-design/react"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "GENERAL/ButtonGroup",
  component: ButtonGroup,
} as Meta

export const Basic: StoryFn<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button>Hello</Button>
      <Button leftIcon={<BsFacebook />}>Hello</Button>
      <Button rightIcon={<BsFacebook />}>Hello</Button>
      <Button leftIcon={<BsFacebook />} variant="outline">
        Hello
      </Button>
      <Button loading loadingText="loading text">
        Hello
      </Button>
      <Button loading>Hello</Button>
      <Button leftIcon={<BsFacebook />} />
      <Button loading />
      <Button variant="fill">Fill</Button>
      <Button variant="text">Text</Button>
      <Button disabled={true}>Disable</Button>
    </ButtonGroup>
  )
}
