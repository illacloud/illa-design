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
      triggerProps={{ closeDelay: 0, openDelay: 0 }}
      onVisibleChange={visibleEvent}
    >
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

it("Dropdown renders with dropList", () => {
  const visibleEvent = cy.stub().as("visibleEvent")
  const clickMenuItemEvent = cy.stub().as("clickMenuItemEvent")
  mount(
    <Dropdown
      dropList={
        <Menu onClickMenuItem={clickMenuItemEvent}>
          <Item title={"Blog"} key={"1"} />
          <Item title={"Tutorial"} key={"2"} />
        </Menu>
      }
      triggerProps={{ closeDelay: 0, openDelay: 0 }}
      onVisibleChange={visibleEvent}
    >
      <Button>Hover</Button>
    </Dropdown>,
  )
  cy.findByText("Hover")
    .trigger("mouseenter")
    .then(() => {
      cy.findByText("Blog")
        .should("exist")
        .click()
        .then(() => {
          cy.get("@clickMenuItemEvent").should("be.calledWith", "1")
        })
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
    <Dropdown
      triggerProps={{ closeDelay: 0, openDelay: 0 }}
      onVisibleChange={visibleEvent}
    >
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
