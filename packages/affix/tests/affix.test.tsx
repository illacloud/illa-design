import { Affix } from "../src"
import { render, screen } from "@testing-library/react"

test("Affix should renders children", () => {
  render(
    <Affix>
      <span>Hello</span>
    </Affix>,
  )

  expect(screen.getByText("Hello")).toBeInTheDocument()
})
