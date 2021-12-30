/**
 * @jest-environment jest-electron/environment
 */
import { Trigger } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"

test("Trigger renders without close on click", async () => {
  render(<Trigger content="Trigger Success" defaultPopupVisible position="top">
    <Button>Hello Trigger</Button>
  </Trigger>)
  // measure
  await waitFor(() => expect(screen.queryAllByText("Trigger Success").length).toEqual(2), {
    timeout: 3000,
  })
  // set
  await waitFor(() => expect(screen.queryAllByText("Trigger Success").length).toEqual(1), {
    timeout: 3000,
  })
  fireEvent.click(screen.getByText("Hello Trigger"))
  // expect
  await waitFor(() => expect(screen.queryAllByText("Trigger Success").length).toEqual(0), {
    timeout: 3000,
  })
})

test("Trigger renders disabled", async () => {
  render(<Trigger content="Trigger Success" position="top" popupVisible>
    <Button>Hello Trigger</Button>
  </Trigger>)
  // measure
  await waitFor(() => expect(screen.queryAllByText("Trigger Success").length).toEqual(2), {
    timeout: 3000,
  })
  // set
  await waitFor(() => expect(screen.queryAllByText("Trigger Success").length).toEqual(1), {
    timeout: 3000,
  })
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  fireEvent.mouseLeave(screen.getByText("Hello Trigger"))
  expect(screen.queryAllByText("Trigger Success").length).toEqual(1)
})