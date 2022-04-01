import { Collapse } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Collapse renders with ", () => {
  render(<Collapse />)
})
