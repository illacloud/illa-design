import { Meta, Story } from "@storybook/react"
import * as React from "react"
import { Pagination } from "../src"
import { PaginationProps } from "../src"
import { CopyIcon } from "@illa-design/icon"
import { Icons } from "../src"

export default {
  title: "DATA DISPLAY/Pagination",
  component: Pagination,
  argTypes: {
    icons: {
      control: false,
    },
  },
} as Meta

const Template: Story<PaginationProps> = (args) => (
  <Pagination
    {...args}
    defaultCurrent={2}
    icons={{ prev: <CopyIcon /> } as Icons}
  />
)

export const Basic = Template.bind({})
