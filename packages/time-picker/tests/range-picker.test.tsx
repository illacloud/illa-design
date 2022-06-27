import { TimeRangePicker } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("RangePicker renders with text", () => {
  render(<TimeRangePicker placeholder={["test0", "test1"]} />)
  expect(screen.getByPlaceholderText("test0")).toBeInTheDocument()
  expect(screen.getByPlaceholderText("test1")).toBeInTheDocument()
})

test("RangePicker renders with disabled", () => {
  render(<TimeRangePicker placeholder={["disabled"]} disabled />)
  expect(screen.getByPlaceholderText("disabled")).toBeDisabled()
})

test("RangePicker renders with text", () => {
  render(<TimeRangePicker value={["10:00:00", "12:00:00"]} />)
  expect(screen.getByDisplayValue("10:00:00")).toBeInTheDocument()
})

test("RangePicker renders with error", () => {
  render(<TimeRangePicker placeholder={["error"]} error />)
  expect(screen.getByPlaceholderText("error").parentElement).toHaveStyle({
    "border-color": ` ${globalColor(`--${illaPrefix}-red-03`)}`,
  })
})

test("RangePicker renders with size", () => {
  render(
    <div>
      <TimeRangePicker data-testid="large" size="large" />
      <TimeRangePicker data-testid="small" size="small" />
    </div>,
  )
  expect(screen.getAllByTestId("large")[0]?.parentElement).toHaveStyle({
    padding: "0 16px",
  })
  expect(screen.getAllByTestId("small")[0]?.parentElement).toHaveStyle({
    padding: "0 12px",
  })
})

test("RangePicker render with input event", async () => {
  const changeEvent = jest.fn()
  render(
    <TimeRangePicker
      data-testid="test-input-event"
      onChange={changeEvent}
      allowClear
    />,
  )
  const testElement0 = screen.getAllByTestId("test-input-event")[0]
  const testElement1 = screen.getAllByTestId("test-input-event")[1]
  fireEvent.change(testElement0, { target: { value: "10:00:00" } })
  await waitFor(
    () => {
      userEvent.type(testElement0, `{enter}`)
    },
    {
      timeout: 1000,
    },
  )
  fireEvent.change(testElement1, { target: { value: "12:00:00" } })
  await waitFor(
    () => {
      userEvent.type(testElement1, `{enter}`)
    },
    {
      timeout: 1000,
    },
  )
  expect(testElement0).toHaveDisplayValue("10:00:00")
  expect(testElement1).toHaveDisplayValue("12:00:00")
  expect(changeEvent).toBeCalled()
})
