import { Button } from "@illa-design/button"
import { mount, unmount } from "@cypress/react"
import { Dropdown } from "../src"
import "@testing-library/cypress"
import { Menu } from "@illa-design/menu"
import * as React from "react"

const { Item } = Menu

const dropList = (
  <Menu>
    <Item title={"Blog"} key={"1"} disabled />
    <Item title={"Tutorial"} key={"2"} />
    <Item title={"Docs"} key={"3"} />
    <Item title={"Community"} key={"4"} />
    <Item title={"Github"} key={"5"} />
  </Menu>
)

it("Dropdown renders correctly", () => {
  const visibleEvent = cy.stub().as("visibleEvent")
  mount(
    <Dropdown
      dropList={dropList}
      triggerProps={{ closeDelay: 0, openDelay: 0 }}
      onVisibleChange={visibleEvent}
    >
      <Button>Hover</Button>
    </Dropdown>,
  )
  cy.findByText("Hover")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("Blog").should("exist")
    })

  unmount()
})

it("Dropdown renders correctly", () => {
  const visibleEvent = cy.stub().as("visibleEvent")
  mount(
    <Dropdown
      dropList={dropList}
      triggerProps={{ trigger: "click", closeDelay: 0, openDelay: 0 }}
      onVisibleChange={visibleEvent}
    >
      <Button>Click</Button>
    </Dropdown>,
  )
  cy.findByText("Click")
    .click()
    .then(() => {
      cy.get("@visibleEvent").should("be.calledWith", true)
      cy.findByText("Blog").should("exist")
    })
  unmount()
})
it("Dropdown renders correctly", () => {
  const visibleEvent = cy.stub().as("visibleEvent")
  mount(
    <Dropdown onVisibleChange={visibleEvent}>
      <Button>Click</Button>
    </Dropdown>,
  )
  cy.findByText("Click")
    .click()
    .then(() => {
      cy.get("@visibleEvent").should("be.calledWith", true)
    })
  unmount()
})

// it("Dropdown renders with different button text", () => {
//   mount(
//     <Dropdown
//       position={"bl"}
//     >
//       <Button>Click</Button>
//     </Dropdown>,
//   )
//   cy.findByText("Click").click()
//   cy.findByText("ok-test").should("exist")
//   cy.findByText("cancel-text").should("exist")
//   unmount()
// })
//
// it("Dropdown renders with different icon", () => {
//   mount(
//     <Dropdown position={"bl"} icon={<SearchIcon />}>
//       <Button>Click</Button>
//     </Dropdown>,
//   )
//   cy.findByText("Click").click()
//   cy.findByTitle("SearchIcon").should("exist")
//   unmount()
// })
//
// it("Dropdown triggers ok event", () => {
//   const okEvent = cy.stub().as("okEvent")
//   const visibleEvent = cy.stub().as("visibleEvent")
//   mount(
//     <Dropdown
//       position={"bl"}
//       onVisibleChange={visibleEvent}
//       onOk={okEvent}
//     >
//       <Button>Click</Button>
//     </Dropdown>,
//   )
//   cy.findByText("Click").click()
//   cy.get("@visibleEvent").should("be.calledWith", true)
//   cy.findByText("Confirm").click()
//   cy.get("@okEvent").should("be.called")
//   unmount()
// })
//
// it("Dropdown triggers cancel event", () => {
//   const cancelEvent = cy.stub().as("cancelEvent")
//   mount(
//     <Dropdown position={"bl"} onCancel={cancelEvent}>
//       <Button>Click</Button>
//     </Dropdown>,
//   )
//   cy.findByText("Click").click()
//   cy.findByText("Cancel").click()
//   cy.get("@cancelEvent").should("be.called")
//   unmount()
// })
