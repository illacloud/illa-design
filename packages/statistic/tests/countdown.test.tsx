import { globalColor, illaPrefix } from "@illa-design/theme"
import { Countdown } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Countdown renders with title", () => {
  render(<Countdown data-testid="test-title" title="Deadline" />)
  expect(screen.getByTestId("test-title")).toBeInTheDocument()
  expect(screen.getByText("Deadline")).toBeInTheDocument()
  expect(screen.getByText("Deadline")).toHaveStyle({
    "margin-bottom": "4px",
    "font-size": "14px",
  })
})

test("Countdown renders with mode", () => {
  render(<Countdown data-testid="test-title" title="Deadline" mode="builder" />)
  expect(screen.getByTestId("test-title").lastChild).toHaveStyle({
    "font-size": "14px",
    color: `${globalColor(`--${illaPrefix}-techPurple-01`)}`,
  })
})
