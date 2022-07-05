import { Select, Option } from "../src"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

test("Select renders with text", () => {
  render(<Select placeholder={"test"} />)
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument()
})

test("Select renders with options", () => {
  render(<Select value={1} options={[1, 2, 3]} />)
  expect(screen.getByDisplayValue("1")).toBeInTheDocument()
})

test("Select renders with Option", () => {
  render(
    <Select value={"A"}>
      <Option>A</Option>
      <Option>B</Option>
      <Option>C</Option>
    </Select>,
  )
  expect(screen.getByDisplayValue("A")).toBeInTheDocument()
})

test("Select renders with loading", () => {
  render(<Select value={1} options={[1, 2, 3]} loading />)
  expect(screen.getByDisplayValue("1").nextElementSibling).toBeInTheDocument()
})

test("Select renders with disabled", () => {
  render(<Select data-testid={"test"} value={1} options={[1, 2, 3]} disabled />)
  fireEvent.focus(screen.getByTestId("test"))
  expect(screen.getByDisplayValue("1")).toBeDisabled()
})

test("Select renders with readOnly", () => {
  render(<Select data-testid={"test"} value={1} options={[1, 2, 3]} readOnly />)
  fireEvent.focus(screen.getByTestId("test"))
  expect(screen.getByDisplayValue("1")).not.toBeDisabled()
})

test("Select renders with error", () => {
  render(<Select value={1} options={[1, 2, 3]} error />)
  expect(screen.getByDisplayValue("1").nextElementSibling).toBeInTheDocument()
})

test("Select renders with size", () => {
  render(
    <div>
      <Select value={1} options={[1, 2, 3]} size="large" allowClear />
      <Select value={"a"} options={["a", "b", "c"]} size="small" allowClear />
    </div>,
  )
  const container =
    screen.getByDisplayValue("1")?.parentElement?.previousElementSibling
  if (container) {
    userEvent.hover(container)
    expect(screen.getByTitle("selectRemoveIcon")).toHaveStyle({
      right: "16px",
    })
  }
  const containerA =
    screen.getByDisplayValue("a")?.parentElement?.previousElementSibling
  if (containerA) {
    userEvent.hover(containerA)
    expect(screen.getByTitle("selectRemoveIcon")).toHaveStyle({
      right: "12px",
    })
  }
})

test("Select renders with mode", () => {
  render(<Select value={[1, 2]} options={[1, 2, 3]} multiple labelInValue />)
  expect(screen.getByText("1")).toBeInTheDocument()
  expect(screen.getByText("2")).toBeInTheDocument()
})

test("Select renders with maxTagCount", () => {
  render(
    <Select
      value={[1, 2]}
      options={[1, 2, 3]}
      maxTagCount={1}
      multiple
      allowCreate
    />,
  )
  expect(screen.getByText("1")).toBeInTheDocument()
  expect(screen.getByText("+1...")).toBeInTheDocument()
})
