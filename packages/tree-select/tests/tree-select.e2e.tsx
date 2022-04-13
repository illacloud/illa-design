import { mount, unmount } from "@cypress/react"
import * as React from "react"
import "@testing-library/cypress"
import { TreeSelect } from "../src"

const data = [
  {
    title: "0-0-head",
    key: "0-0",
    value: "0-0",
    children: [
      {
        title: "0-0-0 ",
        key: "0-0-0",
        value: "0-0-0",
        disabled: true,
        children: [
          {
            title: "aoao",
            key: "0-0-0-0",
            value: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "aoao",
            key: "0-0-0-1",
            value: "0-0-0-1",
            children: [
              {
                title: "toutou",
                key: "0-0-0-0-0",
                value: "0-0-0-0-0",
                disableCheckbox: true,
              },
              {
                title: "toutou",
                value: "0-0-0-1-1",
                key: "0-0-0-1-1",
              },
            ],
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        value: "0-0-1",
        children: [
          {
            title: <span>xixi</span>,
            key: "0-0-1-0",
            value: "0-0-1-0",
          },
        ],
      },
    ],
  },
  {
    title: "0-1-xixixixixix",
    value: "0-1",
    key: "0-1",
  },
]

it("TreeSelect renders correctly", () => {
  mount(<TreeSelect treeData={data} />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.findByText("0-1-xixixixixix").should("exist")
  unmount()
})

it("TreeSelect renders with onChangeEvent", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  mount(<TreeSelect treeData={data} onChange={onChangeEvent} />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.findByText("0-1-xixixixixix").trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", "0-1")
  unmount()
})

it("TreeSelect renders with showSearch", () => {
  mount(<TreeSelect treeData={data} showSearch={true} />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.findByTitle("SearchIcon").should("exist")
  unmount()
})

it("TreeSelect renders with multiple", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  mount(<TreeSelect treeData={data} multiple={true} onChange={onChangeEvent} />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.findByText("0-1-xixixixixix").trigger("click")
  cy.findByText("0-0-head").trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", ["0-1", "0-0"])
  unmount()
})

it("TreeSelect renders with remove", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  mount(<TreeSelect treeData={data} multiple={true} onChange={onChangeEvent} />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.findByText("0-1-xixixixixix").trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", ["0-1"])
  cy.findByTitle("CloseIcon").parent().trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", [])
  unmount()
})

it("TreeSelect renders with remove", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  mount(
    <TreeSelect
      treeData={data}
      allowClear={true}
      multiple={true}
      onChange={onChangeEvent}
    />,
  )
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.findByText("0-1-xixixixixix").trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", ["0-1"])
  cy.findByTitle("CloseIcon").parent().trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", [])
  unmount()
})
