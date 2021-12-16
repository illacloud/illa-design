import { Button } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BsApp, BsTwitch } from "react-icons/bs"

test("Button renders with text", () => {
  render(<Button data-testid="test">Hello</Button>)
  expect(screen.getByTestId("test")).toBeInTheDocument()
})

test("Button renders with different colorscheme", () => {
  render(<Button data-testid="test-with-gray" colorScheme="gray">Hello</Button>)
  expect(screen.getByTestId("test-with-gray")).toBeInTheDocument()
  render(<Button data-testid="test-with-green" colorScheme="green">Hello</Button>)
  expect(screen.getByTestId("test-with-green")).toBeInTheDocument()
})

test("Button renders without text", () => {
  render(<Button data-testid="test-without-text" />)
  expect(screen.getByTestId("test-without-text")).toBeInTheDocument()
  render(<Button data-testid="test-without-text-medium" size="medium" rightIcon={<BsApp />} />)
  expect(screen.getByTestId("test-without-text-medium")).toBeInTheDocument()
  render(<Button data-testid="test-without-text-large" size="large" rightIcon={<BsApp />} />)
  expect(screen.getByTestId("test-without-text-large")).toBeInTheDocument()
})

test("Button renders with different size", () => {
  render(<Button data-testid="test-small" size="small" rightIcon={<BsTwitch />} leftIcon={<BsApp />}>Hello</Button>)
  expect(screen.getByTestId("test-small")).toBeInTheDocument()
  render(<Button data-testid="test-medium" size="medium" rightIcon={<BsTwitch />} leftIcon={<BsApp />}>Hello</Button>)
  expect(screen.getByTestId("test-medium")).toBeInTheDocument()
  render(<Button data-testid="test-large" size="large" rightIcon={<BsTwitch />} leftIcon={<BsApp />}>Hello</Button>)
  expect(screen.getByTestId("test-large")).toBeInTheDocument()
})

test("Button renders with different variant", () => {
  render(<Button data-testid="test-with-fill" variant="fill">Hello</Button>)
  expect(screen.getByTestId("test-with-fill")).toMatchSnapshot()
  render(<Button data-testid="test-with-dashed" variant="dashed">Hello</Button>)
  expect(screen.getByTestId("test-with-dashed")).toMatchSnapshot()
  render(<Button data-testid="test-with-dashed-gray" variant="dashed" colorScheme="gray">Hello</Button>)
  expect(screen.getByTestId("test-with-dashed-gray")).toMatchSnapshot()
  render(<Button data-testid="test-with-outline" variant="outline">Hello</Button>)
  expect(screen.getByTestId("test-with-outline")).toMatchSnapshot()
  render(<Button data-testid="test-with-outline-gray" variant="outline" colorScheme="gray">Hello</Button>)
  expect(screen.getByTestId("test-with-outline-gray")).toMatchSnapshot()
  render(<Button data-testid="test-with-text" variant="text">Hello</Button>)
  expect(screen.getByTestId("test-with-text")).toMatchSnapshot()
})

test("Button renders round", () => {
  render(<Button data-testid="test-with-round" shape="round">Hello</Button>)
  expect(screen.getByTestId("test-with-round")).toMatchSnapshot()
})

test("Button renders fullwidth", () => {
  render(<div style={{
    width: "200px",
  }}>
    <Button data-testid="test-with-fullwidth" fullWidth={true}>Hello</Button>
  </div>)
  expect(screen.getByTestId("test-with-fullwidth")).toMatchSnapshot()
})