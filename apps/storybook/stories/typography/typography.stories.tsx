import { Meta, StoryFn } from "@storybook/react"
import {
  Heading,
  HeadingProps,
  Paragraph,
  Text,
  Typography,
} from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Typography/Typography",
  component: Typography,
} as Meta

export const Basic: StoryFn<HeadingProps> = (args) => {
  return (
    <Typography>
      <Heading level="h4">I am title</Heading>
      <Paragraph>
        A design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The verb to design expresses the process of developing a
        design. In some cases, the direct construction of an object without an
        explicit prior plan (such as in craft work, some engineering, coding,
        and graphic design) may also be considered to be a design activity.
      </Paragraph>
      <Text>Text</Text>
      <Text>Text</Text>
    </Typography>
  )
}
