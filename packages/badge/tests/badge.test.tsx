import { Badge } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { LoadingIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Badge renders with text", () => {
  render(<Badge data-testid="test" text="Hello" />)
  expect(screen.getByTestId("test")).toBeInTheDocument()
  expect(screen.getByText("Hello")).toBeInTheDocument()
})

test("Badge renders with different colorScheme", () => {
  render(<Badge data-testid="test-with-gray" count={1} colorScheme="gray" />)
  expect(screen.getByTestId("test-with-gray")?.firstChild).toHaveStyle({
    "background-color": `${globalColor(`--${illaPrefix}-gray-03`)}`,
  })
})

test("Badge renders with dot", () => {
  render(
    <Badge data-testid="test-dot" dot count={1}>
      <span>hello</span>
    </Badge>,
  )
  expect(screen.getByTestId("test-dot")).toBeInTheDocument()
  expect(screen.getByTestId("test-dot").lastChild).toHaveStyle({
    width: "6px",
    height: "6px",
    "border-radius": "50%",
  })
  render(<Badge data-testid="test-dot-none" dot count={0} />)
  expect(screen.getByTestId("test-dot-none").firstChild).not.toBeInTheDocument()
})

test("Badge renders with status", () => {
  render(<Badge data-testid="test-status-warning" status="warning" />)
  expect(screen.getByTestId("test-status-warning")).toBeInTheDocument()
  expect(screen.getByTestId("test-status-warning")?.firstChild).toHaveStyle({
    display: "inline-flex",
    "align-items": "center",
  })
  expect(
    screen.getByTestId("test-status-warning")?.firstChild?.firstChild,
  ).toHaveStyle({
    width: "6px",
    height: "6px",
    "border-radius": "50%",
    "background-color": `${globalColor(`--${illaPrefix}-yellow-03`)}`,
  })
  render(
    <Badge
      data-testid="test-status-success"
      status="success"
      text={"success"}
    />,
  )
  expect(screen.getByTestId("test-status-success")).toBeInTheDocument()
  expect(screen.getByText("success")).toHaveStyle({
    "margin-left": "9px",
    "font-size": "12px",
    "line-height": "1.33",
  })
})

test("Badge renders with max count", () => {
  render(<Badge count={99} maxCount={50} />)
  expect(screen.getByText("50+")).toBeInTheDocument()
  render(<Badge count={96} maxCount={100} />)
  expect(screen.getByText("96")).toBeInTheDocument()
})

test("Badge renders with children", () => {
  render(
    <Badge data-testid="test-with-children" count={22}>
      <span>hello</span>
    </Badge>,
  )
  expect(screen.getByTestId("test-with-children").lastChild).toHaveStyle({
    position: "absolute",
    "z-index": 2,
  })
})

test("Badge renders with no children", () => {
  render(<Badge data-testid="test-with-no-children" count={22} />)
  expect(
    screen.getByTestId("test-with-no-children").firstChild,
  ).toBeInTheDocument()
  expect(
    screen.getByTestId("test-with-no-children").firstChild,
  ).not.toHaveStyle({
    position: "absolute",
  })
})

test("Badge renders with different text length", () => {
  render(<Badge data-testid="test-with-short-text" text={"H"} />)
  expect(screen.getByTestId("test-with-short-text").lastChild).not.toHaveStyle({
    padding: "0 6px",
  })
  render(<Badge data-testid="test-with-long-text" text={"Hello"} />)
  expect(screen.getByTestId("test-with-long-text").lastChild).toHaveStyle({
    padding: "0 6px",
  })
})

test("Badge renders with customized logo", () => {
  render(<Badge count={<LoadingIcon data-testid="test-with-icon" />} />)
  expect(screen.getByTestId("test-with-icon")).toBeInTheDocument()
  expect(screen.getByTestId("test-with-icon").parentNode).toHaveStyle({
    "border-radius": "10px",
  })
})
