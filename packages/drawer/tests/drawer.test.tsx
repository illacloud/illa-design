import { Drawer } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

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
  expect(screen.getByTestId("LeftDrawer").parentNode).toHaveStyle({ left: 0 })
  expect(screen.getByTestId("RightDrawer").parentNode).toHaveStyle({ right: 0 })
  expect(screen.getByTestId("TopDrawer").parentNode).toHaveStyle({ top: 0 })
  expect(screen.getByTestId("BottomDrawer").parentNode).toHaveStyle({
    bottom: 0,
  })
})
