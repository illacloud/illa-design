import { DatePicker } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("DatePicker renders with ", () => {
  render(<DatePicker />)
})
