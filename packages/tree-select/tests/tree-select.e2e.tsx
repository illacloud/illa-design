import { mount, unmount } from "@cypress/react"
import * as React from "react"
import "@testing-library/cypress"
import { TreeSelect } from "../src"

const data = [
  {
    title: "0-0",
    key: "0-0",
    value: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        value: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf-01",
            key: "0-0-0-0",
            value: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1",
            value: "0-0-0-1",
            children: [
              {
                title: "leaf-02",
                key: "0-0-0-0-0",
                value: "0-0-0-0-0",
                disableCheckbox: true,
              },
              {
                title: "leaf-03",
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
            title: <span>leaf-04</span>,
            key: "0-0-1-0",
            value: "0-0-1-0",
          },
        ],
      },
    ],
  },
  {
    title: "leaf-05",
    value: "0-1",
    key: "0-1",
  },
]

it("TreeSelect renders correctly", () => {
  mount(<TreeSelect data-testId="TreeSelect" treeData={data} />)
  cy.findByTestId("TreeSelect").should("exist")
  unmount()
})

// [Todo] Supplementary TreeSelect test case
