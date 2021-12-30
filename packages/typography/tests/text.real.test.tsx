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
  const { getByTitle } = render(<Typography>
    <Text fontSize="20px" copyable={new CopyableBuilder().onCopy(onCopy).create()}>Text</Text>
  </Typography>)
  await waitFor(() => {
    fireEvent.click(getByTitle("CopyIcon"))
  })
  await waitFor(() => {
    expect(onCopy).toBeCalled()
  })
})

test("Text renders with different copy icon", async () => {
  const { getByTitle } = render(<Typography>
    <Text data-testid="test-text" fontSize="20px"
          copyable={new CopyableBuilder().copyIcon(<ImageDefaultIcon />).copiedIcon(
            <PersonIcon />).create()}>Text</Text>
  </Typography>)
  act(() => {
    fireEvent.click(getByTitle("ImageDefaultIcon"))
  })
  await waitFor(() => {
    expect(getByTitle("PersonIcon")).toBeInTheDocument()
  })
})

test("Text renders with different copy tooltips", async () => {
  const { getByTitle } = render(<Typography>
    <Text data-testid="test-text" fontSize="20px"
          copyable={new CopyableBuilder()
            .copyTooltip("CopyTooltip")
            .copiedTooltip("CopiedTooltip")
            .create()}>Text</Text>
  </Typography>)
  act(() => {
    fireEvent.mouseEnter(getByTitle("CopyIcon"))
  })
  await new Promise((r) => setTimeout(r, 150))
  await waitFor(() => {
    expect(screen.getByText("CopyTooltip")).toBeInTheDocument()
  })
  act(() => {
    fireEvent.click(getByTitle("CopyIcon"))
    fireEvent.mouseLeave(getByTitle("CopyIcon"))
    fireEvent.mouseEnter(getByTitle("CopyIcon"))
  })
  await new Promise((r) => setTimeout(r, 150))
  await waitFor(() => {
    expect(screen.getByText("CopiedTooltip")).toBeInTheDocument()
  })
})
