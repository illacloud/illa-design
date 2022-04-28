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
  cy.contains("0-1-xixixixixix").should("exist")
  unmount()
})

it("TreeSelect renders with onChangeEvent", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  mount(<TreeSelect treeData={data} onChange={onChangeEvent} />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.contains("0-1-xixixixixix").trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", "0-1")
  unmount()
})

it("TreeSelect renders with showSearch", () => {
  mount(<TreeSelect treeData={data} showSearch />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.findByTitle("SearchIcon").should("exist")
  unmount()
})

it("TreeSelect renders with multiple", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  mount(<TreeSelect treeData={data} multiple onChange={onChangeEvent} />)
  cy.findByTitle("ExpandIcon").parent().trigger("click")
  cy.contains("0-1-xixixixixix").trigger("click")
  cy.contains("0-0-head").trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", ["0-1", "0-0"])
  unmount()
})

it("TreeSelect renders with remove", () => {
  const onChangeEvent = cy.spy().as("onChangeEvent")
  mount(<TreeSelect treeData={data} multiple onChange={onChangeEvent} />)
  cy.contains("ExpandIcon").parent().trigger("click")
  cy.contains("0-1-xixixixixix").trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", ["0-1"])
  cy.contains("CloseIcon").parent().trigger("click")
  cy.get("@onChangeEvent").should("be.calledWith", [])
  unmount()
})

it("TreeSelect renders with search", () => {
  const onSearchEvent = cy.spy().as("onSearchEvent")
  mount(<TreeSelect onSearch={onSearchEvent} treeData={data} multiple />)
  cy.get("input").type("0-0")
  cy.contains("0-1-xixixixixix").should("not.exist")
  cy.contains("0-0-0").should("exist")
  cy.get("@onSearchEvent").should("be.called")
  unmount()
})

it("TreeSelect search with nothing matched", () => {
  const onSearchEvent = cy.spy().as("onSearchEvent")
  mount(<TreeSelect onSelect={onSearchEvent} treeData={data} multiple />)
  cy.get("input").type("left")
  cy.contains("No data").should("exist")
  unmount()
})

it("TreeSelect search with clear", () => {
  const clearEvent = cy.spy().as("clearEvent")
  mount(
    <TreeSelect
      onClear={clearEvent}
      defaultValue="0-0"
      allowClear
      treeData={data}
    />,
  )
  cy.contains("0-0-head").should("exist")
  cy.contains("0-0-head").trigger("focus")
  cy.contains("ErrorIcon").parent().trigger("click")
  cy.get("0-0-head").should("not.exist")
  unmount()
})

it("TreeSelect renders correctly", () => {
  mount(<TreeSelect treeData={data} />)
  cy.contains("ExpandIcon").parent().trigger("click")
  cy.contains("0-0-0").should("exist")
  cy.contains("CaretDownIcon").first().parent().trigger("click")
  cy.contains("0-0-0").should("not.exist")
  unmount()
})

it("TreeSelect test with check ", () => {
  mount(<TreeSelect treeData={data} multiple treeCheckable />)
  cy.contains("ExpandIcon").parent().trigger("click")
  cy.contains("0-0-1").parent().prev().trigger("click")
  cy.contains("CheckmarkIcon").should("exist")
  unmount()
})

it("TreeSelect test with remove check ", () => {
  const clearEvent = cy.spy().as("clearEvent")
  mount(
    <TreeSelect
      onClear={clearEvent}
      defaultValue={["0-0"]}
      allowClear
      multiple
      treeCheckable
      treeData={data}
    />,
  )
  cy.contains("0-0-head").should("exist")
  cy.contains("CloseIcon").parent().trigger("click")
  cy.contains("0-0-head").should("not.exist")
  unmount()
})
