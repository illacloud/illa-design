import { InputTag } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("InputTag render correctly", () => {
  // render(<InputTag placeholder={"input"} />)
  // expect(screen.getByPlaceholderText("input")).toBeInTheDocument()
  //
  // expect(screen.getByPlaceholderText("input").parentElement).toHaveStyle({
  //   borderColor: `${globalColor(`--${illaPrefix}-gray-08`)}`,
  //   color: `${globalColor(`--${illaPrefix}-gray-02`)}`,
  // })
})
