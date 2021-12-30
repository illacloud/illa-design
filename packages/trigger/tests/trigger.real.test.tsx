/**
 * @jest-environment jest-electron/environment
 */
import { Trigger } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"

test("Trigger renders with different color scheme", async () => {
  render(<Trigger content="Trigger Success">
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  await waitFor(() => {
    expect(screen.getByText("Trigger Success")).toBeInTheDocument()
  })
})