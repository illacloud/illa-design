/**
 * @jest-environment jest-electron/environment
 */
import { Input } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Input render correctly", () => {
  render(<Input placeholder={"input"} />)
  expect(screen.getByPlaceholderText("input")).toBeInTheDocument()

  expect(screen.getByPlaceholderText("input").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-gray-08`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
})

test("Input render with variant fill", () => {
  render(<Input placeholder="variant-fill" variant="fill" />)
  expect(screen.getByPlaceholderText("variant-fill").parentElement).toHaveStyle({
    backgroundColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    borderColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
})

test("Input render with value", () => {
  render(<Input placeholder="value" value="test value" />)
  expect(screen.getByPlaceholderText("value")).toHaveDisplayValue("test value")
})

test("Input render with defaultValue", () => {
  render(<Input placeholder="defaultValue" defaultValue="test defaultValue" />)
  expect(screen.getByPlaceholderText("defaultValue")).toHaveDisplayValue("test defaultValue")
})

test("Input render with maxLength", () => {
  render(<Input placeholder="maxLength" defaultValue="test maxLength" maxLength={4} />)
  expect(screen.getByPlaceholderText("maxLength")).toHaveDisplayValue("test")
})

test("Input render with disabled", () => {
  render(<Input placeholder="test-disabled" disabled />)
  expect(screen.getByPlaceholderText("test-disabled")).toBeDisabled()
  expect(screen.getByPlaceholderText("test-disabled").parentElement).toHaveStyle({
    cursor: 'not-allowed',
  })
})

test("Input render with error", () => {
  render(<Input placeholder="test-error" error />)
  expect(screen.getByPlaceholderText("test-error").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("Input render with focus and blur", () => {
  render(<Input placeholder="test-focus" error />)
  const testInputFocus = screen.getByPlaceholderText("test-focus")
  testInputFocus.focus()
  expect(testInputFocus).toHaveFocus()
  testInputFocus.blur()
  expect(testInputFocus).not.toHaveFocus()
})

test("Input render with input event", async () => {
  const changeEvent = jest.fn()
  render(<Input placeholder="test-input-event" onChange={changeEvent} />)
  const testInputEvent = screen.getByPlaceholderText("test-input-event")

  fireEvent.change(testInputEvent, { target: { value: "123" } })
  expect(changeEvent).toBeCalled()
  expect(testInputEvent).toHaveDisplayValue("123")
  fireEvent.input(testInputEvent, { target: { value: "456" } })
  expect(testInputEvent).toHaveDisplayValue("456")

  fireEvent.compositionStart(testInputEvent)
  fireEvent.compositionUpdate(testInputEvent,{ data: '是', target: { value: '是' } } )
  fireEvent.compositionEnd(testInputEvent,{ data: '是' })
  expect(testInputEvent).toHaveDisplayValue("是")
})

