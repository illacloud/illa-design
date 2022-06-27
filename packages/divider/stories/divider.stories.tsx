import { Meta, Story } from "@storybook/react"
import { Divider, DividerProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Layout/Divider",
  component: Divider,
  argTypes: {
    colorScheme: {
      options: [
        "gray",
        "blue",
        "purple",
        "red",
        "green",
        "yellow",
        "orange",
        "cyan",
        "white",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: Story<DividerProps> = (props) => <Divider {...props} />

export const Basic = Template.bind({})
