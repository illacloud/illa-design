import { DatePicker, DateRangePicker, MonthPicker, YearPicker } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("DatePicker renders with different types", () => {
  render(<DatePicker />)
  expect(screen.getByTitle("CalendarIcon")).toBeInTheDocument()
  render(<MonthPicker />)
  expect(screen.getAllByTitle("CalendarIcon")[1]).toBeInTheDocument()
  render(<YearPicker />)
  expect(screen.getAllByTitle("CalendarIcon")[2]).toBeInTheDocument()
  render(<DateRangePicker />)
  expect(screen.getAllByTitle("CalendarIcon")[3]).toBeInTheDocument()
})

test("DatePicker renders with disabled", () => {
  render(<DatePicker placeholder={"DatePicker"} disabled />)
  expect(screen.getByPlaceholderText("DatePicker")).toBeDisabled()
})

test("test default value", () => {
  render(<DatePicker value="2022-05-20" />)
  expect(screen.getByDisplayValue("2022-05-20")).toBeInTheDocument()
  render(<DatePicker defaultValue="2022-03-29" />)
  expect(screen.getByDisplayValue("2022-03-29")).toBeInTheDocument()
})
