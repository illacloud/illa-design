import { Dropdown } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"

test("Dropdown render correctly", () => {
  render(
    <Dropdown dropList={<div>test</div>}>
      <Button>Hover me</Button>
    </Dropdown>,
  )
  fireEvent.mouseEnter(screen.getByText("Hover me"))
  expect(screen.getByText("Hover me")).toBeInTheDocument()
})
