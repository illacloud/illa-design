import { Message, MessageGroup, useMessage } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { List } from "@illa-design/list/src"

it("Message renders with duration", () => {
  const message = useMessage()
  mount(<MessageGroup />)
  message.info({
    content: "Default",
    duration: 5000,
  })
  cy.clock(Date.now(), ["setTimeout", "clearTimeout"])
  cy.contains("Default").should("be.visible")
  cy.tick(5000)
  cy.contains("Default").should("not.exist")
  unmount()
})

it("Message renders with mouse action", () => {
  const message = useMessage()
  mount(<MessageGroup />)
  message.info({
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

it("Message renders with remove action", () => {
  const message = useMessage()
  mount(<MessageGroup />)
  message.info({
    content: "Remove",
    id: "remove",
  })
  cy.contains("Remove").should("be.visible")
  message.remove("remove")
  cy.contains("Remove").should("not.be.exist")
  unmount()
})

it("Message renders with clear action", () => {
  const message = useMessage()
  mount(<MessageGroup />)
  message.info({
    content: "ItemA",
    id: "itemA",
  })

  message.info({
    content: "ItemB",
    id: "itemB",
  })

  cy.contains("ItemA")
    .should("be.visible")
    .then(() => {
      cy.contains("ItemB")
        .should("be.visible")
        .then(() => message.clear())
    })

  cy.contains("ItemA").should("not.be.exist")
  cy.contains("ItemB").should("not.be.exist")
})
