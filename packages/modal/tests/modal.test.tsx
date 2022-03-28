import { Modal } from "../src"
import * as React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@illa-design/button"
import { globalColor, illaPrefix } from "@illa-design/theme"

test("Modal renders with title ", () => {
  render(<Modal visible={true} title={"Modal Title"} />)
  expect(screen.getByText("Modal Title")).toBeInTheDocument()
})
