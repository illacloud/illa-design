import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { List, ListProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/List",
  component: List,
} as Meta

export const Basic: Story<ListProps> = (args) => <List>List</List>
