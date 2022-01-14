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
  const visibleEventTop = jest.fn()
  const visibleEventTl = jest.fn()
  const visibleEventTr = jest.fn()
  const visibleEventBottom = jest.fn()
  const visibleEventBl = jest.fn()
  const visibleEventBr = jest.fn()
  const visibleEventLeft = jest.fn()
  const visibleEventLt = jest.fn()
  const visibleEventLb = jest.fn()
  const visibleEventRight = jest.fn()
  const visibleEventRt = jest.fn()
  const visibleEventRb = jest.fn()
  render(<div>
    <Trigger position="top" content="top" onVisibleChange={visibleEventTop}>
      <Button>Hello Trigger Top</Button>
    </Trigger>
    <Trigger position="tl" content="tl" onVisibleChange={visibleEventTl}>
      <Button>Hello Trigger Tl</Button>
    </Trigger>
    <Trigger position="tr" content="tr" onVisibleChange={visibleEventTr}>
      <Button>Hello Trigger Tr</Button>
    </Trigger>
    <Trigger position="bottom" content="bottom" onVisibleChange={visibleEventBottom}>
      <Button>Hello Trigger Bottom</Button>
    </Trigger>
    <Trigger position="bl" content="bl" onVisibleChange={visibleEventBl}>
      <Button>Hello Trigger Bl</Button>
    </Trigger>
    <Trigger position="br" content="br" onVisibleChange={visibleEventBr}>
      <Button>Hello Trigger Br</Button>
    </Trigger>
    <Trigger position="left" content="left" onVisibleChange={visibleEventLeft}>
      <Button>Hello Trigger Left</Button>
    </Trigger>
    <Trigger position="lt" content="lt" onVisibleChange={visibleEventLt}>
      <Button>Hello Trigger Lt</Button>
    </Trigger>
    <Trigger position="lb" content="lb" onVisibleChange={visibleEventLb}>
      <Button>Hello Trigger Lb</Button>
    </Trigger>
    <Trigger position="right" content="right" onVisibleChange={visibleEventRight}>
      <Button>Hello Trigger Right</Button>
    </Trigger>
    <Trigger position="rt" content="rt" onVisibleChange={visibleEventRt}>
      <Button>Hello Trigger Rt</Button>
    </Trigger>
    <Trigger position="rb" content="rb" onVisibleChange={visibleEventRb}>
      <Button>Hello Trigger Rb</Button>
    </Trigger>
  </div>)

  async function tobeExpected(childrenText: string, content: string, event: (visible: boolean) => void) {
    fireEvent.mouseEnter(screen.getByText(childrenText))
    await waitFor(() => expect(event).toBeCalledWith(true), {
      timeout: 3000,
    })
    expect(screen.getByText(content)).toBeInTheDocument()
    fireEvent.mouseLeave(screen.getByText(childrenText))
    await waitFor(() => expect(event).toBeCalledWith(false), {
      timeout: 3000,
    })
  }

  await tobeExpected("Hello Trigger Top", "top", visibleEventTop)
  await tobeExpected("Hello Trigger Tl", "tl", visibleEventTl)
  await tobeExpected("Hello Trigger Tr", "tr", visibleEventTr)
  await tobeExpected("Hello Trigger Left", "left", visibleEventLeft)
  await tobeExpected("Hello Trigger Lt", "lt", visibleEventLt)
  await tobeExpected("Hello Trigger Lb", "lb", visibleEventLb)
  await tobeExpected("Hello Trigger Right", "right", visibleEventRight)
  await tobeExpected("Hello Trigger Rt", "rt", visibleEventRt)
  await tobeExpected("Hello Trigger Rb", "rb", visibleEventRb)
  await tobeExpected("Hello Trigger Bottom", "bottom", visibleEventBottom)
  await tobeExpected("Hello Trigger Bl", "bl", visibleEventBl)
  await tobeExpected("Hello Trigger Br", "br", visibleEventBr)
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