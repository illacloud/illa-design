import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Progress } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { ProgressProps } from "../dist/types"

//👇 This default export determines where your story goes in the story list
export default {
  title: "FEEDBACK/Progress",
  component: Progress,
  decorators: [withTests({ results })],
  argTypes: {
    type: {
      control: false,
    },
    percent: {
      control: {
        type: "range", min: 0, max: 100, step: 1,
      },
    },
    color: {
      control: {
        type: "text"
      }
    },
    trailColor: {
      control: {
        type: "text"
      }
    }
  },
} as Meta

export const Basic: Story<ProgressProps> = (args) => <Progress type="line" {...args} />


