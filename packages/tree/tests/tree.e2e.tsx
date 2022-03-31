import { mount, unmount } from "@cypress/react"
import * as React from "react"
import { Tree } from "../src"
import "@testing-library/cypress"

const data = [
  {
    title: "0-0-head",
    key: "0-0",
    children: [
      {
        title: "0-0-0 ",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "aoao",
            key: "0-0-0-0",
          },
          {
            title: "aoao",
            key: "0-0-0-1",
            children: [
              {
                title: "toutou 01",
                key: "0-0-0-0-0",
              },
              {
                title: "toutou 02",
                key: "0-0-0-1-1",
              },
            ],
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          {
            title: <span>xixi</span>,
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
  },
]

it("Tree renders draggable", () => {
  const dragLeaveEvent = cy.stub().as("dragLeaveEvent")
  const dragStartEvent = cy.stub().as("dragStartEvent")
  const dragEndEvent = cy.stub().as("dragEndEvent")
  const dragOverEvent = cy.stub().as("dragOverEvent")
  const dropEvent = cy.stub().as("dropEvent")
  mount(
    <Tree
      treeData={data}
      draggable={true}
      onDragLeave={dragLeaveEvent}
      onDragOver={dragOverEvent}
      onDragStart={dragStartEvent}
      onDragEnd={dragEndEvent}
      onDrop={dropEvent}
    />,
  )

  const dataTransfer = new DataTransfer()
  cy.findByText("0-0-head")
    .parent()
    .trigger("dragstart", { dataTransfer })
    .trigger("dragover", { dataTransfer })
    .trigger("dragleave", { dataTransfer })
    .trigger("drop", { dataTransfer })
    .trigger("dragend", { dataTransfer })

  cy.get("@dragLeaveEvent").should("to.be.called")
  cy.get("@dragStartEvent").should("to.be.called")
  cy.get("@dragEndEvent").should("to.be.called")
  cy.get("@dragOverEvent").should("to.be.called")
  cy.get("@dropEvent").should("to.be.called")

  unmount()
})
