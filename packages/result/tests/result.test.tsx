import { Result } from "../src"
import { render, screen } from "@testing-library/react"
import { LoadingIcon } from "@illa-design/icon"
import { Button } from "@illa-design/button"
import "@testing-library/jest-dom"

test("Result1 renders with ", () => {
  // use icon
  render(<Result data-testid={"default Result"} />)
  expect(screen.getByTestId("default Result")).toBeInTheDocument()
  render(<Result status={"success"} />)
  expect(screen.getByTitle("SuccessIcon")).toBeInTheDocument()
  render(<Result status={"error"} />)
  expect(screen.getByTitle("CloseIcon")).toBeInTheDocument()
  render(<Result status={"info"} data-testid={"info status Result"} />)
  expect(screen.getByTestId("info status Result").firstChild).toHaveStyle({
    "background-color": "#edf4ff",
  })
  render(<Result status="warning"></Result>)
  expect(screen.getByTitle("WarningIcon")).toBeInTheDocument()
})

test("custom icon", () => {
  render(<Result icon={<LoadingIcon />} />)
  expect(screen.getByTitle("LoadingIcon")).toBeInTheDocument()
})

test("title & subTitle & extra", () => {
  render(
    <Result
      title={"this is title"}
      subTitle={"this is subTitle"}
      extra={[
        <Button key={"key1"}>button 1</Button>,
        <Button key={"key2"}>button 2</Button>,
      ]}
    ></Result>,
  )
  expect(screen.getByText("this is title")).toBeInTheDocument()
  expect(screen.getByText("this is subTitle")).toBeInTheDocument()
  expect(screen.getByText("button 1")).toBeInTheDocument()
  expect(screen.getByText("button 2")).toBeInTheDocument()
})

test("Result renders with custom paddingVertical", () => {
  render(
    <Result
      data-testid="test-result"
      status="warning"
      paddingVertical="80px"
    />,
  )
  expect(screen.getByTestId("test-result")).toHaveStyle({
    padding: "80px 0",
  })
})
