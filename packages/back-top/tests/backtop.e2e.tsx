import * as React from "react"
import { BackTop, BackTopProps } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

const loremIpsum = Array(50)
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

  cy.get(".backtop").should("not.be.visible")

  unmount()
})

it("BackTop should be visible", () => {
  mount(<TestBackTop visibleHeight={400} />)

  cy.scrollTo(0, 401)

  cy.get(".backtop").should("be.visible")

  unmount()
})

it("BackTop should not be visible after back to top", () => {
  mount(<TestBackTop visibleHeight={400} duration={400} />)

  cy.scrollTo(0, 401)
  cy.get(".backtop").click()
  cy.wait(400)

  cy.get(".backtop").should("not.be.visible")

  unmount()
})

it("BackTop should render custom content", () => {
  mount(
    <TestBackTop visibleHeight={400}>
      <button>Top</button>
    </TestBackTop>,
  )

  cy.scrollTo(0, 401)
  cy.findByText("Top").should("be.exist")

  unmount()
})

it("BackTop with duration 2000 should not back to top in 400ms", () => {
  mount(<TestBackTop duration={2000} />)

  cy.scrollTo("bottom")
  cy.get(".backtop").click()

  cy.root().invoke("scrollTop").should("not.equal", 0)

  unmount()
})

it("BackTop should back to top in 400ms", () => {
  mount(<TestBackTop duration={400} />)

  cy.scrollTo("bottom")
  cy.get(".backtop").click()

  cy.root().invoke("scrollTop").should("equal", 0)

  unmount()
})

it("BackTop should trigger onClick callback", () => {
  const onClick = cy.stub().as("onClick")

  mount(<TestBackTop onClick={onClick} />)

  cy.scrollTo("bottom")
  cy.get(".backtop").click()
  cy.get("@onClick").should("be.called")

  unmount()
})

it("BackTop should render in target", () => {
  mount(
    <div style={{ position: "relative" }}>
      <BackTop
        className="backtop"
        target={() => document.getElementById("target")}
        style={{ position: "absolute" }}
      ></BackTop>
      <div
        id="target"
        style={{
          height: 300,
          overflow: "auto",
        }}
      >
        {loremIpsum}
      </div>
    </div>,
  )
  cy.get("#target").scrollTo("bottom")
  cy.get("#target").invoke("scrollTop").should("not.equal", 0)
  cy.get(".backtop").click()
  cy.get("#target").invoke("scrollTop").should("equal", 0)

  unmount()
})
