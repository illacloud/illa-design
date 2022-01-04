import { Radio } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Radio renders with text", () => {
  render(<Radio>Hello</Radio>)
  expect(screen.getByText("Hello")).toBeInTheDocument()
})

test("Radio renders with different colorscheme", () => {
  render(<Radio colorScheme="gray">gray</Radio>)
  expect(screen.getByText("gray")).toBeInTheDocument()
  render(<Radio colorScheme="green">green</Radio>)
  expect(screen.getByText("green")).toBeInTheDocument()
})

test("Radio renders with checked", () => {
  render(<Radio checked={true}>AAA</Radio>)
  expect(screen.getByText("AAA")).toBeInTheDocument()
  render(<Radio checked>BBB</Radio>)
  expect(screen.getByText("BBB")).toBeInTheDocument()

  render(<Radio checked={false}>CCC</Radio>)
  expect(screen.getByText("CCC")).toBeInTheDocument()
  render(<Radio>DDD</Radio>)
  expect(screen.getByText("DDD")).toBeInTheDocument()
})

test("Radio renders with defaultChecked", () => {
  render(<Radio defaultChecked={true}>AAA-default</Radio>)
  expect(screen.getByText("AAA-default")).toBeInTheDocument()
  render(<Radio defaultChecked>BBB-default</Radio>)
  expect(screen.getByText("BBB-default")).toBeInTheDocument()

  render(<Radio defaultChecked={false}>CCC-default</Radio>)
  expect(screen.getByText("CCC-default")).toBeInTheDocument()
  render(<Radio>DDD-default</Radio>)
  expect(screen.getByText("DDD-default")).toBeInTheDocument()
})

test("Radio renders with disabled", () => {
  render(<Radio disabled={true}>111</Radio>)
  expect(screen.getByText("111")).toBeInTheDocument()
  render(<Radio disabled>222</Radio>)
  expect(screen.getByText("222")).toBeInTheDocument()

  render(<Radio disabled={false}>333</Radio>)
  expect(screen.getByText("333")).toBeInTheDocument()
  render(<Radio>444</Radio>)
})