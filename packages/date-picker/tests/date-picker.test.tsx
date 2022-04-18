import { DatePicker, MonthPicker, RangePicker, YearPicker } from "../src"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"
import dayjs from "dayjs"

test("DatePicker renders with different types", () => {
  render(<DatePicker />)
  expect(screen.getByTitle("CalendarIcon")).toBeInTheDocument()
  render(<MonthPicker />)
  expect(screen.getAllByTitle("CalendarIcon")[1]).toBeInTheDocument()
  render(<YearPicker />)
  expect(screen.getAllByTitle("CalendarIcon")[2]).toBeInTheDocument()
  render(<RangePicker />)
  expect(screen.getAllByTitle("CalendarIcon")[3]).toBeInTheDocument()
})

test("DatePicker renders with disabled", () => {
  render(<DatePicker placeholder={"DatePicker"} disabled />)
  expect(screen.getByPlaceholderText("DatePicker")).toBeDisabled()
})
