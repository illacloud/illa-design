import * as React from "react"
import { Anchor } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

const { Link: AnchorLink } = Anchor
const loremIpsum = Array(20)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n\n")

const Article = () => (
  <article>
    <h1 id="title">Artical</h1>

    <section id="section1">
      <h2>Section1</h2>
      <p>{loremIpsum}</p>
    </section>

    <section id="section2">
      <h2>Section2</h2>
      <p>{loremIpsum}</p>
    </section>

    <section id="section3">
      <h2>Section3</h2>
      <section id="section3-1">
        <h2>Section3-1</h2>
        <p>{loremIpsum}</p>
      </section>
      <section id="section3-2">
        <h2>Section3-2</h2>
        <p>{loremIpsum}</p>
      </section>
    </section>
  </article>
)

function renderAnchor(args = {}) {
  return (
    <>
      <Anchor {...args} data-testid="anchor">
        <AnchorLink href="#title" title="title" />
        <AnchorLink href="#section1" title="Section1" />
        <AnchorLink href="#section2" title="Section2" />
        <AnchorLink href="#section3" title="Section3">
          <AnchorLink href="#section3-1" title="Section3-1" />
          <AnchorLink href="#section3-2" title="Section3-2" />
        </AnchorLink>
      </Anchor>
      <Article />
    </>
  )
}

it("Anchor should be fixed to top", () => {
  mount(renderAnchor())

  cy.scrollTo(0, 10)
  cy.get("[data-testid='anchor']")
    .parent()
    .should("have.css", "position", "fixed")

  unmount()
})

it("Anchor should NOT be fixed to top", () => {
  mount(renderAnchor({ affix: false }))

  cy.scrollTo(0, 10)
  cy.get("[data-testid='anchor']")
    .parent()
    .should("not.have.css", "position", "fixed")

  unmount()
})

it("Section2 should show in viewport after click Section2 in anchor", () => {
  mount(renderAnchor())

  cy.get("[title='Section2']").click()

  cy.wait(400)

  cy.window().then((w) => {
    const height = w.innerHeight

    cy.get("#section1").then((section1) => {
      const rect = section1[0].getBoundingClientRect()
      expect(rect.top).to.be.lessThan(0)
    })

    cy.get("#section2").then((section2) => {
      const rect = section2[0].getBoundingClientRect()
      expect(rect.top).not.to.be.greaterThan(height)
    })
  })

  unmount()
})

it("Anchor render with 100px boundary", () => {
  mount(renderAnchor({ boundary: 100 }))

  cy.get("[title='Section2']").click()

  cy.wait(400)

  cy.get("#section2").then((section2) => {
    const rect = section2[0].getBoundingClientRect()
    expect(Math.floor(rect.top)).to.be.equal(100)
  })
})

it("Anchor should fixed 100 to top", () => {
  mount(renderAnchor({ offsetTop: 100 }))

  cy.scrollTo(0, 200)
  cy.wait(400)

  cy.get("[data-testid='anchor']").parent().should("have.css", "top", "100px")

  unmount()
})

it("Anchor should change hash", () => {
  mount(renderAnchor())

  cy.get("[title='Section2']").click()
  cy.wait(100)
  cy.hash().should("eq", "#section2")

  unmount()
})

it("Anchor should NOT change hash", () => {
  mount(renderAnchor({ hash: false }))

  // section2 had trigger before, you should trigger different hash to test hash change
  cy.get("[title='Section3']").click()
  cy.wait(100)
  cy.hash().should("not.eq", "#section3")
})

it("Anchor render indicator line", () => {
  mount(renderAnchor())
  cy.get("[data-testid='anchor']").children().first().should("have.css", "position", "absolute")
})

it("Anchor render with lineless", () => {
  mount(renderAnchor({ lineless: true }))
  cy.get("[data-testid='anchor']").children().first().should("not.have.css", "position", "absolute")
})
