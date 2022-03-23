import { Meta, Story } from "@storybook/react"
import { Pagination, PaginationProps } from "../src"

export default {
  title: "DATA DISPLAY/Pagination",
  component: Pagination,
  argTypes: {
    prevIcon: {
      control: false,
    },
    nextIcon: {
      control: false,
    },
    moreIcon: {
      control: false,
    },
  },
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Basic = Template.bind({})
