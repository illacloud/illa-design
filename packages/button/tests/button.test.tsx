import { Button } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Tag renders with text", () => {
  render(<Button data-testid="test" />)
  expect(screen.getByTestId("test")).toBeInTheDocument()
})