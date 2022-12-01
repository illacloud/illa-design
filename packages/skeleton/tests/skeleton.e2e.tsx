import { Skeleton } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

it("Skeleton renders with animation", () => {
  mount(<Skeleton className="skeleton" animation />)
  cy.get(".skeleton li:first-of-type").should(
    "have.css",
    "animation-timing-function",
    "linear",
  )
  unmount()
})
