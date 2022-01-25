import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("LineProgress renders correctly", () => {
  render(
    <Progress data-testid="test-line-progress" type="line" />,
  )
  expect(screen.getByTestId("test-line-progress")).toBeInTheDocument()
})

test("LineProgress renders with colors", () => {
  render(
    <div>
      <Progress data-testid="test-line-progress-red" type="line" color="red" trailColor="red" />,
      <Progress data-testid="test-line-progress-gray" type="line" color="gray" trailColor="gray" />,
      <Progress data-testid="test-line-progress-custom" type="line" color="#123123" trailColor="#321321" />,
    </div>,
  )
  expect(screen.getByTestId("test-line-progress-red")).toMatchSnapshot()
  expect(screen.getByTestId("test-line-progress-gray")).toMatchSnapshot()
  expect(screen.getByTestId("test-line-progress-custom")).toMatchSnapshot()
})

test("LineProgress renders with different status", () => {
  render(
    <div>
      <Progress status="success" />,
      <Progress status="error" />,
    </div>,
  )
  expect(screen.getByTitle("SuccessIcon")).toBeInTheDocument()
  expect(screen.getByTitle("ErrorIcon")).toBeInTheDocument()
})

test("LineProgress renders without text", () => {
  render(<Progress percent={50} showText={false} />)
  expect(screen.queryByText("50")).not.toBeTruthy()
})

test("LineProgress renders with format text function", () => {
  render(<Progress percent={50} formatText={(percent) => {
    return `test${percent}`
  }
  } />)
  expect(screen.getByText("test50")).toBeInTheDocument()
})

test("LineProgress renders with custom width", () => {
  render(<Progress data-testid="test-line-progress" percent={50} width="100px" strokeWidth="10px" />)
  expect(screen.getByTestId("test-line-progress")).toMatchSnapshot()
})

test("LineProgress renders with steps", () => {
  render(<Progress data-testid="test-line-progress" steps={3} />)
  expect(screen.getByTestId("test-line-progress")).toMatchSnapshot()
})