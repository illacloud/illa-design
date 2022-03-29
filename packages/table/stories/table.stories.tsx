import { Meta, Story } from "@storybook/react"
import { Table, TableProps } from "../src"

export default {
  title: "DataDisplay/Table",
  component: Table,
} as Meta

const Template: Story<TableProps> = (args) => {
  return <Table {...args} />
}

export const Basic = Template.bind({})
