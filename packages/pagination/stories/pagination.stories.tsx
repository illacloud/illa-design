import { Meta, Story } from "@storybook/react"
import { Pagination, PaginationProps } from "../src"
import { useState } from "react"
import { PaginationState } from "@tanstack/table-core"

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
    currentPage: {
      control: false,
    },
    pageSize: { control: false },
    showTotal: {
      control: {
        type: "boolean",
      },
    },
    sizeOptions: {
      control: false,
    },
  },
} as Meta

const Template: Story<PaginationProps> = (args) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  return (
    <Pagination
      total={20}
      currentPage={pageIndex}
      {...args}
      onChange={(pageIndex: number, pageSize: number) => {
        setPagination({ pageIndex: pageIndex, pageSize })
      }}
    />
  )
}

export const Basic = Template.bind({})
