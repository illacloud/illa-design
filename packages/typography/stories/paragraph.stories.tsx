import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Paragraph, ParagraphProps, Typography } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Typography/Paragraph",
  component: Paragraph,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<ParagraphProps> = (args) => <Typography>
  <Paragraph {...args}>A design is a plan or specification for the construction of an object or system or for the
    implementation of an activity or process, or the result of that plan or specification in the form of a prototype,
    product or process. The verb to design expresses the process of developing a design. In some cases, the direct
    construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and
    graphic design) may also be considered to be a design activity.</Paragraph>
</Typography>
