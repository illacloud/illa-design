import { Collapse, CollapseProps } from "../src"
import React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

function DemoTest(props: CollapseProps) {
  const CollapseItem = Collapse.Item
  return (
    <Collapse
      style={{ maxWidth: 1260, marginBottom: 20 }}
      defaultActiveKey={["1", "2"]}
      data-testid={"collapse-wrapper"}
      {...props}
    >
      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="1"
        data-testid={"collapse-item-1"}
      >
        Item-1
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="2"
        disabled
        data-testid={"collapse-item-2"}
      >
        Item-2
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="3"
        data-testid={"collapse-item-3"}
      >
        Item-3
      </CollapseItem>
    </Collapse>
  )
}

it("Collapse renders with correctly", () => {
  mount(<DemoTest />)
  cy.findByTestId("collapse-wrapper").should("exist")
  cy.findByTestId("collapse-item-1").should("exist")
  cy.findByTestId("collapse-item-2").should("exist")
  unmount()
})

it("Collapse renders with expanded", () => {
  mount(<DemoTest />)
  cy.findByText("Item-3").should("not.be.visible")
  cy.findByTestId("collapse-item-3").click()
  cy.findByText("Item-3").should("be.visible")
  unmount()
})

it("Collapse renders with accordion", () => {
  mount(<DemoTest accordion />)
  cy.findByText("Item-1").should("be.visible")
  cy.findByText("Item-2").should("not.be.visible")
  cy.findByText("Item-3").should("not.be.visible")
  cy.findByTestId("collapse-item-3").click()
  cy.findByText("Item-3").should("be.visible")
  cy.findByText("Item-1").should("not.be.visible")
  cy.findByText("Item-2").should("not.be.visible")
  unmount()
})

it("Collapse renders with disabled", () => {
  mount(<DemoTest />)
  cy.findByText("Item-2").should("be.visible")
  cy.findByTestId("collapse-item-2")
    .children("div:first-of-type")
    .should("have.css", "cursor", "not-allowed")
    .click()
  cy.findByText("Item-2").should("be.visible")
  unmount()
})

it("Collapse renders with activeKey", () => {
  mount(<DemoTest activeKey={"3"} />)
  cy.findByText("Item-1").should("not.be.visible")
  cy.findByText("Item-2").should("not.be.visible")
  cy.findByText("Item-3").should("be.visible")
  cy.findByTestId("collapse-item-1").click()
  cy.findByText("Item-1").should("not.be.visible")
  unmount()
})

it("Collapse renders with onChange", () => {
  const onChangeEvent = cy.stub().as("onChangeEvent")
  mount(<DemoTest onChange={onChangeEvent} />)
  cy.findByTestId("collapse-item-1").click()
  cy.get("@onChangeEvent").should("to.be.called")
  unmount()
})
