import { Meta, Story } from "@storybook/react"
import { Table, TableProps, TBody, Td, TFoot, Th, Thead, Tr } from "../src"
import { useMemo } from "react"

export default {
  title: "DATA DISPLAY/Table",
  component: Table,
  argTypes: {
    data: {
      control: false,
    },
    columns: {
      control: false,
    },
    _css: {
      control: false,
    },
  },
} as Meta

export const Basic: Story<TableProps<any>> = (args) => {
  return (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>First</Th>
          <Th>Second</Th>
          <Th>Third</Th>
        </Tr>
      </Thead>
      <TBody>
        <Tr>
          <Td>1</Td>
          <Td>2</Td>
          <Td>3</Td>
        </Tr>
        <Tr>
          <Td>4</Td>
          <Td>5</Td>
          <Td>6</Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td>7</Td>
          <Td>8</Td>
          <Td>9</Td>
        </Tr>
      </TFoot>
    </Table>
  )
}

export const InputData: Story<TableProps<any>> = (args) => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: "Column 1",
        Footer: "Footer 1",
        accessor: "col1", // accessor is the "key" in the data
        Filter: () => {
          return <span>123</span>
        },
      },
      {
        Header: "Column 2",
        Footer: "Footer 2",
        accessor: "col2",
      },
    ],
    [],
  )
  return <Table data={data} columns={columns} {...args} />
}
