import { CheckboxGroup } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("CheckboxGroup renders with text", () => {
  render(<CheckboxGroup options={["A", "B", "C"]} />)
  screen.getAllByRole("checkbox").map((element)=>{
    expect(element).toBeInTheDocument()
  })
})

test("CheckboxGroup renders with disabled", () => {
  render(<CheckboxGroup options={["A", "B", "C"]} disabled />)
  screen.getAllByRole("checkbox").map((element)=>{
    expect(element).toBeDisabled()
  })
})

test("CheckboxGroup renders with checked", () => {
  // render(<CheckboxGroup options={["A", "B", "C"]} defaultValue={["A"]} />)
  // screen.getAllByRole("checkbox").map((element)=>{
  //   expect(element).toBeChecked()
  // })
})
