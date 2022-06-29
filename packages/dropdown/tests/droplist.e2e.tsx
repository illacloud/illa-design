import { mount, unmount } from "@cypress/react"
import { Dropdown, DropList } from "../src"
import { Button } from "@illa-design/button"
import * as React from "react"
import "@testing-library/cypress"

const { Item } = DropList

it("Dropdown renders with dropList", () => {
  const visibleEvent = cy.stub().as("visibleEvent")
  const clickItemEvent = cy.stub().as("clickItemEvent")
  mount(
    <Dropdown
      dropList={
        <DropList onClickItem={clickItemEvent}>
          <Item title={"Blog"} key={"1"} disabled />
          <Item title={"Tutorial"} key={"2"} />
          <Item title={"Docs"} key={"3"} />
          <Item title={"Community"} key={"4"} />
          <Item title={"Github"} key={"5"} />
        </DropList>
      }
      triggerProps={{ closeDelay: 0, openDelay: 0 }}
      onVisibleChange={visibleEvent}
    >
      <Button>Hover</Button>
    </Dropdown>,
  )
  cy.findByText("Hover")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("Tutorial")
        .should("exist")
        .click()
        .then(() => {
          cy.get("@clickItemEvent").should("be.calledWith", "2")
        })
    })

  unmount()
})

it("Dropdown render DropList with disabled", () => {
  const visibleEvent = cy.stub().as("visibleEvent")
  const clickItemEvent = cy.stub().as("clickItemEvent")
  mount(
    <Dropdown
      dropList={
        <DropList onClickItem={clickItemEvent}>
          <Item title={"Blog"} key={"1"} disabled />
          <Item title={"Tutorial"} key={"2"} />
        </DropList>
      }
      triggerProps={{ closeDelay: 0, openDelay: 0 }}
      onVisibleChange={visibleEvent}
    >
      <Button>Hover</Button>
    </Dropdown>,
  )
  cy.findByText("Hover")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("Blog")
        .should("exist")
        .click()
        .then(() => {
          cy.get("@clickItemEvent").should("not.be.called")
        })
    })

  unmount()
})
