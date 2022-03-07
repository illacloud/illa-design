import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Comment, CommentProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Comment",
  component: Comment,
} as Meta

export const Basic: Story<CommentProps> = (args) => <Comment />
