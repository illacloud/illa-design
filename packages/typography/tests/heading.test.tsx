import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Heading, Typography } from "../src"

test("Heading renders with different level", () => {
  render(
    <Typography>
      <Heading level="h1">H1</Heading>
      <Heading level="h2">H2</Heading>
      <Heading level="h3">H3</Heading>
      <Heading level="h4">H4</Heading>
      <Heading level="h5">H5</Heading>
      <Heading level="h6">H6</Heading>
    </Typography>,
  )
  expect(screen.getByText("H1")).toBeInTheDocument()
  expect(screen.getByText("H2")).toBeInTheDocument()
  expect(screen.getByText("H3")).toBeInTheDocument()
  expect(screen.getByText("H4")).toBeInTheDocument()
  expect(screen.getByText("H5")).toBeInTheDocument()
  expect(screen.getByText("H6")).toBeInTheDocument()
})
