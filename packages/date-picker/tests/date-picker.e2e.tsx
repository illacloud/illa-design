import { DatePicker } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

const dayjs = require("dayjs")

it("visible change", () => {
  const onVisibleChange = cy.stub().as("onVisibleChange")
  mount(
    <DatePicker placeholder={"DatePicker"} onVisibleChange={onVisibleChange} />,
  )
  cy.findByPlaceholderText("DatePicker").click()
  cy.get("@onVisibleChange").should("be.calledOnce")
  unmount()
})

it("use shortcuts", () => {
  mount(
    <DatePicker
      placeholder={"shortcuts DatePicker"}
      shortcuts={[
        {
          text: "target day",
          value: () => dayjs("2022-04-15"),
        },
      ]}
    />,
  )
  cy.findByPlaceholderText("shortcuts DatePicker").click()
  cy.findByText("target day").click()
  cy.findByDisplayValue("2022-04-15").should("exist")
  unmount()
})

it("show time picker, typeof showTime is boolean", () => {
  mount(<DatePicker showTime popupVisible />)
  cy.findAllByText("01")
    .first()
    .click()
  cy.findByText("OK").click()
  cy.findByDisplayValue(`${dayjs().format("YYYY-MM-DD")} 01:00:00`).should(
    "exist",
  )
  unmount()
})

it("show time picker, typeof showTime is Object, extends of TimePickerProps", () => {
  const disabledHours = () => {
    return [1]
  }
  mount(<DatePicker showTime={{ disabledHours: disabledHours }} popupVisible />)
  cy.findAllByText("01")
    .first()
    .should("have.css", "cursor", "not-allowed")
  unmount()
})

it("clear data", () => {
  const clearEvent = cy.stub().as("clearEvent")
  mount(
    <DatePicker
      placeholder={"clear data"}
      value="2021-01-01"
      onClear={clearEvent}
    />,
  )
  cy.findByDisplayValue("2021-01-01")
    .parent()
    .trigger("mouseenter")
    .then(() => {
      cy.findByTitle("InputClearIcon")
        .click()
        .then(() => {
          cy.get("@clearEvent").should("be.calledOnce")
          cy.get("input").should("not.have.value", "2021-01-01")
        })
    })
  unmount()
})

it("click Today button", () => {
  mount(
    <DatePicker showNowBtn showTime popupVisible format={"YYYY-MM-DD HH:mm"} />,
  )
  cy.findByText("Now")
    .click()
    .then(() => {
      cy.findByDisplayValue(dayjs().format("YYYY-MM-DD HH:mm")).should("exist")
    })
  unmount()
})
