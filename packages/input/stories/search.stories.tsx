import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { PersonIcon } from "@illa-design/icon"
import {InputProps, Input, SearchProps, Search} from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Input",
  component: Search,
  decorators: [withTests({ results })],
} as Meta


export const search: Story<SearchProps> = (props) => {
    return (
        <div>
            <Search {...props} />
        </div>
    )
}