import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Button, ButtonProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "",
  },
  argTypes: {
    template: {
      options: ["large", "small", "medium"],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const T: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = T.bind({})
