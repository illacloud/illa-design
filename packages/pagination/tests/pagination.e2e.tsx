import * as React from "react"
import { Pagination } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("Pagination renders with sizeOptions", () => {
  mount(
    <Pagination
      placeholder={"pagination"}
      sizeCanChange={true}
      sizeOptions={[20, 40, 60, 80]}
      total={100}
    />,
  )
  cy.findByDisplayValue("20/Page").click()
  cy.findAllByText("80/Page").should("exist")
  unmount()
})

it("Pagination renders with pageSizeSelect", () => {
  const change = cy.spy()
  mount(
    <Pagination
      total={100}
      defaultCurrent={6}
      onPageSizeChange={change}
      placeholder={"pagination"}
    />,
  )
  cy.findByDisplayValue("10/Page").click()
  cy.findByText("20/Page").click()
  cy.findAllByText("20/Page").should("exist")
  unmount()
})
