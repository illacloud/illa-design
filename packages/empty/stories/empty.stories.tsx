import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Empty, EmptyProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Empty",
  decorators: [withTests({ results })],
  argTypes: {
    description: {
      control: {
        type: "text",
      },
    },
    imgSrc: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const empty: Story<EmptyProps> = (props) => <Empty {...props} />
