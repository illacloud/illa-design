import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Popover, PopoverProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Button } from "@illa-design/button"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Popover",
  component: Popover,
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

export const Basic: Story<PopoverProps> = (args) => <Popover {...args} content="Popover">
  <Button>Hello Popover</Button>
</Popover>
