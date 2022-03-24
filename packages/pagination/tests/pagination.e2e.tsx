import * as React from "react"
import { Pagination } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("Pagination renders with sizeOptions", async () => {
  mount(
    <Pagination
      placeholder={"pagination"}
      sizeCanChange={true}
      sizeOptions={[20, 40, 60, 80]}
      total={100}
    />,
  )
  cy.findByText("20/Page").click()
  expect(cy.findAllByText("80/Page")).exist
  unmount()
})

it("Pagination renders with pageSizeSelect", async () => {
  const change = cy.spy()
  mount(
    <Pagination
      total={100}
      defaultCurrent={6}
      onPageSizeChange={change}
      placeholder={"pagination"}
    />,
  )
  cy.findByText("10/Page").click()
  cy.findByText("20/Page").click()
  expect(cy.findAllByText("20/Page")).exist
  unmount()
})
