import { Button } from "@illa-design/button"
import { mount, unmount } from "@cypress/react"
import { Popconfirm } from "../src"
import "@testing-library/cypress"
import { SearchIcon } from "@illa-design/icon"

it("Popconfirm renders correctly", () => {
  mount(
    <Popconfirm title="Visible" closeDelay={0} openDelay={0} position={"bl"}>
      <Button>Click</Button>
    </Popconfirm>,
  )
  cy.findByText("Click").click()
  cy.findByText("Visible").should("exist")
  unmount()
})

it("Popconfirm renders with different button text", () => {
  mount(
    <Popconfirm
      title="Visible"
      position={"bl"}
      okText={"ok-test"}
      cancelText={"cancel-text"}
    >
      <Button>Click</Button>
    </Popconfirm>,
  )
  cy.findByText("Click").click()
  cy.findByText("ok-test").should("exist")
  cy.findByText("cancel-text").should("exist")
  unmount()
})

it("Popconfirm renders with different icon", () => {
  mount(
    <Popconfirm title="Visible" position={"bl"} icon={<SearchIcon />}>
      <Button>Click</Button>
    </Popconfirm>,
  )
  cy.findByText("Click").click()
  cy.findByTitle("SearchIcon").should("exist")
  unmount()
})

it("Popconfirm triggers ok event", () => {
  const okEvent = cy.stub().as("okEvent")
  const visibleEvent = cy.stub().as("visibleEvent")
  mount(
    <Popconfirm
      title="Visible"
      position={"bl"}
      onVisibleChange={visibleEvent}
      onOk={okEvent}
    >
      <Button>Click</Button>
    </Popconfirm>,
  )
  cy.findByText("Click").click()
  cy.get("@visibleEvent").should("be.calledWith", true)
  cy.findByText("Confirm").click()
  cy.get("@okEvent").should("be.called")
  unmount()
})

it("Popconfirm triggers cancel event", () => {
  const cancelEvent = cy.stub().as("cancelEvent")
  mount(
    <Popconfirm title="Visible" position={"bl"} onCancel={cancelEvent}>
      <Button>Click</Button>
    </Popconfirm>,
  )
  cy.findByText("Click").click()
  cy.findByText("Cancel").click()
  cy.get("@cancelEvent").should("be.called")
  unmount()
})
