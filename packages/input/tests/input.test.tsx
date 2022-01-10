import { Input } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Icon render correctly", () => {
  render(<Input data-testid="test-icon">
    test
  </Input>)
  expect(screen.getByTestId("test-icon")).toBeInTheDocument()
})