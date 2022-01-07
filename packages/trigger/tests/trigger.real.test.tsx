/**
 * @jest-environment jest-electron/environment
 */
import { Trigger } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"

test("Trigger renders without close on click", async () => {
  const visibleEvent = jest.fn()
  render(<Trigger content="Trigger Success" defaultPopupVisible position="top" onVisibleChange={visibleEvent}>
    <Button>Hello Trigger</Button>
  </Trigger>)
  await waitFor(() => expect(visibleEvent).toBeCalledWith(true), {
    timeout: 3000,
  })
  fireEvent.click(screen.getByText("Hello Trigger"))
  await waitFor(() => expect(visibleEvent).toBeCalledWith(false), {
    timeout: 3000,
  })
})

test("Trigger renders with content", async () => {
  const visibleEvent = jest.fn()
  render(<Trigger content="Trigger Success" onVisibleChange={visibleEvent}>
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  await waitFor(() => expect(visibleEvent).toBeCalledWith(true), {
    timeout: 3000,
  })
  expect(screen.getByText("Trigger Success")).toBeInTheDocument()
})

test("Trigger renders popup visible", async () => {
  const visibleEvent = jest.fn()
  render(<Trigger content="Trigger Success" position="top" popupVisible onVisibleChange={visibleEvent}>
    <Button>Hello Trigger</Button>
  </Trigger>)
  await waitFor(() => expect(visibleEvent).toBeCalledWith(true), {
    timeout: 3000,
  })
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  fireEvent.mouseLeave(screen.getByText("Hello Trigger"))
  expect(screen.queryAllByText("Trigger Success").length).toEqual(1)
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

test("Trigger's onVisible event and delay time", async () => {
  const visibleEvent = jest.fn()
  render(<Trigger content="Trigger Success" position="top" onVisibleChange={visibleEvent} openDelay={1000}
                  closeDelay={1000}>
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  const showStartTime = new Date().getTime()
  await waitFor(() => expect(visibleEvent).toBeCalledWith(true), {
    timeout: 3000,
  })
  expect(new Date().getTime() - showStartTime).toBeGreaterThanOrEqual(1000)

  const hideStartTime = new Date().getTime()
  fireEvent.mouseLeave(screen.getByText("Hello Trigger"))
  await waitFor(() => expect(visibleEvent).toBeCalledWith(false), {
    timeout: 3000,
  })
  expect(new Date().getTime() - hideStartTime).toBeGreaterThanOrEqual(1000)
})

test("Trigger's point move to tips", async () => {
  const visibleEvent = jest.fn()
  render(<Trigger content="Trigger Success" position="top" onVisibleChange={visibleEvent}>
    <Button>Hello Trigger</Button>
  </Trigger>)
  fireEvent.mouseEnter(screen.getByText("Hello Trigger"))
  await waitFor(() => expect(visibleEvent).toBeCalledWith(true), {
    timeout: 3000,
  })
  fireEvent.mouseEnter(screen.getByText("Trigger Success"))
  await new Promise(r => setTimeout(r, 500))
  expect(visibleEvent).not.toBeCalledWith(false)
})