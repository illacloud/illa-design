import * as React from "react"
import { render,screen } from "@testing-library/react"
import { Space } from "../src"
import "@testing-library/jest-dom"

test("Space renders with different size", () => {
  render(<div>
    <Space size="mini">
    <span>
      A
    </span>
      <span data-testid="test-space-mini">
      B
    </span>
    </Space>
    <Space size="small">
    <span>
      A
    </span>
      <span data-testid="test-space-small">
      B
    </span>
    </Space>
    <Space size="medium">
    <span>
      A
    </span>
      <span data-testid="test-space-medium">
      B
    </span>
    </Space>
    <Space size="large">
    <span>
      A
    </span>
      <span data-testid="test-space-large">
      B
    </span>
    </Space>
    <Space size="30px">
    <span>
      A
    </span>
      <span data-testid="test-space-custom">
      B
    </span>
    </Space>
  </div>)
  expect(screen.getByTestId("test-space-mini").parentNode).toHaveStyle({
    "margin-left": "4px",
  })
  expect(screen.getByTestId("test-space-small").parentNode).toHaveStyle({
    "margin-left": "8px",
  })
  expect(screen.getByTestId("test-space-medium").parentNode).toHaveStyle({
    "margin-left": "16px",
  })
  expect(screen.getByTestId("test-space-large").parentNode).toHaveStyle({
    "margin-left": "24px",
  })
  expect(screen.getByTestId("test-space-custom").parentNode).toHaveStyle({
    "margin-left": "30px",
  })
})

test("Space renders with different direction", () => {
  render(<div>
    <Space direction="horizontal">
    <span>
      A
    </span>
      <span data-testid="test-space-mini">
      B
    </span>
    </Space>
    <Space direction="vertical">
    <span>
      A
    </span>
      <span data-testid="test-space-small">
      B
    </span>
    </Space>
  </div>)
  expect(screen.getByTestId("test-space-mini").parentNode).toHaveStyle("margin-left:8px")
  expect(screen.getByTestId("test-space-small").parentNode).toHaveStyle("margin-top:8px")
})

test("Space renders with different align", () => {
  const { asFragment } = render(
    <Space align="start">
    <span>
      A
    </span>
      <span>
      B
    </span>
    </Space>,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("Space renders with divider", () => {
  const { asFragment } = render(
    <Space divider={true}>
    <span>
      A
    </span>
      <span>
      B
    </span>
    </Space>,
  )
  expect(asFragment()).toMatchSnapshot()
})