import { Countdown } from "../src"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Countdown renders with title", () => {
  render(<Countdown data-testid="test-title" title={"Deadline"} />)
  expect(screen.getByTestId("test-title")).toBeInTheDocument()
  expect(screen.getByText("Deadline")).toBeInTheDocument()
  expect(screen.getByText("Deadline")).toHaveStyle({
    "margin-bottom": "4px",
    "font-size": "14px",
  })
})

test("Countdown renders with time", async () => {
  render(
    <Countdown
      data-testid="test-time"
      value={Date.now() + 2000}
      title={"Deadline"}
    />,
  )
  await waitFor(
    () => expect(screen.getByText("00:00:00")).toBeInTheDocument(),
    {
      timeout: 3000,
    },
  )
})

test("Countdown renders with onFinish&onChange", async () => {
  const onChangeEvent = jest.fn()
  const onFinishEvent = jest.fn()
  render(
    <Countdown
      value={Date.now() + 2000}
      onChange={onChangeEvent}
      onFinish={onFinishEvent}
    />,
  )
  expect(onFinishEvent).not.toBeCalled()
  await waitFor(() => expect(onFinishEvent).toBeCalled(), {
    timeout: 3000,
  })
  expect(onChangeEvent).toBeCalled()
})
