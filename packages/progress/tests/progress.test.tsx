import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("Progress renders with correctly", () => {
  render(
    <Progress>
      Link
    </Progress>,
  )
  expect(screen.getByText("Link")).toBeInTheDocument()
})