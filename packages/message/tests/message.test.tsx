import { render, screen, fireEvent, waitFor, act } from "@testing-library/react"
import "@testing-library/jest-dom"

import { globalColor, illaPrefix } from "@illa-design/theme"
import { iconColorMap } from "@illa-design/alert"
import userEvent from "@testing-library/user-event"
import { Button } from "@illa-design/button"
import { Message } from "../src"
import { MessageType } from "../../notification/src"

describe("Open Message", () => {
  beforeEach(() => {
    act(() => {
      jest.useFakeTimers()
    })
  })
  afterEach(() => {
    Message.clear()
    act(() => {
      jest.runAllTimers()
    })
  })
  test("Message renders with different type", async () => {
    const types: MessageType[] = [
      "info",
      "success",
      "error",
      "warning",
      "normal",
      "loading",
    ]
    types.forEach((type) => {
      Message[type]({
        content: `${type}`,
        id: `${type}`,
      })
    })
    await waitFor(() => {}, { timeout: 800 })
    types.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument()

      type !== "normal" &&
        expect(screen.getByText(type).previousSibling).toHaveStyle({
          marginRight: 8,
          fontSize: 16,
          color: `${iconColorMap[type]}`,
        })
    })
  })

  test("Message renders with close action", async () => {
    const handleClose = jest.fn()
    Message.info({
      content: "Content",
      closable: true,
      onClose: handleClose,
    })
    await waitFor(() => {}, { timeout: 800 })
    const closBtn = screen.getByText("Content").nextSibling
    expect(closBtn).toBeInTheDocument()
    expect(closBtn).toHaveStyle({
      fontSize: 8,
      color: `${globalColor(`--${illaPrefix}-gray-03`)}`,
      cursor: "pointer",
    })
    await userEvent.click(closBtn as Element)
    expect(handleClose).toBeCalled()
  })

  test("Message renders with duration", async () => {
    Message.info({
      content: "Default",
      duration: 1500,
    })
    await waitFor(() => {}, { timeout: 500 })
    let instance = screen.getByText("Default")
    expect(instance).toBeInTheDocument()
    await waitFor(
      () => {
        expect(instance).not.toBeInTheDocument()
      },
      {
        timeout: 2000,
      },
    )
    Message.info({
      content: "Content",
      duration: 500,
    })
    await waitFor(() => {}, { timeout: 800 })
    instance = screen.getByText("Content")
    expect(instance).toBeInTheDocument()
    await waitFor(
      () => {
        expect(instance).not.toBeInTheDocument()
      },
      {
        timeout: 1500,
      },
    )
  })

  test("Message renders with mouse action", async () => {
    Message.info({
      content: "Content",
      duration: 800,
    })
    await waitFor(() => {}, { timeout: 800 })
    let instance = screen.getByText("Content")
    fireEvent.mouseEnter(instance)
    await waitFor(
      () => {
        expect(instance).toBeInTheDocument()
      },
      {
        timeout: 1500,
      },
    )
    fireEvent.mouseLeave(instance)
    await waitFor(
      () => {
        expect(instance).not.toBeInTheDocument()
      },
      {
        timeout: 2500,
      },
    )
  })

  test("Message renders with remove&clear", async () => {
    Message.info({
      content: "Remove",
      id: "remove",
      action: <Button data-testid="removeBtn">Hello</Button>,
    })
    await waitFor(() => {}, { timeout: 800 })
    let instance = screen.getByText("Remove")
    expect(instance).toBeInTheDocument()
    Message.remove("remove")
    await waitFor(
      () => {
        expect(instance).not.toBeInTheDocument()
      },
      {
        timeout: 800,
      },
    )
    Message.info({
      content: "ItemA",
      id: "itemA",
    })
    Message.info({
      content: "ItemB",
      id: "itemB",
    })
    await waitFor(() => {}, { timeout: 800 })
    let instanceA = screen.getByText("ItemA")
    let instanceB = screen.getByText("ItemB")
    expect(instanceA).toBeInTheDocument()
    expect(instanceB).toBeInTheDocument()
    Message.clear()
    await waitFor(
      () => {
        expect(instanceA).not.toBeInTheDocument()
        expect(instanceB).not.toBeInTheDocument()
      },
      {
        timeout: 800,
      },
    )
  })

  test("Message renders with update", async () => {
    Message.info({
      content: "Title",
      duration: 0,
    })
    Message.info({
      content: "updateBefore",
      id: "Before",
      duration: 0,
    })
    await waitFor(() => {}, { timeout: 800 })
    const instance = screen.getByText("updateBefore")
    expect(instance.innerHTML).toBe("updateBefore")
    Message.info({
      content: "After",
      id: "Before",
    })
    await waitFor(() => {}, { timeout: 800 })
    expect(instance.innerHTML).toBe("After")
  })

  test("Message renders with global config", async () => {
    Message.info("Before")
    render(<div data-testid="body" id={"container"} />)
    Message.config({
      maxCount: 1,
      duration: 0,
      getContainer: () => document.getElementById("container") as HTMLElement,
    })

    Message.info({
      content: "Old",
      id: "old",
    })
    await waitFor(() => {}, { timeout: 800 })
    expect(screen.getByTestId("body")).toBeInTheDocument()
    expect(screen.getByTestId("body").firstChild).toBeInTheDocument()

    const instance = screen.getByText("Old")
    await waitFor(
      () => {
        expect(instance).toBeInTheDocument()
      },
      {
        timeout: 3500,
      },
    )
    Message.info({
      content: "New",
      id: "new",
    })
    await waitFor(() => {}, { timeout: 800 })
    expect(screen.getByText("New")).toBeInTheDocument()
  })
})
