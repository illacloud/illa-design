import { Select, Option } from "../src"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

test("Select renders with text", () => {
  render(<Select placeholder={"test"} />)
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument()
})

test("Select renders with options", () => {
  render(<Select value={1} options={[1, 2, 3]} />)
  expect(screen.getByText("1")).toBeInTheDocument()
})

test("Select renders with Option", () => {
  render(
    <Select value={"A"}>
      <Option>A</Option>
      <Option>B</Option>
      <Option>C</Option>
    </Select>,
  )
  expect(screen.getByText("A")).toBeInTheDocument()
})

test("Select renders with loading", () => {
  render(<Select value={1} options={[1, 2, 3]} loading />)
  expect(screen.getByText("1").nextElementSibling).toBeInTheDocument()
})

test("Select renders with error", () => {
  render(<Select value={1} options={[1, 2, 3]} error />)
  expect(screen.getByText("1").nextElementSibling).toBeInTheDocument()
})

test("Select renders with size", () => {
  render(<Select value={1} options={[1, 2, 3]} size="large" />)
  render(<Select value={"a"} options={["a", "b", "c"]} size="small" />)
  expect(
    screen.getByText("1")?.parentElement?.parentElement,
  ).toBeInTheDocument()
  expect(
    screen.getByText("a")?.parentElement?.parentElement,
  ).toBeInTheDocument()
})

test("Select renders with mode", () => {
  render(<Select value={[1, 2]} options={[1, 2, 3]} mode="multiple" />)
  expect(screen.getByText("1")).toBeInTheDocument()
  expect(screen.getByText("2")).toBeInTheDocument()
})
