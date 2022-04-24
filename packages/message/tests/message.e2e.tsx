import { Message } from "../src"
import { mount, unmount } from "@cypress/react"
import * as React from "react"
import "@testing-library/cypress"

it("Message renders with duration", () => {
  Message.info({
    content: "Default",
    duration: 500,
  })
  cy.contains("Default").should("be.visible")
  cy.contains("Default").should("not.exist")
})

it("Message renders with mouse action", () => {
  Message.info({
    content: "Content",
    duration: 800,
  })
  cy.contains("Content").trigger("mouseenter")
  cy.contains("Content").should("be.visible")
  cy.contains("Content").trigger("mouseleave")
  cy.contains("Content").should("not.exist")
})

it("Message renders with remove action and clear action", () => {
  Message.info({
    content: "Remove",
    id: "remove",
  })
  cy.contains("Remove").should("be.visible")
  Message.remove("remove")
  cy.contains("Remove").should("not.be.exist")

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
