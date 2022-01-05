import { Radio } from "../src"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Radio renders with text", () => {
  render(<Radio>Hello</Radio>)
  expect(screen.getByLabelText("Hello")).toBeInTheDocument()
  expect(screen.getByLabelText("Hello")).not.toBeDisabled()
  expect(screen.getByLabelText("Hello")).not.toBeChecked()
})

test("Radio renders with colorScheme green", () => {
  render(<Radio colorScheme="green">green</Radio>)
  expect(screen.getByText("green")).toBeInTheDocument()
})

test("Radio renders with checked true", () => {
  render(<Radio checked>AAA</Radio>)
  expect(screen.getByLabelText("AAA")).toBeChecked()
})

test("Radio renders with checked false", () => {
  render(<Radio checked={false}>CCC</Radio>)
  expect(screen.getByLabelText("CCC")).not.toBeChecked()
})

test("Radio renders with defaultChecked", () => {
  render(<Radio defaultChecked>BBB-default</Radio>)
  expect(screen.getByLabelText("BBB-default")).toBeChecked()

  render(<Radio defaultChecked={false}>CCC-default</Radio>)
  expect(screen.getByLabelText("CCC-default")).not.toBeChecked()
})

test("Radio renders with disabled", () => {
  render(<Radio disabled>111</Radio>)
  expect(screen.getByLabelText("111")).toBeDisabled()

  render(<Radio disabled={false}>222</Radio>)
  expect(screen.getByLabelText("222")).not.toBeDisabled()
})

test("Radio renders with click", async () => {
  const changeEvent = jest.fn()
  render(<Radio onChange={changeEvent}>test radio change</Radio>)
  fireEvent.click(screen.getByLabelText("test radio change"))
  expect(screen.getByLabelText("test radio change")).toBeChecked()
  expect(changeEvent).toBeCalled()
})
