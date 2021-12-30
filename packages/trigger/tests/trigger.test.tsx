import { Trigger } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Trigger renders correctly", async () => {
  render(<Trigger content="Trigger Success">
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  await waitFor(() => expect(screen.getByText("Trigger Success")).toBeInTheDocument(), {
    timeout: 3000,
  })
})

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

test("Trigger renders with content", async () => {
  render(<Trigger content="Trigger Success">
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  await waitFor(() => expect(screen.getByText("Trigger Success")).toBeInTheDocument(), {
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

test("Trigger renders with different position", async () => {
  render(<div>
    <Trigger position="top" content="top">
      <Button>Hello Trigger Top</Button>
    </Trigger>
    <Trigger position="tl" content="tl">
      <Button>Hello Trigger Tl</Button>
    </Trigger>
    <Trigger position="tr" content="tr">
      <Button>Hello Trigger Tr</Button>
    </Trigger>
    <Trigger position="bottom" content="bottom">
      <Button>Hello Trigger Bottom</Button>
    </Trigger>
    <Trigger position="bl" content="bl">
      <Button>Hello Trigger Bl</Button>
    </Trigger>
    <Trigger position="br" content="br">
      <Button>Hello Trigger Br</Button>
    </Trigger>
    <Trigger position="left" content="left">
      <Button>Hello Trigger Left</Button>
    </Trigger>
    <Trigger position="lt" content="lt">
      <Button>Hello Trigger Lt</Button>
    </Trigger>
    <Trigger position="lb" content="lb">
      <Button>Hello Trigger Lb</Button>
    </Trigger>
    <Trigger position="right" content="right">
      <Button>Hello Trigger Right</Button>
    </Trigger>
    <Trigger position="rt" content="rt">
      <Button>Hello Trigger Rt</Button>
    </Trigger>
    <Trigger position="rb" content="rb">
      <Button>Hello Trigger Rb</Button>
    </Trigger>
  </div>)

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Top"))
  await waitFor(() => expect(screen.getByText("top")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Top"))
  await waitFor(() => expect(screen.queryByTitle("top")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Tl"))
  await waitFor(() => expect(screen.getByText("tl")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Tl"))
  await waitFor(() => expect(screen.queryByTitle("tl")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Tr"))
  await waitFor(() => expect(screen.getByText("tr")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Tr"))
  await waitFor(() => expect(screen.queryByTitle("tr")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Bottom"))
  await waitFor(() => expect(screen.getByText("bottom")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Bottom"))
  await waitFor(() => expect(screen.queryByTitle("bottom")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Bl"))
  await waitFor(() => expect(screen.getByText("bl")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Bl"))
  await waitFor(() => expect(screen.queryByTitle("bl")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Br"))
  await waitFor(() => expect(screen.getByText("br")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Br"))
  await waitFor(() => expect(screen.queryByTitle("br")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Left"))
  await waitFor(() => expect(screen.getByText("left")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Left"))
  await waitFor(() => expect(screen.queryByTitle("left")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Lt"))
  await waitFor(() => expect(screen.getByText("lt")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Lt"))
  await waitFor(() => expect(screen.queryByTitle("lt")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Lb"))
  await waitFor(() => expect(screen.getByText("lb")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Lb"))
  await waitFor(() => expect(screen.queryByTitle("lb")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Rt"))
  await waitFor(() => expect(screen.getByText("rt")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Rt"))
  await waitFor(() => expect(screen.queryByTitle("rt")).not.toBeTruthy(), {
    timeout: 3000,
  })

  fireEvent.mouseEnter(screen.getByText("Hello Trigger Rb"))
  await waitFor(() => expect(screen.getByText("rb")).toBeInTheDocument())
  fireEvent.mouseLeave(screen.getByText("Hello Trigger Rb"))
  await waitFor(() => expect(screen.queryByTitle("rb")).not.toBeTruthy(), {
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