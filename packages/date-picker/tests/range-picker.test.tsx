import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { DateRangePicker } from "../src"

test("render base feature DateRangePicker", () => {
  render(<DateRangePicker placeholder={["", "date-2"]} />)
  expect(screen.getByPlaceholderText("date-2")).toBeInTheDocument()
})
