import { Cascader } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

const options = [
  {
    value: "beijing",
    label: "Beijing",
    children: [
      {
        value: "chaoyang",
        label: "Chaoyang",
        children: [
          {
            value: "datunli",
            label: "Datunli",
          },
        ],
      },
      {
        value: "xicheng",
        label: "Xicheng",
        disabled: true,
      },
    ],
  },
  {
    value: "shanghai",
    label: "Shanghai",
    children: [
      {
        value: "huangpu",
        label: "Huangpu",
      },
    ],
  },
  {
    value: "guangdong",
    label: "Guangdong",
    children: [
      {
        value: "shenzhen",
        label: "Shenzhen",
      },
    ],
  },
]

it("Cascader render correctly", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const clearEvent = cy.stub().as("clearEvent")
  mount(
    <Cascader
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onClear={clearEvent}
      allowClear
    />,
  )

  cy.findByPlaceholderText("test").should("exist")
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("Shanghai").click()
  cy.findByText("Huangpu").click()
  cy.findByDisplayValue("Shanghai / Huangpu").should("exist")
  cy.get("@changeEvent").should("be.calledWith", ["shanghai", "huangpu"])

  cy.findByDisplayValue("Shanghai / Huangpu")
    .parent()
    .trigger("hover")
    .then(() => {
      cy.findByTitle("selectRemoveIcon")
        .click()
        .then(() => {
          cy.get("@clearEvent").should("be.calledOnce")
          cy.get("@changeEvent").should("be.calledTwice")
          cy.get("input").should("have.value", "")
        })
    })
  unmount()
})

it("Cascader rende with expandTrigger hover", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const clearEvent = cy.stub().as("clearEvent")
  mount(
    <Cascader
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onClear={clearEvent}
      expandTrigger={"hover"}
      allowClear
    />,
  )

  cy.findByPlaceholderText("test").parent().click()
  cy.wait(150)
  cy.findByText("Shanghai")
    .trigger("mouseenter")
    .then(() => {
      cy.findByText("Huangpu").click()
      cy.findByDisplayValue("Shanghai / Huangpu").should("exist")
      cy.get("@changeEvent").should("be.calledWith", ["shanghai", "huangpu"])

      cy.findByDisplayValue("Shanghai / Huangpu")
        .parent()
        .trigger("hover")
        .then(() => {
          cy.findByTitle("selectRemoveIcon")
            .click()
            .then(() => {
              cy.get("@clearEvent").should("be.calledOnce")
              cy.get("@changeEvent").should("be.calledTwice")
              cy.get("input").should("have.value", "")
            })
        })
    })
  unmount()
})

it("Cascader render with multiple", () => {
  const changeEvent = cy.stub().as("changeEvent")
  mount(
    <Cascader
      multiple
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      allowClear
    />,
  )

  cy.findByPlaceholderText("test").should("exist")
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("Shanghai").click()
  cy.findByText("Huangpu").click()
  cy.findByText("Shanghai / Huangpu").should("exist")
  cy.get("@changeEvent").should("be.calledWith", [["shanghai", "huangpu"]])

  cy.findByText("Shanghai / Huangpu")
    .parent()
    .next()
    .click()
    .then(() => {
      cy.get("@changeEvent").should("be.calledTwice")
      cy.get("input").should("have.value", "")
    })
  unmount()
})

it("Cascader render with input type", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  const searchEvent = cy.stub().as("searchEvent")
  mount(
    <Cascader
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onSearch={searchEvent}
      onVisibleChange={visibleChangeEvent}
      showSearch
      allowClear
    />,
  )
  cy.get("input")
    .type("Shanghai")
    .then(() => {
      cy.get("@searchEvent").should("be.called")
      cy.findByText("Shanghai / Huangpu").should("exist")
      cy.findByText("Shanghai / Huangpu").click()
      cy.get("input").should("have.value", "Shanghai / Huangpu")
      cy.get("@changeEvent").should("be.calledOnce")
      cy.get("@visibleChangeEvent").should("be.calledTwice")
    })
  unmount()
})
