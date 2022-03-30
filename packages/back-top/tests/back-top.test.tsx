import { BackTop } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("BackTop should not visible", () => {
  render(<BackTop data-testid="test" visibleHeight={0}></BackTop>)
  expect(screen.getByTestId("test")).toBeInTheDocument()
})
