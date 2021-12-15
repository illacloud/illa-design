import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { CloseIcon, CopyIcon, IconProps, LoadingIcon, PersonIcon } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Icon",
  decorators: [withTests({ results })],
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
export const Loading: Story<IconProps> = (props) => <LoadingIcon {...props} />
export const Copy: Story<IconProps> = (props) => <CopyIcon {...props} />


