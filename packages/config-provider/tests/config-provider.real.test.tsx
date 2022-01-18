/**
 * @jest-environment jest-electron/environment
 */
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ConfigProvider, zhCN } from "../src"
import { Typography } from "@illa-design/typography"
import { CopyableBuilder, EllipsisBuilder, Heading } from "@illa-design/typography/src"
import * as React from "react"

test("Link renders with icon", () => {
  render(<ConfigProvider locale={zhCN}>
    <Typography>
      <Heading level="h4" ellipsis={new EllipsisBuilder().rows(2).expandable(true).create()}
               copyable={new CopyableBuilder().create()}>A
        design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the form of a
        prototype,
        product or process. The verb to design expresses the process of developing a design. In some cases, the direct
        construction of an object without an explicit prior plan (such as in craft work, some engineering, coding, and
        graphic design) may also be considered to be a design activity.
      </Heading>
    </Typography>
  </ConfigProvider>)
  expect(screen.getByText("展开")).toBeInTheDocument()
})