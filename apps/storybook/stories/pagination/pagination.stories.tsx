import { Meta, StoryFn } from "@storybook/react"
import { Pagination, PaginationProps } from "@illa-design/react"

export default {
  title: "DATA DISPLAY/Pagination",
  component: Pagination,
} as Meta

const Template: StoryFn<PaginationProps> = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Pagination {...args} total={100} pageSize={10} />
      <Pagination {...args} total={100} pageSize={10} showJumper={true} />
      <Pagination {...args} total={100} pageSize={10} showMore={true} />
      <Pagination {...args} total={100} pageSize={10} simple={true} />
      <Pagination
        {...args}
        total={100}
        pageSize={10}
        simple={true}
        sizeCanChange
      />
      <Pagination {...args} total={100} pageSize={10} showTotal />
    </div>
  )
}

export const Basic = Template.bind({})
