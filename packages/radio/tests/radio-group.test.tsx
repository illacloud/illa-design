import { Radio, RadioGroup } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import * as React from "react"

test("RadioGroup renders correctly", () => {
  render(
    <RadioGroup data-testid="test-radio-group">
      <Radio value="a">A</Radio>
      <Radio value="b">B</Radio>
      <Radio value="c">c</Radio>
    </RadioGroup>,
  )
  // expect(screen.getByTestId("test-radio-group")).toBeInTheDocument()
})