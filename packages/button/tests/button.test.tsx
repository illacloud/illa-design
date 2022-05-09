import { Button } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BsApp, BsTwitch } from "react-icons/bs"

test("Button renders with text", () => {
  render(<Button data-testid="test">Hello</Button>)
  expect(screen.getByTestId("test")).toBeInTheDocument()
})

test("Button renders with different colorscheme", () => {
  render(
    <Button data-testid="test-with-gray" colorScheme="gray">
      Hello
    </Button>,
  )
  expect(screen.getByTestId("test-with-gray")).toBeInTheDocument()
  render(
    <Button data-testid="test-with-green" colorScheme="green">
      Hello
    </Button>,
  )
  expect(screen.getByTestId("test-with-green")).toBeInTheDocument()
})

test("Button renders without text", () => {
  render(<Button data-testid="test-without-text" />)
  expect(screen.getByTestId("test-without-text")).toBeInTheDocument()
  render(
    <Button
      data-testid="test-without-text-medium"
      size="medium"
      rightIcon={<BsApp />}
    />,
  )
  expect(screen.getByTestId("test-without-text-medium")).toBeInTheDocument()
  render(
    <Button
      data-testid="test-without-text-large"
      size="large"
      rightIcon={<BsApp />}
    />,
  )
  expect(screen.getByTestId("test-without-text-large")).toBeInTheDocument()
})

test("Button renders with different size", () => {
  render(
    <Button
      data-testid="test-small"
      size="small"
      rightIcon={<BsTwitch />}
      leftIcon={<BsApp />}
    >
      Hello
    </Button>,
  )
  expect(screen.getByTestId("test-small")).toBeInTheDocument()
  render(
    <Button
      data-testid="test-medium"
      size="medium"
      rightIcon={<BsTwitch />}
      leftIcon={<BsApp />}
    >
      Hello
    </Button>,
  )
  expect(screen.getByTestId("test-medium")).toBeInTheDocument()
  render(
    <Button
      data-testid="test-large"
      size="large"
      rightIcon={<BsTwitch />}
      leftIcon={<BsApp />}
    >
      Hello
    </Button>,
  )
  expect(screen.getByTestId("test-large")).toBeInTheDocument()
})

test("Button renders with different variant", () => {
  render(<Button variant="fill">Hello Fill</Button>)
  expect(screen.getByText("Hello Fill")).toMatchSnapshot()
  render(<Button variant="dashed">Hello Dashed</Button>)
  expect(screen.getByText("Hello Dashed")).toMatchSnapshot()
  render(
    <Button variant="dashed" colorScheme="gray">
      Hello Gray Dashed
    </Button>,
  )
  expect(screen.getByText("Hello Gray Dashed")).toMatchSnapshot()
  render(<Button variant="outline">Hello Outline</Button>)
  expect(screen.getByText("Hello Outline")).toMatchSnapshot()
  render(
    <Button variant="outline" colorScheme="gray">
      Hello Gray Outline
    </Button>,
  )
  expect(screen.getByText("Hello Gray Outline")).toMatchSnapshot()
  render(<Button variant="text">Hello Text</Button>)
  expect(screen.getByText("Hello Text")).toMatchSnapshot()
})

test("Button renders round", () => {
  render(
    <Button data-testid="test-with-round" shape="round">
      Hello
    </Button>,
  )
  expect(screen.getByTestId("test-with-round")).toMatchSnapshot()
})

test("Button renders fullwidth", () => {
  render(
    <div
      style={{
        width: "200px",
      }}
    >
      <Button data-testid="test-with-fullwidth" fullWidth={true}>
        Hello
      </Button>
    </div>,
  )
  expect(screen.getByTestId("test-with-fullwidth")).toMatchSnapshot()
})

test("Button renders disabled", () => {
  render(
    <Button data-testid="test-button" disabled>
      Hello
    </Button>,
  )
  expect(screen.getByTestId("test-button")).toBeDisabled()
})

test("Button renders with colors", () => {
  render(
    <Button borderColor="#ff4d4d" backgroundColor="#ffcccc" textColor="#ffffff">
      Hello
    </Button>,
  )
  expect(screen.getByText("Hello").parentElement).toHaveStyle({
    color: "#ffffff",
    "border-color": "#ff4d4d",
    "background-color": "#ffcccc",
  })
})
