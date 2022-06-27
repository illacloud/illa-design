import { useState } from "react"
import { Modal } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Modal renders with title ", () => {
  render(<Modal visible={true} title={"Modal Title"} />)
  expect(screen.getByText("Modal Title")).toBeInTheDocument()
})

test("Modal renders by modal api", () => {
  const modal = Modal.info({
    visible: true,
    title: "Info",
    content: "A message",
  })
  expect(screen.getByText("Info").firstElementChild).toHaveStyle({
    position: "absolute",
  })
  const ele = screen.getByText("A message")
  expect(ele).toBeInTheDocument()
  modal.update({ content: "new message" })
  const newEle = screen.getByText("new message")
  expect(ele).toBe(newEle)
  modal.close()
  Modal.destroyAll()
})

test("Modal api renders with config", () => {
  Modal.warning({
    visible: true,
    title: "Warning",
    content: "A message",
    // @ts-ignore
    "data-testid": "warn",
  })
  expect(screen.getByTestId("warn").firstChild).toHaveStyle({ width: "320px" })
  Modal.config({ simple: false })
  Modal.success({
    visible: true,
    title: "Success",
    content: "A message",
    // @ts-ignore
    "data-testid": "success",
  })
  expect(screen.getByTestId("success").firstChild).toHaveStyle({
    width: "520px",
  })
  Modal.config({ simple: true })
  Modal.destroyAll()
})

test("Modal renders with withoutPadding ", () => {
  render(
    <Modal visible={true} title={"Modal Title"} withoutPadding>
      Modal Content
    </Modal>,
  )
  expect(screen.getByText("Modal Content")).toHaveStyle({
    padding: "0px",
  })
})

test("Modal renders with focus lock correctly", () => {
  const Component = () => {
    const [show, setShow] = useState(false)
    return (
      <>
        <button
          data-testid="button"
          onClick={() => {
            setShow((show) => !show)
          }}
        >
          Click
        </button>
        <Modal visible={show}>
          <input data-testid="input" />
        </Modal>
      </>
    )
  }
  render(<Component />)
  const btn = screen.getByTestId("button")
  fireEvent.click(btn)
  expect(btn).not.toHaveFocus()
  expect(screen.getByTestId("input")).toHaveFocus()
})
