import * as React from "react"
import { Trigger } from "../src"
import { Button } from "@illa-design/button"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Space } from "@illa-design/space"
import { ReactNode } from "react"
import { TabPane, Tabs } from "@illa-design/tabs"

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
  {
    key: "4",
    title: "tab 04",
    content: "tab content 04",
  },
  { key: "5", title: "tab 05", content: "tab content 05" },
  { key: "6", title: "tab 06", content: "tab content 06" },
]

it("Tabs renders correctly", () => {
  mount(
    <Tabs placeholder={"tabs"} defaultActiveKey={"3"}>
      {tabArr?.map((item) => {
        return (
          <TabPane title={item.title} key={item.key}>
            {item.content}
          </TabPane>
        )
      })}
    </Tabs>,
  )
  expect(cy.findByPlaceholderText("tabs")).exist
  unmount()
})

it("Trigger renders correctly", () => {
  mount(
    <Trigger content="Trigger Success Custom">
      <Button>Hello Trigger Custom</Button>
    </Trigger>,
  )
  cy.findByText("Hello Trigger Custom").trigger("mouseover")
  expect(cy.findByText("Trigger Success Custom")).exist
  unmount()
})

it("Trigger renders without padding", () => {
  mount(
    <Trigger content="Trigger" withoutPadding>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByText("Trigger")
    .parent()
    .parent()
    .should("not.have.a.property", "padding")
  unmount()
})

it("Trigger renders without triangle", () => {
  mount(
    <Trigger content="Trigger" showArrow={false} position="bottom">
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByTitle("TriangleIconBottom").should("not.exist")
  unmount()
})

it("Trigger renders without auto fit position", () => {
  mount(
    <Trigger content="Trigger" autoFitPosition={false}>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByTitle("TriangleIconTop").should("exist")
  unmount()
})

it("Trigger renders with time delay", () => {
  mount(
    <Trigger
      content="Trigger"
      trigger="click"
      closeDelay={1000}
      openDelay={1000}
      position="bottom"
    >
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("click")
  cy.findByText("Trigger").should("exist")
  cy.findByText("Button").trigger("click")
  cy.findByText("Trigger").should("not.exist")
  unmount()
})

it("Trigger renders without close on click", () => {
  mount(
    <Trigger
      content="Trigger"
      trigger="click"
      closeOnClick={false}
      position="bottom"
    >
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").click()
  cy.findByText("Button").click()
  cy.findByText("Trigger").should("exist")
  unmount()
})

it("Trigger renders with default visible", () => {
  mount(
    <Trigger defaultPopupVisible={true} position="bottom" content="Trigger">
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Trigger").should("exist")
  unmount()
})

it("Trigger renders with equal width", () => {
  mount(
    <Trigger
      autoAlignPopupWidth={true}
      position="bottom"
      content="Trigger"
      popupVisible={true}
    >
      <div>Button</div>
    </Trigger>,
  )
  cy.wait(2000)
  cy.findByText("Trigger")
    .parent()
    .parent()
    .parent()
    .invoke("width")
    .should("equal", 484)
  unmount()
})

it("Trigger renders with control", () => {
  mount(
    <Space direction="vertical" size="large">
      <Trigger content="Visible" popupVisible={true}>
        <Button>Button</Button>
      </Trigger>
      <Trigger content="Invisible Trigger" popupVisible={false} trigger="click">
        <Button>Invisible Button</Button>
      </Trigger>
      ,
    </Space>,
  )
  cy.findByText("Visible").should("exist")
  cy.findByText("Invisible Button").click()
  cy.findByText("Invisible Trigger").should("not.exist")
  unmount()
})

it("Trigger renders with disabled", () => {
  mount(
    <Trigger content="Visible" trigger="click" disabled>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").click()
  cy.findByText("Visible").should("not.exist")
  unmount()
})

it("Trigger renders with on visible change event", () => {
  const mock = cy.stub().as("mock")
  mount(
    <Trigger trigger="click" content="Visible" onVisibleChange={mock}>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").click()
  cy.get("@mock").should("to.be.calledWith", true)
  cy.findByText("Button").click()
  cy.get("@mock").should("to.be.calledWith", false)
  unmount()
})
