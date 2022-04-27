import { Skeleton } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Skeleton renders with 3 rows", () => {
  render(<Skeleton data-testid="skeleton" />)
  expect(screen.getByTestId("skeleton").querySelectorAll("li")).toHaveLength(3)
})

test("Skeleton renders without text ", () => {
  render(<Skeleton data-testid="skeleton" text={false} />)
  expect(screen.getByTestId("skeleton").querySelectorAll("li")).toHaveLength(0)
})

test("Skeleton renders with 10 rows", () => {
  render(<Skeleton data-testid="skeleton" text={{ rows: 10 }} />)
  expect(screen.getByTestId("skeleton").querySelectorAll("li")).toHaveLength(10)
})

test("Skeleton renders with width", () => {
  render(<Skeleton data-testid="skeleton" text={{ width: 100 }} />)
  expect(
    screen.getByTestId("skeleton").querySelector("li:last-child"),
  ).toHaveStyle("width: 100px")
})

test("Skeleton renders with width array", () => {
  render(<Skeleton data-testid="skeleton" text={{ width: [100, 200, 300] }} />)
  expect(screen.getByTestId("skeleton")).toMatchSnapshot()
})

test("Skeleton renders with image", () => {
  render(<Skeleton data-testid="skeleton" image />)
  expect(screen.getByTestId("skeleton")).toMatchSnapshot()
})

test("Skeleton renders with squrare shape image", () => {
  render(<Skeleton data-testid="skeleton" image={{ shape: "square" }} />)
  expect(screen.getByTestId("skeleton")).toMatchSnapshot()
})

test("Skeleton renders with custom size image", () => {
  render(<Skeleton data-testid="skeleton" image={{ size: 100 }} />)
  expect(screen.getByTestId("skeleton")).toMatchSnapshot()
})

test("Skeleton renders with visible:false, content should be visible", () => {
  render(<Skeleton data-testid="skeleton" visible={false}>hello</Skeleton >)
  expect(screen.getByText("hello")).toBeVisible();
})
