import { Menu } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"


test("Menu renders with ", () => {
  render(<Menu />)
})
