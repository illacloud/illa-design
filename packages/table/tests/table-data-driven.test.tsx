import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Table, TableData } from "../src"
import { ColumnDef } from "@tanstack/react-table"

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

const columns: ColumnDef<DemoData>[] = [
  {
    header: "Column 1",
    footer: "Footer 1",
    accessorKey: "col1", // accessor is the "key" in the data
  },
  {
    header: "Column 2",
    footer: "Footer 2",
    accessorKey: "col2",
  },
]

test("Data Driven Table renders correctly.", async () => {
  render(<Table data-testid="test-table" data={data} columns={columns} />)
  expect(screen.getByTestId("test-table")).toBeInTheDocument()
  expect(screen.queryAllByTitle("SorterDefaultIcon").length == 2)
  expect(screen.queryAllByTitle("FilterIcon").length == 2)
  expect(screen.queryAllByRole("FilterIcon").length == 2)
  expect(screen.queryAllByRole("checkbox").length == 4)
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
