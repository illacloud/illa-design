import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
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
  { key: "4", title: "tab 04", content: "tab content 04" },
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
  expect(screen.getByText("tab 01")).toHaveStyle({
    margin: `6px 18px 6px 18px`,
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
    margin: `8px 8px 8px 8px`,
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
    margin: `4px 8px 4px 8px`,
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
