/**
 * @jest-environment jest-electron/environment
 */
import { fireEvent, render, screen } from "@testing-library/react"
import { CopyableBuilder, Text, Typography } from "../src"
import { ImageDefaultIcon, PersonIcon } from "@illa-design/icon"
import * as React from "react"
import "@testing-library/jest-dom"

test("Text renders with copy event", () => {
  const onCopy = jest.fn()
  const { getByTitle } = render(<Typography>
    <Text fontSize="20px" copyable={new CopyableBuilder().onCopy(onCopy).create()}>Text</Text>
  </Typography>)
  fireEvent.click(getByTitle("CopyIcon"))
  expect(onCopy).toBeCalled()
})

test("Text renders with different copy icon", () => {
  const { getByTitle } = render(<Typography>
    <Text data-testid="test-text" fontSize="20px"
          copyable={new CopyableBuilder().copyIcon(<ImageDefaultIcon />).copiedIcon(
            <PersonIcon />).create()}>Text</Text>
  </Typography>)
  fireEvent.click(getByTitle("ImageDefaultIcon"))
  expect(getByTitle("PersonIcon")).toBeInTheDocument()
})

test("Text renders with different copy tooltips", () => {
  const { getByTitle } = render(<Typography>
    <Text data-testid="test-text" fontSize="20px"
          copyable={new CopyableBuilder()
            .copyTooltip("CopyTooltip")
            .copiedTooltip("CopiedTooltip")
            .create()}>Text</Text>
  </Typography>)
  fireEvent.mouseEnter(getByTitle("CopyIcon"))
  expect(screen.getByText("CopyTooltip")).toBeInTheDocument()
  fireEvent.click(getByTitle("CopyIcon"))
  fireEvent.mouseLeave(getByTitle("CopyIcon"))
  fireEvent.mouseEnter(getByTitle("CopyIcon"))
  expect(screen.getByText("CopiedTooltip")).toBeInTheDocument()
})
