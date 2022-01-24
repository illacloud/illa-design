/**
 * @jest-environment jest-electron/environment
 */
import { TextArea } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("TextArea render correctly", () => {
  render(<TextArea placeholder={"textArea"} />)
  expect(screen.getByPlaceholderText("textArea")).toBeInTheDocument()

  expect(screen.getByPlaceholderText("textArea").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-gray-08`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
})

test("TextArea render with variant fill", () => {
  render(<TextArea placeholder="variant-fill" variant="fill" />)
  expect(screen.getByPlaceholderText("variant-fill").parentElement).toHaveStyle({
    backgroundColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    borderColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
})

test("TextArea render with value", () => {
  render(<TextArea placeholder="value" value="test value" />)
  expect(screen.getByPlaceholderText("value")).toHaveDisplayValue("test value")
})

test("TextArea render with defaultValue", () => {
  render(<TextArea placeholder="defaultValue" defaultValue="test defaultValue" />)
  expect(screen.getByPlaceholderText("defaultValue")).toHaveDisplayValue("test defaultValue")
  expect(screen.getByPlaceholderText("defaultValue")).toBeInTheDocument()
})

test("TextArea render with maxLength", () => {
  render(<TextArea placeholder="maxLength" defaultValue="test maxLength" maxLength={4} />)
  expect(screen.getByPlaceholderText("maxLength")).toHaveDisplayValue("test")
})

test("TextArea render with showCount", () => {
  render(<TextArea maxLength={23} showCount />)
  expect(screen.getByText("/23")).toBeInTheDocument();
  expect(screen.getByText("/23").previousSibling).toHaveTextContent('0');
})

test("TextArea render with disabled", () => {
  render(<TextArea placeholder="test-disabled" disabled />)
  expect(screen.getByPlaceholderText("test-disabled")).toBeDisabled()
  expect(screen.getByPlaceholderText("test-disabled").parentElement).toHaveStyle({
    cursor: 'not-allowed',
  })
})

test("TextArea render with error", () => {
  render(<TextArea placeholder="test-error" error />)
  expect(screen.getByPlaceholderText("test-error").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("TextArea render with focus and blur", () => {
  const focusEvent = jest.fn()
  const blurEvent = jest.fn()
  render(<TextArea placeholder="test-focus" onFocus={focusEvent} onBlur={blurEvent} />)
  const testInputFocus = screen.getByPlaceholderText("test-focus")
  testInputFocus.focus()
  expect(focusEvent).toBeCalled()
  expect(testInputFocus).toHaveFocus()
  testInputFocus.blur()
  expect(blurEvent).toBeCalled()
  expect(testInputFocus).not.toHaveFocus()
})

test("TextArea render with input event", async () => {
  const changeEvent = jest.fn()
  render(<TextArea placeholder="test-input-event" onChange={changeEvent} />)
  const testTextAreaEvent = screen.getByPlaceholderText("test-input-event")

  fireEvent.change(testTextAreaEvent, { target: { value: "123" } })
  expect(changeEvent).toBeCalled()
  expect(testTextAreaEvent).toHaveDisplayValue("123")
  fireEvent.input(testTextAreaEvent, { target: { value: "456" } })
  expect(testTextAreaEvent).toHaveDisplayValue("456")

  fireEvent.compositionStart(testTextAreaEvent)
  fireEvent.compositionUpdate(testTextAreaEvent,{ data: '是', target: { value: '是' } } )
  fireEvent.compositionEnd(testTextAreaEvent,{ data: '是' })
  expect(testTextAreaEvent).toHaveDisplayValue("是")
})

test("TextArea render with clear event", async () => {
  const clearEvent = jest.fn()
  render(<TextArea placeholder="test-clear-event" allowClear onClear={clearEvent} />)
  const testClearEvent = screen.getByPlaceholderText("test-clear-event")

  fireEvent.change(testClearEvent, { target: { value: "123" } })
  testClearEvent.focus()
  if (testClearEvent.nextElementSibling) {
    fireEvent.click(testClearEvent.nextElementSibling)
  }
  expect(clearEvent).toBeCalled()
  expect(testClearEvent).toHaveDisplayValue("")
})

test("TextArea render with autoSize", async () => {
  render(<TextArea placeholder="test-autoSize" autoSize />)
  const testAutoSize = screen.getByPlaceholderText("test-autoSize")

  expect(testAutoSize).toHaveDisplayValue("")
})
