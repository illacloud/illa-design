/**
 * @jest-environment jest-electron/environment
 */
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { CopyableBuilder, Text, Typography } from "../src"
import { ImageDefaultIcon, PersonIcon } from "@illa-design/icon"
import * as React from "react"
import "@testing-library/jest-dom"

test("Text renders with copy event", async () => {
  const onCopy = jest.fn()
  act(() => {
    render(<Typography>
      <Text fontSize="20px" copyable={new CopyableBuilder().onCopy(onCopy).create()}>Text</Text>
    </Typography>)
  })
  await waitFor(() => {
    fireEvent.click(screen.getByTitle("CopyIcon"))
  })
  await waitFor(() => {
    expect(onCopy).toBeCalled()
  })
})

test("Text renders with different copy icon", async () => {
  act(() => {
    render(<Typography>
      <Text data-testid="test-text" fontSize="20px"
            copyable={new CopyableBuilder().copyIcon(<ImageDefaultIcon />).copiedIcon(
              <PersonIcon />).create()}>Text</Text>
    </Typography>)
  })
  act(() => {
    fireEvent.click(screen.getByTitle("ImageDefaultIcon"))
  })
  await waitFor(() => {
    expect(screen.getByTitle("PersonIcon")).toBeInTheDocument()
  })
})

test("Text renders with different copy tooltips", async () => {
  act(() => {
    render(<Typography>
      <Text data-testid="test-text" fontSize="20px"
            copyable={new CopyableBuilder()
              .copyTooltip("CopyTooltip")
              .copiedTooltip("CopiedTooltip")
              .create()}>Text</Text>
    </Typography>)
  })
  act(() => {
    fireEvent.mouseEnter(screen.getByTitle("CopyIcon"))
  })
  await new Promise((r) => setTimeout(r, 150))
  await waitFor(() => {
    expect(screen.getByText("CopyTooltip")).toBeInTheDocument()
  })
  act(() => {
    fireEvent.click(screen.getByTitle("CopyIcon"))
    fireEvent.mouseLeave(screen.getByTitle("CopyIcon"))
    fireEvent.mouseEnter(screen.getByTitle("CopyIcon"))
  })
  await new Promise((r) => setTimeout(r, 150))
  await waitFor(() => {
    expect(screen.getByText("CopiedTooltip")).toBeInTheDocument()
  })
})
