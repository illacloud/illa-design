import { fireEvent, render, screen } from "@testing-library/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Rate } from "../src"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

test("Rate renders with half value", () => {
  render(<Rate data-testid="test-value" allowHalf value={2.5} />)
  expect(
    screen.getByTestId("test-value").children[0].children[2].firstChild,
  ).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-yellow-04`)}`,
  })
})

test("Rate renders with click", () => {
  const changeEvent = jest.fn()
  const hoverEvent = jest.fn()
  render(
    <Rate
      data-testid="test-click"
      onChange={changeEvent}
      onHoverChange={hoverEvent}
      allowHalf
      allowClear
    />,
  )
  const target =
    screen.getByTestId("test-click").children[0].children[2].firstChild
  userEvent.hover(target as Element)
  expect(hoverEvent).toBeCalled()
  userEvent.click(target as Element)

  expect(changeEvent).toBeCalled()
  expect(target).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-yellow-04`)}`,
  })

  userEvent.click(target as Element)
  fireEvent.animationEnd(
    screen.getByTestId("test-click").children[0].children[0],
  )
  expect(screen.getByTestId("test-click").children[0].children[2]).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-gray-08`)}`,
  })
})

test("Rate renders with heart", () => {
  render(<Rate data-testid="test-heart" heart value={2} />)
  expect(
    screen.getByTestId("test-heart").children[0].children[0].lastChild,
  ).toHaveStyle({ color: `${globalColor(`--${illaPrefix}-red-03`)}` })
})
