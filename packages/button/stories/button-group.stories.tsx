import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Button, ButtonGroup, ButtonGroupProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/ButtonGroup",
  component: ButtonGroup,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<ButtonGroupProps> = (args) => {
  return <ButtonGroup {...args}>
    <Button>Hello</Button>
    <Button leftIcon={<BsFacebook />}>Hello</Button>
    <Button rightIcon={<BsFacebook />}>Hello</Button>
    <Button leftIcon={<BsFacebook />} variant="outline">Hello</Button>
    <Button loading loadingText="loading text">Hello</Button>
    <Button loading>Hello</Button>
    <Button leftIcon={<BsFacebook />} />
    <Button loading />
    <Button variant="fill">Fill</Button>
    <Button variant="text">Text</Button>
    <Button disabled={true}>Disable</Button>
  </ButtonGroup>
}
