import { Result } from "../src"
import { render, screen } from "@testing-library/react"
import { LoadingIcon } from "@illa-design/icon"
import { Button } from "@illa-design/button"
import "@testing-library/jest-dom"

test("Result1 renders with ", () => {
  // use icon
  render(
    <>
      <Result status="success" />
      <Result status="error" />
      <Result status="info" />
      <Result status="warning" />
      <Result status="403" />
      <Result status="404" />
      <Result status="500" />
    </>,
  )
  expect(screen.getByTitle("SuccessIcon")).toBeInTheDocument()
  expect(screen.getByTitle("CloseIcon")).toBeInTheDocument()
  expect(screen.getByTitle("InfoIcon")).toBeInTheDocument()
  expect(screen.getByTitle("WarningIcon")).toBeInTheDocument()
  expect(screen.getByTitle("Result403Icon")).toBeInTheDocument()
  expect(screen.getByTitle("Result404Icon")).toBeInTheDocument()
  expect(screen.getByTitle("Result500Icon")).toBeInTheDocument()
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
