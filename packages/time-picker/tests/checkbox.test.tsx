import { TimePicker } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Checkbox renders with text", () => {
  render(<TimePicker>Hello</TimePicker>)
  expect(screen.getByRole("checkbox")).toBeInTheDocument()
})

test("Checkbox renders with disabled", () => {
  render(<TimePicker disabled>Hello</TimePicker>)
  expect(screen.getByRole("checkbox")).toBeDisabled()
})

test("Checkbox renders with checked", () => {
  render(<TimePicker checked>Hello</TimePicker>)
  expect(screen.getByRole("checkbox")).toBeChecked()
})
