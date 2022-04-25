import { Message } from "../src"
import { mount, unmount } from "@cypress/react"
import * as React from "react"
import "@testing-library/cypress"

it("Message renders with duration", () => {
  Message.info({
    content: "Default",
    duration: 5000,
  })
  cy.clock(Date.now(), ["setTimeout", "clearTimeout"])
  cy.contains("Default").should("be.visible")
  cy.tick(5000)
  cy.contains("Default").should("not.exist")
})

it("Message renders with mouse action", () => {
  Message.info({
    content: "Content",
    duration: 5000,
  })
  cy.clock(Date.now(), ["setTimeout", "clearTimeout"])
  cy.contains("Content").trigger("mouseenter")
  cy.tick(5000)
  cy.contains("Content").should("be.visible").trigger("mouseleave")
  cy.tick(5000)
  cy.contains("Content").should("not.exist")
})

it("Message renders with remove action", () => {
  Message.info({
    content: "Remove",
    id: "remove",
  })
  cy.contains("Remove").should("be.visible")
  Message.remove("remove")
  cy.contains("Remove").should("not.be.exist")
})

it("Message renders with clear action", () => {
  Message.info({
    content: "ItemA",
    id: "itemA",
  })

  Message.info({
    content: "ItemB",
    id: "itemB",
  })

  cy.contains("ItemA")
    .should("be.visible")
    .then(() => {
      cy.contains("ItemB")
        .should("be.visible")
        .then(() => Message.clear())
    })

  cy.contains("ItemA").should("not.be.exist")
  cy.contains("ItemB").should("not.be.exist")
})
