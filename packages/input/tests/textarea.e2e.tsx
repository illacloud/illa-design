import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { TextArea } from "../src"

it("TextArea test with minRows", () => {
  mount(<TextArea placeholder="test-autoSize" autoSize={{ minRows: 2 }} />)

  cy.findByPlaceholderText("test-autoSize").should("exist")
  cy.findByPlaceholderText("test-autoSize").should("have.css", "height", "63px")
  unmount()
})

it("TextArea test with maxRows", () => {
  mount(<TextArea placeholder="test" autoSize={{ maxRows: 3 }} />)

  cy.findByPlaceholderText("test")
    .type("1{enter}2")
    .should("have.css", "height", "63px")

  cy.findByPlaceholderText("test")
    .type("2{enter}333{enter}")
    .should("have.css", "height", "85px")
  unmount()
})
