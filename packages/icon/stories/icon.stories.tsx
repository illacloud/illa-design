import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { CloseIcon, Icon, IconProps, PersonIcon } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Icon",
  decorators: [withTests({ results })],
  parameters: {
    zeplinLink: "zpl://screen?pid=617f7cd2526c70be1a3bf3ff&sid=618baf3bcf5233aab8b8dfad",
  },
  argTypes: {
    spin: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Close: Story<IconProps> = (props) => <CloseIcon {...props} />
export const Person: Story<IconProps> = (props) => <PersonIcon {...props} />


