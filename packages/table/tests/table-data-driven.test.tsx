import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Table, TableData, TableFilter } from "../src"
import { useMemo, useState } from "react"
import { Row, UseFiltersInstanceProps } from "react-table"
import { css } from "@emotion/react"
import { Input } from "@illa-design/input"

interface DemoData extends TableData {
  col1: string
  col2: string
}

const data = [
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
]

const columns = [
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
  },
]

test("Data Driven Table renders correctly.", async () => {
  render(<Table data-testid="test-table" data={data} columns={columns} />)
  expect(screen.getByTestId("test-table")).toBeInTheDocument()
  expect(screen.queryAllByTitle("SorterDefaultIcon").length == 2)
  expect(screen.queryAllByTitle("FilterIcon").length == 2)
  expect(screen.queryAllByRole("FilterIcon").length == 2)
  expect(screen.queryAllByRole("checkbox").length == 4)
  const checkboxList = await screen.findAllByRole<HTMLInputElement>("checkbox")
  expect(checkboxList[2]).toBeDisabled()
})

test("Data Driven Table renders with disableSortBy.", () => {
  render(
    <Table
      data-testid="test-table"
      data={data}
      columns={columns}
      disableSortBy={true}
    />,
  )
  expect(screen.queryAllByTitle("SorterDefaultIcon").length == 0)
})

test("Data Driven Table renders with disableFilter.", () => {
  render(
    <Table
      data-testid="test-table"
      data={data}
      columns={columns}
      disableFilters={true}
    />,
  )
  expect(screen.queryAllByTitle("FilterIcon").length == 0)
})

test("Data Driven Table renders with disableRowSelect.", () => {
  render(
    <Table
      data-testid="test-table"
      data={data}
      columns={columns}
      disableRowSelect={true}
    />,
  )
  expect(screen.queryAllByRole("checkbox").length == 0)
})

test("Data Driven Table renders with row-select", async () => {
  const onRowSelect = jest.fn()
  render(
    <Table
      data-testid="test-table"
      data={data}
      columns={columns}
      onRowSelectChange={onRowSelect}
    />,
  )
  const checkBoxList = await screen.queryAllByRole("checkbox")
  fireEvent.click(checkBoxList[0])
  expect(onRowSelect).toBeCalled()
})
