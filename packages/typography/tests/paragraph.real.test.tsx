/**
 * @jest-environment jest-electron/environment
 */
import { fireEvent, render, screen } from "@testing-library/react"
import { EllipsisBuilder, Paragraph, Typography } from "../src"
import * as React from "react"
import "@testing-library/jest-dom"
import { PersonIcon } from "@illa-design/icon"

test("Paragraph renders short text with ellipsis", () => {
  render(<Typography>
    <Paragraph ellipsis={true}>
      This is a paragraph
    </Paragraph>
  </Typography>)
  expect(screen.queryByText("...")).not.toBeTruthy()
})

test("Paragraph render with ellipsis", () => {
  const onExpand = jest.fn()
  render(<Typography>
    <Paragraph data-testid="test-paragraph"
               ellipsis={new EllipsisBuilder()
                 .rows(2)
                 .expandable(true)
                 .expandLabel(<PersonIcon />)
                 .onExpand(onExpand)
                 .suffix("TestSuffix")
                 .create()}>
      A design is a plan or
      specification for the
      construction of
      an object or system or for
      the
      implementation of an activity or process, or the result of that plan or specification in the form of a prototype,
      product or process. The verb to design expresses the process of developing a design. In some cases, the direct
      construction of an object without an explicit prior plan (such as in craft work, some engineering, coding, and
      graphic design) may also be considered to be a design activity.
    </Paragraph>
  </Typography>)
  expect(screen.getByText("TestSuffix")).toBeInTheDocument()
  expect(screen.getByText("...")).toBeInTheDocument()
  fireEvent.click(screen.getByTitle("PersonIcon"))
  expect(onExpand).toBeCalled()
  expect(screen.queryByText("...")).not.toBeInTheDocument()
})