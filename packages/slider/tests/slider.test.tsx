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

describe("Test the slider styles in vertical or reverse", () => {
  test("Slider renders with vertical", () => {
    render(
      <Slider
        marks={{
          0: "0km",
          5: "5km",
          10: "10km",
        }}
        data-testid={"vertical"}
        showTicks
        showInput
        vertical
        disabled
      />,
    )
    expect(screen.getByTestId("vertical")).toMatchSnapshot()
  })

  test("Slider renders with reverse", () => {
    render(
      <Slider
        marks={{
          0: "0km",
          5: "5km",
          10: "10km",
        }}
        data-testid={"reverse"}
        showTicks
        showInput
        reverse
        disabled
      />,
    )
    expect(screen.getByTestId("reverse")).toMatchSnapshot()
  })

  test("Slider renders with vertical and reverse", () => {
    render(
      <Slider
        marks={{
          0: "0km",
          5: "5km",
          10: "10km",
        }}
        data-testid={"reverse and vertical"}
        showTicks
        showInput
        reverse
        vertical
        disabled
      />,
    )
    expect(screen.getByTestId("reverse and vertical")).toMatchSnapshot()
  })
})
