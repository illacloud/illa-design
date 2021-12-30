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
  render(<Typography>
    <Text fontSize="20px" copyable={new CopyableBuilder().onCopy(onCopy).create()}>Text</Text>
  </Typography>)
  await waitFor(() => {
    expect(screen.getByTitle("CopyIcon")).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTitle("CopyIcon"))
  await waitFor(() => {
    expect(onCopy).toBeCalled()
  })
})

test("Text renders with different copy icon", async () => {
  render(<Typography>
    <Text data-testid="test-text" fontSize="20px"
          copyable={new CopyableBuilder().copyIcon(<ImageDefaultIcon />).copiedIcon(
            <PersonIcon />).create()}>Text</Text>
  </Typography>)
  await waitFor(() => {
    expect(screen.getByTitle("ImageDefaultIcon")).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTitle("ImageDefaultIcon"))
  await waitFor(() => {
    expect(screen.getByTitle("PersonIcon")).toBeInTheDocument()
  })
})

test("Text renders with different copy tooltips", async () => {
  render(<Typography>
    <Text data-testid="test-text" fontSize="20px"
          copyable={new CopyableBuilder()
            .copyTooltip("CopyTooltip")
            .copiedTooltip("CopiedTooltip")
            .create()}>Text</Text>
  </Typography>)
  fireEvent.mouseEnter(screen.getByTitle("CopyIcon"))
  await waitFor(() => {
    expect(screen.getByText("CopyTooltip")).toBeInTheDocument()
  })
  fireEvent.click(screen.getByTitle("CopyIcon"))
  fireEvent.mouseLeave(screen.getByTitle("CopyIcon"))
  fireEvent.mouseEnter(screen.getByTitle("CopyIcon"))
  await waitFor(() => {
    expect(screen.getByText("CopiedTooltip")).toBeInTheDocument()
  })
})
