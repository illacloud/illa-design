import { Slider } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Slider renders with normal", () => {
  render(<Slider data-testid={"normal"} />)
  expect(screen.getByTestId("normal")).toBeInTheDocument()
  expect(screen.getByTestId("normal")).toHaveStyle({
    display: "inline-block",
    width: "auto",
    height: "auto",
    "min-width": "22px",
  })
})
