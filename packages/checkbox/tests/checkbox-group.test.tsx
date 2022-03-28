import { CheckboxGroup } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("CheckboxGroup renders with text", () => {
  render(<CheckboxGroup options={["A", "B", "C"]} />)
  screen.getAllByRole("checkbox").map((element) => {
    expect(element).toBeInTheDocument()
  })
})

test("CheckboxGroup renders with disabled", () => {
  render(<CheckboxGroup options={["A", "B", "C"]} disabled />)
  screen.getAllByRole("checkbox").map((element) => {
    expect(element).toBeDisabled()
  })
})

test("CheckboxGroup renders with checked", () => {
  render(
    <div>
      <CheckboxGroup options={["A", "B", "C"]} defaultValue={["A"]} />
      <CheckboxGroup options={["1", "2", "3"]} value={["3"]} />
    </div>,
  )
  expect(screen.getByDisplayValue("A")).toBeChecked()
  expect(screen.getByDisplayValue("3")).toBeChecked()
})

test("CheckboxGroup renders with vertical", () => {
  render(<CheckboxGroup options={["A", "B", "C"]} direction="vertical" />)
  screen.getAllByRole("checkbox").map((element) => {
    expect(element).toBeInTheDocument()
  })
})

test("CheckboxGroup render with click", async () => {
  const changeEvent = jest.fn()
  render(<CheckboxGroup options={["a", "b", "c"]} onChange={changeEvent} />)

  fireEvent.click(screen.getByDisplayValue("a"))
  expect(screen.getByDisplayValue("a")).toBeChecked()
  expect(changeEvent).toBeCalled()
  fireEvent.click(screen.getByDisplayValue("a"))
  expect(screen.getByDisplayValue("a")).not.toBeChecked()
  fireEvent.click(screen.getByDisplayValue("c"))
  expect(screen.getByDisplayValue("c")).toBeChecked()
})
