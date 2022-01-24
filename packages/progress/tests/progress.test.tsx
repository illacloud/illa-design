import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Progress } from "../src"

test("Progress renders with correctly", () => {
  render(
    <Progress icon={true}>
      Link
    </Progress>,
  )
  expect(screen.getByTitle("LinkIcon")).toBeInTheDocument()
})