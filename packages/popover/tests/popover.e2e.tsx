import * as React from "react"
import { Button } from "@illa-design/button"
import { mount, unmount } from "@cypress/react"
import { Popover } from "@illa-design/popover"
import "@testing-library/cypress"

it("Popover renders correctly", () => {
  mount(
    <Popover content="Popover" closeDelay={0} openDelay={0} position={"bottom"}>
      <Button>Hello</Button>
    </Popover>,
  )
  cy.findByText("Hello").click()
  cy.findByText("Hello").click()
  cy.wait(200)
  cy.findByText("Popover").should("exist")
  cy.findByText("Close").should("exist")
  cy.findByText("Close").click()
  cy.wait(200)
  cy.findByText("Popover").should("not.exist")
  unmount()
})
