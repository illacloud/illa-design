import { Skeleton } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"


test("Skeleton renders with ", () => {
  render(<Skeleton />)
})
