import { BackTop } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Button renders with text", () => {
  render(<BackTop data-testid="test"></BackTop>)
  expect(screen.getByTestId("test")).toBeInTheDocument()
})
