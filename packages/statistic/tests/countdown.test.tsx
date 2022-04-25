import { Countdown } from "../src"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Countdown renders with title", () => {
  render(<Countdown data-testid="test-title" title={"Deadline"} />)
  expect(screen.getByTestId("test-title")).toBeInTheDocument()
  expect(screen.getByText("Deadline")).toBeInTheDocument()
  expect(screen.getByText("Deadline")).toHaveStyle({
    "margin-bottom": "4px",
    "font-size": "14px",
  })
})
