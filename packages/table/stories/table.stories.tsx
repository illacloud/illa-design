import { Meta, Story } from "@storybook/react"
import {
  Table,
  TableData,
  TableFilter,
  TableProps,
  TBody,
  Td,
  TFoot,
  Th,
  Thead,
  Tr,
} from "../src"
import { useMemo, useState } from "react"
import { Row, UseFiltersInstanceProps } from "react-table"
import { Input } from "@illa-design/input"
import { css } from "@emotion/react"

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

interface DemoData extends TableData {
  col1: string
  col2: string
}

export const DataDriven: Story<TableProps<any>> = (args) => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      } as DemoData,
      {
        col1: "react-table",
        col2: "rocks",
        disableRowSelect: true,
      } as DemoData,
      {
        col1: "whatever",
        col2: "you want",
      } as DemoData,
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: "Column 1",
        Footer: "Footer 1",
        accessor: "col1", // accessor is the "key" in the data
        Filter: (columnProps: UseFiltersInstanceProps<DemoData>) => {
          const [currentInput, setCurrentInput] = useState<string>("")
          return (
            <TableFilter
              _css={css`
                margin-left: 4px;
              `}
              renderFilterContent={(
                columnProps?: UseFiltersInstanceProps<DemoData>,
              ) => {
                return (
                  <Input
                    value={currentInput}
                    onChange={(value) => {
                      setCurrentInput(value)
                      columnProps?.setFilter("col1", value)
                    }}
                  />
                )
              }}
              columnProps={columnProps}
            />
          )
        },
        filter: "includes", // equals, between
      },
      {
        Header: "Column 2",
        Footer: "Footer 2",
        accessor: "col2",
        Filter: (columnProps: UseFiltersInstanceProps<DemoData>) => {
          const [currentInput, setCurrentInput] = useState<string>("")
          return (
            <TableFilter
              _css={css`
                margin-left: 4px;
              `}
              renderFilterContent={(
                columnProps?: UseFiltersInstanceProps<DemoData>,
              ) => {
                return (
                  <Input
                    value={currentInput}
                    onChange={(value) => {
                      setCurrentInput(value)
                      columnProps?.setFilter("col2", value)
                    }}
                  />
                )
              }}
              columnProps={columnProps}
            />
          )
        },
        filter: (
          rows: Array<Row>,
          columnIds: Array<String>, //
          filterValue: string,
        ) => {
          if (filterValue == "") {
            return rows
          }
          return rows.filter((value) => {
            return (
              (value.cells.find((value) => {
                return columnIds.includes(value.column.id)
              })?.value as string) ?? ""
            ).includes(filterValue)
          })
        },
      },
    ],
    [],
  )
  return <Table data={data} columns={columns} {...args} />
}

export const CombineHeader: Story<TableProps<any>> = (args) => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      } as DemoData,
      {
        col1: "react-table",
        col2: "rocks",
        disableRowSelect: true,
      } as DemoData,
      {
        col1: "whatever",
        col2: "you want",
      } as DemoData,
    ],
    [],
  )

  const columns = useMemo(
    () => [
      {
        Header: "Common",
        columns: [
          {
            Header: "Header 1",
            accessor: "col1", // accessor is the "key" in the data
          },
          {
            Header: "Header 2",
            accessor: "col2",
          },
        ],
      },
    ],
    [],
  )
  return <Table data={data} columns={columns} {...args} />
}
