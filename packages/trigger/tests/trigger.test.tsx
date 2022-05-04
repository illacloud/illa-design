import { Trigger } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"

test("Trigger renders without arrow", async () => {
  render(
    <Trigger content="Trigger Success" showArrow={false} position="top">
      <Button>Hello Trigger</Button>
    </Trigger>,
  )
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  await waitFor(
    () => expect(screen.queryByTitle("TriangleIconTop")).not.toBeTruthy(),
    {
      timeout: 3000,
    },
  )
})
