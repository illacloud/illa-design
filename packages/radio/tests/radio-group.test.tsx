import { Radio, RadioGroup } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import * as React from "react"

test("RadioGroup renders correctly", () => {
  render(
    <RadioGroup data-testid="test-radio-group" aria-label="radio-group">
      <Radio value="a">a</Radio>
      <Radio value="b">b</Radio>
      <Radio value="c">c</Radio>
    </RadioGroup>,
  )
  // expect(screen.getByLabelText("radio-group")).toBeInTheDocument()
})

test("RadioGroup options renders correctly", () => {
  render(
    <RadioGroup options={["A", "B", "C"]} aria-label="radio-group-with-options">
    </RadioGroup>,
  )
  // expect(screen.getByLabelText("radio-group-with-options")).toBeInTheDocument()
})

test("RadioGroup renders with value", () => {
  render(
    <RadioGroup options={["valueA", "valueB", "valueC"]} value={"valueA"}>
    </RadioGroup>,
  )
  expect(screen.getByLabelText("valueA")).toBeChecked()
})