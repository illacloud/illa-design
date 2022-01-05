/**
 * @jest-environment jest-electron/environment
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"
import { Tooltip } from "../src"

test("Tooltip renders with content", async () => {
  const visibleEvent = jest.fn()
  render(<Tooltip content="Tooltip Success" onVisibleChange={visibleEvent}>
    <Button>Hello Tooltip</Button>
  </Tooltip>)
  fireEvent.mouseEnter(screen.getByText("Hello Tooltip"))
  await waitFor(() => expect(visibleEvent).toBeCalledWith(true), {
    timeout: 3000,
  })
  expect(screen.getByText("Tooltip Success")).toBeInTheDocument()
})
