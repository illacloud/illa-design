import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import * as React from "react"
import ReactDOM from "react-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { iconColorMap } from "@illa-design/alert"

import { Button } from "@illa-design/button"
import Notification from "../src"
// describe("open Notification", () => {
//   beforeEach(() => {
//     jest.useFakeTimers()
//   })
//
//   afterEach(() => {
//     Notification.clear()
//     jest.runAllTimers()
//   })
//
//   it("Notification renders with different type ", function () {
//     Notification.info({
//       title: "Title",
//       content: "Content",
//     })
//   })
// })
test("Notification renders with different type", async () => {
  // Notification.config({ maxCount: 3 })
  render(<Notification type={"info"} title={"Info Title"} />)
  // Notification.info({
  //   title: "Title",
  //   content: "Content",
  // })
  // render(Notification.info({ title: "Info" }))
  // expect(screen.getByText("Info")).toBeInTheDocument()
  // const infoBtn = screen.getByTestId("test-with-info")
  // expect(infoBtn).toBeInTheDocument()
  // fireEvent.click(infoBtn)
  // await waitFor(
  //   () => {
  //     expect(screen.getByText("Info")).toBeInTheDocument()
  //   },
  //   { timeout: 1000 },
  // )

  // render(
  //   <Button
  //     data-testid="test-with-warn"
  //     onClick={() => {
  //       Notification.warning({ title: "Warning" })
  //     }}
  //   >
  //     Open Notification
  //   </Button>,
  // )
  // render(
  //   <Button
  //     data-testid="test-with-error"
  //     onClick={() => {
  //       Notification.error({ title: "Error" })
  //     }}
  //   >
  //     Open Notification
  //   </Button>,
  // )
  // render(
  //   <Button
  //     data-testid="test-with-success"
  //     onClick={() => {
  //       Notification.success({ title: "Success" })
  //     }}
  //   >
  //     Open Notification
  //   </Button>,
  // )
  // render(
  //   <Button
  //     data-testid="test-with-normal"
  //     onClick={() => {
  //       Notification.normal({ title: "Normal" })
  //     }}
  //   >
  //     Open Notification
  //   </Button>,
  // )
  // render(
  //   <Button
  //     data-testid="test-with-info"
  //     onClick={() => {
  //       Notification.info({ title: "Info" })
  //     }}
  //   >
  //     Open Notification
  //   </Button>,
  // )
})
