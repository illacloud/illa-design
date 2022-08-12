import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
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
    enableColumnFilter: false,
  },
  {
    header: "Column 2",
    footer: "Footer 2",
    accessorKey: "col2",
  },
]

it("Table renders filter", () => {
  mount(
    <Table
      data-testid="test-table"
      data={data}
      columns={columns}
      disableSortBy
    />,
  )
  cy.findByTitle("FilterIcon").should("exist")
  unmount()
})
