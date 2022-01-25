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
  render(<Input placeholder="variant-fill" variant="fill" prefix={'prefix'} addonBefore={'addonBefore'} />)
  expect(screen.getByPlaceholderText("variant-fill").parentElement).toHaveStyle({
    backgroundColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    borderColor: `${globalColor(`--${illaPrefix}-gray-09`)}`,
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
})

test("Input render with size small", () => {
  render(<Input placeholder="size-small" size="small" addonBefore={'addonBefore'} />)
  expect(screen.getByPlaceholderText("size-small").parentElement).toHaveStyle({
    height: '22px',
    padding: '0 12px',
  })
})

test("Input render with size large", () => {
  render(<Input placeholder="size-large" size="large" addonAfter={'addonAfter'} />)
  expect(screen.getByPlaceholderText("size-large").parentElement).toHaveStyle({
    height: '38px',
    padding: '0 16px',
  })
})

test("Input render with prefix", () => {
  render(<Input prefix={'prefix'} suffix={'suffix'} addonAfter={'addonAfter'} addonBefore={'addonBefore'} />)
  expect(screen.getByText("prefix")).toBeInTheDocument()
  expect(screen.getByText("suffix")).toBeInTheDocument()
  expect(screen.getByText("addonAfter")).toBeInTheDocument()
  expect(screen.getByText("addonAfter")).toHaveTextContent('addonAfter')
  expect(screen.getByText("addonBefore")).toBeInTheDocument()
  expect(screen.getByText("addonBefore")).toHaveTextContent('addonBefore')
})

test("Input render with value", () => {
  render(<Input placeholder="value" value="test value" />)
  expect(screen.getByPlaceholderText("value")).toHaveDisplayValue("test value")
})

test("Input render with defaultValue", () => {
  render(<Input placeholder="defaultValue" defaultValue="test defaultValue" />)
  expect(screen.getByPlaceholderText("defaultValue")).toHaveDisplayValue("test defaultValue")
  expect(screen.getByPlaceholderText("defaultValue")).toBeInTheDocument()
})

test("Input render with maxLength", () => {
  render(<Input placeholder="maxLength" defaultValue="test maxLength" maxLength={4} />)
  expect(screen.getByPlaceholderText("maxLength")).toHaveDisplayValue("test")
})

test("Input render with showCount", () => {
  render(<Input placeholder="showCount" maxLength={4} showCount />)
  expect(screen.getByText("/4")).toBeInTheDocument();
  expect(screen.getByText("/4").previousSibling).toHaveTextContent('0');
  expect(screen.getByText("/4").parentElement).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
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
  const focusEvent = jest.fn()
  const blurEvent = jest.fn()
  render(<Input placeholder="test-focus" onFocus={focusEvent} onBlur={blurEvent} />)
  const testInputFocus = screen.getByPlaceholderText("test-focus")
  testInputFocus.focus()
  expect(focusEvent).toBeCalled()
  expect(testInputFocus).toHaveFocus()
  testInputFocus.blur()
  expect(blurEvent).toBeCalled()
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

test("Input render with clear event", async () => {
  const clearEvent = jest.fn()
  render(<Input placeholder="test-clear-event" allowClear onClear={clearEvent} />)
  const testClearEvent = screen.getByPlaceholderText("test-clear-event")

  fireEvent.change(testClearEvent, { target: { value: "123" } })
  testClearEvent.focus()
  if (testClearEvent.nextElementSibling) {
    fireEvent.click(testClearEvent.nextElementSibling)
  }
  expect(clearEvent).toBeCalled()
  expect(testClearEvent).toHaveDisplayValue("")
})

test("Input render with search event", async () => {
  const pressEnterEvent = jest.fn()
  render(<Input placeholder="test-enter-event" onPressEnter={pressEnterEvent} />)
  const testEnterEvent = screen.getByPlaceholderText("test-enter-event")

  fireEvent.keyDown(testEnterEvent, { keyCode: 13 })
  expect(pressEnterEvent).toBeCalled()
})

