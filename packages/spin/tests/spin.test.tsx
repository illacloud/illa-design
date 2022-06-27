import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Spin } from "../src"

import { SearchIcon } from "@illa-design/icon"

test("Spin renders correctly", () => {
  render(<Spin placeholder={"spin"} />)
  expect(screen.getByPlaceholderText("spin")).toBeInTheDocument()
  expect(screen.getByTitle("LoadingIcon")).toBeInTheDocument()
})

test("Spin renders correctly", () => {
  render(<Spin loading={false} placeholder={"spin"} />)
  expect(screen.getByPlaceholderText("spin")).toBeInTheDocument()
  expect(screen.queryByTitle("LoadingIcon")).not.toBeInTheDocument()
})

test("Spin renders correctly", () => {
  render(
    <Spin placeholder={"spin"}>
      <span data-testid={"children-node"}>test</span>
    </Spin>,
  )
  expect(screen.getByPlaceholderText("spin")).toBeInTheDocument()
  expect(screen.getByTestId("children-node")).toBeInTheDocument()
})

test("Spin renders with large-size", () => {
  render(<Spin size={"large"} placeholder={"spin"} />)
  expect(screen.getByTitle("LoadingIcon")).toBeInTheDocument()
})

test("Spin renders with small-size", () => {
  render(<Spin size={"small"} placeholder={"spin"} />)
  expect(screen.getByTitle("LoadingIcon")).toBeInTheDocument()
})

test("Spin renders with element", () => {
  render(<Spin element={<span data-testid={"element-node"}>hello</span>} />)
  expect(screen.getByTestId("element-node")).toBeInTheDocument()
})

test("Spin renders with icon", () => {
  render(<Spin icon={<SearchIcon data-testid={"icon-node"} />} />)
  expect(screen.getByTestId("icon-node")).toBeInTheDocument()
})

test("Spin renders with tip-node", () => {
  render(<Spin tip={<span data-testid={"tip-node"}>TipNode</span>} />)
  expect(screen.getByTestId("tip-node")).toBeInTheDocument()
})
