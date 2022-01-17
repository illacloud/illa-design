import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Link } from "../dist/types"

test("Tag renders with text & title", () => {
  render(<Link>
    Link
  </Link>)
  expect(screen.getByText("Link")).toBeInTheDocument()
})