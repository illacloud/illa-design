import * as React from "react"
import { Calendar } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("onSelect", () => {
  mount(<Calendar headerType={"select"} />)
  cy.findByDisplayValue(2022).click()
  cy.wait(100)
  cy.findByText(2016).click()
  cy.wait(100)
  cy.findByDisplayValue(2016).should("exist")
  unmount()
})
