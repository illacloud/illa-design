import { Meta, StoryFn } from "@storybook/react"
import { Password, PasswordProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Password",
  component: Password,
} as Meta

export const Basic: StoryFn<PasswordProps> = (props) => {
  return <Password {...props} />
}
