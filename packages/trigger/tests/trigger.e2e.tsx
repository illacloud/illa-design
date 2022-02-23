import * as React from "react"
import { Trigger } from "../src"
import { Button } from "@illa-design/button"
import { mount } from "@cypress/react"
import "@testing-library/cypress"
import { globalColor, illaPrefix } from "@illa-design/theme"

it("Trigger renders correctly", () => {
  mount(
    <Trigger content="Trigger Success Custom">
      <Button>Hello Trigger Custom</Button>
    </Trigger>,
  )
  cy.findByText("Hello Trigger Custom").trigger("mouseover")
  expect(cy.findByText("Trigger Success Custom")).exist
})

it("Trigger renders with close icon", () => {
  mount(
    <Trigger content="Trigger Success Custom" hasCloseIcon>
      <Button>Hello Trigger Custom</Button>
    </Trigger>,
  )
  cy.findByText("Hello Trigger Custom").trigger("mouseover")
  cy.findByText("Close").should("exist")
  cy.findByText("Close").trigger("click")
  cy.findByText("Trigger Success Custom").should("not.exist")
})

it("Trigger renders with different color", () => {
  mount(
    <Trigger content="Trigger Success Custom" colorScheme="#123456">
      <Button>Hello Trigger Custom</Button>
    </Trigger>,
  )
  cy.findByText("Hello Trigger Custom").trigger("mouseover")
  cy.findByText("Trigger Success Custom")
    .parent()
    .parent()
    .should("have.css", "background-color", "rgb(18, 52, 86)")
  cy.findByText("Trigger Success Custom").should(
    "have.css",
    "color",
    globalColor(`--${illaPrefix}-white-02`),
  )
})

it("Trigger renders without padding", () => {
  mount(
    <Trigger content="Trigger" withoutPadding>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByText("Trigger")
    .parent()
    .parent()
    .should("not.have.a.property", "padding")
})
