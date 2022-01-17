import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Link } from "../src"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Link renders with icon", () => {
  render(<Link icon={true}>
    Link
  </Link>)
  expect(screen.getByTitle("LinkIcon")).toBeInTheDocument()
})

test("Link renders disabled", () => {
  render(<Link disabled>
    Link
  </Link>)
  fireEvent.mouseEnter(screen.getByText("Link"))
  expect(screen.getByText("Link")).toHaveStyle({
    "cursor": "not-allowed",
  })
})

test("Link renders with different color scheme", () => {
  render(<div>
    <Link colorScheme="red">
      Link Red
    </Link>
    <Link colorScheme="#123321">
      Link Custom
    </Link>
  </div>)
  expect(screen.getByText("Link Red")).toHaveStyle({
    "color": globalColor(`--${illaPrefix}-red-02`),
  })
  expect(screen.getByText("Link Custom")).toHaveStyle({
    "color": "#123321",
  })
})