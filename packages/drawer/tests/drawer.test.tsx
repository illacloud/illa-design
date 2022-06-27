import { Drawer } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { useState } from "react"

test("Drawer renders with title", () => {
  render(<Drawer visible={true} title={"Drawer title"} />)
  expect(screen.getByText("Drawer title")).toBeInTheDocument()
  expect(screen.getByText("Drawer title")).toHaveStyle({
    fontSize: 16,
    fontWeight: 500,
  })
})

test("Drawer renders with different placement", () => {
  render(
    <Drawer data-testid={"LeftDrawer"} visible={true} placement={"left"} />,
  )
  render(
    <Drawer data-testid={"RightDrawer"} visible={true} placement={"right"} />,
  )
  render(<Drawer data-testid={"TopDrawer"} visible={true} placement={"top"} />)
  render(
    <Drawer data-testid={"BottomDrawer"} visible={true} placement={"bottom"} />,
  )
  expect(
    screen.getByTestId("LeftDrawer").parentNode?.parentNode?.parentNode,
  ).toHaveStyle({ left: 0 })
  expect(
    screen.getByTestId("RightDrawer").parentNode?.parentNode?.parentNode,
  ).toHaveStyle({ right: 0 })
  expect(
    screen.getByTestId("TopDrawer").parentNode?.parentNode?.parentNode,
  ).toHaveStyle({ top: 0 })
  expect(
    screen.getByTestId("BottomDrawer").parentNode?.parentNode?.parentNode,
  ).toHaveStyle({
    bottom: 0,
  })
})

test("Drawer renders with focus lock correctly", () => {
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
        <Drawer visible={show}>
          <input data-testid="input" />
        </Drawer>
      </>
    )
  }
  render(<Component />)
  const btn = screen.getByTestId("button")
  fireEvent.click(btn)
  expect(btn).not.toHaveFocus()
  expect(screen.getByTestId("input")).toHaveFocus()
})
