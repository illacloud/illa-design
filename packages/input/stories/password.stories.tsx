import { Meta, Story } from "@storybook/react"
import { Password, PasswordProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Password,
} as Meta

export const password: Story<PasswordProps> = (props) => {
  return (
    <div>
      <Password style={{ width: 280 }} {...props} />
    </div>
  )
}
