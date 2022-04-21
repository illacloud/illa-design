import { {{properCase name}} } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"


test("{{properCase name}} renders with ", () => {
  render(<{{properCase name}} />)
})
