import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { TextArea, TextAreaProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
    title: "DATA INPUT/Input",
    component: TextArea,
    decorators: [withTests({ results })],
} as Meta

export const textarea: Story<TextAreaProps> = (props) => {
    return (
        <div>
            <TextArea {...props} />
            <TextArea allowClear {...props} />
        </div>
    )
}