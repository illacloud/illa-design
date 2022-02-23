import { Search } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Search render correctly", () => {
  render(<Search placeholder={"search"} />)
  expect(screen.getByPlaceholderText("search")).toBeInTheDocument()

  expect(screen.getByPlaceholderText("search").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-gray-08`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-02`)}`,
  })
})

test("Search render with variant fill", () => {
  render(<Search placeholder="variant-fill" variant="fill" />)
  expect(screen.getByPlaceholderText("variant-fill").parentElement).toHaveStyle(
    {
      backgroundColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
      borderColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
      color: `${globalColor(`--${illaPrefix}-gray-02`)}`,
    },
  )
})

test("Search render with value", () => {
  render(<Search placeholder="value" value="test value" />)
  expect(screen.getByPlaceholderText("value")).toHaveDisplayValue("test value")
})

test("Search render with defaultValue", () => {
  render(<Search placeholder="defaultValue" defaultValue="test defaultValue" />)
  expect(screen.getByPlaceholderText("defaultValue")).toHaveDisplayValue(
    "test defaultValue",
  )
  expect(screen.getByPlaceholderText("defaultValue")).toBeInTheDocument()
})

test("Search render with disabled", () => {
  render(<Search placeholder="test-disabled" disabled />)
  expect(screen.getByPlaceholderText("test-disabled")).toBeDisabled()
  expect(
    screen.getByPlaceholderText("test-disabled").parentElement,
  ).toHaveStyle({
    cursor: "not-allowed",
  })
})

test("Search render with error", () => {
  render(<Search placeholder="test-error" error />)
  expect(screen.getByPlaceholderText("test-error").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("Search render with focus and blur", () => {
  const focusEvent = jest.fn()
  const blurEvent = jest.fn()
  render(
    <Search placeholder="test-focus" onFocus={focusEvent} onBlur={blurEvent} />,
  )
  const testInputFocus = screen.getByPlaceholderText("test-focus")
  testInputFocus.focus()
  expect(focusEvent).toBeCalled()
  expect(testInputFocus).toHaveFocus()
  testInputFocus.blur()
  expect(blurEvent).toBeCalled()
  expect(testInputFocus).not.toHaveFocus()
})

test("Search render with input event", async () => {
  const changeEvent = jest.fn()
  render(<Search placeholder="test-search-event" onChange={changeEvent} />)
  const testSearchEvent = screen.getByPlaceholderText("test-search-event")

  fireEvent.change(testSearchEvent, { target: { value: "123" } })
  expect(changeEvent).toBeCalled()
  expect(testSearchEvent).toHaveDisplayValue("123")
  fireEvent.input(testSearchEvent, { target: { value: "456" } })
  expect(testSearchEvent).toHaveDisplayValue("456")

  fireEvent.compositionStart(testSearchEvent)
  fireEvent.compositionUpdate(testSearchEvent, {
    data: "是",
    target: { value: "是" },
  })
  fireEvent.compositionEnd(testSearchEvent, { data: "是" })
  expect(testSearchEvent).toHaveDisplayValue("是")
})

test("Search render with clear event", async () => {
  const clearEvent = jest.fn()
  render(
    <Search placeholder="test-clear-event" allowClear onClear={clearEvent} />,
  )
  const testClearEvent = screen.getByPlaceholderText("test-clear-event")

  fireEvent.change(testClearEvent, { target: { value: "clear" } })
  testClearEvent.focus()
  if (testClearEvent.nextElementSibling) {
    fireEvent.click(testClearEvent.nextElementSibling)
  }
  expect(clearEvent).toBeCalled()
  expect(testClearEvent).toHaveDisplayValue("")
})

test("Search render with search event", async () => {
  const searchEvent = jest.fn()
  const pressEnterEvent = jest.fn()
  render(
    <Search
      placeholder="test-search-event"
      onSearch={searchEvent}
      onPressEnter={pressEnterEvent}
    />,
  )
  const testSearchEvent = screen.getByPlaceholderText("test-search-event")

  fireEvent.keyDown(testSearchEvent, { keyCode: 13 })
  expect(searchEvent).toBeCalled()
  expect(pressEnterEvent).toBeCalled()
})

test("Search render with searchButton event", async () => {
  const searchEvent = jest.fn()
  render(
    <Search
      placeholder="test-search-button"
      onSearch={searchEvent}
      searchButton
    />,
  )
  const testSearchEvent = screen.getByPlaceholderText("test-search-button")

  if (testSearchEvent.parentElement?.nextSibling?.firstChild) {
    fireEvent.click(testSearchEvent.parentElement?.nextSibling?.firstChild)
  }
  expect(searchEvent).toBeCalled()
})
