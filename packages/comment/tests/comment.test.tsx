import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Comment } from "../src"
import { Avatar } from "@illa-design/avatar"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Comment renders correctly", () => {
  render(<Comment placeholder={"comment"} />)
  expect(screen.getByPlaceholderText("comment")).toBeInTheDocument()
})

test("Comment renders with avatar", () => {
  render(
    <Comment
      avatar={<Avatar data-testid="test-avatar" />}
      placeholder={"comment"}
    />,
  )
  expect(screen.getByTestId("test-avatar")).toBeInTheDocument()
})

test("Comment renders with author", () => {
  render(
    <Comment
      author={<span data-testid="test-author">aoao</span>}
      placeholder={"comment"}
    />,
  )
  expect(screen.getByTestId("test-author")).toBeInTheDocument()
})

test("Comment renders with content", () => {
  render(
    <Comment
      content={<span data-testid="test-content">Comment body content.</span>}
      placeholder={"comment"}
    />,
  )
  expect(screen.getByTestId("test-content")).toBeInTheDocument()
})

test("Comment renders with action", () => {
  render(
    <Comment
      actions={<span data-testid="test-action">like</span>}
      placeholder={"comment"}
    />,
  )
  expect(screen.getByTestId("test-action")).toBeInTheDocument()
})

test("Comment renders with datetime", () => {
  render(<Comment datetime={"1 hour"} placeholder={"comment"} />)
  expect(screen.getByText("1 hour")).toBeInTheDocument()
})

test("Comment renders with children", () => {
  render(
    <Comment placeholder={"comment"}>
      <Comment data-testid="test-comment-children" />
    </Comment>,
  )
  expect(screen.getByTestId("test-comment-children")).toBeInTheDocument()
})

test("Comment renders with align", () => {
  render(
    <Comment
      placeholder={"comment"}
      actions={<span data-testid="test-action">like</span>}
      align={"right"}
    />,
  )
  expect(screen.getByTestId("test-action").parentNode).toHaveStyle({
    "align-self": "flex-end",
  })
})

test("Comment renders with align", () => {
  render(
    <Comment
      placeholder={"comment"}
      actions={<span data-testid="test-action">like</span>}
      align={{ actions: "right" }}
    />,
  )
  expect(screen.getByTestId("test-action").parentNode).toHaveStyle({
    "align-self": "flex-end",
  })
})

test("Comment renders with action-align", () => {
  render(
    <Comment
      placeholder={"comment"}
      datetime={"1 hour"}
      actions={<span data-testid="test-action">like</span>}
      align={{ datetime: "left" }}
    />,
  )
  expect(screen.getByText("1 hour").parentNode).toHaveStyle({
    "justify-content": "start",
  })
})
