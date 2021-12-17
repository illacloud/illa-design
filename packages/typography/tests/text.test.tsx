import * as React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Text, Typography } from "../src"

test("Text renders with different level", () => {
  render(<Typography>
    <Text data-testid="test-text" fontSize="20px">Text</Text>
  </Typography>)
  expect(screen.getByTestId("test-text")).toHaveStyle({
    fontSize: "20px",
  })
})

// test("Text renders with different copy tooltips", () => {
//   const { getByTitle } = render(<Typography>
//     <Text data-testid="test-text" fontSize="20px"
//           copyable={new CopyableBuilder()
//             .copyTooltip("CopyTooltip")
//             .copiedTooltip("CopiedTooltip")
//             .create()}>Text</Text>
//   </Typography>)
//   fireEvent.mouseOver(getByTitle("CopyIcon"))
//   expect(screen.getByText("CopyTooltip")).toBeInTheDocument()
//   fireEvent.click(getByTitle("CopyIcon"))
//   expect(screen.getByText("CopiedTooltip")).toBeInTheDocument()
// })

test("Text renders with copy icon", () => {
  render(<Typography>
    <Text data-testid="test-text" fontSize="20px" copyable={true}>Text</Text>
  </Typography>)
  expect(screen.getByText("Text")).toBeInTheDocument()
})