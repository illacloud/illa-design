import * as React from "react"
import { Radio, RadioGroup } from "../src"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

test("RadioGroup renders correctly", () => {
  render(
    <RadioGroup name="Group1" data-testId="radio-group" colorScheme="green">
      <Radio value="a">a</Radio>
      <Radio value="b">b</Radio>
      <Radio value="c">c</Radio>
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group")).toBeInTheDocument()
  expect(screen.getByLabelText("a")).not.toBeChecked()
})

test("RadioGroup disabled renders correctly", () => {
  render(
    <RadioGroup
      options={["disabledA", "disabledB"]}
      data-testid="radio-group-disabled"
      disabled>
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group-disabled")).toBeInTheDocument()
  expect(screen.getByLabelText("disabledA")).toBeDisabled()
  expect(screen.getByLabelText("disabledB")).toBeDisabled()
})

test("RadioGroup options renders correctly", () => {
  render(
    <RadioGroup options={["A", "B", "C"]} data-testid="radio-group-options">
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group-options")).toBeInTheDocument()
})

test("RadioGroup render with options", () => {
  render(
    <RadioGroup
      options={[
        {value:"A", label: "A", disabled: false},
        {value:"B", label: "B" , disabled: true},
        {value:"C", label: "C" , disabled: false},
      ]}
      data-testid="radio-group-options">
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group-options")).toBeInTheDocument()
  expect(screen.getByLabelText("B")).toBeDisabled()
})

test("RadioGroup render with value", () => {
  render(
    <RadioGroup options={["valueA", "valueB", "valueC"]} value={"valueA"}>
    </RadioGroup>,
  )
  expect(screen.getByLabelText("valueA")).toBeChecked()
})

test("RadioGroup options render with spacing", () => {
  render(
    <RadioGroup
      data-testid="radio-group-spacing"
      options={["A", "B", "C"]}
      spacing="15px">
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group-spacing")).toBeInTheDocument()
})

test("RadioGroup options render with spacing", () => {
  render(
    <RadioGroup
      data-testid="radio-group-spacing-16"
      options={["A", "B", "C"]}
      spacing={16}>
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group-spacing-16")).toBeInTheDocument()
})

test("RadioGroup options render with direction", () => {
  render(
    <RadioGroup
      data-testid="radio-group-direction"
      options={["directionA", "directionB", "directionC"]} direction="horizontal">
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group-direction")).toBeInTheDocument()
})

test("RadioGroup options render with direction vertical", () => {
  render(
    <RadioGroup
      data-testid="radio-group-vertical"
      options={["A", "B", "C"]} direction="vertical">
    </RadioGroup>,
  )
  expect(screen.getByTestId("radio-group-vertical")).toBeInTheDocument()
})

test("RadioGroup render with click", async () => {
  const changeEvent = jest.fn()
  render(<RadioGroup
    options={["GroupClickA", "GroupClickB", "GroupClickC"]}>
    onChange={changeEvent}
  </RadioGroup>)
  fireEvent.click(screen.getByLabelText("GroupClickB"))
  expect(screen.getByLabelText("GroupClickB")).toBeChecked()
  // expect(changeEvent).toBeCalled()
})