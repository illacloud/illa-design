import { Popover } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Tag renders with text", () => {
  render(<Popover data-testid="test" />)
  expect(screen.getByTestId("test")).toBeInTheDocument()
})