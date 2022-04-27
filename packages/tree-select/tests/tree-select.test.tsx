import { TreeSelect } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import * as React from "react"

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

test("TreeSelect renders correctly ", () => {
  render(<TreeSelect data-testid={"TreeSelect"} treeData={data} />)
  expect(screen.getByTestId("TreeSelect")).toBeInTheDocument()
})

test("TreeSelect renders with defaultValue ", () => {
  render(
    <TreeSelect
      data-testid={"TreeSelect"}
      defaultValue={"0-0"}
      treeData={data}
    />,
  )
  expect(screen.getByText("0-0-head")).toBeInTheDocument()
})

test("TreeSelect renders with multiple defaultValue ", () => {
  render(
    <TreeSelect
      data-testid={"TreeSelect"}
      defaultValue={["0-0"]}
      multiple={true}
      treeData={data}
    />,
  )
  expect(screen.getByText("0-0-head")).toBeInTheDocument()
})
