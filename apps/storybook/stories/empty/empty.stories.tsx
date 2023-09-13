import { Meta, StoryFn } from "@storybook/react"
import { Empty, EmptyProps } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Empty",
  component: Empty,

  argTypes: {
    description: {
      control: {
        type: "text",
      },
    },
    imgSrc: {
      control: {
        type: "text",
      },
    },
  },
} as Meta

export const Basic: StoryFn<EmptyProps> = (props) => <Empty {...props} />
