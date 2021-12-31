import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"
import { Tooltip } from "../src"

test("Tooltip renders with content", async () => {
  render(<Tooltip content="Tooltip Success">
    <Button>Hello Tooltip</Button>
  </Tooltip>)
  fireEvent.mouseEnter(screen.getByText("Hello Tooltip"))
  await waitFor(() => expect(screen.getByText("Tooltip Success")).toBeInTheDocument(), {
    timeout: 3000,
  })
})
