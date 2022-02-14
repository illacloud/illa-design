import { Checkbox } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Checkbox renders with text", () => {
  render(<Checkbox>Hello</Checkbox>)
  expect(screen.getByRole("checkbox")).toBeInTheDocument()
})

test("Checkbox renders with disabled", () => {
  render(<Checkbox disabled>Hello</Checkbox>)
  expect(screen.getByRole("checkbox")).toBeDisabled()
})

test("Checkbox renders with checked", () => {
  render(<Checkbox checked>Hello</Checkbox>)
  expect(screen.getByRole("checkbox")).toBeChecked()
})
