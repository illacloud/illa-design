import { Switch } from "../src"
import { render, screen, fireEvent } from "@testing-library/react"
import { SuccessIcon, CloseIcon } from "@illa-design/icon"
import { globalColor, illaPrefix } from "@illa-design/theme"
import "@testing-library/jest-dom"

test("Switch renders with different size", () => {
  render(<Switch data-testid="test-medium" />)
  expect(screen.getByTestId("test-medium")).toHaveStyle({
    minWidth: "29px",
    height: "18px",
  })
  expect(screen.getByTestId("test-medium").firstChild).toHaveStyle({
    width: "12px",
    height: "12px",
    top: "3px",
  })
  expect(screen.getByTestId("test-medium").lastChild).toHaveStyle({
    "font-size": "12px",
    "line-height": "1",
  })
  render(<Switch data-testid="test-large" size="large" />)
  expect(screen.getByTestId("test-large")).toHaveStyle({
    minWidth: "40px",
    height: "24px",
  })
  expect(screen.getByTestId("test-large").firstChild).toHaveStyle({
    width: "16px",
    height: "16px",
    top: "4px",
  })
  expect(screen.getByTestId("test-large").lastChild).toHaveStyle({
    "font-size": "14px",
    "line-height": "1.14",
  })
})

test("Switch renders with different colorScheme in different status", () => {
  render(
    <Switch
      data-testid="test-innerColor"
      defaultChecked
      colorScheme="blackAlpha"
    />,
  )
  expect(screen.getByTestId("test-innerColor")).toHaveStyle({
    "background-color": `${globalColor(`--${illaPrefix}-blackAlpha-03`)}`,
  })
  render(
    <Switch
      data-testid="test-customizedColor"
      defaultChecked
      colorScheme={"black"}
    />,
  )
  expect(screen.getByTestId("test-customizedColor")).toHaveStyle({
    "background-color": "black",
  })

  render(<Switch data-testid="test-unchecked" colorScheme={"black"} />)
  expect(screen.getByTestId("test-unchecked")).toHaveStyle({
    "background-color": "#d6d6d6",
  })
})

test("Switch renders with status changed", () => {
  const onChangeEvent = jest.fn()
  const onClickEvent = jest.fn()
  render(
    <Switch
      data-testid="test-status-changed"
      onChange={onChangeEvent}
      onClick={onClickEvent}
    />,
  )
  expect(screen.getByTestId("test-status-changed")).toHaveStyle({
    "background-color": "#d6d6d6",
  })
  const target = screen.getByTestId("test-status-changed")
  fireEvent.click(target)
  expect(target).toHaveStyle({
    "background-color": `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
  expect(onClickEvent).toBeCalled()
  expect(onChangeEvent).toBeCalled()
})

test("Switch renders with Icon", () => {
  render(
    <Switch
      data-testid="test-icon"
      checkedText={<SuccessIcon />}
      uncheckedText={<CloseIcon />}
      checkedIcon={<SuccessIcon />}
      uncheckedIcon={<CloseIcon />}
    />,
  )
  const target = screen.getByTestId("test-icon")
  expect(target.firstChild?.firstChild).toBeInTheDocument()
  expect(target.lastChild?.firstChild).toBeInTheDocument()
  expect(target.firstChild?.firstChild).toHaveStyle({
    width: "8px",
    height: "8px",
  })
  expect(target.lastChild?.firstChild).toHaveStyle({
    width: "8px",
    height: "8px",
  })
})

test("Switch renders with text", () => {
  render(
    <Switch data-testid="test-text" checkedText={"ON"} uncheckedText={"OFF"} />,
  )
  const btn = screen.getByTestId("test-text")
  expect(screen.getByText("OFF")).toBeInTheDocument()
  expect(screen.getByText("OFF")).toHaveStyle({
    margin: "0 6px 0 19px",
    "font-size": "12px",
    color: "#fff",
  })
  fireEvent.click(btn)
  expect(screen.getByText("ON")).toBeInTheDocument()
  expect(screen.getByText("ON")).toHaveStyle({
    margin: "0 19px 0 6px",
    "font-size": "12px",
    color: "#fff",
  })
})

test("Switch renders with disabled", () => {
  const onChangeEvent = jest.fn()
  render(
    <Switch data-testid="test-disabled" onChange={onChangeEvent} disabled />,
  )
  expect(screen.getByTestId("test-disabled")).toHaveStyle({
    cursor: "not-allowed",
    "background-color": "#ebebeb",
  })
  fireEvent.click(screen.getByTestId("test-disabled"))
  expect(onChangeEvent).not.toBeCalled()
})

test("Switch renders with checked prop", () => {
  const onChangeEvent = jest.fn()
  render(
    <Switch data-testid="test-checked-true" onChange={onChangeEvent} checked />,
  )
  render(
    <Switch
      data-testid="test-checked-false"
      onChange={onChangeEvent}
      checked={false}
    />,
  )
  fireEvent.click(screen.getByTestId("test-checked-true"))
  expect(onChangeEvent).not.toBeCalled()
  fireEvent.click(screen.getByTestId("test-checked-false"))
  expect(onChangeEvent).not.toBeCalled()
})
