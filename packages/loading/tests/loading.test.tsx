import { Loading } from "../src"
import { render, screen } from "@testing-library/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import "@testing-library/jest-dom"

test("Default Loading", () => {
  render(<Loading colorScheme="techPurple" data-testid="testLoading" />)
  expect(screen.getByTestId("testLoading")).toBeInTheDocument()
  expect(screen.getByTestId("testLoading")).toHaveStyle({
    background: `conic-gradient(rgba(101, 74, 236, 0) 45deg, rgba(101, 74, 236, 0) 80deg, ${globalColor(
      `--${illaPrefix}-techPurple-01`,
    )} 30deg, rgba(101, 74, 236, 0))`,
  })
})
