import { render, screen } from "@testing-library/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Rate } from "../src"
import "@testing-library/jest-dom"

test("Rate renders with half value", () => {
  render(<Rate data-testid="test-value" allowHalf value={2.5} />)
  expect(
    screen.getByTestId("test-value").children[0].children[2].firstChild,
  ).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-yellow-04`)}`,
  })
})

test("Rate renders with heart", () => {
  render(<Rate data-testid="test-heart" heart value={2} />)
  expect(
    screen.getByTestId("test-heart").children[0].children[0].lastChild,
  ).toHaveStyle({ color: `${globalColor(`--${illaPrefix}-red-03`)}` })
})
