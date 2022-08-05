import { InputTag, ObjectValueType } from "../src"
import { fireEvent, render, screen, act, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"
import userEvent from "@testing-library/user-event"

test("InputTag renders correctly", () => {
  render(<InputTag placeholder={"input-tag"} suffix="suffix" />)
  expect(screen.getByPlaceholderText("input-tag")).toBeInTheDocument()
})

test("InputTag renders with size small", () => {
  render(<InputTag placeholder="size-small" size="small" suffix="suffix" />)
  expect(screen.getByPlaceholderText("size-small").parentElement).toHaveStyle({
    gap: "4px",
  })
})

test("InputTag renders with size large", () => {
  render(<InputTag placeholder="size-large" size="large" />)
  expect(screen.getByPlaceholderText("size-large").parentElement).toHaveStyle({
    gap: "8px",
  })
})

test("InputTag renders with value", () => {
  render(<InputTag placeholder="value" value={["test value"]} />)
  expect(screen.getByText("test value")).toBeInTheDocument()
})

test("InputTag renders with value as error type", () => {
  render(<InputTag placeholder="value" value={"test value" as any} />)
  expect(screen.getByPlaceholderText("value")).toBeInTheDocument()
})

test("InputTag renders with defaultValue", () => {
  render(<InputTag defaultValue={["default value"]} />)
  expect(screen.getByText("default value")).toBeInTheDocument()
})

test("InputTag renders with disabled", () => {
  render(<InputTag placeholder="test-disabled" disabled />)
  expect(screen.getByPlaceholderText("test-disabled")).toBeDisabled()
  expect(
    screen.getByPlaceholderText("test-disabled")?.parentElement?.parentElement,
  ).toHaveStyle({
    cursor: "not-allowed",
  })
})

test("InputTag renders with error", () => {
  render(<InputTag placeholder="test-error" error />)
  expect(
    screen.getByPlaceholderText("test-error")?.parentElement?.parentElement,
  ).toHaveStyle({
    borderColor: `${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("InputTag renders with focus and blur", () => {
  const focusEvent = jest.fn()
  const blurEvent = jest.fn()
  const clickEvent = jest.fn()
  render(
    <InputTag
      placeholder="test-focus"
      onFocus={focusEvent}
      onBlur={blurEvent}
      onClick={clickEvent}
    />,
  )
  const testFocus = screen.getByPlaceholderText("test-focus")
  testFocus.focus()
  expect(focusEvent).toBeCalled()
  expect(testFocus).toHaveFocus()
  testFocus.blur()
  expect(blurEvent).toBeCalled()
  expect(testFocus).not.toHaveFocus()
  testFocus?.parentElement?.click()
  expect(clickEvent).toBeCalled()
  expect(testFocus).toHaveFocus()
})

test("InputTag renders with input event", async () => {
  const changeEvent = jest.fn()
  const clearEvent = jest.fn()
  const inputChangeEvent = jest.fn()
  const defaultValidate = (inputValue: string, values: ObjectValueType[]) => {
    return values?.every((item) => item?.value !== inputValue)
  }
  render(
    <InputTag
      placeholder="test-input-event"
      onPressEnter={changeEvent}
      onInputChange={inputChangeEvent}
      onClear={clearEvent}
      validate={defaultValidate}
      allowClear
    />,
  )
  const testEvent = screen.getByPlaceholderText("test-input-event")
  fireEvent.change(testEvent, { target: { value: "123" } })
  await waitFor(() => {
    userEvent.type(testEvent, `{enter}`)
  })
  expect(changeEvent).toBeCalled()
  expect(inputChangeEvent).toBeCalled()
  expect(screen.getByText("123")).toBeInTheDocument()
  if (testEvent?.parentElement?.nextSibling) {
    fireEvent.click(testEvent.parentElement.nextSibling)
  }
  expect(testEvent).toBeInTheDocument()
})

test("InputTag renders with clear event", async () => {
  const removeEvent = jest.fn()
  const clearEvent = jest.fn()
  render(
    <InputTag
      placeholder="test-input-event"
      onClear={clearEvent}
      onRemove={removeEvent}
      allowClear
    />,
  )
  const testEvent = screen.getByPlaceholderText("test-input-event")
  fireEvent.change(testEvent, { target: { value: "123" } })
  await waitFor(() => {
    userEvent.type(testEvent, `{enter}`)
  })
  expect(screen.getByText("123")).toBeInTheDocument()
  fireEvent.change(testEvent, { target: { value: "456" } })
  await waitFor(() => {
    userEvent.type(testEvent, `{enter}`)
  })
  const ele =
    screen.getByText("456")?.parentElement?.nextElementSibling
      ?.firstElementChild
  if (ele) {
    fireEvent.click(ele)
    expect(removeEvent).toBeCalled()
  }

  testEvent.blur()
  if (testEvent?.parentElement?.nextSibling) {
    fireEvent.click(testEvent.parentElement.nextSibling)
  }
  expect(testEvent).toBeInTheDocument()
})
