import * as React from "react"
import { Meta } from "@storybook/react"
import { CloseIcon, PersonIcon } from "@illa-design/icon"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Icon",
} as Meta

export const Close: React.VFC = () => <CloseIcon spin={true} />
export const Person: React.VFC = () => <PersonIcon />


