import * as React from "react"
import { Calendar } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("onSelect", () => {
  mount(<Calendar headerType={"select"} />)
  cy.findByText(2022).click()
  cy.findByText(2021).click()
  expect(cy.findByText(2021)).exist
  unmount()
})
