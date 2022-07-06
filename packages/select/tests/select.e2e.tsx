import { Select, Option } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { JSTransformerIcon } from "@illa-design/icon"

it("Select render correctly", () => {
  mount(<Select placeholder={"test select"} value={"test"} />)
  cy.findByText("test").parent().click()
  cy.findByText("No data").should("exist")
  unmount()
})

it("Select render with error type", () => {
  const focusEvent = cy.stub().as("focusEvent")
  mount(<Select error value={"test"} onFocus={focusEvent} />)
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
  mount(
    <Select
      allowClear
      placeholder={"test"}
      options={[1, 2, 3]}
      onChange={changeEvent}
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

it("Select test with click checkbox", () => {
  const changeEvent = cy.stub().as("changeEvent")

  mount(
    <Select
      multiple
      placeholder={"test"}
      options={[1, 2, 3]}
      onChange={changeEvent}
    />,
  )
  cy.findByPlaceholderText("test").parent().click()
  cy.findAllByRole("checkbox")
    .first()
    .click()
    .then(() => {
      cy.get("@changeEvent").should("be.calledWith", [1])
      cy.findAllByRole("checkbox").first().click()
      cy.get("@changeEvent").should("be.calledWith", [])
    })
  unmount()
})

it("Select render with multiple", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  const onDeselectEvent = cy.stub().as("onDeselectEvent")

  mount(
    <Select
      multiple
      placeholder={"test"}
      options={[1, 2, 3]}
      maxTagCount={2}
      onChange={changeEvent}
      onDeselect={onDeselectEvent}
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
  cy.findAllByTitle("CloseIcon")
    .first()
    .parent()
    .click()
    .then(() => {
      cy.get("@changeEvent").should("be.calledWith", [2, 3])
    })
  cy.get("@visibleChangeEvent").should("be.calledOnce")
  cy.get("@onDeselectEvent").should("be.calledOnce")
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

describe("Select renders with placeholder", () => {
  it("Placeholder should be visible", () => {
    mount(<Select placeholder={"placeholder"} options={[1, 2, 3]} />)
    cy.findByPlaceholderText("placeholder").should("be.visible")
    unmount()
  })

  it("Placeholder should be inVisible with value", () => {
    mount(<Select value={1} placeholder={"placeholder"} options={[1, 2, 3]} />)
    cy.findByPlaceholderText("placeholder").should("not.be.visible")
    unmount()
  })

  it("Placeholder should be visible with empty string", () => {
    mount(
      <Select
        allowClear
        placeholder={"placeholder"}
        value=""
        options={["1", "2", "3"]}
      />,
    )
    cy.findByPlaceholderText("placeholder").should("be.visible")
    unmount()
  })

  it("With `showSearch` enabled, placeholder shoule be same with selected option if option is NOT custom option", () => {
    mount(<Select showSearch placeholder={"placeholder"} options={[1, 2, 3]} />)
    cy.findByPlaceholderText("placeholder").click()
    // select option 1
    cy.findByText("1").click()
    // click select to input search, and placeholder shoule be `1`
    cy.findByText("1").click()
    cy.findByPlaceholderText("1").should("be.visible")
    unmount()
  })

  it("With `showSearch` enabled, placeholder shoule be same placeholder prop if option is custom option", () => {
    mount(
      <Select showSearch placeholder={"placeholder"}>
        <Option value={1}>
          <JSTransformerIcon /> option
        </Option>
      </Select>,
    )
    cy.findByPlaceholderText("placeholder").click()
    // select option `option`
    cy.findByText("option").click()
    // click select to input search, and placeholder shoule be still be `placeholder`
    cy.findByText("option").click()
    cy.findByPlaceholderText("option").should("not.exist")
    cy.findByPlaceholderText("placeholder").should("be.visible")
    unmount()
  })
})
