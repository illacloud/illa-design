/**
 * @jest-environment jest-electron/environment
 */
import { Search } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Search render correctly", () => {
  render(<Search placeholder={"search"} />)
  expect(screen.getByPlaceholderText("search")).toBeInTheDocument()

  expect(screen.getByPlaceholderText("search").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-gray-08`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
})

test("Search render with variant fill", () => {
  render(<Search placeholder="variant-fill" variant="fill" />)
  expect(screen.getByPlaceholderText("variant-fill").parentElement).toHaveStyle({
    backgroundColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    borderColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
})

test("Search render with value", () => {
  render(<Search placeholder="value" value="test value" />)
  expect(screen.getByPlaceholderText("value")).toHaveDisplayValue("test value")
})

test("Search render with defaultValue", () => {
  render(<Search placeholder="defaultValue" defaultValue="test defaultValue" />)
  expect(screen.getByPlaceholderText("defaultValue")).toHaveDisplayValue("test defaultValue")
  expect(screen.getByPlaceholderText("defaultValue")).toBeInTheDocument()
})

test("Search render with disabled", () => {
  render(<Search placeholder="test-disabled" disabled />)
  expect(screen.getByPlaceholderText("test-disabled")).toBeDisabled()
  expect(screen.getByPlaceholderText("test-disabled").parentElement).toHaveStyle({
    cursor: 'not-allowed',
  })
})

test("Search render with error", () => {
  render(<Search placeholder="test-error" error />)
  expect(screen.getByPlaceholderText("test-error").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("Search render with focus and blur", () => {
  render(<Search placeholder="test-focus" error />)
  const testInputFocus = screen.getByPlaceholderText("test-focus")
  testInputFocus.focus()
  expect(testInputFocus).toHaveFocus()
  testInputFocus.blur()
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
  fireEvent.compositionUpdate(testSearchEvent,{ data: '是', target: { value: '是' } } )
  fireEvent.compositionEnd(testSearchEvent,{ data: '是' })
  expect(testSearchEvent).toHaveDisplayValue("是")
})

