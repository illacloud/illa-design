import { Select, Option } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Select renders with text", () => {
  render(<Select placeholder={"test"} />)
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument()
})
