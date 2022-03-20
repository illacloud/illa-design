/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Affix, AffixProps } from "../src"
import { css } from "@emotion/react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

const blockStyles = (height: number = 1000) => css`
  height: ${height}px;
  width: 200px;
  background: linear-gradient(pink, orange);
`

const TestAffix = (props: AffixProps) => {
  return (
    <>
      <div css={blockStyles()} />
      <Affix {...props}>
        <span>Affix content</span>
      </Affix>
      <div css={blockStyles()} />
    </>
  )
}

const TestAffixTargetContainer = () => {
  const container = React.useRef(null)

  return (
    <>
      <div
        style={{ overflow: "auto", height: 300 }}
        ref={container}
        className="container"
      >
        <div css={blockStyles(600)}>
          <Affix
            target={() => container.current}
            offsetTop={20}
            targetContainer={() => window}
          >
            <span>Affix content</span>
          </Affix>
        </div>
      </div>
      <div css={blockStyles()} />
    </>
  )
}

it("Affix renders correctly", () => {
  mount(<TestAffix></TestAffix>)
  expect(cy.findByText("Affix content")).exist
  unmount()
})

it("Affix renders with fixed 100px to window top", () => {
  mount(<TestAffix offsetTop={100}></TestAffix>)

  cy.scrollTo(0, 1000)
  cy.findByText("Affix content")
    .parent()
    .should("have.css", "position", "fixed")
    .should("have.css", "top", "100px")

  unmount()
})

it("Affix renders with fixed 100px to window bottom", () => {
  mount(<TestAffix offsetBottom={100}></TestAffix>)

  cy.findByText("Affix content")
    .parent()
    .should("have.css", "position", "fixed")
    .should("have.css", "bottom", "100px")

  unmount()
})

it("Affix renders with onChange event", () => {
  const onChangeEvent = cy.stub().as("onChangeEvent")

  mount(<TestAffix onChange={onChangeEvent} offsetTop={100}></TestAffix>)

  cy.scrollTo(0, 1000)
  cy.get("@onChangeEvent").should("be.calledWith", true)

  cy.scrollTo(0, 0)
  cy.get("@onChangeEvent").should("be.calledWith", false)

  unmount()
})

it("Affix renders with target container", () => {
  mount(<TestAffixTargetContainer></TestAffixTargetContainer>)

  cy.get(".container").scrollTo(0, 200)

  cy.get(".container").then((c) => {
    const cTop = c[0].getBoundingClientRect().top

    cy.findByText("Affix content")
      .parent()
      .should("have.css", "position", "fixed")
      .should("have.css", "top", `${cTop + 20}px`) // affix should be 20px to container top
  })

  cy.scrollTo(0, 1000)
  cy.findByText("Affix content").should("not.be.visible")

  unmount()
})
