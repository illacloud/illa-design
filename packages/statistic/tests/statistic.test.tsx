import { Statistic } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Statistic renders with title", () => {
  render(<Statistic data-testid="test-title" title={"Amount"} />)
  expect(screen.getByTestId("test-title")).toBeInTheDocument()
  expect(screen.getByText("Amount")).toBeInTheDocument()
  expect(screen.getByText("Amount")).toHaveStyle({
    "margin-bottom": "4px",
    "font-size": "14px",
  })
})

test("Statistic renders with number value", () => {
  render(<Statistic data-testid="test-number-value" value={189907.32} />)
  expect(screen.getByText("189,907.32")).toBeInTheDocument()
  expect(screen.getByText("189,907.32")).toHaveStyle({
    display: "inline-block",
    direction: "ltr",
  })
})

test("Statistic renders with string value", () => {
  render(<Statistic data-testid="test-string-value" value={"t189907.32.49a"} />)
  expect(screen.getByText("t189907.32.49a")).toBeInTheDocument()
})

test("Statistic renders with different groupSeparator", () => {
  render(
    <Statistic
      data-testid="test-groupSeparator"
      value={1899078.32}
      groupSeparator={"&"}
    />,
  )
  expect(screen.getByText("1&899&078.32")).toBeInTheDocument()
})

test("Statistic renders with different decimalSeparator", () => {
  render(
    <Statistic
      data-testid="test-decimalSeparator"
      value={1899078.32}
      decimalSeparator={"&"}
    />,
  )
  expect(screen.getByText("1,899,078&32")).toBeInTheDocument()
})

test("Statistic renders with prefix and suffix", () => {
  render(
    <Statistic
      data-testid="test-prefix-suffix"
      value={22}
      prefix={"#"}
      suffix={"%"}
    />,
  )
  expect(screen.getByText("#")).toHaveStyle({
    display: "inline-block",
    "font-size": "14px",
    "line-height": "1.57",
    "margin-right": "4px",
  })
  expect(screen.getByText("%")).toHaveStyle({
    display: "inline-block",
    "font-size": "14px",
    "line-height": "1.57",
    "margin-left": "4px",
  })
})

test("Statistic renders with precision", () => {
  render(
    <Statistic data-testid="test-precision" value={1922.6782} precision={2} />,
  )
  expect(screen.getByText("1,922.68")).toBeInTheDocument()
})

test("Statistic renders with format", () => {
  render(<Statistic value={1644822796115} format={"YYYY-MM-DD"} />)
  expect(screen.getByText("2022-02-14")).toBeInTheDocument()
})
