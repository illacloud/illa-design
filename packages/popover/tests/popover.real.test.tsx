/**
 * @jest-environment jest-electron/environment
 */
import { Popover } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"

test("Tag renders with text & title", async () => {
  const visibleEvent = jest.fn()
  render(<Popover title="Popover Title" trigger="click" content="I'm a popover content" onVisibleChange={visibleEvent}>
    <Button>Hello Popover</Button>
  </Popover>)
  fireEvent.click(screen.getByText("Hello Popover"))
  await waitFor(() => expect(visibleEvent).toBeCalledWith(true), {
    timeout: 3000,
  })
  expect(screen.getByText("Popover Title")).toBeInTheDocument()
  expect(screen.getByText("I'm a popover content")).toBeInTheDocument()
})