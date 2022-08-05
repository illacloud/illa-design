import { Affix } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Affix should renders children", () => {
  render(
    <Affix>
      <span>Hello</span>
    </Affix>,
  )

  expect(screen.getByText("Hello")).toBeInTheDocument()
})
