import { DatePicker } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("visible change", () => {
  const onVisibleChange = cy.stub().as("onVisibleChange")
  mount(
    <DatePicker placeholder={"DatePicker"} onVisibleChange={onVisibleChange} />,
  )
  cy.findByPlaceholderText("DatePicker").click()
  cy.get("@onVisibleChange").should("be.calledOnce")
  unmount()
})
