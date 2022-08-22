import { Notification } from "../src"
import "@cypress/react"
import "@testing-library/cypress"

it("Notification renders with duration", () => {
  Notification.info({
    content: "Default",
    duration: 5000,
  })
  cy.clock(Date.now(), ["setTimeout", "clearTimeout"])
  cy.contains("Default").should("be.visible")
  cy.tick(5000)
  cy.contains("Default").should("not.exist")
})

it("Notification renders with mouse action", () => {
  Notification.info({
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

it("Notification renders with remove action and clear action", () => {
  Notification.info({
    content: "Remove",
    id: "remove",
  })
  cy.contains("Remove").should("be.visible")
  Notification.remove("remove")
  cy.contains("Remove").should("not.be.exist")
})

it("Notification renders with clear action", () => {
  Notification.info({
    content: "ItemA",
    id: "itemA",
  })

  Notification.info({
    content: "ItemB",
    id: "itemB",
  })

  cy.contains("ItemA")
    .should("be.visible")
    .then(() => {
      cy.contains("ItemB")
        .should("be.visible")
        .then(() => Notification.clear())
    })

  cy.contains("ItemA").should("not.be.exist")
  cy.contains("ItemB").should("not.be.exist")
})
