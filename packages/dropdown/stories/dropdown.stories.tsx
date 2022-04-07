import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Dropdown, DropdownProps } from "../src"
import { Button } from "@illa-design/button"

//👇 This default export determines where your story goes in the story list
export default {
  title: "NAVIGATION/Dropdown",
  component: Dropdown,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

export const Basic: Story<DropdownProps> = (args) => (
  <div>
    <Dropdown {...args}>
      <Button>Click me</Button>
    </Dropdown>
  </div>
)
