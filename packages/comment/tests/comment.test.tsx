import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Comment } from "../src"

test("Comment renders with correctly", () => {
  render(<Comment placeholder={"comment"} />)
  expect(screen.getByPlaceholderText("comment")).toBeInTheDocument()
})
