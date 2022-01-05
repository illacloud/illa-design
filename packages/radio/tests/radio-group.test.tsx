import * as React from "react"
import { Radio, RadioGroup } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

test("RadioGroup renders correctly", () => {
  const { asFragment } = render(
    <RadioGroup data-testid="test-radio-group" aria-label="radio-group" role={"group"}>
      <Radio value="a">a</Radio>
      <Radio value="b">b</Radio>
      <Radio value="c">c</Radio>
    </RadioGroup>,
  )
  // expect(asFragment()).toMatchSnapshot()
  // expect(screen.getAllByRole("group")).toBeInTheDocument()
  // expect(screen.getAllByRole("radio-group")).toBeInTheDocument()
})

test("RadioGroup options renders correctly", () => {
  render(
    <RadioGroup options={["A", "B", "C"]} data-testid="test-radio-group-1">
    </RadioGroup>,
  )
  // expect(screen.getByTestId("test-radio-group-1")).toBeInTheDocument()
})

test("RadioGroup renders with value", () => {
  render(
    <RadioGroup options={["valueA", "valueB", "valueC"]} value={"valueA"}>
    </RadioGroup>,
  )
  expect(screen.getByLabelText("valueA")).toBeChecked()
})

test("RadioGroup renders with click", async () => {
  render(
    <RadioGroup options={["clickA", "clickB", "clickC"]}>
    </RadioGroup>,
  )
  fireEvent.click(screen.getByLabelText("clickB"))
  await waitFor(() => {
    expect(screen.getByLabelText("clickB")).toBeChecked()
  }, {
    timeout: 3000,
  })
})