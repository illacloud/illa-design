import { TPRangePicker } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("RangePicker render correctly", () => {
  const changeEvent = cy.stub().as("changeEvent")
  mount(<TPRangePicker placeholder={["test"]} onChange={changeEvent} />)
  cy.findByPlaceholderText("test").should("exist")
  cy.findByPlaceholderText("test").click()
  cy.findAllByText("01").first().click()
  cy.findByDisplayValue("01:00:00").should("exist")
  cy.findByText("OK")
    .click()
    .then(() => {
      cy.findAllByText("02").first().click()
      cy.findByText("OK").click()
      cy.findByDisplayValue("02:00:00").should("exist")
      cy.get("@changeEvent").should("be.calledWith", ["01:00:00", "02:00:00"])
    })
  unmount()
})

it("RangePicker render with clearEvent and selectEvent", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const clearEvent = cy.stub().as("clearEvent")
  const selectEvent = cy.stub().as("selectEvent")
  mount(
    <TPRangePicker
      placeholder={["use12Hours"]}
      onChange={changeEvent}
      onClear={clearEvent}
      onSelect={selectEvent}
      use12Hours
    />,
  )

  cy.findByPlaceholderText("use12Hours").should("exist")
  cy.findByPlaceholderText("use12Hours").click()
  cy.findAllByText("01").first().click()
  cy.get("@selectEvent").should("be.calledWith", ["01:00:00"])
  cy.findByText("OK").click()
  cy.findAllByText("02").first().click()
  cy.get("@selectEvent").should("be.calledWith", ["01:00:00", "02:00:00"])
  cy.findByText("OK").click()
  cy.findByDisplayValue("01:00:00")
    .parent()
    .trigger("hover")
    .then(() => {
      cy.findByTitle("InputClearIcon")
        .click()
        .then(() => {
          cy.get("@clearEvent").should("be.calledOnce")
          cy.get("@changeEvent").should("be.calledTwice")
        })
    })
  unmount()
})
