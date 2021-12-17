/**
 * @jest-environment jest-electron/environment
 */
import { Avatar } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Avatar renders with long text", () => {
  render(<Avatar text="long long text" />)
  expect(screen.getByText("long long text")).toHaveStyle({
    "transform": "matrix(0.408163, 0, 0, 0.408163, 0, 0)",
  })
})