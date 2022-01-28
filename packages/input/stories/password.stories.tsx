import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Password, PasswordProps } from "../src"
import results from "../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Password,
  decorators: [withTests({ results })],
} as Meta

export const password: Story<PasswordProps> = (props) => {
  return (
    <div>
      <Password {...props} />
    </div>
  )
}
