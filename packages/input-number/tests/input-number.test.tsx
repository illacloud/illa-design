import { InputNumber } from "../src"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

test("InputNumber render correctly", () => {
  render(<InputNumber placeholder={"input-tag"} />)
  expect(screen.getByPlaceholderText("input-tag")).toBeInTheDocument()
})

test("InputNumber render with value", () => {
  render(<InputNumber placeholder="value" size="large" value={5} />)
  expect(screen.getByDisplayValue(5)).toBeInTheDocument()
})

test("InputNumber render with disabled", () => {
  render(<InputNumber placeholder="test-disabled" disabled />)
  expect(screen.getByPlaceholderText("test-disabled")).toBeDisabled()
})

test("InputNumber render with focus and blur", () => {
  const focusEvent = jest.fn()
  const blurEvent = jest.fn()
  render(
    <InputNumber
      size="small"
      placeholder="test-focus"
      onFocus={focusEvent}
      onBlur={blurEvent}
    />,
  )
  const testFocus = screen.getByPlaceholderText("test-focus")
  testFocus.focus()
  expect(focusEvent).toBeCalled()
  expect(testFocus).toHaveFocus()
  testFocus.blur()
  expect(blurEvent).toBeCalled()
  expect(testFocus).not.toHaveFocus()
})

test("InputNumber render with mode button", async () => {
  const changeEvent = jest.fn()
  render(
    <InputNumber
      placeholder="test-mode"
      mode="button"
      size="large"
      max={2}
      min={-1}
      precision={1}
      onChange={changeEvent}
    />,
  )
  const addIcon =
    screen.getByPlaceholderText("test-mode")?.parentElement?.nextElementSibling
  const minIcon =
    screen.getByPlaceholderText("test-mode")?.parentElement
      ?.previousElementSibling
  if (addIcon) {
    await userEvent.click(addIcon)
    await userEvent.click(addIcon)
    await userEvent.click(addIcon)
    await userEvent.click(addIcon)
    await userEvent.click(addIcon)
    expect(screen.getByDisplayValue("2.0")).toBeInTheDocument()
  }
  if (minIcon) {
    await userEvent.click(minIcon)
    await userEvent.click(minIcon)
    await userEvent.click(minIcon)
    await userEvent.click(minIcon)
    expect(screen.getByDisplayValue("-1.0")).toBeInTheDocument()
  }
  expect(changeEvent).toBeCalledTimes(7)
})

test("InputNumber render with input", async () => {
  const changeEvent = jest.fn()
  render(
    <InputNumber
      placeholder="test-mode"
      mode="button"
      size="small"
      onKeyDown={changeEvent}
    />,
  )
  const input = screen.getByPlaceholderText("test-mode")
  fireEvent.change(input, { target: { value: 1 } })
  fireEvent.blur(input)
  await waitFor(() => {
    expect(screen.getByDisplayValue("1")).toBeInTheDocument()
  })
  fireEvent.focus(input)
  fireEvent.keyDown(input, { key: "ArrowUp", code: "ArrowUp", charCode: 38 })
  await waitFor(() => {
    expect(changeEvent).toBeCalled()
    expect(screen.getByDisplayValue("2")).toBeInTheDocument()
  })
  fireEvent.keyDown(input, {
    key: "ArrowDown",
    code: "ArrowDown",
    charCode: 40,
  })
  await waitFor(() => {
    expect(screen.getByDisplayValue("1")).toBeInTheDocument()
  })
})
