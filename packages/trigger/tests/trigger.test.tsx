import { Trigger } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Trigger renders with different color scheme", async () => {
  render(<div>
    <Trigger data-testid="test-trigger-custom" content="Trigger Success" colorScheme="#123456">
      <Button>Hello Trigger Custom</Button>
    </Trigger>
    <Trigger data-testid="test-trigger-prepare" content="Trigger Success" colorScheme="blue">
      <Button>Hello Trigger Prepare</Button>
    </Trigger>
  </div>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger Custom"))
  await waitFor(() => expect(screen.getByTestId("test-trigger-custom")).toHaveStyle({
    backgroundColor: "rgb(18, 52, 86);",
  }), {
    timeout: 3000,
  })
  fireEvent.mouseEnter(screen.getByText("Hello Trigger Prepare"))
  await waitFor(() => expect(screen.getByTestId("test-trigger-prepare")).toHaveStyle({
    backgroundColor: `${globalColor(`--${illaPrefix}-blue-02`)};`,
  }), {
    timeout: 3000,
  })
})

test("Trigger renders without arrow", async () => {
  render(<Trigger content="Trigger Success" showArrow={false} position="top">
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  await waitFor(() => expect(screen.queryByTitle("TriangleIconTop")).not.toBeTruthy(), {
    timeout: 3000,
  })
})

test("Trigger renders disabled", async () => {
  render(<Trigger content="Trigger Success" position="top" disabled>
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  expect(screen.queryAllByText("Trigger Success").length).toEqual(0)
})