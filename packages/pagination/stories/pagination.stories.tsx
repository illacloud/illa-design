import { Meta, Story } from "@storybook/react"

import { Pagination } from "../src"
import { PaginationProps } from "../src"
import { ReactNode } from "react"

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
