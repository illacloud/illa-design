import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Tabs } from "../src"
import * as React from "react"

test("Tabs renders correctly", () => {
  render(<Tabs placeholder={"tabs"} />)
  expect(screen.getByPlaceholderText("tabs")).toBeInTheDocument()
})
