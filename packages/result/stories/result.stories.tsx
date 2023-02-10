import * as React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Result, ResultProps } from "../src"
import { Button } from "@illa-design/react"

export default {
  title: "FEEDBACK/Result",
  component: Result,
  argTypes: {
    extra: {
      control: false,
    },
    icon: {
      control: false,
    },
    subTitle: {
      control: false,
    },
    title: {
      control: false,
    },
  },
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as Meta

const Template: StoryFn<ResultProps> = (props) => {
  return <Result {...props}></Result>
}

export const Basic = Template.bind({})
