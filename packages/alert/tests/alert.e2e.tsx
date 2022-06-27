import * as React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Alert } from "../src"

it("Alert renders with afterClose event", () => {
  const afterCloseEvent = cy.stub().as("afterCloseEvent")
  mount(<Alert title={"Alert"} afterClose={afterCloseEvent} closable={true} />)
  cy.findByTitle("CloseIcon").parent().click()
  cy.get("@afterCloseEvent").should("be.called")
  unmount()
})
