import { Meta, Story } from "@storybook/react"
import { Pagination, PaginationProps } from "../src"

export default {
  title: "DATA DISPLAY/Pagination",
  component: Pagination,
} as Meta

const Template: StoryFn<PaginationProps> = (args) => {
  return <Pagination {...args} />
}

export const Basic = Template.bind({})
