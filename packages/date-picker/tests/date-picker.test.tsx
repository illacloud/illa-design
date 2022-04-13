import { DatePicker, MonthPicker, RangePicker, YearPicker } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"
import dayjs from "dayjs"

test("DatePicker renders with ", () => {
  // render(<DatePicker />)
  // expect(screen.getByTitle("CalendarIcon")).toBeInTheDocument()
  // render(<MonthPicker />)
  // expect(screen.getByTitle("CalendarIcon")).toBeInTheDocument()
  // render(<YearPicker />)
  // expect(screen.getByTitle("CalendarIcon")).toBeInTheDocument()
  // render(<RangePicker />)
  // expect(screen.getByTitle("CalendarIcon")).toBeInTheDocument()
})

test("disabled", () => {
  // render(<DatePicker placeholder={'DatePicker'} disabled />)
  // expect(screen.getByPlaceholderText("disabled")).toBeDisabled()
})

test("shortcuts", () => {
  // const shortcuts = [
  //   {
  //     text: "a month later",
  //     value: () => dayjs().add(1, "month"),
  //   },
  // ]
  // render(<DatePicker shortcuts={shortcuts} />)
})
