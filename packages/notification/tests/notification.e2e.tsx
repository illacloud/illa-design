import { NotificationGroup, useNotification } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("Notification renders with duration", () => {
  const notification = useNotification()
  mount(<NotificationGroup />)
  notification.info({
    content: "Default",
    duration: 5000,
  })
  cy.clock(Date.now(), ["setTimeout", "clearTimeout"])
  cy.contains("Default").should("be.visible")
  cy.tick(5000)
  cy.contains("Default").should("not.exist")
  unmount()
})

it("Notification renders with mouse action", () => {
  const notification = useNotification()
  mount(<NotificationGroup />)
  notification.info({
    content: "Content",
    duration: 5000,
  })
  cy.clock(Date.now(), ["setTimeout", "clearTimeout"])
  cy.contains("Content").trigger("mouseenter")
  cy.tick(5000)

  cy.contains("Content").should("be.visible").trigger("mouseleave")
  cy.tick(5000)
  cy.contains("Content").should("not.exist")
  unmount()
})

it("Notification renders with remove action and clear action", () => {
  const notification = useNotification()
  mount(<NotificationGroup />)
  notification.info({
    content: "Remove",
    id: "remove",
  })
  cy.contains("Remove").should("be.visible")
  notification.remove("remove")
  cy.contains("Remove").should("not.be.exist")
  unmount()
})

it("Notification renders with clear action", () => {
  const notification = useNotification()
  mount(<NotificationGroup />)
  notification.info({
    content: "ItemA",
    id: "itemA",
  })

  notification.info({
    content: "ItemB",
    id: "itemB",
  })

  cy.contains("ItemA")
    .should("be.visible")
    .then(() => {
      cy.contains("ItemB")
        .should("be.visible")
        .then(() => notification.clear())
    })

  cy.contains("ItemA").should("not.be.exist")
  cy.contains("ItemB").should("not.be.exist")
  unmount()
})
