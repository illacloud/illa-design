import { Meta, Story } from "@storybook/react"
import {
  Table,
  TableData,
  TableProps,
  TBody,
  Td,
  TFoot,
  Th,
  Thead,
  Tr,
} from "../src"
import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"

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

interface DemoData extends TableData {
  col1: string
  col2: string
}

export const CombineHeader: Story<TableProps<any>> = (args) => {
  const data = useMemo(
    () => [
      {
        col1: "A",
        col2: "D",
      } as DemoData,
      {
        col1: "C",
        col2: "F",
        disableRowSelect: true,
      } as DemoData,
      {
        col1: "B",
        col2: "E",
      } as DemoData,
    ],
    [],
  )

  const columns = useMemo(() => {
    const c: ColumnDef<DemoData>[] = [
      {
        header: "Common",
        columns: [
          {
            header: "Header 1",
            accessorKey: "col1", // accessor is the "key" in the data
          },
          {
            header: "Header 2",
            accessorKey: "col2",
          },
        ],
      },
    ]
    return c
  }, [])
  return <Table w="100%" h="100px" data={data} columns={columns} {...args} />
}
