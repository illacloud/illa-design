import { RangeInput } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("RangeInput render correctly", () => {
  render(<RangeInput placeholder={["Range", "Input"]} />)
  expect(screen.getByPlaceholderText("Range")).toBeInTheDocument()
  expect(screen.getByPlaceholderText("Input")).toBeInTheDocument()
})

test("RangeInput render with value", () => {
  render(
    <RangeInput
      placeholder={["input0", "input1"]}
      value={["test0", "test1"]}
    />,
  )
  expect(screen.getByPlaceholderText("input0")).toHaveDisplayValue("test0")
  expect(screen.getByPlaceholderText("input1")).toHaveDisplayValue("test1")
})

test("RangeInput render with focus and blur", () => {
  const focusEvent = jest.fn()
  const blurEvent = jest.fn()
  render(
    <RangeInput
      placeholder={["input0", "input1"]}
      value={["test0", "test1"]}
      onFocus={focusEvent}
      onBlur={blurEvent}
    />,
  )
  expect(screen.getByPlaceholderText("input0")).toHaveDisplayValue("test0")
  expect(screen.getByPlaceholderText("input1")).toHaveDisplayValue("test1")
  fireEvent.focus(screen.getByPlaceholderText("input0"))
  fireEvent.blur(screen.getByPlaceholderText("input0"))
  fireEvent.focus(screen.getByPlaceholderText("input1"))
  fireEvent.blur(screen.getByPlaceholderText("input1"))
  expect(focusEvent).toBeCalledTimes(2)
  expect(blurEvent).toBeCalledTimes(2)
})

test("RangeInput render with disabled", () => {
  const focusEvent = jest.fn()
  render(
    <RangeInput
      placeholder={["input0", "input1"]}
      disabled
      onFocus={focusEvent}
    />,
  )
  fireEvent.focus(screen.getByPlaceholderText("input0"))
  fireEvent.focus(screen.getByPlaceholderText("input1"))
  expect(focusEvent).toBeCalledTimes(0)
})
