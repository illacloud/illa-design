import { Password } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Password renders correctly", () => {
  render(<Password placeholder={"password"} />)
  expect(screen.getByPlaceholderText("password")).toBeInTheDocument()
  expect(screen.getByPlaceholderText("password")).toHaveAttribute(
    "type",
    "password",
  )

  expect(screen.getByPlaceholderText("password").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-grayBlue-08`)}`,
    color: `${globalColor(`--${illaPrefix}-grayBlue-02`)}`,
  })
})

test("Password renders with variant fill", () => {
  render(<Password placeholder="variant-fill" variant="fill" />)
  expect(screen.getByPlaceholderText("variant-fill").parentElement).toHaveStyle(
    {
      backgroundColor: `${globalColor(`--${illaPrefix}-grayBlue-09`)}`,
      borderColor: `${globalColor(`--${illaPrefix}-grayBlue-09`)}`,
      color: `${globalColor(`--${illaPrefix}-grayBlue-02`)}`,
    },
  )
})

test("Password renders with value", () => {
  render(<Password placeholder="value" value="test value" />)
  expect(screen.getByPlaceholderText("value")).toHaveDisplayValue("test value")
})

test("Password renders with defaultValue", () => {
  render(
    <Password placeholder="defaultValue" defaultValue="test defaultValue" />,
  )
  expect(screen.getByPlaceholderText("defaultValue")).toHaveDisplayValue(
    "test defaultValue",
  )
  expect(screen.getByPlaceholderText("defaultValue")).toBeInTheDocument()
})

test("Password renders with disabled", () => {
  render(<Password placeholder="test-disabled" disabled />)
  expect(screen.getByPlaceholderText("test-disabled")).toBeDisabled()
  expect(
    screen.getByPlaceholderText("test-disabled").parentElement,
  ).toHaveStyle({
    cursor: "not-allowed",
  })
})

test("Password renders with error", () => {
  render(<Password placeholder="test-error" error />)
  expect(screen.getByPlaceholderText("test-error").parentElement).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("Password renders with type text", () => {
  render(<Password placeholder="test-type" />)
  const testVisible = screen.getByPlaceholderText("test-type")
  expect(testVisible).toHaveAttribute("type", "password")
  if (testVisible.nextSibling?.firstChild) {
    fireEvent.click(testVisible.nextSibling.firstChild)
  }
  expect(testVisible).toHaveAttribute("type", "text")
})

test("Password renders with focus and blur", () => {
  const focusEvent = jest.fn()
  const blurEvent = jest.fn()
  render(
    <Password
      placeholder="test-focus"
      onFocus={focusEvent}
      onBlur={blurEvent}
    />,
  )
  const testInputFocus = screen.getByPlaceholderText("test-focus")
  testInputFocus.focus()
  expect(focusEvent).toBeCalled()
  expect(testInputFocus).toHaveFocus()
  testInputFocus.blur()
  expect(blurEvent).toBeCalled()
  expect(testInputFocus).not.toHaveFocus()
})

test("Password renders with input event", async () => {
  const changeEvent = jest.fn()
  render(<Password placeholder="test-password-event" onChange={changeEvent} />)
  const testPasswordEvent = screen.getByPlaceholderText("test-password-event")

  fireEvent.change(testPasswordEvent, { target: { value: "123" } })
  expect(changeEvent).toBeCalled()
  expect(testPasswordEvent).toHaveDisplayValue("123")
  fireEvent.input(testPasswordEvent, { target: { value: "456" } })
  expect(testPasswordEvent).toHaveDisplayValue("456")

  fireEvent.compositionStart(testPasswordEvent)
  fireEvent.compositionUpdate(testPasswordEvent, {
    data: "是",
    target: { value: "是" },
  })
  fireEvent.compositionEnd(testPasswordEvent, { data: "是" })
  expect(testPasswordEvent).toHaveDisplayValue("是")
})

test("Password renders with clear event", async () => {
  const clearEvent = jest.fn()
  render(
    <Password placeholder="test-clear-event" allowClear onClear={clearEvent} />,
  )
  const testClearEvent = screen.getByPlaceholderText("test-clear-event")

  fireEvent.change(testClearEvent, { target: { value: "123" } })
  testClearEvent.focus()
  if (testClearEvent.nextSibling) {
    fireEvent.click(testClearEvent.nextSibling)
  }
  expect(clearEvent).toBeCalled()
  expect(testClearEvent).toHaveDisplayValue("")
})
