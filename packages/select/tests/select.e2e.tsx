import { Select } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("Select renders correctly", () => {
  mount(<Select placeholder={"test select"} value={"test"} />)
  cy.findByText("test").click()
  cy.findByText("No data").should("exist")
  unmount()
})

it("Select renders correctly", () => {
  mount(<Select error value={"test"} />)
  cy.findByText("test").click()
  cy.findByText("No data").should("exist")
  unmount()
})

it("Select renders with text", () => {
  const change = cy.spy()
  mount(
    <Select
      placeholder={"test"}
      options={[1, 2, 3]}
      onVisibleChange={change}
    />,
  )
  cy.findByPlaceholderText("test").click()
  cy.findByText("1").click()
  cy.findByText("1").should("exist")
  unmount()
})

it("Select renders with multiple", async () => {
  const change = cy.spy()
  mount(
    <Select
      placeholder={"test"}
      options={[1, 2, 3]}
      onVisibleChange={change}
    />,
  )
  cy.findByPlaceholderText("test").click()
  cy.findByText("1").click()
  cy.findByText("2").click()
  cy.findAllByText("1").should("exist")
  cy.findAllByText("2").should("exist")
  unmount()
})
