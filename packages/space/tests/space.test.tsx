import { render, screen } from "@testing-library/react"
import { Space, SpaceAlign } from "../src"
import "@testing-library/jest-dom"

test("Space renders with single size", () => {
  render(
    <div>
      <Space size="mini">
        <span data-testid="test-space-mini">A</span>
        <span data-testid="test-space-mini-last">B</span>
      </Space>
      <Space size="small">
        <span data-testid="test-space-small">A</span>
        <span>B</span>
      </Space>
      <Space size="medium">
        <span data-testid="test-space-medium">A</span>
        <span>B</span>
      </Space>
      <Space size="large">
        <span data-testid="test-space-large">A</span>
        <span>B</span>
      </Space>
      <Space size="30px">
        <span data-testid="test-space-custom">A</span>
        <span>B</span>
      </Space>
      <Space size={["30px"]}>
        <span data-testid="test-space-single-element-array">A</span>
        <span data-testid="test-space-single-element-array-last">B</span>
      </Space>
    </div>,
  )
  expect(screen.getByTestId("test-space-mini").parentNode).toHaveStyle({
    "margin-right": "4px",
  })
  expect(screen.getByTestId("test-space-mini-last").parentNode).not.toHaveStyle(
    {
      "margin-right": "4px",
    },
  )
  expect(screen.getByTestId("test-space-small").parentNode).toHaveStyle({
    "margin-right": "8px",
  })
  expect(screen.getByTestId("test-space-medium").parentNode).toHaveStyle({
    "margin-right": "16px",
  })
  expect(screen.getByTestId("test-space-large").parentNode).toHaveStyle({
    "margin-right": "24px",
  })
  expect(screen.getByTestId("test-space-custom").parentNode).toHaveStyle({
    "margin-right": "30px",
  })
  expect(
    screen.getByTestId("test-space-single-element-array").parentNode,
  ).toHaveStyle({
    "margin-right": "30px",
  })
  expect(
    screen.getByTestId("test-space-single-element-array-last").parentNode,
  ).not.toHaveStyle({
    "margin-right": "30px",
  })
})

test("Space renders with size array but without wrap", () => {
  render(
    <Space size={["small", "medium"]}>
      <span data-testid="test-space-with-size-array">A</span>
      <span data-testid="test-space-with-size-array-last">B</span>
    </Space>,
  )
  expect(
    screen.getByTestId("test-space-with-size-array").parentNode,
  ).toHaveStyle({
    "margin-right": "8px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array").parentNode,
  ).not.toHaveStyle({
    "margin-bottom": "16px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array-last").parentNode,
  ).not.toHaveStyle({
    "margin-bottom": "16px",
    "margin-right": "8px",
  })
})

test("Space renders with size array and vertical but without wrap", () => {
  render(
    <div>
      <Space size={["small", "medium"]} direction="vertical">
        <span data-testid="test-space-with-size-array">A</span>
        <span data-testid="test-space-with-size-array-last">B</span>
      </Space>
    </div>,
  )
  expect(
    screen.getByTestId("test-space-with-size-array").parentNode,
  ).toHaveStyle({
    "margin-bottom": "16px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array").parentNode,
  ).not.toHaveStyle({
    "margin-right": "8px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array-last").parentNode,
  ).not.toHaveStyle({
    "margin-bottom": "16px",
    "margin-right": "8px",
  })
})

test("Space renders with size array and wrap", () => {
  render(
    <div>
      <Space size={["small", "medium"]} wrap>
        <span data-testid="test-space-with-size-array">A</span>
        <span data-testid="test-space-with-size-array-last">B</span>
      </Space>
      <Space size={["small", "medium"]} wrap direction="vertical">
        <span data-testid="test-space-with-size-array-vertical">A</span>
        <span data-testid="test-space-with-size-array-last-vertical">B</span>
      </Space>
    </div>,
  )
  expect(
    screen.getByTestId("test-space-with-size-array").parentNode,
  ).toHaveStyle({
    "margin-right": "8px",
    "margin-bottom": "16px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array-last").parentNode,
  ).toHaveStyle({
    "margin-bottom": "16px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array-last").parentNode,
  ).not.toHaveStyle({
    "margin-right": "8px",
  })

  expect(
    screen.getByTestId("test-space-with-size-array-vertical").parentNode,
  ).toHaveStyle({
    "margin-right": "8px",
    "margin-bottom": "16px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array-last-vertical").parentNode,
  ).not.toHaveStyle({
    "margin-bottom": "16px",
  })
  expect(
    screen.getByTestId("test-space-with-size-array-last-vertical").parentNode,
  ).toHaveStyle({
    "margin-right": "8px",
  })
})

test("Space renders with empty size array", () => {
  render(
    <div>
      <Space size={[]}>
        <span data-testid="test-space-with-empty-size-array">A</span>
        <span>B</span>
      </Space>
    </div>,
  )
  expect(
    screen.getByTestId("test-space-with-empty-size-array").parentNode,
  ).not.toHaveStyle({
    "margin-right": "8px",
    "margin-bottom": "8px",
  })
})

test("Space renders with different direction", () => {
  render(
    <div>
      <Space direction="horizontal">
        <span data-testid="test-space-horizontal">A</span>
        <span>B</span>
      </Space>
      <Space direction="vertical">
        <span data-testid="test-space-vertical">A</span>
        <span>B</span>
      </Space>
    </div>,
  )
  expect(screen.getByTestId("test-space-horizontal").parentNode).toHaveStyle(
    "margin-right:8px",
  )
  expect(screen.getByTestId("test-space-vertical").parentNode).toHaveStyle(
    "margin-bottom:8px",
  )
})

test("Space renders with different align", () => {
  const alignList: SpaceAlign[] = ["start", "center", "end", "baseline"]
  for (let align of alignList) {
    const { asFragment } = render(
      <Space align={align}>
        <span>A</span>
        <span>B</span>
      </Space>,
    )
    expect(asFragment()).toMatchSnapshot()
  }
})

test("Space renders with wrap", () => {
  const { asFragment } = render(
    <Space wrap={true}>
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span>D</span>
      <span>E</span>
      <span>F</span>
    </Space>,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("Space renders with divider", () => {
  const { asFragment } = render(
    <Space divider={true}>
      <span>A</span>
      <span>B</span>
    </Space>,
  )
  expect(asFragment()).toMatchSnapshot()
})
