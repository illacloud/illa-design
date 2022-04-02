import { TimePicker } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("TimePicker render correctly", () => {
  const changeEvent = cy.stub().as("changeEvent")
  mount(<TimePicker placeholder={"test"} onChange={changeEvent} />)

  expect(cy.findByPlaceholderText("test")).exist
  cy.findByPlaceholderText("test").click()
  cy.findAllByText("01").first().click()
  cy.findByText("OK").click()
  expect(cy.findByDisplayValue("01:00:00")).exist
  cy.get("@changeEvent").should("be.calledWith", "01:00:00")
  unmount()
})

it("TimePicker render with clear event", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const clearEvent = cy.stub().as("clearEvent")
  mount(
    <TimePicker
      placeholder={"test use12Hours"}
      onChange={changeEvent}
      onClear={clearEvent}
      use12Hours
    />,
  )

  expect(cy.findByPlaceholderText("test use12Hours")).exist
  cy.findByPlaceholderText("test use12Hours").click()
  cy.findAllByText("02").first().click()
  cy.findByText("OK").click()
  expect(cy.findByDisplayValue("02:00:00")).exist
  cy.get("@changeEvent").should("be.calledWith", "02:00:00")
  cy.get("input").should("have.value", "02:00:00")
  cy.findByDisplayValue("02:00:00").parent()
    .trigger("hover")
    .then(() => {
      cy.findByTitle("InputClearIcon").click().then(()=>{
        cy.get("@clearEvent").should("be.calledOnce")
        cy.get("@changeEvent").should("be.calledTwice")
        cy.get("input").should("not.have.value", "02:00:00")
      })
    })
  unmount()
})

it("TimePicker test button Now", () => {
  const changeEvent = cy.stub().as("changeEvent")
  mount(<TimePicker placeholder={"test-now"} onChange={changeEvent} />)

  expect(cy.findByPlaceholderText("test-now")).exist
  cy.findByPlaceholderText("test-now").click()
  cy.findByText("Now").click()
  cy.findByText("OK").click()
  cy.get("@changeEvent").should("be.calledOnce")
  unmount()
})