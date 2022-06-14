import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Table, TableData, TableFilter } from "../src"
import { UseFiltersInstanceProps } from "react-table"
import { css } from "@emotion/react"
import { Input } from "@illa-design/input"
import { useState } from "react"

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
  },
]

it("Table renders filter", () => {
  mount(
    <Table
      data-testid="test-table"
      data={data}
      columns={columns}
      disableRowSelect
    />,
  )
  cy.findByTitle("FilterIcon").parent().click()
  cy.get("input")
    .type("World")
    .then(() => {
      cy.findByText("Hello").should("not.exist")
    })
  cy.get("input")
    .clear()
    .then(() => {
      cy.findByText("Hello").should("exist")
    })
  unmount()
})
