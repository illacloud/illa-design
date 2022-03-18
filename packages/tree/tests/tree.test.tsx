import { Tree } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Tree renders correctly", () => {
  render(<Tree placeholder="tree" />)
  expect(screen.getByPlaceholderText("tree")).toBeInTheDocument()
})
