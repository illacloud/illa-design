import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("Progress renders correctly", () => {
  render(
    <div>
      <Progress data-testid="test-progress" type="circle" />
    </div>,
  )
  expect(screen.getByTestId("test-progress")).toBeInTheDocument()
})

test("Progress renders with colors", () => {
  render(
    <div>
      <Progress
        data-testid="test-progress-red"
        type="circle"
        color="red"
        trailColor="red"
      />
      ,
      <Progress
        data-testid="test-progress-gray"
        type="circle"
        color="gray"
        trailColor="gray"
      />
      ,
      <Progress
        data-testid="test-progress-custom"
        type="circle"
        color="#123123"
        trailColor="#321321"
      />
      ,
    </div>,
  )
  expect(screen.getByTestId("test-progress-red")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-gray")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-custom")).toMatchSnapshot()
})

test("Progress renders with different status", () => {
  render(
    <div>
      <Progress status="success" type="circle" />,
      <Progress status="error" type="circle" />,
    </div>,
  )
  expect(screen.getByTitle("SuccessIcon")).toBeInTheDocument()
  expect(screen.getByTitle("WarningIcon")).toBeInTheDocument()
})

test("Progress renders without text", () => {
  render(<Progress percent={50} showText={false} type="circle" />)
  expect(screen.queryByText("50")).not.toBeTruthy()
})

test("Progress renders with format text function", () => {
  render(
    <Progress
      percent={50}
      type="circle"
      formatText={(percent) => {
        return `test${percent}`
      }}
    />,
  )
  expect(screen.getByText("test50")).toBeInTheDocument()
})

test("Progress renders with custom width", () => {
  render(
    <Progress
      data-testid="test-progress"
      percent={50}
      w="100px"
      type="circle"
      strokeWidth="10px"
    />,
  )
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})

test("Progress renders with steps", () => {
  render(<Progress data-testid="test-progress" steps={3} type="circle" />)
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})
