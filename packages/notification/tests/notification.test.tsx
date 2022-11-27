import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { globalColor, illaPrefix } from "@illa-design/theme"
import userEvent from "@testing-library/user-event"
import { Button } from "@illa-design/button"
import {
  Notification,
  NotificationGroup,
  NotificationType,
  useNotification,
} from "../src"

describe("Open Notification", () => {
  const notification = useNotification()

  beforeEach(() => {
    act(() => {
      jest.useFakeTimers()
    })
  })
  afterEach(() => {
    notification.clear()
    act(() => {
      jest.runAllTimers()
    })
  })
  test("Notification renders with different type", async () => {
    const types: NotificationType[] = [
      "info",
      "success",
      "error",
      "warning",
      "normal",
    ]
    types.forEach((type) => {
      Notification[type]({
        title: `${type}`,
        content: "Content",
        id: `${type}`,
      })
    })

    types.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument()
    })
  })

  test("Notification renders with no icon", () => {
    render(<NotificationGroup />)
    notification.normal({
      title: "Notify",
    })
    expect(screen.getByText("Notify").parentNode?.parentNode).toHaveStyle({
      paddingLeft: 16,
    })
  })

  test("Notification renders with close action", async () => {
    render(<NotificationGroup />)
    const handleClose = jest.fn()
    notification.info({
      title: "Close",
      content: "Content",
      closable: true,
      onClose: handleClose,
    })
    const closBtn = screen.getByText("CloseIcon").parentNode?.parentNode
    expect(closBtn).toBeInTheDocument()
    expect(closBtn).toHaveStyle({
      fontSize: 8,
      color: `${globalColor(`--${illaPrefix}-grayBlue-03`)}`,
      cursor: "pointer",
    })
    await userEvent.click(closBtn as Element)
    expect(handleClose).toBeCalled()
  })

  test("Notification renders with action button", async () => {
    render(<NotificationGroup />)
    notification.info({
      title: `Action`,
      content: "Content",
      action: <Button data-testid={"notify-action"}>OK</Button>,
    })
    const action = screen.getByTestId("notify-action").parentNode
    expect(action).toBeInTheDocument()
    expect(action).toHaveStyle({
      textAlign: "right",
      marginTop: 16,
    })
  })

  test("Notification renders with mouse action", async () => {
    render(<NotificationGroup />)
    notification.info({
      title: `Default`,
      content: "Content",
      duration: 800,
    })
    let instance = screen.getByText("Default")
    fireEvent.mouseEnter(instance)
    act(() => {
      jest.advanceTimersByTime(800)
    })
    expect(instance).toBeInTheDocument()
    fireEvent.mouseLeave(instance)
  })

  test("Notification renders with update", async () => {
    render(<NotificationGroup />)
    notification.info({
      title: "Title",
      duration: 0,
    })
    notification.info({
      title: "updateBefore",
      id: "Before",
      duration: 0,
      action: <span data-testid="updateBtn">updateBefore</span>,
    })
    const instance = screen.getByTestId("updateBtn")
    expect(instance.innerHTML).toBe("updateBefore")
    notification.info({
      title: "After",
      id: "Before",
      action: <span data-testid="updateBtn">After</span>,
    })
    expect(instance.innerHTML).toBe("After")
  })

  test("Notification renders with global config", async () => {
    render(<NotificationGroup />)
    notification.info({
      title: "Before",
      id: "before",
    })
    render(<div data-testid="container" id={"container"} />)
    notification.config({
      maxCount: 1,
      duration: 0,
    })

    notification.info({
      title: "Old",
      id: "old",
    })
    expect(screen.getByTestId("container")).toBeInTheDocument()
    expect(screen.getByTestId("container").firstChild).toBeInTheDocument()

    const instance = screen.getByText("Old")
    expect(instance).toBeInTheDocument()
    notification.info({
      title: "New",
      id: "new",
    })
    expect(screen.getByText("New")).toBeInTheDocument()
  })
})
