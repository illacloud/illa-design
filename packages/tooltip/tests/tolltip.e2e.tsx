import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Tooltip } from "../src"

it("Tooltip render correctly", () => {
  mount(<Tooltip content="Tooltip">Test</Tooltip>)
  cy.findByText("Test").trigger("mouseover")
  cy.findByText("Tooltip").should("exist")
  unmount()
})
