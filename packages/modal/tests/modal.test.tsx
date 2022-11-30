import { useState } from "react"
import { Modal, ModalGroup, useModal } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

jest.mock("uuid", () => ({ v4: () => `${Math.random()}` }))

test("Modal renders with title ", () => {
  render(<Modal visible={true} title={"Modal Title"} />)
  expect(screen.getByText("Modal Title")).toBeInTheDocument()
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
