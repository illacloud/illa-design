import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("Progress renders correctly", () => {
  render(
    <div>
      <Progress data-testid="test-progress" type="line" />
    </div>,
  )
  expect(screen.getByTestId("test-progress")).toBeInTheDocument()
})

test("Progress renders with colors", () => {
  render(
    <div>
      <Progress
        data-testid="test-progress-red"
        type="line"
        color="red"
        trailColor="red"
      />
      <Progress
        data-testid="test-progress-gray"
        type="line"
        color="gray"
        trailColor="gray"
      />
      <Progress
        data-testid="test-progress-custom"
        type="line"
        color="#123123"
        trailColor="#321321"
      />
      <Progress
        data-testid="test-progress-red-step"
        type="line"
        steps={3}
        color="red"
        trailColor="red"
      />
      <Progress
        data-testid="test-progress-grayBlue-step"
        type="line"
        steps={3}
        color="gray"
        trailColor="gray"
      />
      <Progress
        data-testid="test-progress-custom-step"
        type="line"
        steps={3}
        color="#123123"
        trailColor="#321321"
      />
    </div>,
  )
  expect(screen.getByTestId("test-progress-red")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-gray")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-custom")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-red-step")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-grayBlue-step")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-custom-step")).toMatchSnapshot()
})

test("Progress renders with different status", () => {
  render(
    <div>
      <Progress status="success" type="line" />,
      <Progress status="error" type="line" />,
    </div>,
  )
  expect(screen.getByTitle("SuccessIcon")).toBeInTheDocument()
  expect(screen.getByTitle("WarningCircleIcon")).toBeInTheDocument()
})

test("Progress renders without text", () => {
  render(<Progress percent={50} showText={false} type="line" />)
  expect(screen.queryByText("50")).not.toBeTruthy()
})

test("Progress renders with format text function", () => {
  render(
    <Progress
      percent={50}
      type="line"
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
      type="line"
      strokeWidth="10px"
    />,
  )
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})

test("Progress renders with steps", () => {
  render(
    <Progress data-testid="test-progress" steps={3} type="line" percent={40} />,
  )
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})
