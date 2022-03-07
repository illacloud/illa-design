import * as React from "react"
import { Button } from "@illa-design/button"
import { mount } from "@cypress/react"
import { Popover } from "@illa-design/popover"
import "@testing-library/cypress"

it("Popover renders correctly", () => {
  mount(
    <Popover content="Popover">
      <Button>Hello</Button>
    </Popover>,
  )
  cy.findByText("Hello").click()
  cy.findByText("Hello").click()
  cy.findByText("Popover").should("exist")
  cy.findByText("Close").should("exist")
  cy.findByText("Close").click()
  cy.findByText("Popover").should("not.exist")
})
