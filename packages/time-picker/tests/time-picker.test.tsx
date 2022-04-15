import { TimePicker } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("TimePicker renders with text", () => {
  render(<TimePicker placeholder={"test"} />)
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument()
})

test("TimePicker renders with disabled", () => {
  render(<TimePicker placeholder={"disabled"} disabled />)
  expect(screen.getByPlaceholderText("disabled")).toBeDisabled()
})

test("TimePicker renders with text", () => {
  render(<TimePicker value={"10:00:00"} />)
  expect(screen.getByDisplayValue("10:00:00")).toBeInTheDocument()
})

test("TimePicker renders with error", () => {
  render(<TimePicker placeholder={"error"} error />)
  expect(screen.getByPlaceholderText("error").parentElement).toHaveStyle({
    "border-color": ` ${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("TimePicker renders with size", () => {
  render(
    <div>
      <TimePicker placeholder="large" size="large" />
      <TimePicker placeholder="small" size="small" />
    </div>,
  )
  expect(screen.getByPlaceholderText("large")?.parentElement).toHaveStyle({
    padding: "0 16px",
  })
  expect(screen.getByPlaceholderText("small")?.parentElement).toHaveStyle({
    padding: "0 12px",
  })
})

test("TimePicker render with input event", async () => {
  const changeEvent = jest.fn()
  render(
    <TimePicker
      placeholder="test-input-event"
      onChange={changeEvent}
      allowClear
    />,
  )
  const testEvent = screen.getByPlaceholderText("test-input-event")
  fireEvent.change(testEvent, { target: { value: "123" } })
  expect(testEvent).toHaveDisplayValue("123")
  await waitFor(() => {
    userEvent.type(testEvent, `{enter}`)
  })
  expect(testEvent).toHaveDisplayValue("")
  fireEvent.change(testEvent, { target: { value: "10:00:00" } })
  await waitFor(() => {
    userEvent.type(testEvent, `{enter}`)
  })
  expect(testEvent).toHaveDisplayValue("10:00:00")
  expect(changeEvent).toBeCalled()
})
