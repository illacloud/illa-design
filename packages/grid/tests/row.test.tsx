import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import * as React from "react"
import { Row } from "../src"

test("Row renders header and footer.", () => {
  render(<Row data-testid="test-row" />)
  expect(screen.getByTestId("test-row")).toBeInTheDocument()
})
