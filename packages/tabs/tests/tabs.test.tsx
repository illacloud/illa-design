import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { TabPane, Tabs } from "../src"

import { ReactNode } from "react"
import { globalColor, illaPrefix } from "@illa-design/theme"

const tabArr: {
  key: string
  title: string | ReactNode
  content: string
  disabled?: boolean
}[] = [
  {
    key: "1",
    title: "tab 01",
    content: "tab content 01",
  },
  { key: "2", title: "tab 02", content: "tab content 02", disabled: true },
  { key: "3", title: "tab 03", content: "tab content 03" },
]

test("Tabs renders correctly", () => {
  render(<Tabs placeholder={"tabs"} />)
  expect(screen.getByPlaceholderText("tabs")).toBeInTheDocument()
})

test("Tabs renders with defaultActivityKey and disabled", () => {
  render(
    <Tabs placeholder={"tabs"} defaultActiveKey={"3"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key} disabled={item.disabled}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab 01")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-gray-03`)}`,
  })
  expect(screen.getByText("tab 02")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
  expect(screen.getByText("tab 03")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
})

test("Tabs renders without defaultActivityKey", () => {
  render(
    <Tabs placeholder={"tabs"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab 01")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
})

test("Tabs renders without onChange and onClickTab", () => {
  const changeEvent = jest.fn()
  const clickEvent = jest.fn()
  render(
    <Tabs placeholder={"tabs"} onChange={changeEvent} onClickTab={clickEvent}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  const target = screen.getByText("tab 02")
  fireEvent.click(target)
  expect(screen.getByText("tab 02")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
  expect(changeEvent).toBeCalled()
  expect(clickEvent).toBeCalled()
})

test("Tabs renders with variant is card", () => {
  render(
    <Tabs placeholder={"tabs"} variant={"card"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab 01").parentElement).toHaveStyle({
    border: "solid #ebebeb",
  })
})

test("Tabs renders with variant is capsule", () => {
  render(
    <Tabs placeholder={"tabs"} variant={"capsule"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab 01").parentElement).toHaveStyle({
    "background-color": "#fff",
  })
})

test("Tabs renders with editable", () => {
  const addEvent = jest.fn()
  const deleteEvent = jest.fn()
  render(
    <Tabs
      placeholder={"tabs"}
      variant={"card"}
      editable={true}
      onAddTab={addEvent}
      onDeleteTab={deleteEvent}
    >
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  const addButton = screen.getByTitle("MinusIcon")
  const deleteButton1 = screen.queryByText("tab 01")?.parentElement?.lastChild
  const deleteButton2 = screen.queryByText("tab 03")?.parentElement?.lastChild
  expect(deleteButton1).toBeInTheDocument()
  expect(addButton).toBeInTheDocument()
  fireEvent.click(addButton)
  expect(addEvent).toBeCalled()
  deleteButton1 && fireEvent.click(deleteButton1)
  deleteButton2 && fireEvent.click(deleteButton2)
  expect(deleteEvent).toBeCalled()
  expect(deleteButton1).not.toBeInTheDocument()
  expect(deleteButton2).not.toBeInTheDocument()
})

test("Tabs renders with tabBarSpacing", () => {
  render(
    <Tabs placeholder={"tabs"} tabBarSpacing={20}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab 01").parentElement).toHaveStyle({
    padding: `0 20px`,
  })
})

test("Tabs renders with size is large", () => {
  render(
    <Tabs placeholder={"tabs"} size={"large"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab 01")).toHaveStyle({
    padding: `9px 0`,
  })
})

test("Tabs renders with size is small", () => {
  render(
    <Tabs placeholder={"tabs"} size={"small"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab 01")).toHaveStyle({
    padding: `5px 0`,
  })
})

test("Tabs renders with horizontalLayout", () => {
  render(
    <Tabs placeholder={"tabs"} tabPosition={"left"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByPlaceholderText("tabs")).toHaveStyle({
    "flex-direction": "row",
  })
})

test("Tabs renders with animated", () => {
  render(
    <Tabs placeholder={"tabs"} animated={true}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab content 02")?.parentElement).toHaveStyle({
    transition: "right 200ms",
  })
})

test("Tabs renders with animated is object", () => {
  render(
    <Tabs placeholder={"tabs"} animated={{ tabPane: false, inkBar: false }}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(screen.getByText("tab content 02")?.parentElement).not.toHaveStyle({
    transition: "right 200ms",
  })
})
