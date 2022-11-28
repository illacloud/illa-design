import { useState } from "react"
import { Modal, ModalGroup, useModal } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Modal renders with title ", () => {
  render(<Modal visible={true} title={"Modal Title"} />)
  expect(screen.getByText("Modal Title")).toBeInTheDocument()
})

test("Modal renders by modal api", () => {
  render(<ModalGroup />)
  const modal = useModal()
  const modalId = modal.info({
    visible: true,
    title: "Info",
    children: "A message",
  })
  expect(screen.getByText("Info").firstElementChild).toHaveStyle({
    position: "absolute",
  })
  const ele = screen.getByText("A message")
  expect(ele).toBeInTheDocument()
  modal.update(modalId, { children: "new message" })
  const newEle = screen.getByText("new message")
  expect(ele).toBe(newEle)
})

test("Modal api renders with config", () => {
  render(<ModalGroup />)
  const modal = useModal()
  modal.warning({
    visible: true,
    title: "Warning",
    children: "A message",
    // @ts-ignore
    "data-testid": "warn",
  })
  expect(screen.getByTestId("warn").firstChild).toHaveStyle({ width: "400px" })
  modal.success({
    visible: true,
    title: "Success",
    children: "A message",
    // @ts-ignore
    "data-testid": "success",
  })
  expect(screen.getByTestId("success").firstChild).toHaveStyle({
    width: "520px",
  })
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
