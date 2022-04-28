import { Alert } from "../src"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { LoadingIcon } from "@illa-design/icon"

test("Alert renders with different type", () => {
  render(<Alert data-testid="test-with-info" type="info" />)
  render(<Alert data-testid="test-with-success" type="success" />)
  render(<Alert data-testid="test-with-warning" type="warning" />)
  render(<Alert data-testid="test-with-error" type="error" />)
  expect(screen.getByTestId("test-with-info").parentNode).toHaveStyle({
    "background-color": `${globalColor(`--${illaPrefix}-blue-07`)}`,
  })
  expect(screen.getByTestId("test-with-success").parentNode).toHaveStyle({
    "background-color": `${globalColor(`--${illaPrefix}-green-07`)}`,
  })
  expect(screen.getByTestId("test-with-warning").parentNode).toHaveStyle({
    "background-color": `${globalColor(`--${illaPrefix}-orange-07`)}`,
  })
  expect(screen.getByTestId("test-with-error").parentNode).toHaveStyle({
    "background-color": `${globalColor(`--${illaPrefix}-red-07`)}`,
  })
})

test("Alert renders with closeBtn and closeEvent", () => {
  const onCloseEvent = jest.fn()
  render(
    <Alert
      data-testid="test-with-close"
      closable
      onClose={onCloseEvent}
      closeElement={<LoadingIcon data-testid="test-with-closeElement" />}
    />,
  )
  const closeBtn = screen.getByTestId("test-with-closeElement")
  expect(closeBtn).toBeInTheDocument()
  fireEvent.click(closeBtn)
  expect(onCloseEvent).toBeCalled()
})

test("Alert renders with title", () => {
  render(<Alert data-testid="test-with-title" title="Alert Title" />)
  expect(screen.getByText("Alert Title")).toBeInTheDocument()
  expect(screen.getByText("Alert Title")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-gray-02`)}`,
  })
  expect(screen.getByText("Alert Title")).not.toHaveStyle({
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.57,
  })
  render(
    <Alert
      data-testid="test-with-title-content"
      title="Alert Title Two"
      content="Alert Content"
    />,
  )
  expect(screen.getByText("Alert Title Two")).toHaveStyle({
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.57,
  })
})

test("Alert renders with action area", () => {
  render(<Alert action={<LoadingIcon data-testid="test-with-action" />} />)
  expect(screen.getByTestId("test-with-action").parentNode).toHaveStyle({
    marginLeft: 8,
  })
})
