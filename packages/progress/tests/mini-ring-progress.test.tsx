import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("Progress renders correctly", () => {
  render(
    <div>
      <Progress data-testid="test-progress" type="miniRing" />
    </div>,
  )
  expect(screen.getByTestId("test-progress")).toBeInTheDocument()
})

test("Progress renders with colors", () => {
  render(
    <div>
      <Progress
        data-testid="test-progress-red"
        type="miniRing"
        color="red"
        trailColor="red"
      />
      ,
      <Progress
        data-testid="test-progress-gray"
        type="miniRing"
        color="gray"
        trailColor="gray"
      />
      ,
      <Progress
        data-testid="test-progress-custom"
        type="miniRing"
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

test("Progress renders without text", () => {
  render(<Progress percent={50} showText={false} type="miniRing" />)
  expect(screen.queryByText("50")).not.toBeTruthy()
})

test("Progress renders with custom width", () => {
  render(
    <Progress
      data-testid="test-progress"
      percent={50}
      width="100px"
      type="miniRing"
      strokeWidth="10px"
    />,
  )
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})

test("Progress renders with steps", () => {
  render(<Progress data-testid="test-progress" steps={3} type="miniRing" />)
  expect(screen.getByTestId("test-progress")).toMatchSnapshot()
})

test("Progress renders with different status", () => {
  render(
    <div>
      <Progress
        data-testid="test-progress-success"
        status="success"
        type="miniRing"
      />
      <Progress
        data-testid="test-progress-error"
        status="error"
        type="miniRing"
      />
    </div>,
  )
  expect(screen.getByTestId("test-progress-success")).toMatchSnapshot()
  expect(screen.getByTestId("test-progress-error")).toMatchSnapshot()
})
