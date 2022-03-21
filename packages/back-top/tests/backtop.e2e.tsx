import * as React from "react"
import { BackTop, BackTopProps } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

const loremIpsum = Array(30)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n")

const TestBackTop = (props: BackTopProps) => {
  return (
    <>
      <BackTop className="backtop" {...props}></BackTop>
      <div>{loremIpsum}</div>
    </>
  )
}


it("BackTop should not be visible", () => {
  mount(<TestBackTop />)

  cy.get(".backtop").should('not.be.visible');
})

it("BackTop should be visible", () => {
  mount(<TestBackTop visibleHeight={400} />)

  cy.scrollTo(0, 401)

  cy.get(".backtop").should('be.visible');
})

it("BackTop should not be visible after back to top", () => {
  mount(<TestBackTop visibleHeight={400} duration={400} />)

  cy.scrollTo(0, 401)
  cy.get(".backtop").click();
  cy.wait(400)

  cy.get(".backtop").should('not.be.visible');
})

it("BackTop should render custom content", () => {
  mount(<TestBackTop visibleHeight={400}><button>Top</button></TestBackTop>)

  cy.scrollTo(0, 401)
  cy.findByText("Top").should("be.exist");
})
