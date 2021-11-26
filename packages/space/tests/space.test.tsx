import * as React from "react"
import { render } from "@testing-library/react"
import { Space } from "../src"
import "@testing-library/jest-dom"

test("Space renders with different size", () => {
  const { getByTestId } = render(<div>
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
  expect(getByTestId("test-space-mini").parentNode).toHaveStyle({
    "margin-left": "4px",
  })
  expect(getByTestId("test-space-small").parentNode).toHaveStyle({
    "margin-left": "8px",
  })
  expect(getByTestId("test-space-medium").parentNode).toHaveStyle({
    "margin-left": "16px",
  })
  expect(getByTestId("test-space-large").parentNode).toHaveStyle({
    "margin-left": "24px",
  })
  expect(getByTestId("test-space-custom").parentNode).toHaveStyle({
    "margin-left": "30px",
  })
})

test("Space renders with different direction", () => {
  const { getByTestId } = render(<div>
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
  expect(getByTestId("test-space-mini").parentNode).toHaveStyle("margin-left:8px")
  expect(getByTestId("test-space-small").parentNode).toHaveStyle("margin-top:8px")
})