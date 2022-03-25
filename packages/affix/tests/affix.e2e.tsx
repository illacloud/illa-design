import { Affix, AffixProps } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { useRef } from "react"

const blockStyles = {
  height: 1000,
  width: 200,
  background: "linear-gradient(pink, orange)",
}

const TestAffix = (props: AffixProps) => {
  return (
    <>
      <div style={blockStyles} />
      <Affix {...props}>
        <span>Affix content</span>
      </Affix>
      <div style={blockStyles} />
    </>
  )
}

const TestAffixTargetContainer = () => {
  const container = useRef(null)

  return (
    <>
      <div
        style={{ overflow: "auto", height: 300 }}
        ref={container}
        className="container"
      >
        <div
          style={{
            height: 600,
            width: 200,
            background: "linear-gradient(pink, orange)",
          }}
        >
          <Affix
            target={() => container.current}
            offsetTop={20}
            targetContainer={() => window}
          >
            <span>Affix content</span>
          </Affix>
        </div>
      </div>
      <div style={blockStyles} />
    </>
  )
}

it("Affix renders correctly", () => {
  mount(<TestAffix />)
  expect(cy.findByText("Affix content")).exist
  unmount()
})

it("Affix renders with fixed 100px to window top", () => {
  mount(<TestAffix offsetTop={100} />)

  cy.scrollTo(0, 1000)
  cy.findByText("Affix content")
    .parent()
    .should("have.css", "position", "fixed")
    .should("have.css", "top", "100px")

  unmount()
})

it("Affix renders with fixed 100px to window bottom", () => {
  mount(<TestAffix offsetBottom={100} />)
  cy.findByText("Affix content")
    .parent()
    .should("have.css", "position", "fixed")
    .should("have.css", "bottom", "100px")
  unmount()
})

it("Affix renders with onChange event", () => {
  const onChangeEvent = cy.stub().as("onChangeEvent")

  mount(<TestAffix onChange={onChangeEvent} offsetTop={100} />)

  cy.scrollTo(0, 1000)
  cy.get("@onChangeEvent").should("be.calledWith", true)

  cy.scrollTo(0, 0)
  cy.get("@onChangeEvent").should("be.calledWith", false)

  unmount()
})

it("Affix renders with target container", () => {
  mount(<TestAffixTargetContainer />)

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
