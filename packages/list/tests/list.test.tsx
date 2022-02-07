import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { List } from "../src"

test("List renders correctly", () => {
  render(<List data-testid="test-list">List</List>)
  expect(screen.getByTestId("test-list")).toBeInTheDocument()
})
