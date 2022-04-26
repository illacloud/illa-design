import { Select } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("Select render correctly", () => {
  mount(<Select placeholder={"test select"} value={"test"} />)
  cy.findByText("test").parent().click()
  cy.findByText("No data").should("exist")
  unmount()
})

it("Select render with error type", () => {
  mount(<Select error value={"test"} />)
  cy.findByText("test").parent().click()
  cy.findByText("No data").should("exist")
  unmount()
})

it("Select render with allowClear", () => {
  const clearEvent = cy.stub().as("clearEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  mount(
    <Select
      allowClear
      placeholder={"test"}
      options={[1, 2, 3]}
      onClear={clearEvent}
      onVisibleChange={visibleChangeEvent}
    />,
  )
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("1")
    .click()
    .then(() => {
      cy.findByTitle("selectRemoveIcon")
        .click()
        .then(() => {
          cy.get("@clearEvent").should("be.calledOnce")
          cy.get("input").should("have.value", "")
        })
    })
  unmount()
})

it("Select render with click options", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  mount(
    <Select
      allowClear
      placeholder={"test"}
      options={[1, 2, 3]}
      onChange={changeEvent}
      onVisibleChange={visibleChangeEvent}
    />,
  )
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("1")
    .click()
    .then(() => {
      cy.get("@changeEvent").should("be.calledWith", 1)
    })
  unmount()
})

it("Select render with multiple", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  mount(
    <Select
      multiple
      placeholder={"test"}
      options={[1, 2, 3]}
      maxTagCount={2}
      onChange={changeEvent}
      onVisibleChange={visibleChangeEvent}
    />,
  )
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("1")
    .click()
    .then(() => {
      cy.get("@changeEvent").should("be.calledWith", [1])
    })
  cy.findByText("2").click()
  cy.findByText("3").click()
  cy.findByText("+1...").should("exist")
  cy.get("@visibleChangeEvent").should("be.calledOnce")
  unmount()
})

it("Select render with input typing", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  const searchEvent = cy.stub().as("searchEvent")

  mount(
    <Select
      placeholder={"test"}
      options={["Shanghai", "Huangpu", "Test"]}
      onSearch={searchEvent}
      onChange={changeEvent}
      onVisibleChange={visibleChangeEvent}
      showSearch
    />,
  )
  cy.findByPlaceholderText("test")
    .parent()
    .click()
    .then(() => {
      cy.get("input")
        .type("Shanghai")
        .then(() => {
          cy.get("@searchEvent").should("be.called")
          cy.findAllByText("Shanghai").last().click()
          cy.get("input").should("have.value", "Shanghai")
          cy.get("@changeEvent").should("be.calledOnce")
          cy.get("@visibleChangeEvent").should("be.calledTwice")
        })
    })
  unmount()
})

it("Select render with allowCreate", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  const searchEvent = cy.stub().as("searchEvent")

  mount(
    <Select
      placeholder={"test-allowCreate"}
      options={["Test"]}
      onSearch={searchEvent}
      onChange={changeEvent}
      onVisibleChange={visibleChangeEvent}
      showSearch
      allowCreate
    />,
  )
  cy.findByPlaceholderText("test-allowCreate")
    .parent()
    .click()
    .then(() => {
      cy.get("input")
        .type("type")
        .then(() => {
          cy.get("@searchEvent").should("be.called")
          cy.findAllByText("type").last().click()
          cy.get("input").should("have.value", "type")
          cy.get("@changeEvent").should("be.calledOnce")
          cy.get("@visibleChangeEvent").should("be.calledTwice")
        })
    })
  unmount()
})
