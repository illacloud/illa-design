import { mount, unmount } from "@cypress/react"
import * as React from "react"
import "@testing-library/cypress"
import { Countdown } from "../src"

it("Countdown renders with correctly", () => {
  mount(<Countdown value={Date.now() + 1000} title={"Deadline"} />)
  cy.contains("00:00:00").should("be.visible")
})

it("Countdown renders with onFinishEvent and onChangeEvent", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  const onFinishEvent = cy.spy().as("onFinishEvent")
  mount(
    <Countdown
      value={Date.now() + 5000}
      onChange={onChangeEvent}
      onFinish={onFinishEvent}
    />,
  )
  cy.clock(Date.now())
  cy.tick(5000)
  cy.get("@onChangeEvent").should("be.called")
  cy.get("@onFinishEvent").should("be.called")
  unmount()
})
