import { Checkbox } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Radio renders with text", () => {
  render(<Checkbox>Hello</Checkbox>)
  expect(screen.getByLabelText("Hello")).toBeInTheDocument()
})