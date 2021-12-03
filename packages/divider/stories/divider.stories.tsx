import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Divider, DividerProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Divider",
  decorators: [withTests({ results })],
  component: Divider,
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["solid", "dashed", "dotted", "double"],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: Story<DividerProps> = (props) => <Divider {...props} />

export const Basic = Template.bind({})


