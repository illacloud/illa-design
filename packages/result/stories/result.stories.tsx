import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Result, ResultProps } from "../src"
import { Button } from "@illa-design/button"

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

const Template: Story<ResultProps> = (props) => {
  return <Result {...props}></Result>
}

export const Basic = Template.bind({})
