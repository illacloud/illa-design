import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("Progress renders correctly", () => {
  render(
    <div>
      <Progress data-testid="test-progress" type="miniCircle" />
    </div>,
  )
  expect(screen.getByTestId("test-progress")).toBeInTheDocument()
})

test("Progress renders with colors", () => {
  render(
    <div>
      <Progress
        data-testid="test-progress-red"
        type="miniCircle"
        color="red"
        trailColor="red"
      />
      ,
      <Progress
        data-testid="test-progress-gray"
        type="miniCircle"
        color="gray"
        trailColor="gray"
      />
      ,
      <Progress
        data-testid="test-progress-custom"
        type="miniCircle"
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

test("Progress renders with success status", () => {
  render(<Progress status="success" type="miniCircle" />)
  expect(screen.getByTitle("SuccessIcon")).toBeInTheDocument()
})

test("Progress renders with error status", () => {
  render(
    <Progress data-testid="test-progress" status="error" type="miniCircle" />,
  )
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})

test("Progress renders without text", () => {
  render(<Progress percent={50} showText={false} type="miniCircle" />)
  expect(screen.queryByText("50")).not.toBeTruthy()
})

test("Progress renders with custom width", () => {
  render(
    <Progress
      data-testid="test-progress"
      percent={50}
      width="100px"
      type="miniCircle"
      strokeWidth="10px"
    />,
  )
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})

test("Progress renders with steps", () => {
  render(<Progress data-testid="test-progress" steps={3} type="miniCircle" />)
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})
