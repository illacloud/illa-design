import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("CircleProgress renders correctly", () => {
  render(
    <Progress data-testid="test-line-progress" type="circle" />,
  )
  expect(screen.getByTestId("test-line-progress")).toBeInTheDocument()
})

test("CircleProgress renders with colors", () => {
  render(
    <div>
      <Progress data-testid="test-line-progress-red" type="circle" color="red" trailColor="red" />,
      <Progress data-testid="test-line-progress-gray" type="circle" color="gray" trailColor="gray" />,
      <Progress data-testid="test-line-progress-custom" type="circle" color="#123123" trailColor="#321321" />,
    </div>,
  )
  expect(screen.getByTestId("test-line-progress-red")).toMatchSnapshot()
  expect(screen.getByTestId("test-line-progress-gray")).toMatchSnapshot()
  expect(screen.getByTestId("test-line-progress-custom")).toMatchSnapshot()
})

test("CircleProgress renders with different status", () => {
  render(
    <div>
      <Progress status="success" type="circle" />,
      <Progress status="error" type="circle" />,
    </div>,
  )
  expect(screen.getByTitle("SuccessIcon")).toBeInTheDocument()
  expect(screen.getByTitle("ErrorIcon")).toBeInTheDocument()
})

test("CircleProgress renders without text", () => {
  render(<Progress percent={50} showText={false} type="circle" />)
  expect(screen.queryByText("50")).not.toBeTruthy()
})

test("CircleProgress renders with format text function", () => {
  render(<Progress percent={50} formatText={(percent) => {
    return `test${percent}`
  }
  } type="circle" />)
  expect(screen.getByText("test50")).toBeInTheDocument()
})

test("CircleProgress renders with custom width", () => {
  render(<Progress data-testid="test-line-progress" percent={50} type="circle" width="100px" strokeWidth="10px" />)
  expect(screen.getByTestId("test-line-progress")).toMatchSnapshot()
})

test("CircleProgress renders with steps", () => {
  render(<Progress data-testid="test-line-progress" type="circle" steps={3} />)
  expect(screen.getByTestId("test-line-progress")).toMatchSnapshot()
})