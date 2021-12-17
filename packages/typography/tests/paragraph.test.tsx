import * as React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { EllipsisBuilder, Paragraph, Typography } from "../src"

test("Paragraph renders with different font size", () => {
  render(<Typography>
    <Paragraph data-testid="test-paragraph" fontSize="20px">A design is a plan or specification for the construction of
      an object or system or for
      the
      implementation of an activity or process, or the result of that plan or specification in the form of a prototype,
      product or process. The verb to design expresses the process of developing a design. In some cases, the direct
      construction of an object without an explicit prior plan (such as in craft work, some engineering, coding, and
      graphic design) may also be considered to be a design activity.</Paragraph>
  </Typography>)
  expect(screen.getByTestId("test-paragraph")).toBeInTheDocument()
})

test("Paragraph renders with indent", () => {
  render(<Typography>
    <Paragraph data-testid="test-paragraph" indent={true} fontSize="20px">A design is a plan or specification for the
      construction of
      an object or system or for
      the
      implementation of an activity or process, or the result of that plan or specification in the form of a prototype,
      product or process. The verb to design expresses the process of developing a design. In some cases, the direct
      construction of an object without an explicit prior plan (such as in craft work, some engineering, coding, and
      graphic design) may also be considered to be a design activity.</Paragraph>
  </Typography>)
  expect(screen.getByTestId("test-paragraph")).toHaveStyle({
    "text-indent": "32px",
  })
})

test("Paragraph renders with styles", () => {
  render(<Typography>
    <Paragraph data-testid="test-paragraph" underline={true} mark={true} deleted={true} bold={true}>A design is a plan
      or
      specification for the
      construction of
      an object or system or for
      the
      implementation of an activity or process, or the result of that plan or specification in the form of a prototype,
      product or process. The verb to design expresses the process of developing a design. In some cases, the direct
      construction of an object without an explicit prior plan (such as in craf twork, some engineering, coding, and
      graphic design) may also be considered to be a design activity.</Paragraph>
  </Typography>)
  expect(screen.getByTestId("test-paragraph")).toMatchSnapshot()
})

test("Paragraph renders with code style", () => {
  render(<Typography>
    <Paragraph data-testid="test-paragraph" code={true} ellipsis={false}>A design is a plan or
      specification for the
      construction of
      an object or system or for
      the
      implementation of an activity or process, or the result of that plan or specification in the form of a prototype,
      product or process. The verb to design expresses the process of developing a design. In some cases, the direct
      construction of an object without an explicit prior plan (such as in craft work, some engineering, coding, and
      graphic design) may also be considered to be a design activity.</Paragraph>
  </Typography>)
  expect(screen.getByTestId("test-paragraph")).toMatchSnapshot()
})

test("Paragraph renders with disabled style", () => {
  render(<Typography>
    <Paragraph data-testid="test-paragraph" disabled={true}>
      This is a paragraph
    </Paragraph>
  </Typography>)
  expect(screen.getByText("This is a paragraph")).toMatchSnapshot()
  fireEvent.mouseEnter(screen.getByText("This is a paragraph"))
  expect(screen.getByText("This is a paragraph")).toHaveStyle({
    "cursor": "not-allowed",
  })
})

test("Paragraph renders short text with ellipsis", () => {
  render(<Typography>
    <Paragraph ellipsis={true}>
      This is a paragraph
    </Paragraph>
  </Typography>)
  expect(screen.queryByText("...")).not.toBeInTheDocument()
})

test("Paragraph render with ellipsis", () => {
  const onExpand = jest.fn()
  render(<Typography>
    <Paragraph data-testid="test-paragraph"
               ellipsis={new EllipsisBuilder()
                 .rows(2)
                 .expandable(true)
                 .expandLabel("TestExpand")
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
  expect(screen.getByText("TestExpand")).toBeInTheDocument()
  fireEvent.click(screen.getByText("TestExpand"))
  expect(onExpand).toBeCalled()
  expect(screen.queryByText("...")).not.toBeInTheDocument()
})

