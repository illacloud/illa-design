import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Description } from "../src"

test("Description renders with icon", () => {
  render(<Description data-testid="test-description" />)
  expect(screen.getByTestId("test-description")).toBeInTheDocument()
})
