import { Badge } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { LoadingIcon } from "@illa-design/icon"

test("Badge renders with text", () => {
  render(<Badge data-testid="test" text="Hello" />)
  expect(screen.getByTestId("test")).toBeInTheDocument()
  expect(screen.getByText("Hello")).toBeInTheDocument()
})

test("Badge renders with different colorScheme", () => {
  render(<Badge data-testid="test-with-gray" count={1} colorScheme="gray" />)
  expect(screen.getByTestId("test-with-gray")?.firstChild).toHaveStyle({
    "background-color": "#5c5c5c",
  })
  render(<Badge data-testid="test-with-green" count={1} colorScheme="green" />)
  expect(screen.getByTestId("test-with-green")?.firstChild).toHaveStyle({
    "background-color": "#00aa5b",
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
  render(<Badge data-testid="test-dot-none" dot count={0}></Badge>)
  expect(screen.getByTestId("test-dot-none").firstChild).not.toBeInTheDocument()
})

test("Badge renders with status", () => {
  render(<Badge data-testid="test-status-warning" status="warning"></Badge>)
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
    "background-color": "#ffab00",
  })
  render(
    <Badge
      data-testid="test-status-success"
      status="success"
      text={"success"}
    ></Badge>,
  )
  expect(screen.getByTestId("test-status-success")).toBeInTheDocument()
  expect(screen.getByText("success")).toHaveStyle({
    "margin-left": "9px",
    "font-size": "12px",
    "line-height": "1.33",
  })
})

test("Badge renders with max count", () => {
  render(<Badge count={99} maxCount={50}></Badge>)
  expect(screen.getByText("50+")).toBeInTheDocument()
  render(<Badge count={96} maxCount={100}></Badge>)
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
  render(<Badge data-testid="test-with-no-children" count={22}></Badge>)
  expect(
    screen.getByTestId("test-with-no-children").firstChild,
  ).toBeInTheDocument()
  expect(
    screen.getByTestId("test-with-no-children").firstChild,
  ).not.toHaveStyle({
    position: "absolute",
  })
})

test("Badge renders with dotStyle", () => {
  render(
    <Badge
      data-testid="test-with-dotStyle"
      count={22}
      dotStyle={{ marginLeft: 3 }}
    ></Badge>,
  )
  expect(screen.getByTestId("test-with-dotStyle").firstChild).toHaveStyle({
    "margin-left": "3px",
  })
})

test("Badge renders with offset", () => {
  render(
    <Badge data-testid="test-with-offset" count={22} offset={[1, 2]}></Badge>,
  )
  expect(screen.getByTestId("test-with-offset").firstChild).toHaveStyle({
    "margin-right": "-1px",
    "margin-top": "2px",
  })
})

test("Badge renders with different text length", () => {
  render(<Badge data-testid="test-with-short-text" text={"H"}></Badge>)
  expect(screen.getByTestId("test-with-short-text").lastChild).not.toHaveStyle({
    padding: "0 6px",
  })
  render(<Badge data-testid="test-with-long-text" text={"Hello"}></Badge>)
  expect(screen.getByTestId("test-with-long-text").lastChild).toHaveStyle({
    padding: "0 6px",
  })
})

test("Badge renders with customized logo", () => {
  render(<Badge count={<LoadingIcon data-testid="test-with-icon" />}></Badge>)
  expect(screen.getByTestId("test-with-icon")).toBeInTheDocument()
  expect(screen.getByTestId("test-with-icon").parentNode).toHaveStyle({
    "border-radius": "10px",
  })
})
