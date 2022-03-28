import { Radio, RadioGroup } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("RadioGroup renders correctly", () => {
  render(
    <RadioGroup name="Group1" data-testid="radio-group" colorScheme="green">
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
      disabled
    />,
  )
  expect(screen.getByTestId("radio-group-disabled")).toBeInTheDocument()
  expect(screen.getByLabelText("disabledA")).toBeDisabled()
  expect(screen.getByLabelText("disabledB")).toBeDisabled()
})

test("RadioGroup options renders correctly", () => {
  render(
    <RadioGroup options={["A", "B", "C"]} data-testid="radio-group-options" />,
  )
  expect(screen.getByTestId("radio-group-options")).toBeInTheDocument()
})

test("RadioGroup render with options", () => {
  render(
    <RadioGroup
      options={[
        { value: "A", label: "A", disabled: false },
        { value: "B", label: "B", disabled: true },
        { value: "C", label: "C", disabled: false },
      ]}
      data-testid="radio-group-options"
    />,
  )
  expect(screen.getByTestId("radio-group-options")).toBeInTheDocument()
  expect(screen.getByLabelText("B")).toBeDisabled()
})

test("RadioGroup render with value", () => {
  render(
    <RadioGroup options={["valueA", "valueB", "valueC"]} value={"valueA"} />,
  )
  expect(screen.getByLabelText("valueA")).toBeChecked()
})

test("RadioGroup options render with spacing", () => {
  render(
    <RadioGroup
      data-testid="radio-group-spacing"
      options={["A", "B", "C"]}
      spacing="15px"
    />,
  )
  expect(screen.getByTestId("radio-group-spacing")).toBeInTheDocument()
  expect(screen.getByTestId("radio-group-spacing")).toHaveStyle(`
    gap: 15px;
  `)
})

test("RadioGroup options render with spacing", () => {
  render(
    <RadioGroup
      data-testid="radio-group-spacing-16"
      options={["A", "B", "C"]}
      spacing={16}
    />,
  )
  expect(screen.getByTestId("radio-group-spacing-16")).toBeInTheDocument()
  expect(screen.getByTestId("radio-group-spacing-16")).toHaveStyle(`
    gap: 16px;
  `)
})

test("RadioGroup options render with direction", () => {
  render(
    <RadioGroup
      data-testid="radio-group-direction"
      options={["directionA", "directionB", "directionC"]}
      direction="horizontal"
    />,
  )
  expect(screen.getByTestId("radio-group-direction")).toBeInTheDocument()
  expect(screen.getByTestId("radio-group-direction")).toHaveStyle(`
    flex-direction: row;
  `)
})

test("RadioGroup options render with direction vertical", () => {
  render(
    <RadioGroup
      data-testid="radio-group-vertical"
      options={["A", "B", "C"]}
      direction="vertical"
    />,
  )
  expect(screen.getByTestId("radio-group-vertical")).toBeInTheDocument()
  expect(screen.getByTestId("radio-group-vertical")).toHaveStyle(`
    flex-direction: column;
  `)
})

test("RadioGroup render with click", async () => {
  render(<RadioGroup options={["GroupClickA", "GroupClickB", "GroupClickC"]} />)
  const GroupClickA = screen.getByLabelText("GroupClickA")
  const GroupClickB = screen.getByLabelText("GroupClickB")

  fireEvent.click(GroupClickB)
  expect(GroupClickB).toBeChecked()
  GroupClickB.focus()
  expect(GroupClickB).toHaveFocus()
  fireEvent.click(GroupClickA)
  expect(GroupClickA).toBeChecked()
})

test("RadioGroup child render with click", async () => {
  const changeEvent = jest.fn()
  render(
    <RadioGroup onChange={changeEvent}>
      <Radio value="a">a</Radio>
      <Radio value="b">b</Radio>
      <Radio value="c">c</Radio>
    </RadioGroup>,
  )
  fireEvent.click(screen.getByLabelText("a"))
  expect(screen.getByLabelText("a")).toBeChecked()
  expect(changeEvent).toBeCalled()
  fireEvent.click(screen.getByLabelText("c"))
  expect(screen.getByLabelText("c")).toBeChecked()
  expect(changeEvent).toBeCalled()
})
