import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Col, Row } from "../src"

test("Grid renders correctly.", () => {
  render(
    <Row data-testid="test-row">
      <Col data-testid="test-col" />
      <Col />
    </Row>,
  )
  expect(screen.getByTestId("test-row")).toBeInTheDocument()
  expect(screen.getByTestId("test-col")).toBeInTheDocument()
})

test("Grid renders span.", () => {
  render(
    <Row
      data-testid="test-row"
      align="start"
      justify="end"
      horizontalGap="30px"
      verticalGap="30px"
    >
      <Col span={13} />
      <Col span={15} />
    </Row>,
  )
  expect(screen.getByTestId("test-row")).toMatchSnapshot()
})

test("Grid renders col correctly.", () => {
  render(
    <Row data-testid="test-row">
      <Col span={12} offset={3} order={2} push={3} pull={3} />
      <Col span={12} offset={3} order={1} push={3} pull={3} />
    </Row>,
  )
  expect(screen.getByTestId("test-row")).toMatchSnapshot()
})

test("Grid renders with gap.", () => {
  render(
    <Row
      data-testid="test-row"
      horizontalGap={{
        xs: "12px",
        sm: "12px",
        md: "12px",
        lg: "12px",
        xl: "12px",
        xxl: "12px",
      }}
      verticalGap={{
        xs: "12px",
        sm: "12px",
        md: "12px",
        lg: "12px",
        xl: "12px",
        xxl: "12px",
      }}
    >
      <Col span={20} />
      <Col span={15} />
    </Row>,
  )
  expect(screen.getByTestId("test-row")).toMatchSnapshot()
})

test("Grid renders reactive correctly.", () => {
  render(
    <Row data-testid="test-row">
      <Col
        xs={{
          span: 12,
          offset: 3,
          order: 2,
          push: 3,
          pull: 3,
        }}
        sm={{
          offset: 3,
          order: 2,
          push: 3,
          pull: 3,
        }}
        md={{
          span: 12,
          offset: 3,
          order: 2,
          push: 3,
          pull: 3,
        }}
        lg={{
          span: 12,
          offset: 3,
          order: 2,
          push: 3,
          pull: 3,
        }}
        xl={{
          span: 12,
          offset: 3,
          order: 2,
          push: 3,
          pull: 3,
        }}
        xxl={{
          span: 12,
          offset: 3,
          order: 2,
          push: 3,
          pull: 3,
        }}
      />
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} />
    </Row>,
  )
  expect(screen.getByTestId("test-row")).toMatchSnapshot()
})
