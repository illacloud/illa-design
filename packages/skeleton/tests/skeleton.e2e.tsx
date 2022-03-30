import { Skeleton } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("Skeleton renders with animation", () => {
  mount(<Skeleton className="skeleton" animation />)
  cy.get(".skeleton li:first-child").should("have.css", "animation-timing-function", "linear")
  unmount()
})
