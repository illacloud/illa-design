import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { LikeIcon } from "@illa-design/icon"
import { Steps } from "../src"
import { ReactNode } from "react"

const { Step } = Steps

test("Steps renders with title", () => {
  render(
    <Steps>
      <Step title="Succeed" />
      <Step title="Process" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByText("Succeed")).toBeInTheDocument()
  expect(screen.getByText("Process")).toBeInTheDocument()
  expect(screen.getByText("Wait")).toBeInTheDocument()
})

test("Steps renders with description", () => {
  render(
    <Steps>
      <Step title="Succeed" description="This is a description" />
      <Step title="Process" />
    </Steps>,
  )

  expect(screen.getByText("This is a description")).toBeInTheDocument()
})

test("Steps renders without step components should renders nothing", () => {
  render(<Steps data-testid="steps" />)

  expect(screen.getByTestId("steps").children.length).toBe(0)
})

test("Steps renders with only span element should renders nothing", () => {
  render(
    <Steps>
      <span>Hello</span>
    </Steps>,
  )

  expect(screen.queryByText("Hello")).toBeNull()
})

test("Steps renders with current step 2", () => {
  render(
    <Steps current={2}>
      <Step title="Succeed" />
      <Step title="Process" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByText("Succeed")).toBeInTheDocument()
  expect(screen.getByText("Process")).toBeInTheDocument()
  expect(screen.getByText("Wait")).toBeInTheDocument()
})

test("Steps renders vertical label", () => {
  render(
    <Steps data-testid="steps" labelPlacement="vertical">
      <Step title="Succeed" />
      <Step title="Process" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders index", () => {
  render(
    <Steps>
      <Step title="Succeed" />
      <Step title="Process" />
    </Steps>,
  )

  expect(screen.getByText("2")).toBeInTheDocument()
})

test("Steps renders custom icon", () => {
  render(
    <Steps>
      <Step
        icon={<LikeIcon data-testid="link-icon" />}
        title="Succeed"
        description="This is a description"
      />
    </Steps>,
  )
  expect(screen.getByTestId("link-icon")).toBeInTheDocument()
})

test("Steps renders custom dot", () => {
  const customDot = (dot: ReactNode, { index }: { index: number }) => (
    <div title={`dot-index-${index}`}> {dot}</div>
  )
  render(
    <Steps customDot={customDot}>
      <Step title="Succeed" description="This is a description" />
    </Steps>,
  )
  expect(screen.getByTitle("dot-index-1")).toBeInTheDocument()
})

test("Steps renders with process status", () => {
  render(
    <Steps data-testid="steps">
      <Step title="Finish" />
      <Step title="Process" />
      <Step title="Wait" />
    </Steps>,
  )
  expect(screen.getByText("2")).toBeInTheDocument()
  expect(screen.getByText("3")).toBeInTheDocument()
  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders with error status", () => {
  render(
    <Steps data-testid="steps" status="error">
      <Step title="Error" />
    </Steps>,
  )

  expect(screen.getByText("Error")).toBeInTheDocument()
  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders with finish status", () => {
  render(
    <Steps data-testid="steps" status="finish">
      <Step title="Finish" />
    </Steps>,
  )

  expect(screen.getByText("Finish")).toBeInTheDocument()
  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders with no line", () => {
  render(
    <Steps data-testid="steps" lineless>
      <Step title="Error" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders with vertical", () => {
  render(
    <Steps data-testid="steps" direction="vertical">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders with dot variant", () => {
  render(
    <Steps data-testid="steps" variant="dot">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders with dot variant with vertical direction", () => {
  render(
    <Steps data-testid="steps" variant="dot" direction="vertical">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps renders with navigation variant", () => {
  render(
    <Steps data-testid="steps" variant="navigation">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps onChange should be triggered", () => {
  const clickEvent = jest.fn()
  render(
    <Steps data-testid="steps" onChange={clickEvent} current={1}>
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  screen.getByText("Wait").click()
  expect(clickEvent).toBeCalled()
})

test("Steps onChange should be triggered if step is disabled", () => {
  const clickEvent = jest.fn()
  render(
    <Steps data-testid="steps" onChange={clickEvent} current={1}>
      <Step title="Succeeded" />
      <Step title="Wait" disabled />
    </Steps>,
  )

  screen.getByText("Wait").click()
  expect(clickEvent).not.toBeCalled()
})

test("Steps with vertical direction and error status should renders error style", () => {
  render(
    <Steps data-testid="steps" direction="vertical" current={2} status="error">
      <Step title="Succeeded" />
      <Step title="Error" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Only last step renders error style", () => {
  render(
    <Steps data-testid="steps" direction="vertical" current={3} status="error">
      <Step title="Succeeded" />
      <Step title="Error" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps with dot variant and error status should renders error style", () => {
  render(
    <Steps
      data-testid="steps"
      variant="dot"
      direction="vertical"
      current={2}
      status="error"
    >
      <Step title="Succeeded" />
      <Step title="Error" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})
