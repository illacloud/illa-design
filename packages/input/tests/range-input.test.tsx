import React from "react"
import { RangeInput } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

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
      size={"large"}
    />,
  )
  const input0 = screen.getByPlaceholderText("input0")
  const input1 = screen.getByPlaceholderText("input1")
  expect(input0).toHaveDisplayValue("test0")
  expect(input1).toHaveDisplayValue("test1")
  fireEvent.focus(input0)
  fireEvent.blur(input0)
  fireEvent.focus(input1)
  fireEvent.blur(input1)
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

test("RangeInput render with change event", async () => {
  const changeEvent = jest.fn()
  render(
    <RangeInput
      placeholder={["input0", "input1"]}
      allowClear
      onChange={changeEvent}
    />,
  )
  const input0 = screen.getByPlaceholderText("input0")
  const input1 = screen.getByPlaceholderText("input1")

  fireEvent.change(input0, { target: { value: "123" } })
  fireEvent.change(input1, { target: { value: "456" } })
  expect(changeEvent).toBeCalledTimes(2)

  expect(input0).toHaveDisplayValue("123")
  expect(input1).toHaveDisplayValue("456")
})

test("RangeInput render with search event", async () => {
  const pressEnterEvent = jest.fn()
  const pressTabEvent = jest.fn()
  render(
    <RangeInput
      placeholder={["input0", "input1"]}
      onPressEnter={pressEnterEvent}
      onPressTab={pressTabEvent}
    />,
  )
  const input0 = screen.getByPlaceholderText("input0")

  fireEvent.keyDown(input0, { keyCode: 13 })
  expect(pressEnterEvent).toBeCalled()
  fireEvent.keyDown(input0, { keyCode: 9 })
  expect(pressTabEvent).toBeCalled()
})

test("RangeInput render with clear event", async () => {
  const clearEvent = jest.fn()
  render(
    <RangeInput
      allowClear
      value={["test0", "test1"]}
      onClear={clearEvent}
      size={"small"}
    />,
  )
  const clearIcon = screen.getByTitle("InputClearIcon")

  fireEvent.click(clearIcon)
  expect(clearEvent).toBeCalledTimes(1)
})

test("RangeInput render with pressEnter and pressTab event", async () => {
  const pressEnterEvent = jest.fn()
  const pressTabEvent = jest.fn()
  render(
    <RangeInput
      value={["input0", "input1"]}
      onPressEnter={pressEnterEvent}
      onPressTab={pressTabEvent}
    />,
  )
  const input0 = screen.getByDisplayValue("input0")

  fireEvent.keyDown(input0, { keyCode: 13 })
  expect(pressEnterEvent).toBeCalled()
  fireEvent.keyDown(input0, { keyCode: 9 })
  expect(pressTabEvent).toBeCalled()
})
